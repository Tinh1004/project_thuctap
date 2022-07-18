import React from "react";
import "./CardMV.scss";

function CardMV() {
  return (
    <div class="carousel_playlist">
      <div class="image">
        <img
          src="https://sohanews.sohacdn.com/160588918557773824/2020/8/18/ly2-15977220078411964556507.jpg"
          alt="image playlist"
        />
        <div class="media">
          <i class="fa-solid fa-play"></i>
          <div class="tooltip_custom">
            <i class="fa-solid fa-x"></i>
            <span class="tooltip_text">Xóa</span>
          </div>
        </div>
        <div class="duration">
          <span>4:17</span>
        </div>
      </div>
      <div class="name">
        <div class="media_left">
          <div class="song_thumb">
            <figure class="image">
              <img
                src="https://sohanews.sohacdn.com/160588918557773824/2020/8/18/ly2-15977220078411964556507.jpg"
                alt="image playlist"
              />
            </figure>
          </div>
          <div class="card_info">
            <div class="title_wrapper">
              <span class="title">
                <p>Mặt trời của em</p>
              </span>
            </div>
            <h3 class="subtitle">
              <a href="#" class="is_subtitle">
                Phương Ly
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMV;
