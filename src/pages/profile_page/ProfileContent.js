import React from "react";
// import { Route, Routes } from "react-router-dom";

import PlayList from "../../components/playlist/index";
import MenuProfile from "../../components/menu/index";

function ProfileContent({ arrayData, myArrayPlaylist }) {
  return (
    <section className="home home_content ">
      <PlayList myArrayPlaylist={myArrayPlaylist} />
      <MenuProfile arrayData={arrayData} myArrayPlaylist={myArrayPlaylist} />
    </section>
  );
}

export default ProfileContent;
