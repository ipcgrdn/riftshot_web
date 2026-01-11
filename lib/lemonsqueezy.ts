// LemonSqueezy Configuration

export const lemonSqueezyConfig = {
  apiKey: process.env.LEMONSQUEEZY_API_KEY!,
  storeId: process.env.LEMONSQUEEZY_STORE_ID!,
  productId: process.env.LEMONSQUEEZY_PRODUCT_ID!,
  variantId: process.env.LEMONSQUEEZY_VARIANT_ID!,
  webhookSecret: process.env.LEMONSQUEEZY_WEBHOOK_SECRET!,
};

const LEMONSQUEEZY_API_URL = "https://api.lemonsqueezy.com/v1";

interface CheckoutOptions {
  email?: string;
  name?: string;
  customData?: Record<string, string>;
}

export async function createCheckout(options: CheckoutOptions = {}) {
  const response = await fetch(`${LEMONSQUEEZY_API_URL}/checkouts`, {
    method: "POST",
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: `Bearer ${lemonSqueezyConfig.apiKey}`,
    },
    body: JSON.stringify({
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            email: options.email,
            name: options.name,
            custom: options.customData,
          },
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: lemonSqueezyConfig.storeId,
            },
          },
          variant: {
            data: {
              type: "variants",
              id: lemonSqueezyConfig.variantId,
            },
          },
        },
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors?.[0]?.detail || "Failed to create checkout");
  }

  const data = await response.json();
  return data.data.attributes.url as string;
}
