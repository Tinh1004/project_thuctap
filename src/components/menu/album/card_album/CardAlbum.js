import React from "react";
import "./CardAlbum.scss";

function CardAlbum() {
  return (
    <div class="carousel_playlist">
      <div class="image">
        <img
          src="https://sohanews.sohacdn.com/160588918557773824/2020/8/18/ly2-15977220078411964556507.jpg"
          alt="image playlist"
        />
        <div class="media">
          <div class="tooltip_custom">
            <i class="fa-solid fa-heart"></i>
            <span class="tooltip_text">Xóa khỏi thư viện</span>
          </div>
          <i class="fa-solid fa-play"></i>
          <div class="tooltip_custom">
            <i class="fa-solid fa-ellipsis"></i>
            <span class="tooltip_text">Khác</span>
          </div>
        </div>
      </div>
      <div class="name">
        <p class="name_playlist">Album Phương Ly</p>
      </div>
    </div>
  );
}

export default CardAlbum;
