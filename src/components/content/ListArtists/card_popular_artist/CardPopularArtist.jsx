import React from "react";
import "./styles.scss";
export default function CardPopularArtist(props) {
  return (
    <div className="cardPopularArtistContainer">
      <div className="popularArtistItem">
        <div className="imageArtist">
          <img className="img" src={props.image} alt="imageArtist" />
        </div>
        <h5 className="info">{props.author}</h5>
        <p className="singerLike">89k quan tâm</p>
      </div>
    </div>
  );
}
