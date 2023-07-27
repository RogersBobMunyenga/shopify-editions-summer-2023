import DateListComponent from "@/components/patterns/dates/date-list";
import DateRangesComponent from "@/components/patterns/dates/date-range";
import SingleDateComponent from "@/components/patterns/dates/single-dates";
import { Layout, LegacyCard, Page } from "@shopify/polaris";
import { useRouter } from "next/router";

const DateRanges = () => {
  const router = useRouter();
  return (
    <>
      <Page
        title="Date Pickers"
        backAction={{
          onAction: () => {
            router.push("/patterns");
          },
        }}
      >
        <Layout>
          <Layout.Section>
            <LegacyCard title="Single Date" sectioned>
              <SingleDateComponent />
            </LegacyCard>
          </Layout.Section>
          <Layout.Section>
            <LegacyCard title="Date Range" sectioned>
              <DateRangesComponent />
            </LegacyCard>
          </Layout.Section>
          <Layout.Section>
            <LegacyCard title="Date List" sectioned>
              <DateListComponent />
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
};

export default DateRanges;
