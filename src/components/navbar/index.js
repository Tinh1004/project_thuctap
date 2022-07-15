import {useState, useEffect, useRef} from 'react';
import './styles.css';
import Search from './search/index';
import BackToIcon from './back_to/index';
import Avatar from './avatar/index';

export default function NavBar() {
  const [scroll, setScroll] = useState(false)
  const navRef = useRef();
  useEffect(()=>{
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY >= 80;
      setScroll(scrollCheck);
    })
    return ()=>{
      document.removeEventListener("scroll", () => {
        console.log('remove');
      })
    }
  },[])
  return (
    <div class={`header-navbar ${scroll ? "header-navbar-scroll": " "}`} ref={navRef}>
      <div className="left">
        <BackToIcon/>
        <Search/>
      </div>
      <div className="right">
        <Avatar/>
      </div>
    </div>
  );
}
