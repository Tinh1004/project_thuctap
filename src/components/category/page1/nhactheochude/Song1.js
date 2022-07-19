import React from 'react'
import './song.css';
export default function Songfirt(props) {
  return (
    <div>
        <div className='khoinhac'>
            <div className='nhac1'>
                <img className='hinhto' src={props.imgto}></img>
                <div className='ndtrenhinh'>
                    <p className='tentl'>{props.name}</p>
                    <div className='imgnd'>
                        <img className='hinhnho' src={props.imgnho}></img>
                        <img className='hinhnho' src={props.imgnho}></img>
                        <img className='hinhnho' src={props.imgnho}></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
