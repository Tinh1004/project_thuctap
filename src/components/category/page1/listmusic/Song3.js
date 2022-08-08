/* eslint-disable no-undef */
import React from 'react'
import './song3.css'
import Checkbox from '@mui/material/Checkbox';
import { Box, Grid } from "@mui/material";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';
import userSlice from "../../../../redux/userSlice/userSlice";
import { myPlayListsSelector } from '../../../../redux/selectors';
export default function Song3(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myPlayLists = useSelector(myPlayListsSelector);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const handleChange = (event) => {
    event.target.checked ? toast.success('Đã thêm album vào yêu Playlist') : toast.error("Đã xóa album ra khỏi Playlist");
  };

  const handleClickAddPlayList = (item) => {
    const user = localStorage.getItem("user");
    if (user) {
      const checkItemPlayList = myPlayLists.filter((e) => e.id === item.id);
      if (checkItemPlayList.length === 0) {
        dispatch(userSlice.actions.addPlayList(item));
        toast.success("Thêm Playlist thành công!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Playlist đã tồn tại", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      navigate("/login");
    }
  }
  return (
    <>
      <div title={props.item.name} className='khoinhac2'>
        <div className='nhac2'>
          <div className='image1'>
            <img className='hinhto2' src={props.item.image}></img>
            <div className='icon'>
              <Checkbox onClick={() => handleClickAddPlayList(props.item)} sx={{ color: '#fff' }} icon={<FavoriteBorder />} checkedIcon={<Favorite />}></Checkbox>
              <i onClick={() => { navigate(`/detail/${props.item.id}`) }} className="icon2 fa fa-play-circle" />
              <i className="icon3 fa fa-ellipsis-h" />
            </div>
          </div>
          <div className='tenbh'>
            <p onClick={() => { navigate(`/detail/${props.item.id}`) }}>{props.item.name}</p>
            <span>{props.item.discription}</span>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  )
}
