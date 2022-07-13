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

export default function Sidebar(props) {
  const [isClose, setIsClose] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const handleClickSetIsDark = () =>{
    setIsDark(prev => !prev);
  }

  const handleClickSetIsClose = () =>{
    setIsClose(prev => !prev);
  }
  useEffect(()=>{
    if(isDark){
      document.body.classList.add("dark");
    }else{
      document.body.classList.remove("dark");
    }
  },[isDark])

  console.log(isClose)

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
        <div className="bottom-content">
          <li className="">
            <Link to="/dsdsa">
              <a >
                <i className='bx bx-log-out icon'></i>
                <span className="text nav-text">Logout</span>
              </a>
            </Link>
          </li>
          <li className="mode">
            <div className="moon-sun">
              <i className='bx bx-moon icon moon'></i>
              <i className='bx bx-sun icon sun'></i>
            </div>
            <span className="mode-text text">{isDark ? "Dark Mode" : "Light Mode"}</span>
            <div className="toggle-switch" onClick={()=>{handleClickSetIsDark()}}>
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  )
}