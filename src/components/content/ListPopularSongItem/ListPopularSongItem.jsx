import React from "react";
import CardPopuplarSong from "./card_popular_song/CardPopuplarSong";
import MenuSongPolular from "./menu_song/MenuSongPolular";
import "./styles.scss";
export default function ListPopularSongItem() {
  return (
    <div className="listPopularSongContainer">
      <h1>Bài hát nổi bật</h1>
      <div className="menu">
        <MenuSongPolular/>
      </div>
      <div className="cardPopularSong">
        <CardPopuplarSong/>
        <CardPopuplarSong/>
        <CardPopuplarSong/>
        <CardPopuplarSong/>
        <CardPopuplarSong/>
        <CardPopuplarSong/>
        <CardPopuplarSong/>
        <CardPopuplarSong/>
        <CardPopuplarSong/>
        <CardPopuplarSong/>
        <CardPopuplarSong/>
        <CardPopuplarSong/>
      </div>
    </div>
  );
}
