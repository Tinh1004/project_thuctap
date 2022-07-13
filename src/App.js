import './App.css';
import Sidebar from './components/sidebar/index';
import NavBar from './components/navbar/index';
import Footer from './components/footer/index';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';

import {Routes, Route, Link} from 'react-router-dom';

function App() {
  
  return (
    <div>
      <div className="bg"></div>
      <Sidebar/>
      <NavBar/>
      <Routes>
        <Route path='*' element={<NotFoundPage />} />
        <Route path="/" element={<HomePage/>}/>
        <Route path="/ca-nhan" element={<ProfilePage/>}/>
        <Route path="/the-loai" element={<CategoryPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
