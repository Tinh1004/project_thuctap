/* eslint-disable no-undef */
import React from 'react'
import './song3.css'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { NavLink,Link } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';


export default function Song3(props) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const handleChange = (event) => {
        event.target.checked?toast.success('Đã thêm album vào yêu Playlist'):toast.error("Đã xóa album ra khỏi Playlist");
      };
  return (
    <>
        {/* <Link to="/the-loai/page3"> */}
            <div title={props.title} className='khoinhac2'>
                <div className='nhac2'>
                    <div className='image1'>
                        <img className='hinhto2' src={props.img3}></img>
                        <div className='icon'>
                            <Checkbox onChange={handleChange} sx={{color:'#fff'}} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                            {/* <ToastContainer /> */}
                            {/* <i className="icon1 fa fa-heart-o" /> */}
                            <Link to='/list-song-NCSRelease'><i className="icon2 fa fa-play-circle"/></Link>
                            <i className="icon3 fa fa-ellipsis-h" />
                        </div>
                    </div>
                    <div className='tenbh'>
                    <Link to='/list-song-NCSRelease'><p>{props.tenbh}</p></Link>
                        <span>{props.casi}</span>
                    </div>
                </div>
            </div>
        {/* </Link> */}
    </>
  )
}
