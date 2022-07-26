import React from "react";
import './styles.scss'
import { Link } from "react-router-dom";
export default function MenuAlbumPolular() {
  
  return (
    <div className="menuSongPopularContainer">
      <nav className="navbar">
        <div className="navbarContainer">
          <ul className="navbarMenu">
            <li className="navbarItem " onclick="return toggle('songs')">
              <div className="navLink">
                <a href="#"><Link to = "/list-popular-song">Bài hát</Link></a>
              </div>
            </li>
            <li className="navbarItem active " onclick="return toggle('albums')">
              <div className="navLink">
              <a href="#"><Link to = "/list-popular-album">Album</Link></a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
