import { Page, Layout, LegacyCard, Text, Divider } from "@shopify/polaris";
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
              <LegacyCard.Section>
                <Text>
                  So at first a little confusing, but once you wrap your head
                  around it, it's....decent. This still doesn't solve the
                  fundamental problem of managing environments, rather adds in a
                  bunch of new stuff that I now have to learn and be extremely
                  aware of, when building.
                </Text>
                <Text>Let's compare my current and CLI approach:</Text>
                <br />
                <Text as="h1" variant="headingMd">
                  CLI Approach
                </Text>
                <li>First link your CLI to your app</li>
                <li>
                  Make changes to your <code>toml</code> file or create new{" "}
                  <code>toml</code> files to manage environments
                </li>
                <li>Start using said configuration file</li>
                <li>Once your're happy, push it</li>
                <li>CLI asks if the diff looks ok, and it's live</li>
                <br />
                <Text as="h1" variant="headingMd">
                  My Approach
                </Text>

                <li>
                  Create 2 separate apps on Shopify, one is Production and the
                  other is Staging
                </li>
                <li>
                  Create base app repository, which is the Staging. All Devs
                  commit to this repo from their forks
                </li>
                <li>Fork Staging to Production</li>
                <li>
                  You never use Production's env variables, and all the values
                  there come from said hosting services like Vercel and
                  Planetscale
                </li>
                <li>
                  Your local values always stay with you, PR to staging and
                  check staging on staging server, once happy, pull to
                  Production
                </li>
              </LegacyCard.Section>
              <LegacyCard.Section>
                <Text>
                  The reason why I don't like CLI's approach is because we're
                  still using a single app, the <strong>simplified</strong>{" "}
                  deployment service means everything I push is now immediately
                  live, I need to constantly check what configuration file is
                  connected (I was confused why this app won't work until I
                  realized I am using the wrong config) and more importantly, I
                  am biased towards my own approach and hold it at a much higher
                  standard.
                </Text>
                <Text>
                  Sure the CLI approach can work for you, and if it does, good
                  for you.
                </Text>
                <br />
                <Text>
                  You can also checkout <code>package.json</code> of this
                  project for to quickly run scripts and create, link and push
                  configuration
                </Text>
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
};

export default ConfigAsCode;
