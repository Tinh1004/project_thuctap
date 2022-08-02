import React from "react";
import "./styles.scss";
import SongItem from "./song_item/SongItem";
import NewRelease from "./release/NewRelease";
import SongSlide from "./slide/SongSlide";
import Artists from "./artists/artists";
import Albums from "./album/albums";

export default function Content() {
  return (
    <div className="contentContainer">
      <div className="songSlide">
          <SongSlide/>
      </div>
      <div className="newRelease">
        <NewRelease/>
      </div>
      <div className="popularSong">
        <SongItem/>
      </div>
      <div className="popularAlbum">
        <Albums/>
      </div>
      <div className="popularArtists">
        <Artists/>
      </div>
    </div>
  );
}
