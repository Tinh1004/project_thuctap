import React, { useState } from "react";
import './styles.scss'
import { useDispatch } from "react-redux";
import createSlice from '../../../../redux/dataSlice/dataSlice'
export default function CardSongItem(props) {
  const [playerAudio, setPlayerAudio] = useState(props.id)
  const dispatch = useDispatch()
  const handleChangeAudio = () => {
    dispatch(createSlice.actions.audioChangeSong(playerAudio))
    setPlayerAudio(playerAudio)
  }
  return (
      <li className="cardSong" >
        <div className="img_play">
          <img className="img" src={props.img} alt={props.alt} />
          <i className="far fa-play-circle" onClick={handleChangeAudio} />
        </div>
        <h5 className='info' onClick={handleChangeAudio}>
          {props.name}
        </h5>
        <div className="subtitle">{props.author}</div>
      </li>
  );
}
