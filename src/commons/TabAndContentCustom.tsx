import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LibraryPlaylistContent from "../components/playlist/library_playlist/LibraryPlaylistContent";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ paddingTop: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

export default function TabAndContentCustom({
  firstTab,
  secondTab,
  thirdTab,
  fourthTab,
  firstContent,
  secondContent,
  thirdContent,
  fourthContent,
  display = "none",
  paddingLeft = "0",
  ...rest
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: { display },
            marginLeft: "68px",
            paddingRight: "28px",
            marginRight: 2,
            borderRight: 1,
            borderColor: "divider",
          }}
        >
          <Typography variant="h6" fontSize={25}>
            Playlist
          </Typography>
        </Box>
        <Tabs
          textColor="secondary"
          indicatorColor="secondary"
          sx={{
            textTransform: "uppercase",
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {firstTab}
          {secondTab}
          {thirdTab}
          {fourthTab}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box pl={paddingLeft}>{firstContent}</Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box pl={paddingLeft}>{secondContent}</Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {thirdContent}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {fourthContent}
      </TabPanel>
    </Box>
  );
}
