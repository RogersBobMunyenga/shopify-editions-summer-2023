import {
  Scrollable,
  Box,
  Button,
  Card,
  HorizontalStack,
  DatePicker,
  HorizontalGrid,
  Icon,
  OptionList,
  Popover,
  TextField,
  VerticalStack,
  useBreakpoints,
} from "@shopify/polaris";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  CalendarMinor,
  ArrowRightMinor,
  ArrowLeftMinor,
} from "@shopify/polaris-icons";
const DateListComponent = () => {
  const ranges = [
    {
      title: "No Date",
      alias: "no-date",
      period: null,
    },
    {
      title: "Today",
      alias: "today",
      period: {
        since: "today",
        until: "today",
      },
    },
    {
      title: "Yesterday",
      alias: "yesterday",
      period: {
        since: "yesterday",
        until: "yesterday",
      },
    },
    {
      title: "Last 7 days",
      alias: "last7days",
      period: {
        since: "-7d",
        until: "-1d",
      },
    },
  ];
  const [selected, setSelected] = useState(ranges[0]);
  const [popoverActive, setPopoverActive] = useState(false);
  return (
    <>
      <Popover
        autofocusTarget="none"
        preferredAlignment="left"
        preferInputActivator={false}
        preferredPosition="below"
        activator={
          <Button
            onClick={() => setPopoverActive(!popoverActive)}
            icon={CalendarMinor}
          >
            {selected.title}
          </Button>
        }
        active={popoverActive}
      >
        <OptionList
          options={ranges.map((range) => ({
            value: range.alias,
            label: range.title,
          }))}
          selected={selected.alias}
          onChange={(value) => {
            setSelected(ranges.find((range) => range.alias === value[0]));
            setPopoverActive(false);
          }}
        />
      </Popover>
    </>
  );
};

export default DateListComponent;
