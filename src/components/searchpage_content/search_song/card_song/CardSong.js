import React from "react";
import "./CardSong.scss";

function CardSong() {
  return (
    <>
      <div class="song_tag">
        <div class="media">
          <div class="media_left">
            <div class="song_prefix">
              <i class="fa-solid fa-music"></i>
            </div>
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
                  <span>Mặt trời của em</span>
                </span>
              </div>
              <h3 class="subtitle">
                <a href="#" class="is_subtitle">
                  Phương Ly
                </a>
              </h3>
            </div>
          </div>
          <div class="media_content">
            <div class="album_info">
              <span>
                <span>
                  <span> Mặt trời của em</span>
                </span>
              </span>
            </div>
          </div>
          <div class="media_right">
            <div class="hover_items"></div>
            <div class="action_items">
              <div class="level">
                <div class="level_item duration">4:17</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSong;
