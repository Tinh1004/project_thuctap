import React from "react";
import './styles.scss'
export default function SongItem(props) {
  return (
      <li className="songItem">
        <div className="img_play">
          <img className="img" src={props.img} alt={props.alt} />
          <i className="far fa-play-circle" />
        </div>
        <h5 className='info'>
          {props.name}
          <br />
          <div className="subtitle">{props.subtitle}</div>
        </h5>
      </li>
  );
}
