import "./App.css";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/profile_page/ProfilePage";
import SearchPage from "./pages/search_page/SearchPage";
import SearchSingerPage from "./pages/search_page/SearchSingerPage";
import SearchSongPage from "./pages/search_page/SearchSongPage";
import NotFoundPage from "./pages/NotFoundPage";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Datapage2 from "./components/category/page2/Datapage2";
import SongComponent from "./components/menu/songs/SongComponent";
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
      <Route path="/search">
        <Route index element={<HomePage />} />
        <Route path=":content/*" element={<NotFoundPage />} />
        <Route path="tat-ca/:search" element={<SearchPage />} />
        <Route path="ca-si/:search" element={<SearchSingerPage />} />
        <Route path="bai-hat/:search" element={<SearchSongPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
