import { Layout, LegacyCard, Page, Text } from "@shopify/polaris";
import { useRouter } from "next/router";

const PatternsIndex = () => {
  const router = useRouter();
  return (
    <>
      <Page
        title="Polaris Patterns"
        subtitle="Pulled directly from polaris.shopify.com's Pattern pages, meant to see the switch from v11 to v12"
        backAction={{
          onAction: () => {
            router.push("/");
          },
        }}
      >
        <Layout>
          <Layout.Section oneHalf>
            <LegacyCard
              sectioned
              title="Resource Details Layout"
              primaryFooterAction={{
                content: "View",
                onAction: () => {
                  router.push("/patterns/resource-details-layout");
                },
              }}
            >
              <Text>Create, view and edit resource objects.</Text>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section oneHalf>
            <LegacyCard
              sectioned
              title="Resource Index Layout"
              primaryFooterAction={{
                content: "View",
                onAction: () => {
                  router.push("/patterns/resource-index-layout");
                },
              }}
            >
              <Text>Organize and take action on resource objects.</Text>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section oneHalf>
            <LegacyCard
              sectioned
              title="Date Picker"
              primaryFooterAction={{
                content: "View",
                onAction: () => {
                  router.push("/patterns/date-ranges");
                },
              }}
            >
              <Text>Select a date or a date range.</Text>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section oneHalf>
            <LegacyCard
              sectioned
              title="App Settings Layout"
              primaryFooterAction={{
                content: "View",
                onAction: () => {
                  router.push("/patterns/app-settings");
                },
              }}
            >
              <Text>Scan and find groups of settings in apps.</Text>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
};

export default PatternsIndex;
