/* eslint-disable no-undef */
import React from 'react'
import './song3.css'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { NavLink } from 'react-router-dom';
export default function Song3(props) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <>
        {/* <Link to="/the-loai/page3"> */}
            <div className='khoinhac2'>
                <div className='nhac2'>
                    <div className='image1'>
                        <img className='hinhto2' src={props.img3}></img>
                        <div className='icon'>
                            <Checkbox sx={{color:'#fff'}} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                            {/* <i className="icon1 fa fa-heart-o" /> */}
                            <NavLink to="/the-loai/page3"><i className="icon2 fa fa-play-circle"/></NavLink>
                            <i className="icon3 fa fa-ellipsis-h" />
                        </div>
                    </div>
                    <div className='tenbh'>
                        <p>{props.tenbh}</p>
                        <span>{props.casi}</span>
                    </div>
                </div>
            </div>
        {/* </Link> */}
    </>
  )
}