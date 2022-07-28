import React from "react";
// import { Route, Routes } from "react-router-dom";

import PlayList from "../../components/playlist/index";
import MenuProfile from "../../components/menu/index";

function ProfileContent({ arrayData, arrayPlaylist }) {
  return (
    <section className="home home_content ">
      <PlayList arrayPlaylist={arrayPlaylist} />
      <MenuProfile arrayData={arrayData} arrayPlaylist={arrayPlaylist} />
    </section>
  );
}

export default ProfileContent;
