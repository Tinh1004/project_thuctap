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
import { useEffect, useLayoutEffect } from "react";
import FormPlaylist from "./pages/FormPlaylist";
import {
  dataSelector,
  playListsSelector,
  arrayPlayLists,
  userDataSelector,
} from "./redux/selectors";
import AppDefault from "./pages/app_default/AppDefault";
// import Datapage2 from "./components/category/page2/Datapage2";
import ChangePasswordPage from "./pages/ChangePassword";
import ForgotPasswordPage from "./pages/ForgotPassword";
import { ToastContainer, Bounce } from "react-toastify";

function App() {
  const playlist = useSelector(arrayPlayLists);
  const user = useSelector(userDataSelector);

  const dispatch = useDispatch();

  useEffect(() => {
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
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />

        <Route path="/change" element={<ChangePasswordPage />} />
      </Routes>
    </>
  );
}

export default App;
