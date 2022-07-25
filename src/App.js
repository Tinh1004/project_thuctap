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
import { useDispatch, useSelector } from 'react-redux';
import { fetchDatas } from "./redux/dataSlice/dataSlice";
import { useEffect } from "react";
import { dataSelector, searchTextSelector, arraySearchSong } from "./redux/selectors";
import AppDefault from "./pages/app_default/AppDefault";
// import Datapage2 from "./components/category/page2/Datapage2";
import ChangePassword from "./pages/ChangePassword";
import ForgotPasswordPage from "./pages/ForgotPassword";

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
      <Route path="/*" element={<AppDefault />} />

      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="/forgot" element={<ForgotPasswordPage />} />
      <Route path="/change" element={<ChangePassword />} />

    </Routes>
  );
}

export default App;