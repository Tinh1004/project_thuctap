import React from "react";
import './styles.scss'
export default function CardPopuplarSong(props) {
  return (
    <div className="cardPopularSongContainer">
      <div className="song_tag">
        <div className="media">
          <div className="media_left">
            <div className="song_prefix">
              <i className="fa-solid fa-music icon"></i>
            </div>
            <div className="song_thumb">
              <figure className="image">
                <img className="img"
                  src="https://i1.sndcdn.com/artworks-Rb4epyeZOrO4ENhc-pyhLww-t500x500.jpg"
                  alt="image playlist"
                />
              </figure>
              {/* <i className="fa-solid fa-play" /> */}
              <i className="far fa-play-circle" />
            </div>
            <div className="card_info">
              <div className="title_wrapper">
                  <span className="title">Rapitaloud</span>
              </div>
              <h3 className="subtitle">
                <a href="#" className="is_subtitle">
                  Rapital
                </a>
              </h3>
            </div>
          </div>
          <div className="media_content">
            <div className="album_info">
                  <span> Rapitaloud EP</span>
            </div>
          </div>
          <div className="media_right">
            <div className="hover_items"></div>
            <div className="action_items">
              <div className="level">
                <div className="level_item">
                  <button className="btn_favorite" tabIndex="0">
                    <i className="fa-solid fa-heart icon1"></i>
                  </button>
                </div>
                <div className="level_item duration">4:17</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
