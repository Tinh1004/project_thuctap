import React from "react";
import CardAlbum from "./card_album/CardAlbum";

function Album() {
  return (
    <div id="album" class="album page_content">
      <div class="album_content">
        <div class="empty">
          <i class="fa-solid fa-compact-disc"></i>
          <p>Chưa có album trong thư viện cá nhân</p>
        </div>

        {/* <div class="wrapper_playlist">
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
          <CardAlbum />
        </div> */}
      </div>
    </div>
  );
}

export default Album;
