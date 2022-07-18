import React from "react";

function Podcast() {
  return (
    <div id="podcast" class="podcast page_content">
      <div class="songs_button">
        <a href="#" class="item active">
          Tập mới
        </a>
        <a href="#" class="item">
          Tập đã lưu
        </a>
        <a href="#" class="item">
          Chương trình
        </a>
      </div>

      <div class="podcast_content">
        <div class="empty">
          <i class="fa-solid fa-microphone-lines-slash"></i>
          <p>Không có tập mới</p>
        </div>
      </div>
    </div>
  );
}

export default Podcast;
