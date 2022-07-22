import { Route, Routes } from "react-router-dom";

// import AppDefault from "../app_default/AppDefault";
import LibraryPlaylistPage from "./LibraryPlaylistPage";
import DetailPlaylistPage from "./DetailPlaylistPage";
import ProfileContent from "./ProfileContent";
// import SongComponent from "../../components/menu/songs/SongComponent";
// import Podcast from "../../components/menu/podcast/Podcast";
// import Album from "../../components/menu/album/Album";
// import MvComponent from "../../components/menu/mv/MvComponent";

export default function ProfilePage(props) {
  return (
    <section className="home">
      <Routes>
        <Route path="/*" element={<ProfileContent />} />
        <Route path="/library" element={<LibraryPlaylistPage />} />
        <Route path="/detail" element={<DetailPlaylistPage />} />
      </Routes>
    </section>
  );
}
