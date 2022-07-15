// import React from 'react';
// import AudioPlayer from 'react-h5-audio-player';
// import audio6 from '../../../assets/audio/audio7.mp3';
// import 'react-h5-audio-player/lib/styles.css';

// export default function Audioplayer() {
//   return (
//     <div>
//         <AudioPlayer className='playerContainer' src={audio6}  showSkipControls = {true} showJumpControls = {false} layout = "stacked-reverse"/>
//     </div>
//   )
// }
import React, { useContext } from "react";
import './styles.css'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../context";

export default function Playing() {
    const {song, handleSetSong} = useContext(Songs)
    const handleClickNext = () => {
        handleSetSong(song.id + 1)
    }
    const handleClickPre = () => {
        handleSetSong(song.id - 1)
    }
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
      />
    </div>
  );
}

