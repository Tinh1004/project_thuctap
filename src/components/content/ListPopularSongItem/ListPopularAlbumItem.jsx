import React from "react";
import MenuAlbumPolular from "./menu_song/MenuAlbum";

import "./styles.scss";
export default function ListPopularAlbumItem() {
  return (
    <div className="listPopularSongContainer">
      <h1>Bài hát nổi bật</h1>
      <div className="menu">
        <MenuAlbumPolular/>
      </div>
      <div className="cardPopularSong">
        

      </div>
    </div>
  );
}
