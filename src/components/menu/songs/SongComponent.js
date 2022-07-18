import React from "react";
import CardSong from "./card_song/CardSong";
import "../songs/card_song/CardSong.scss";

function SongComponent() {
  return (
    <div id="songs" class="songs page_content">
      <div class="songs_button">
        <a href="#" class="item active">
          Yêu thích
        </a>
        <a href="#" class="item">
          Đã tải lên
        </a>
      </div>

      <div class="list_songs">
        <div class="song_tag">
          <div class="media">
            <div class="media_left">
              <p>Bài hát</p>
            </div>
            <div class="media_content">
              <p>Album</p>
            </div>
            <div class="media_right">
              <p>Thời gian</p>
            </div>
          </div>
        </div>
        <CardSong />
        <CardSong />
        <CardSong />
        <CardSong />
      </div>
    </div>
  );
}

export default SongComponent;
