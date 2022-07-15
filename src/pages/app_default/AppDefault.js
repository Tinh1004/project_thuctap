import Sidebar from '../../components/sidebar/index';
import NavBar from '../../components/navbar/index';
import Footer from '../../components/footer/index';
import {useContext} from 'react';
import { CloseContext } from '../../contexts/CloseContext'

export default function AppDefault({ children }) {
    const context = useContext(CloseContext)
    return (
        <div>
            <div className="bg"></div>
            <Sidebar/>
            <NavBar />
            {children}
            <div className="trong" style={{height:'70px'}}></div>
            <Footer />
        </div>
    )
}