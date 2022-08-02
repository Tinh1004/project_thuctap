import React from "react";
import MenuAlbumPolular from "./menu_song/MenuAlbum";
import { albums } from "../album/data/albums";

import "./styles.scss";
import CardAlbum from "../album/CardAlbum/CardAlbum";

export default function ListPopularAlbumItem() {
  return (
    <div className="listPopularSongContainer">
      <h1>Popular Albums</h1>
      <div className="menu">
        <MenuAlbumPolular/>
      </div>
      <div className="cardPopularSong d-flex">
      {albums.map((item) => (
          <CardAlbum
            key={item.id}
            name={item.name}
            id = {item.id}
            img={item.links.images[1].url}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
}
