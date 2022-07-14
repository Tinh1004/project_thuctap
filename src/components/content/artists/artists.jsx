import React from 'react';
import './styles.scss'
export default function Artists(props) {
  return (
    <li className="artistItem">
    <div className="img_artist">
      <img className="img" src={props.img} alt={props.alt} />
    </div>
    <h5 className='info'>
      {props.name}
    </h5>
  </li>
  )
}
