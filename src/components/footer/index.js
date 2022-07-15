// import MasterPlay from "./masterPlayer/masterPlayer";
import React, { useState } from 'react';
import { Songs } from './context';
import Audioplayer from './AudioPlayer/audioplayer';
import DataSongs from "./data/songs.json";

export default function Footer(props) { 
  const [song, setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) 
           setSong(DataSongs[0])
    else
           setSong(song)
  }

    return (
        <div className="audio">
            <Songs.Provider value = {{DataSongs, song, handleSetSong }}>
                <Audioplayer/>
            </Songs.Provider>
        </div>
    )
}