import React from 'react';
import './styles.scss';

import dataSlice from '../../../../redux/dataSlice/dataSlice';
import {useDispatch} from 'react-redux';

export default function ReleaseItem(props) {
  const dispatch = useDispatch();
  return (
    <div className='releaseItemContainer' onClick={()=>{dispatch(dataSlice.actions.changeSong(1))}}>
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
