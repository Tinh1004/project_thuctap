import React from 'react'
import './song2.css';
import { Link } from 'react-router-dom';

export default function Song2(props) {
  return (
    <>
    <Link to={props.title}>
      <div title={props.title} className='khoinhac1'>
            <div className='nhac1'>
                <img  className='hinhto1' src={props.img2}/>
                <div className='ndtrenhinh1'>
                    <span>{props.name}</span>
                </div>
            </div>
        </div>
    </Link>
    </>
  )
}
