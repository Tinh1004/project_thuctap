import { useState, useEffect, useRef } from 'react';
import './styles.css';
import Search from './search/index';
import BackToIcon from './back_to/index';
import AvatarUser from './avatar/index';

export default function NavBar(props) {
  const [scroll, setScroll] = useState(false)
  const navRef = useRef();
  useEffect(() => {
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
    <div className={`header-navbar ${scroll ? "header-navbar-scroll" : " "}`} ref={navRef}>
      <div className="left">
        <BackToIcon />
        <Search />
      </div>
      <div className="right">
        <AvatarUser />
      </div>
    </div>
  );
}
