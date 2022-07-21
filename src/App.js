import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/profile_page/ProfilePage";
import SearchPage from "./pages/search_page/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Datapage2 from "./components/category/page2/Datapage2";
import ForgotPassword from "./pages/ForgotPassword";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDatas } from "./redux/dataSlice/dataSlice";
import { useEffect } from "react";
import { dataSelector, searchTextSelector, arraySearchSong } from "./redux/selectors";

function App() {

  const data = useSelector(dataSelector);
  const search = useSelector(searchTextSelector);

  console.log(data)
  console.log(search)


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDatas())
  }, [])
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/ca-nhan/*" element={<ProfilePage />} />
      <Route path="/the-loai" element={<CategoryPage />} />
      <Route path="/page2" element={<Datapage2 />} />
      <Route path="search/:search/*" element={<SearchPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="/forgot" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
