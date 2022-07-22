import React, { useContext, useState } from "react";
import "./styles.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import createSlice from "../../../redux/dataSlice/dataSlice";
import { idSongSelector, songSelector} from "../../../redux/selectors";
export default function Playing() {
  const song = useSelector(songSelector);
  const idSong = useSelector(idSongSelector)
  const [idAudio, setIdAudio] = useState(idSong[0])
  
  const dispatch = useDispatch();
  
  const handleClickNext = (id) => {
    dispatch(createSlice.actions.audioPlayerNextSong(id))
    setIdAudio(idAudio + 1)
  };

  // const handleClickPre = () => {
  //   handleSetSong(song.id - 1);
  // };

  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false} 
        onClickNext={handleClickNext}
        // onClickPrevious={handleClickPre}
      />

    </div>
  );
}
