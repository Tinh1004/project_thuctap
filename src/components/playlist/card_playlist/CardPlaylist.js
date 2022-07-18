import React from "react";

function CardPlaylist() {
  return (
    <div className="carousel_playlist" onclick="showDetailPlaylist()">
      <div className="image">
        <img
          src="https://sohanews.sohacdn.com/160588918557773824/2020/8/18/ly2-15977220078411964556507.jpg"
          alt="image playlist"
        />
        <div className="media">
          <div className="tooltip_custom">
            <i className="fa-solid fa-x"></i>
            <span className="tooltip_text">Xóa</span>
          </div>
          <i className="fa-solid fa-play"></i>
          <div className="tooltip_custom">
            <i className="fa-solid fa-ellipsis"></i>
            <span className="tooltip_text">Khác</span>
          </div>
        </div>
      </div>
      <div className="name">
        <a href="/" className="name_playlist">
          English music
        </a>
        <p className="name_author">Phương Ly</p>
      </div>
    </div>
  );
}

export default CardPlaylist;
