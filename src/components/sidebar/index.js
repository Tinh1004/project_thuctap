import { Link } from 'react-router-dom';
import ListItem from './item/ListItem';
import {useState, useEffect} from 'react'

const data = [
  {
    title: "Trang chủ",
    icon: <i className='bx bx-home-alt icon' ></i>,
    url: "/"
  },
  {
    title: "Cá nhân",
    icon: <i className='bx bxl-deezer icon'></i>,
    url: "/ca-nhan"
  },
  {
    title: "Thể loại",
    icon: <i className='bx bx-music icon' ></i>,
    url: "/the-loai"
  },
  {
    title: "Tạo playlist",
    icon: <i className='bx bx-plus icon'></i>,
    url: "/dsdsa"
  }
]

export default function Sidebar({
  isClose,
  handleClickSetIsClose
}) {
  return (
    <nav className={isClose ? "sidebar close" : "sidebar"}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="logo" />
          </span>
          <div className="text header-text">
            <span className="name">Pham ngoc Tinh</span>
            <span className="profession">Web developer</span>
          </div>
        </div>
        <i className='bx bx-chevron-right toggle' onClick={()=>{handleClickSetIsClose()}}></i>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ListItem data={data}/>
        </div>
      </div>
    </nav>
  )
}