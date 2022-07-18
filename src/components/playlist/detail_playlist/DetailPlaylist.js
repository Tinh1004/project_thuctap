import React from "react";
import CardSong from "../../menu/songs/card_song/CardSong";
import "./DetailPlaylist.scss";

function DetailPlaylist() {
  return (
    <div class="detail_playlist">
      <div class="playlist_info">
        <div class="carousel_playlist" onclick="removePlaylist()">
          <div class="image">
            <img
              src="https://sohanews.sohacdn.com/160588918557773824/2020/8/18/ly2-15977220078411964556507.jpg"
              alt="image playlist"
            />
            <div class="media">
              <i class="fa-solid fa-play"></i>
            </div>
          </div>
          <div class="name">
            <p class="name_playlist">
              English music <i class="fa-solid fa-pencil"></i>
            </p>
            <p class="name_author">
              Tạo bởi <span>Tonny</span>
            </p>
            <p class="name_author">Công khai</p>
          </div>
        </div>
      </div>
      <div class="playlist_song">
        <div class="list_song">
          <div class="list_content">
            <i class="fa-solid fa-music"></i>
            <p>Không có bài hát trong playlist của bạn</p>
          </div>
        </div>

        <div class="suggest_song">
          <div class="suggest_title">
            <h3 class="title">Bài hát gợi ý</h3>
            <a href="#">
              <i class="fa-solid fa-arrows-rotate"></i>
              Làm mới
            </a>
          </div>

          <CardSong />
          <CardSong />
          <CardSong />
          <CardSong />
          <CardSong />
        </div>
      </div>
    </div>
  );
}

export default DetailPlaylist;
