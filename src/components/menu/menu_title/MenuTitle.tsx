import { Box } from "@mui/material";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Tab, { TabActive } from "../../../commons/Tab";
// import "./MenuTitle.scss";

import SongComponent from "../songs/SongComponent";
import Podcast from "../podcast/Podcast";
import Album from "../album/Album";
import MvComponent from "../mv/MvComponent";

function MenuTitle() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedTab = location.pathname.split("/").slice(-1)[0] as
    | "song"
    | "podcast"
    | "album"
    | "mv";

  const isSelectedSong = selectedTab === "song";
  const isSelectedPodcast = selectedTab === "podcast";
  const isSelectedAlbum = selectedTab === "album";
  const isSelectedMV = selectedTab === "mv";
  console.log("here", isSelectedSong);

  return (
    // <nav class="navbar">
    //   <div class="navbar_container">
    //     <ul class="navbar_menu">
    //       <li class={`navbar_item active`}>
    //         <div class="nav_link">
    //           <Link to="/ca-nhan/song">Bài hát</Link>
    //         </div>
    //       </li>
    //       <li class="navbar_item">
    //         <div class="nav_link">
    //           <Link to="/ca-nhan/podcast">Podcast</Link>
    //         </div>
    //       </li>
    //       <li class="navbar_item">
    //         <div class="nav_link">
    //           <Link to="/ca-nhan/album">Album</Link>
    //         </div>
    //       </li>
    //       <li class="navbar_item">
    //         <div class="nav_link">
    //           <Link to="/ca-nhan/mv">MV</Link>
    //         </div>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
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
          <Tab onClick={() => navigate("/ca-nhan/song")} text="Song" />
        )}

        {isSelectedPodcast ? (
          <TabActive
            onClick={() => navigate("/ca-nhan/podcast")}
            text="podcast"
          />
        ) : (
          <Tab onClick={() => navigate("/ca-nhan/podcast")} text="podcast" />
        )}

        {isSelectedAlbum ? (
          <TabActive onClick={() => navigate("/ca-nhan/album")} text="album" />
        ) : (
          <Tab onClick={() => navigate("/ca-nhan/album")} text="album" />
        )}

        {isSelectedMV ? (
          <TabActive onClick={() => navigate("/ca-nhan/mv")} text="mv" />
        ) : (
          <Tab onClick={() => navigate("/ca-nhan/mv")} text="mv" />
        )}
      </Box>
      <Box sx={{ borderBottom: "1px solid #c4c4c499" }} mb={2} />

      {isSelectedSong && <SongComponent />}
      {isSelectedPodcast && <Podcast />}
      {isSelectedAlbum && <Album />}
      {isSelectedMV && <MvComponent />}
    </>
  );
}

export default MenuTitle;
