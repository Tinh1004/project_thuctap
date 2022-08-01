import React from 'react'
import './styles.scss'
export default function CardAlbum(props) {
  return (
    <div className='cardAlbumContainer'>
       <li className="cardAlbum" >
        <div className="img_play">
          <img className="img" src={props.img} alt={props.alt} />
          <i className="far fa-play-circle"/>
        </div>
        <h5 className='info'>
          {props.name}
        </h5>
        <div className="subtitle">{props.author}</div>
      </li>
    </div>
  );
}
