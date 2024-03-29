import { Box } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Tab, { TabActive } from "../../../commons/Tab";

import SongComponent from "../songs/SongComponent.tsx";
import Podcast from "../podcast/Podcast";
import Album from "../album/Album";
import MvComponent from "../mv/MvComponent";

function MenuTitle({ arrayData, myArrayPlaylist }) {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedTab = location.pathname.split("/").slice(-1)[0] as
    | "song"
    | "podcast"
    | "album"
    | "mv";

  let isSelectedSong = selectedTab === "song";
  let isSelectedPodcast = selectedTab === "podcast";
  let isSelectedAlbum = selectedTab === "album";
  let isSelectedMV = selectedTab === "mv";

  if (
    !isSelectedSong &&
    !isSelectedPodcast &&
    !isSelectedAlbum &&
    !isSelectedMV
  ) {
    isSelectedSong = true;
  }
  console.log("here", isSelectedSong);
  return (
    <>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {isSelectedSong ? (
          <TabActive onClick={() => navigate("/ca-nhan/song")} text="Song" />
        ) : (
          <Tab
            active={false}
            onClick={() => navigate("/ca-nhan/song")}
            text="Song"
          />
        )}

        {isSelectedPodcast ? (
          <TabActive
            onClick={() => navigate("/ca-nhan/podcast")}
            text="podcast"
          />
        ) : (
          <Tab
            active={false}
            onClick={() => navigate("/ca-nhan/podcast")}
            text="podcast"
          />
        )}

        {isSelectedAlbum ? (
          <TabActive onClick={() => navigate("/ca-nhan/album")} text="album" />
        ) : (
          <Tab
            active={false}
            onClick={() => navigate("/ca-nhan/album")}
            text="album"
          />
        )}

        {isSelectedMV ? (
          <TabActive onClick={() => navigate("/ca-nhan/mv")} text="mv" />
        ) : (
          <Tab
            active={false}
            onClick={() => navigate("/ca-nhan/mv")}
            text="mv"
          />
        )}
      </Box>
      <Box sx={{ borderBottom: "1px solid #c4c4c499" }} mb={4} />

      {isSelectedSong && <SongComponent arrayData={arrayData} />}
      {isSelectedPodcast && <Podcast arrayData={arrayData} />}
      {isSelectedAlbum && <Album myArrayPlaylist={myArrayPlaylist} />}
      {isSelectedMV && <MvComponent myArrayPlaylist={myArrayPlaylist} />}
    </>
  );
}

export default MenuTitle;
