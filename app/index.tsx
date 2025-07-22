import {
  CrossmintEmbeddedCheckout,
  CrossmintProvider,
} from "@crossmint/client-sdk-react-native-ui";

export default function Index() {
  return (
    <CrossmintProvider apiKey={process.env.EXPO_PUBLIC_CLIENT_CROSSMINT_API_KEY ?? ""}>
      <CrossmintEmbeddedCheckout
        recipient={{
          walletAddress: "EbXL4e6XgbcC7s33cD5EZtyn5nixRDsieBjPQB7zf448",
        }}
        payment={{
          crypto: {
            enabled: false,
          },
          fiat: {
            enabled: true,
          },
          receiptEmail: "test@crossmint.com",
        }}
        lineItems={{
          tokenLocator: "solana:6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN",
          executionParameters: {
            mode: "exact-in",
            amount: "1",
            maxSlippageBps: "500",
          },
        }}
      />
    </CrossmintProvider>
  );
}
