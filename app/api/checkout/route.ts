import { NextRequest, NextResponse } from "next/server";
import { createCheckout } from "@/lib/lemonsqueezy";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, userId } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const checkoutUrl = await createCheckout({
      email,
      customData: {
        user_id: userId || "",
      },
    });

    return NextResponse.json({ url: checkoutUrl });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to create checkout",
      },
      { status: 500 }
    );
  }
}
