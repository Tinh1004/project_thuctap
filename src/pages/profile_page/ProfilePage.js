import { Route, Routes } from "react-router-dom";

import AppDefault from "../app_default/AppDefault";
import ProfileContent from "./ProfileContent";
import LibraryPlaylist from "../../components/playlist/library_playlist/LibraryPlaylist";
import DetailPlaylist from "../../components/playlist/detail_playlist/DetailPlaylist";

export default function ProfilePage(props) {
  return (
    <section className="home">
      <Routes>
        <Route path="/*" element={<ProfileContent />} />
        <Route path="/library" element={<LibraryPlaylist />} />
        <Route path="/detail" element={<DetailPlaylist />} />
      </Routes>
    </section>
  );
}
