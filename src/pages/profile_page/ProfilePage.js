import AppDefault from "../app_default/AppDefault";
import PlayList from "../../components/playlist/index";
import MenuProfile from "../../components/menu/index";
import { Route, Routes } from "react-router-dom";
import SongComponent from "../../components/menu/songs/SongComponent";

export default function ProfilePage(props) {
  return (
    <AppDefault>
      <section className="home">
        <PlayList />
        <MenuProfile />
      </section>
    </AppDefault>
  );
}
