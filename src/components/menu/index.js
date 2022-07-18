import Album from "./album/Album";
import "./Menu.scss";
import MenuTitle from "./menu_title/MenuTitle";
import MvComponent from "./mv/MvComponent";
import Podcast from "./podcast/Podcast";
import SongComponent from "./songs/SongComponent";

export default function MenuProfile() {
  return (
    <div class="bottom_section">
      <MenuTitle />
      <SongComponent />
      {/* <Podcast />
      <Album />
      <MvComponent /> */}
    </div>
  );
}
