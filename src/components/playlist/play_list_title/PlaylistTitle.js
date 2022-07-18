import React from "react";
import "./PlaylistTitle.scss";

function PlaylistTitle() {
  return (
    <div className="wrapper_title">
      <h3 className="title">
        Playlist
        <div className="tooltip_custom tooltip_playlist">
          <i className="fa-solid fa-plus icon_plus"></i>
          <span className="tooltip_text">Tạo playlist mới</span>
        </div>
      </h3>
      <a href="#" className="all" onclick="showAllPlaylist()">
        Tất cả <i className="fa-solid fa-chevron-right"></i>
      </a>
    </div>
  );
}

export default PlaylistTitle;
