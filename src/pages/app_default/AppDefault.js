import Sidebar from '../../components/sidebar/index';
import NavBar from '../../components/navbar/index';
import Footer from '../../components/footer/index';
import { useState, useEffect } from 'react';

export default function AppDefault({ children }) {
    const [scroll, setScroll] = useState(false)
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
        <>
            <div className="bg"></div>
            <div className="wrapper">
                <Sidebar />
                <NavBar scroll={scroll} />
                {children}
            </div>
            <Footer />
        </>
    )
}