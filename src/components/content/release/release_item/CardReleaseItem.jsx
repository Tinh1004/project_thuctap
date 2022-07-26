import React from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import createSlice from '../../../../redux/dataSlice/dataSlice'

export default function ReleaseItem(props) {
  const dispatch = useDispatch()

  const handleChangeAudio = () => {
    dispatch(createSlice.actions.audioChangeSong(props.id))
  }
  return (
    <div className='releaseItemContainer' onClick={handleChangeAudio}>
        <img className='image' src={props.img} alt={props.alt} />
        <i className="far fa-play-circle" />
        <h6 className='name'>{props.name}
            <br/>
            <p className='subtitle'>{props.author}</p>
        </h6>
        <i className="fas fa-align-justify" />
    </div>
  )
}
