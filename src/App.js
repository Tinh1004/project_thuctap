import "./App.css";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/profile_page/ProfilePage";
import SearchPage from "./pages/search_page/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Datapage2 from "./components/category/page2/Datapage2";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/ca-nhan/*" element={<ProfilePage />} />
      <Route path="/the-loai" element={<CategoryPage />} />
      <Route path="/page2" element={<Datapage2 />} />

      <Route path="search/:search/*" element={<SearchPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/forgot" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
