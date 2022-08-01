import React from "react";

import { dataSelector } from "../../../../redux/selectors";
import { useSelector } from "react-redux";
import "./styles.scss";
import CardPopuplarSong from "../../ListPopularSongItem/card_popular_song/CardPopuplarSong";
export default function ListSongNCSRelease() {
  const array = useSelector(dataSelector);

  return (
    <div className="listPopularSongContainer">
      <h1>NSC Release</h1>
      <br />
      <div className="list_songs">
        <div className="song_tag">
          <div className="media">
            <div className="media_left">
              <p>Bài hát</p>
            </div>
            <div className="media_content">
              <p>Album</p>
            </div>
            <div className="media_right">
              <p>Thời gian</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cardPopularSong">
        {array.slice(21,30).map((item) => (
          <CardPopuplarSong
            key={item.id}
            id={item.id}
            image={item.links.images[1].url}
            name={item.name}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
}
