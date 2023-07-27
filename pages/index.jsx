import isShopAvailable from "@/utils/middleware/isShopAvailable";
import { useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import { Layout, LegacyCard, Page, Text } from "@shopify/polaris";
import { useRouter } from "next/router";

//On first install, check if the store is installed and redirect accordingly
export async function getServerSideProps(context) {
  return await isShopAvailable(context);
}

const HomePage = () => {
  const router = useRouter();
  const app = useAppBridge();
  const redirect = Redirect.create(app);

  return (
    <Page title="Home">
      <Layout>
        <Layout.Section fullWidth>
          <LegacyCard
            title="Debug Cards"
            sectioned
            primaryFooterAction={{
              content: "Debug Cards",
              onAction: () => {
                router.push("/debug");
              },
            }}
          >
            <p>
              Explore how the repository handles data fetching from the backend,
              App Proxy, making GraphQL requests, Billing API and more.
            </p>
          </LegacyCard>
          <LegacyCard title="About this repo" sectioned>
            <Text>Here's what we're doing on this repo</Text>
            <li>
              <strong>Exploring Polaris v11 v/s v12 changes</strong>. Click the
              button on top right to switch between v11 and v12 beta.
            </li>
            <li></li>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default HomePage;
