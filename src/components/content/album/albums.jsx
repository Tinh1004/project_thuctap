import React from "react";
import { useSelector } from "react-redux";
import { playListsSelector } from "../../../redux/selectors";
import CardAlbum from "./CardAlbum/CardAlbum";
import "./styles.scss";

export default function Albums() {
  const albums = useSelector(playListsSelector)
  return (
    <div className="albumsContainer">
      <div className="albums">
        <h4>Albums Phổ Biến</h4>
      </div>
      <div className="cardAlbums">
        {albums.slice(0,5).map((item) => (
          <CardAlbum
            key={item.id}
            name={item.name}
            id = {item.id}
            img={item.image}
            author={item.discription}
          />
        ))}
      </div>
    </div>
  );
}
