import React from "react";
import "./LibraryPlaylist.scss";
import "../../menu/album/card_album/CardAlbum.scss";

function LibraryPlaylist() {
  return (
    <div class="all_playlist">
      <div class="all_playlist_menu">
        <nav class="navbar">
          <div class="navbar_container">
            <ul class="navbar_menu">
              <li class="navbar_item title">
                <div class="nav_link">
                  <a href="#">Playlist</a>
                </div>
              </li>
              <li class="navbar_item active">
                <div class="nav_link">
                  <a href="#">Tất cả</a>
                </div>
              </li>
              <li class="navbar_item">
                <div class="nav_link">
                  <a href="#">Của tôi</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="wrapper_playlist wrapper_playlist_all">
        <div
          class="carousel_playlist create_playlist"
          onclick="removePlaylist()"
        >
          <a href="" class="btn_create">
            <i class="fa-solid fa-circle-plus"></i>
          </a>
          <p>Tạo playlist mới</p>
        </div>

        <div class="carousel_playlist">
          <div class="image">
            <img
              src="https://sohanews.sohacdn.com/160588918557773824/2020/8/18/ly2-15977220078411964556507.jpg"
              alt="image playlist"
            />
            <div class="media">
              <div class="tooltip_custom">
                <i class="fa-solid fa-x"></i>
                <span class="tooltip_text">Xóa</span>
              </div>
              <i class="fa-solid fa-play"></i>
              <div class="tooltip_custom">
                <i class="fa-solid fa-ellipsis"></i>
                <span class="tooltip_text">Khác</span>
              </div>
            </div>
          </div>
          <div class="name">
            <p class="name_playlist">English music</p>
            <p class="name_author">Phương Ly</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LibraryPlaylist;
