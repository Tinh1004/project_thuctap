import React from 'react'
import { Link } from 'react-router-dom'
import './page2.css'
export default function Ctpage2(props) {
  return (
    <Link to='/list-song-at-work'>
    <>
        <div className='tl' href='#'>
             <div className='img'>
                <img className='imgpage2' src={props.imgp2}></img>
             </div>
             <div className='tentl'>
                <p>{props.tenbh}</p><br/>
                <i>{props.casi}</i>
             </div>
        </div>
    </>
    </Link>
  )
}
