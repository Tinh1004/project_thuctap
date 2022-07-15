import React from 'react'
import './song3.css'
export default function Song3(props) {
  return (
        <div className='khoinhac2' href='#'>
            <div className='nhac2'>
                <div className='image1'>
                    <img className='hinhto2' src={props.img3}></img>
                    <div className='icon'>
                        <i className="icon1 fa fa-heart-o" />
                        <i className="icon2 fa fa-play-circle" onClick="alert('hello')" aria-hidden="true" />
                        <i className="icon3 fa fa-ellipsis-h" />
                    </div>
                </div>
                <div className='tenbh'>
                    <p>{props.tenbh}</p>
                    <span>{props.casi}</span>
                </div>
            </div>
        </div>
  )
}
