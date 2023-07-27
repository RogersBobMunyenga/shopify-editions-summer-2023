import {
  Box,
  Card,
  Divider,
  HorizontalGrid,
  Page,
  Text,
  VerticalStack,
  useBreakpoints,
  TextField,
} from "@shopify/polaris";
import { useRouter } from "next/router";

const AppSettings = () => {
  const router = useRouter();

  const { smUp } = useBreakpoints();
  return (
    <>
      <Page
        backAction={{
          onAction: () => {
            router.push("/patterns");
          },
        }}
        title="App Settings Layout"
        divider
        primaryAction={{ content: "View on your store", disabled: true }}
        secondaryActions={[
          {
            content: "Duplicate",
            accessibilityLabel: "Secondary action label",
            onAction: () => alert("Duplicate action"),
          },
        ]}
      >
        <VerticalStack gap={{ xs: "8", sm: "4" }}>
          <HorizontalGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="4">
            <Box
              as="section"
              paddingInlineStart={{ xs: 4, sm: 0 }}
              paddingInlineEnd={{ xs: 4, sm: 0 }}
            >
              <VerticalStack gap="4">
                <Text as="h3" variant="headingMd">
                  InterJambs
                </Text>
                <Text as="p" variant="bodyMd">
                  Interjambs are the rounded protruding bits of your puzzlie
                  piece
                </Text>
              </VerticalStack>
            </Box>
            <Card roundedAbove="sm">
              <VerticalStack gap="4">
                <TextField label="Interjamb style" />
                <TextField label="Interjamb ratio" />
              </VerticalStack>
            </Card>
          </HorizontalGrid>
          {smUp ? <Divider /> : null}
          <HorizontalGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="4">
            <Box
              as="section"
              paddingInlineStart={{ xs: 4, sm: 0 }}
              paddingInlineEnd={{ xs: 4, sm: 0 }}
            >
              <VerticalStack gap="4">
                <Text as="h3" variant="headingMd">
                  Dimensions
                </Text>
                <Text as="p" variant="bodyMd">
                  Interjambs are the rounded protruding bits of your puzzlie
                  piece
                </Text>
              </VerticalStack>
            </Box>
            <Card roundedAbove="sm">
              <VerticalStack gap="4">
                <TextField label="Horizontal" />
                <TextField label="Interjamb ratio" />
              </VerticalStack>
            </Card>
          </HorizontalGrid>
        </VerticalStack>
      </Page>
    </>
  );
};

export default AppSettings;
