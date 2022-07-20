import React from "react";
import { Link } from "react-router-dom";
import "./MenuTitle.scss";

function MenuTitle() {
  return (
    <nav class="navbar">
      <div class="navbar_container">
        <ul class="navbar_menu">
          <li class="navbar_item active" onclick="return toggle('songs')">
            <div class="nav_link">
              <Link to="/ca-nhan/song">Bài hát</Link>
            </div>
          </li>
          <li class="navbar_item" onclick="return toggle('podcast')">
            <div class="nav_link">
              <a href="#">Podcast</a>
            </div>
          </li>
          <li class="navbar_item" onclick="return toggle('album')">
            <div class="nav_link">
              <a href="#">Album</a>
            </div>
          </li>
          <li class="navbar_item" onclick="return toggle('mv')">
            <div class="nav_link">
              <a href="#">MV</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MenuTitle;
