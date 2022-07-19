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
import LibraryPlaylistPage from "./pages/profile_page/LibraryPlaylistPage";
import DetailPlaylist from "./components/playlist/detail_playlist/DetailPlaylist";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/ca-nhan">
        <Route index element={<ProfilePage />} />
        <Route path="library" element={<LibraryPlaylistPage />} />
        <Route path="detail" element={<DetailPlaylist />} />
      </Route>
      <Route path="/the-loai" element={<CategoryPage />} />
      <Route path="/page2" element={<Datapage2 />} />

      <Route path="search/:search/*" element={<SearchPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
