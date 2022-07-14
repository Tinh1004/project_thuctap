import './App.css';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';
import {Routes, Route} from 'react-router-dom'; 


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
    </Routes>

  );
}

export default App;
