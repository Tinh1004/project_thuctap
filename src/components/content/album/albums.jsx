import React from "react";
import "./styles.scss";
import CardAlbum from "./CardAlbum/CardAlbum";
import { albums } from "./data/albums";
export default function Albums() {
  return (
    <div className="albumsContainer">
      <div className="albums">
        <h4>Albums Phổ Biến</h4>
      </div>
      <div className="cardAlbums">
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
