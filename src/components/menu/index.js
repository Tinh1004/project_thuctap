import MenuTitle from "./menu_title/MenuTitle.tsx";

// import { Tab } from "@mui/material";
// import TabAndContentCustom from "../../commons/TabAndContentCustom.tsx";
// import Album from "./album/Album";
// import MvComponent from "./mv/MvComponent";
// import Podcast from "./podcast/Podcast";
// import SongComponent from "./songs/SongComponent";

export default function MenuProfile() {
  return (
    <div class="bottom_section">
      <MenuTitle />
      {/* <TabAndContentCustom
        firstTab={
          <Tab
            sx={{
              color: "#000",
              fontWeight: 400,
              fontSize: 16,
              "&:hover": {
                color: "#6b3483",
              },
            }}
            label="Bài hát"
          />
        }
        secondTab={
          <Tab
            sx={{
              color: "#000",
              fontWeight: 400,
              fontSize: 16,
              "&:hover": {
                color: "#6b3483",
              },
            }}
            label="Podcast"
          />
        }
        thirdTab={
          <Tab
            sx={{
              color: "#000",
              fontWeight: 400,
              fontSize: 16,
              "&:hover": {
                color: "#6b3483",
              },
            }}
            label="Album"
          />
        }
        fourthTab={
          <Tab
            sx={{
              color: "#000",
              fontWeight: 400,
              fontSize: 16,
              "&:hover": {
                color: "#6b3483",
              },
            }}
            label="mv"
          />
        }
        firstContent={<SongComponent />}
        secondContent={<Podcast />}
        thirdContent={<Album />}
        fourthContent={<MvComponent />}
      /> */}
    </div>
  );
}
