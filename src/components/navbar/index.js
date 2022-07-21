import { useState, useEffect, useRef } from 'react';
import './styles.css';
import Search from './search/index';
import BackToIcon from './back_to/index';
import Avatar from './avatar/index';
export default function NavBar(props) {
  const [scroll, setScroll] = useState(false)
  const navRef = useRef();
  useEffect(() => {
    console.log('159753');

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY >= 10;
      console.log('remove');
      setScroll(scrollCheck);
    })

    return () => {
      document.removeEventListener("scroll", () => {
        console.log('remove');
      })
    }
  }, [])


  return (
    <div className={`header-navbar ${props.scroll ? "header-navbar-scroll" : " "}`} ref={navRef}>
      <div className="left">
        <BackToIcon />
        <Search />
      </div>
      <div className="right">
        <Avatar />
      </div>
    </div>
  );
}
