import React from "react";
import CardPopuplarSong from "./card_popular_song/CardPopuplarSong";
import "./styles.scss";
export default function ListPopularSongItem() {
  return (
    <div className="listPopularSongContainer">
      <h1>Bài hát nổi bật</h1>
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
