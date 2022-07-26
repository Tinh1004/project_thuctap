import React from "react";
import CardPopuplarSong from "./card_popular_song/CardPopuplarSong";
import { dataSelector } from "../../../redux/selectors";
import { useSelector } from "react-redux";
import MenuSongPolular from "./menu_song/MenuSongPolular";
import "./styles.scss";

export default function ListPopularSongItem() {
  const array = useSelector(dataSelector);

  return (
    <div className="listPopularSongContainer">
      <h1>Bài hát nổi bật</h1>
      <div className="menu">
        <MenuSongPolular />
      </div>
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
        {array.map((item) => (
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
