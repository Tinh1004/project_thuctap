import React from 'react'
import './song2.css';
export default function Song2(props) {
  return (
    <>
        <div className='khoinhac1' href='#'>
            <div className='nhac1'>
                <img className='hinhto1' src={props.img2}/>
                <div className='ndtrenhinh1'>
                    <span>{props.name}</span>
                </div>
            </div>
        </div>
    </>
  )
}
