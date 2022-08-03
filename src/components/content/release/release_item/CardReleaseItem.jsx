import React, { useEffect, useState } from 'react';
import './styles.scss';
import dataSlice from '../../../../redux/dataSlice/dataSlice';
import {useDispatch} from 'react-redux';

export default function ReleaseItem(props) {

  const [duration, setDuration] = useState(0)
  const dispatch = useDispatch()

  const handleChangeAudio = () => {
    dispatch(dataSlice.actions.audioChangeSong(props.id))
  }
  const getVal = (audio) => {
    var val = audio.duration;
    setDuration(val);
  };
  const convertDuration = () => {
    return `${Math.round(duration / 60)}:${
      Math.floor(duration % 60) >= 10
        ? Math.floor(duration % 60)
        : `0${Math.floor(duration % 60)}`
    }`;
  };

  useEffect(() => {
    var audio = new Audio();
    audio.src = props.url;
    audio.addEventListener("durationchange", () => getVal(audio));
    return () => {
      audio.removeEventListener("durationchange", () => getVal(audio));
    };
  }, []);
  return (
    <div className='releaseItemContainer' onClick={handleChangeAudio}>
        <img className='image' src={props.img} alt={props.alt} />
        <i className="far fa-play-circle" />
        <h6 className='name'>{props.name}
            <br/>
            <p className='subtitle'>{props.author}</p>
        </h6>
        <p className='fas'>{convertDuration(props.url)}</p>
    </div>
  )
}
