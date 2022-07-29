import "./App.css";
// import HomePage from "./pages/HomePage/HomePage";
// import ProfilePage from "./pages/profile_page/ProfilePage";
// import SearchPage from "./pages/search_page/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
// import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
// import Datapage2 from "./components/category/page2/Datapage2";
import { useDispatch, useSelector } from "react-redux";
import { fetchDatas, fetchPlayLists } from "./redux/dataSlice/dataSlice";
import userSlice, { fetchDataUser } from "./redux/userSlice/userSlice";
import { useEffect } from "react";
import FormPlaylist from "./pages/FormPlaylist";
import {
  dataSelector,
  playListsSelector,
  arrayPlayLists,
} from "./redux/selectors";
import AppDefault from "./pages/app_default/AppDefault";
// import Datapage2 from "./components/category/page2/Datapage2";
import ChangePassword from "./pages/ChangePassword";
import ForgotPasswordPage from "./pages/ForgotPassword";
import { ToastContainer, Bounce } from "react-toastify";

import axios from 'axios';

function App() {
  // const data = useSelector(dataSelector);
  const playlist = useSelector(arrayPlayLists);
  // const myPlayList = useSelector(myPlayListsSelector);

  console.log(playlist);
  // console.log("playlist: ", playlist)

  // const getApi = async () => {
  //   const url = "https://api-project-thuctap.herokuapp.com/api/v1/auth";
  //   return axios.get(url)
  //     .then((response) => console.log(response.data));
  // }

  const dispatch = useDispatch();
  useEffect(() => {
    // localStorage.setItem("user", JSON.stringify({ name: "Long" }))
    dispatch(fetchDatas());
    dispatch(fetchPlayLists());
    dispatch(fetchDataUser());
  }, []);

  return (
    <>
      <ToastContainer transition={Bounce} />
      <Routes>
        <Route path="/*" element={<AppDefault />} />

        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/change" element={<ChangePassword />} />
      </Routes>
    </>
  );
}

export default App;
