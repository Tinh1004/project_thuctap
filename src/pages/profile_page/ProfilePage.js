import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import AppDefault from "../app_default/AppDefault";
import ProfileContent from "./ProfileContent";
import LibraryPlaylist from "../../components/playlist/library_playlist/LibraryPlaylist";
import DetailPlaylist from "../../components/playlist/detail_playlist/DetailPlaylist";
import { useSelector } from "react-redux";
import { dataSelector } from "../../redux/selectors";

export default function ProfilePage(props) {
  const totalData = useSelector(dataSelector);
  const arrayData = [...totalData].splice(0, 7);

  const [duration, setDuration] = useState(0);
  console.log(duration);

  const getVal = (audio) => {
    var val = audio.duration;
    setDuration(val);
  };
  const convertDuration = (url) => {
    return `${Math.round(duration / 60)}:${
      Math.floor(duration % 60) >= 10
        ? Math.floor(duration % 60)
        : `0${Math.floor(duration % 60)}`
    }`;
  };

  useEffect(() => {
    var audio = new Audio();
    audio.src = arrayData.url;
    audio.addEventListener("durationchange", () => getVal(audio));
    return () => {
      audio.removeEventListener("durationchange", () => getVal(audio));
    };
  }, []);

  return (
    <section className="home">
      <Routes>
        <Route path="/*" element={<ProfileContent arrayData={arrayData} />} />
        <Route
          path="/library"
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
