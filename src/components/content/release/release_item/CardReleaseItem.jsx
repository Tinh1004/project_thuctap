import React from 'react';
import './styles.scss';

export default function ReleaseItem(props) {
  return (
    <div className='releaseItemContainer'>
        <img className='image' src={props.img} alt={props.alt} />
        <i className="far fa-play-circle" />
        <h6 className='name'>{props.name}
            <br/>
            <div className='subtitle'>{props.subtitle}</div>
        </h6>
        <i className="fas fa-align-justify" />
    </div>
  )
}
