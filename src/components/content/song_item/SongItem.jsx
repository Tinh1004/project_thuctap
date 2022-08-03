import React from "react";

import "./styles.scss";
import { Link } from "react-router-dom";
import CardSongItem from "./CardSongItem/CardSongItem";
import { useSelector } from "react-redux";

import { dataSelector } from "../../../redux/selectors";
export default function SongItem() {
  const array = useSelector(dataSelector);
  return (
    <div className="songItemContainer">
      <div className="songItem">
        <h4>Popular Songs</h4>
        <div className="btn_s">
          <label className="btn">
            <Link to="/list-popular-song">
              <div className="btn">
                Tất cả <i className="fas fa-chevron-right" />
              </div>
            </Link>
          </label>
        </div>
      </div>

      <div className="cardSongItem">
        {array.slice(3,8).map((item) => (
          <CardSongItem
            key={item.id}
            id={item.id}
            img={item.links.images[1].url}
            alt="Loading...."
            name={item.name}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
}
