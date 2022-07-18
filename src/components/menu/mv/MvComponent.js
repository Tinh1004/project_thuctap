import React from "react";
import CardMV from "./card_mv/CardMV";
import "./Mv.scss";

function MvComponent() {
  return (
    <div id="mv" class="mv page_content">
      <div class="mv_content">
        <div class="empty">
          <i class="fa-solid fa-file-video"></i>
          <p>Chưa có MV nào trong thư viện cá nhân</p>
          <a href="#" class="explore">
            Khám phá ngay
          </a>
        </div>

        {/* <div class="wrapper_playlist">
          <CardMV />
          <CardMV />
        </div> */}
      </div>
    </div>
  );
}

export default MvComponent;
