import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import CardAlbum from "./CardAlbum/CardAlbum";
import { albums } from "./data/albums";
export default function Albums() {
  return (
    <div className="albumsContainer">
      <div className="albums">
        <h4>Popular Albums</h4>
        <div className="btn_s">
          <label className="btn">
            <Link to="/list-popular-artist">
              <div className="btn">
                Tất cả <i className="fas fa-chevron-right" />
              </div>
            </Link>
          </label>
        </div>
      </div>
      <div className="cardAlbums">
        {albums.map((item) => (
          <CardAlbum
            key={item.id}
            name={item.name}
            img={item.links.images[1].url}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
}
