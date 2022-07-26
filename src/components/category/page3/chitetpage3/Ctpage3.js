import React from 'react'
import './page3.css'
export default function Ctpage2(props) {
  return (
    <div>
        <div className='tl' href='#'>
             <div className='img'>
                <img className='imgpage2' src={props.imgp2}></img>
             </div>
             <div className='tentl'>
                <p>{props.tenbh}</p><br/>
                <i>{props.casi}</i>
             </div>
        </div>
    </div>
  )
}
