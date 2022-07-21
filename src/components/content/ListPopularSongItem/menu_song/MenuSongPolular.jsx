import React from "react";
import './styles.scss'
export default function MenuSongPolular() {
  return (
    <div className="menuSongPopularContainer">
      <nav className="navbar">
        <div className="navbarContainer">
          <ul className="navbarMenu">
            <li className="navbarItem active" onclick="return toggle('songs')">
              <div className="navLink">
                <a href="#">Bài hát</a>
              </div>
            </li>
            <li className="navbarItem" onclick="return toggle('albums')">
              <div className="navLink">
                <a href="#">Album</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="songButton">
        <a href="#" className="item active">
          Phổ biến
        </a>
        <a href="#" className="item">
          Nổi bật
        </a>
      </div>
    </div>
  );
}
