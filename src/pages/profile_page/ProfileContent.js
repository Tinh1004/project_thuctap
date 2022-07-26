import React from "react";
// import { Route, Routes } from "react-router-dom";

import PlayList from "../../components/playlist/index";
import MenuProfile from "../../components/menu/index";

function ProfileContent({ arrayData }) {
  return (
    <section className="home home_content ">
      <PlayList arrayData={arrayData} />
      <MenuProfile arrayData={arrayData} />
    </section>
  );
}

export default ProfileContent;
