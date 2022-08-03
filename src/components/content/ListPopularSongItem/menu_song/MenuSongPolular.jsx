import React from "react";
import './styles.scss'
import { Link } from "react-router-dom";
export default function MenuSongPolular() {
  
  return (
    <div className="menuSongPopularContainer">
      <nav className="navbar">
        <div className="navbarContainer">
          <ul className="navbarMenu">
            <li className="navbarItem active" onclick="return toggle('songs')">
              <div className="navLink">
                <a href="#"><Link to = "/list-popular-song">Bài Hát</Link></a>
              </div>
            </li>
            <li className="navbarItem " onclick="return toggle('albums')">
              <div className="navLink">
              <a href="#"><Link to = "/list-popular-album">Albums</Link></a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
