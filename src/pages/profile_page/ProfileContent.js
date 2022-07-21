import React from "react";
import { Route, Routes } from "react-router-dom";

import AppDefault from "../app_default/AppDefault";
import PlayList from "../../components/playlist/index";
import MenuProfile from "../../components/menu/index";
import SongComponent from "../../components/menu/songs/SongComponent";
import Podcast from "../../components/menu/podcast/Podcast";
import Album from "../../components/menu/album/Album";
import MvComponent from "../../components/menu/mv/MvComponent";

function ProfileContent() {
  return (
    <section className="home home_content ">
      <PlayList />
      <MenuProfile />
      {/* <div className="bottom_section">
        <Routes>
          <Route index element={<SongComponent />} />
          <Route path={`/song`} element={<SongComponent />} />
          <Route path={`/podcast`} element={<Podcast />} />
          <Route path={`/album`} element={<Album />} />
          <Route path={`/mv`} element={<MvComponent />} />
        </Routes>
      </div> */}
    </section>
  );
}

export default ProfileContent;
