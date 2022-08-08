import React from "react";

import { Link } from "react-router-dom";
import "./styles.scss";
export default function CardAlbum(item) {
  return (
      <li className="cardAlbum">
        <Link to={`/detail/${item.id}`}>
          <div className="img_play">
              <img className="img" src={item.img} alt={"Loading...."} />
              <i className="far fa-play-circle" />
          </div>
        </Link>
        <Link to={`/detail/${item.id}`} >
          <h5 className="info">{item.name}</h5>
        </Link>
        <div className="subtitle">{item.author}</div>
      </li>
  );
}
