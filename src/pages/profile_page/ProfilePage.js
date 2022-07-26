import { Route, Routes } from "react-router-dom";

import ProfileContent from "./ProfileContent";
import LibraryPlaylist from "../../components/playlist/library_playlist/LibraryPlaylist.tsx";
import DetailPlaylist from "../../components/playlist/detail_playlist/DetailPlaylist";
import { useSelector } from "react-redux";
import { dataSelector } from "../../redux/selectors";

export default function ProfilePage(props) {
  const totalData = useSelector(dataSelector);
  const arrayData = [...totalData].splice(0, 7);

  return (
    <section className="home">
      <Routes>
        <Route path="/*" element={<ProfileContent arrayData={arrayData} />} />
        <Route
          path="/library/playlist/*"
          element={<LibraryPlaylist arrayData={arrayData} />}
        />
        <Route
          path="/detail/:id"
          element={<DetailPlaylist arrayData={arrayData} />}
        />
      </Routes>
    </section>
  );
}
