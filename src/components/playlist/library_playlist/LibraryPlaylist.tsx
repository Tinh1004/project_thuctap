import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Tab from "../../../commons/Tab";
import LibraryPlaylistContent from "./LibraryPlaylistContent";

function LibraryPlaylist({ myArrayPlaylist }) {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedTab = location.pathname.split("/").slice(-1)[0] as
    | "playlist"
    | "owner";

  const isSelected = selectedTab === "playlist";

  console.log("myArrayPlaylist", myArrayPlaylist);
  const user = localStorage.getItem("user");
  console.log(user);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "35%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
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

        <Tab
          onClick={() => navigate("/ca-nhan/library/playlist")}
          text="Tất cả"
          active={isSelected}
        />

        <Tab
          onClick={() => navigate("/ca-nhan/library/playlist/owner")}
          text="Của tôi"
          active={!isSelected}
        />
      </Box>
      <Box sx={{ borderBottom: "1px solid #c4c4c499" }} mb={4} />

      <Box px={8}>
        {isSelected && (
          <LibraryPlaylistContent myArrayPlaylist={myArrayPlaylist} />
        )}
        {!isSelected && true && (
          <LibraryPlaylistContent myArrayPlaylist={myArrayPlaylist} />
        )}
      </Box>
    </Box>
  );
}

export default LibraryPlaylist;
