import React from "react";
import "./styles.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import createSlice from "../../../redux/dataSlice/dataSlice";
import { songSelector} from "../../../redux/selectors";
export default function Playing() {
  const song = useSelector(songSelector);
  // const idSong = useSelector(idSongSelector)
  
  const dispatch = useDispatch();
  
  const handleClickNext = () => {
    dispatch(createSlice.actions.audioPlayerNextSong(song.id + 1))
    // console.log(songId);
  };

  const handleClickPre = () => {
    dispatch(createSlice.actions.audioPlayerPreSong(song.id - 1))
    // setSongId(songId - 1)
  };

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
