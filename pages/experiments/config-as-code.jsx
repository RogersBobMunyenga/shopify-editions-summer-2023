import { Page, Layout, LegacyCard, Text } from "@shopify/polaris";
import { useRouter } from "next/router";

const ConfigAsCode = () => {
  const router = useRouter();
  return (
    <>
      <Page
        title="Config as code"
        subtitle="Thoughts and opinions"
        backAction={{
          onAction: () => {
            router.push("/");
          },
        }}
      >
        <Layout>
          <Layout.Section>
            <LegacyCard sectioned title="Config as code">
              <Text></Text>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
};

export default ConfigAsCode;
