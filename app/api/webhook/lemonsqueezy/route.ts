import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

const webhookSecret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET!;

// Use service role for webhook operations
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function verifySignature(payload: string, signature: string): boolean {
  const hmac = crypto.createHmac("sha256", webhookSecret);
  const digest = hmac.update(payload).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.text();
    const signature = request.headers.get("x-signature") || "";

    // Verify webhook signature
    if (!verifySignature(payload, signature)) {
      console.error("Invalid webhook signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(payload);
    const eventName = event.meta.event_name;

    // Handle order_created event (successful payment)
    if (eventName === "order_created") {
      const orderData = event.data.attributes;
      const customData = event.meta.custom_data || {};

      const purchaseData = {
        email: orderData.user_email,
        order_id: String(event.data.id),
        product_id: String(orderData.first_order_item.product_id),
        variant_id: String(orderData.first_order_item.variant_id),
        status: orderData.status,
        amount: orderData.total,
        currency: orderData.currency,
      };

      // If we have a user_id from custom data, link the purchase and update is_paid
      if (customData.user_id) {
        const { data: user } = await supabaseAdmin
          .from("users")
          .select("id")
          .eq("id", customData.user_id)
          .single();

        if (user) {
          Object.assign(purchaseData, { user_id: customData.user_id });

          // Update user's is_paid status
          await supabaseAdmin
            .from("users")
            .update({ is_paid: true, paid_at: new Date().toISOString() })
            .eq("id", customData.user_id);
        }
      }

      // Insert purchase record
      const { error } = await supabaseAdmin
        .from("purchases")
        .insert(purchaseData);

      if (error) {
        console.error("Failed to save purchase:", error);
        return NextResponse.json(
          { error: "Failed to save purchase" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
