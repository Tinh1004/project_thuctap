import Sidebar from '../../components/sidebar/index';
import NavBar from '../../components/navbar/index';
import Footer from '../../components/footer/index';
import { useState, useEffect, useRef } from 'react';

export default function AppDefault({ children }) {
    return (
        <>
            <div className="bg"></div>
            <div className="wrapper" >
                <Sidebar />
                <NavBar />
                {children}
            </div>
            <Footer />
        </>
    )
}