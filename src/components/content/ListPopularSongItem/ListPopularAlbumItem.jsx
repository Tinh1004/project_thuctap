import React from "react";
import createSlice from "../../../redux/dataSlice/dataSlice"
import { useDispatch, useSelector } from "react-redux";
import CardPopuplarSong from "./card_popular_song/CardPopuplarSong";
import MenuAlbumPolular from "./menu_song/MenuAlbum";

import "./styles.scss";

export default function ListPopularAlbumItem() {
 
  return (
    <div className="listPopularSongContainer">
      <h1>Album nổi bật</h1>
      <div className="menu">
        <MenuAlbumPolular/>
      </div>
      <div className="cardPopularSong">

      </div>
    </div>
  );
}
