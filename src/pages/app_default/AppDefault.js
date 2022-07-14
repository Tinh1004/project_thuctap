import Sidebar from '../../components/sidebar/index';
import NavBar from '../../components/navbar/index';
import Footer from '../../components/footer/index';

export default function AppDefault({ children }) {
    return (
        <div>
            <div className="bg"></div>
            <Sidebar />
            <NavBar />
            {children}
            <div style={{height: '70px'}}></div>
            <Footer />
        </div>
    )
}