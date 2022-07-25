import { Box, Tab } from "@mui/material";
import React from "react";
import TabAndContentCustom from "../../../commons/TabAndContentCustom.tsx";
import LibraryPlaylistContent from "./LibraryPlaylistContent";

function LibraryPlaylist() {
  return (
    <Box sx={{ width: "100%" }}>
      <TabAndContentCustom
        firstTab={
          <Tab
            sx={{
              color: "#000",
              fontWeight: 400,
              "&:hover": {
                color: "#6b3483",
              },
            }}
            label="Tất cả"
          />
        }
        secondTab={
          <Tab
            sx={{
              color: "#000",
              fontWeight: 400,
              "&:hover": {
                color: "#6b3483",
              },
            }}
            label="Của tôi"
          />
        }
        firstContent={<LibraryPlaylistContent />}
        secondContent={<LibraryPlaylistContent />}
        display="block"
        paddingLeft="66px"
      />
    </Box>
  );
}

export default LibraryPlaylist;
