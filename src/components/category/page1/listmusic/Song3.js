import React from 'react'
import './song3.css'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
export default function Song3(props) {
  return (
    <>
        <Link to="/the-loai/page3">
            <div className='khoinhac2'>
                <div className='nhac2'>
                    <div className='image1'>
                        <img className='hinhto2' src={props.img3}></img>
                        <div className='icon'>
                            {/* <Checkbox {...label} sx={{color: blue[600]}} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /> */}
                            <i className="icon1 fa fa-heart-o" />
                            <i className="icon2 fa fa-play-circle" aria-hidden="true" />
                            <i className="icon3 fa fa-ellipsis-h" />
                        </div>
                    </div>
                    <div className='tenbh'>
                        <p>{props.tenbh}</p>
                        <span>{props.casi}</span>
                    </div>
                </div>
            </div>
        </Link>
    </>
  )
}
