import React from 'react'
import './song.css';
import { Link } from 'react-router-dom';
export default function Songfirt(props) {
  return (
    <>
        <Link to={props.title}>
            <div title={props.title} className='khoinhac'>
                <div className='nhac1'>
                    <img className='hinhto' src={props.imgto}></img>
                    <div className='ndtrenhinh'>
                        <p className='tentl'>{props.name}</p>
                        <div className='imgnd'>
                            <img className='hinhnho' src={props.imgnho1}></img>
                            <img className='hinhnho' src={props.imgnho2}></img>
                            <img className='hinhnho' src={props.imgnho3}></img>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </>
  )
}
