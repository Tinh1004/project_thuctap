import React from 'react';
import './styles.scss'
export default function CardArtist(props) {
  return (
    <li className="artistItem">
    <div className="img_artist">
      <img className="img" src={props.img} alt={props.alt} />
    </div>
    <h5 className='info'>
      {props.author}
    </h5>
    <p className="singerLike">89k quan tâm</p>
  </li>
  )
}
