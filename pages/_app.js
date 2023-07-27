import { NavigationMenu } from "@shopify/app-bridge-react";
import { Button, AppProvider as PolarisProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import AppBridgeProvider from "../components/providers/AppBridgeProvider";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [summerEditions, setSummerEditions] = useState(false);
  return (
    <>
      <AppBridgeProvider>
        <PolarisProvider
          i18n={translations}
          features={{
            polarisSummerEditions2023: summerEditions,
          }}
        >
          <Button
            onClick={() => {
              setSummerEditions(!summerEditions);
            }}
          >
            Polaris version: {summerEditions ? "12" : "11"}
          </Button>
          <NavigationMenu
            navigationLinks={[
              {
                label: "Fetch Data",
                destination: "/debug/getData",
              },
              {
                label: "Billing API",
                destination: "/debug/billing",
              },
            ]}
            matcher={(link) => router.pathname === link.destination}
          />
          <Component {...pageProps} />
        </PolarisProvider>
      </AppBridgeProvider>
    </>
  );
}
