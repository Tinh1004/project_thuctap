import './App.css';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Routes, Route, Link } from 'react-router-dom';
// import ReactFacebookLogin from 'react-facebook-login';

function App() {

  return (
    <Routes>
      <Route path='*' element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/ca-nhan" element={<ProfilePage />} />
      <Route path="/the-loai" element={<CategoryPage />} />

      <Route path="/search" element={<SearchPage />}>
        <Route path=":search" element={<SearchPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage/>} />
      
    </Routes>
   
  );
}

export default App;
