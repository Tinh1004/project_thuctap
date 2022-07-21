import React from "react";
import './styles.scss'

export default function CardSongItem(music) {
  return (
      <li className="cardSong">
        <div className="img_play">
          <img className="img" src={music.img} alt={music.alt} />
          <i className="far fa-play-circle" />
        </div>
        <h5 className='info'>
          {music.name}
          <br />
          <div className="subtitle">{music.subtitle}</div>
        </h5>
      </li>
  );
}
