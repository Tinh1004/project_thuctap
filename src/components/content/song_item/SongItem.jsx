import React from 'react'
import {songs} from './CardSongItem/data'
import './styles.scss'
import { Link } from "react-router-dom";
import CardSongItem from './CardSongItem/CardSongItem';

export default function SongItem() {
  return (
    <div className='songItemContainer'>
        <div className="songItem">
          <h4>Popular Song</h4>
          <div className="btn_s"> 
            <label className="btn">
              <Link to="/list-popular-song">
                <div className='btn'>
                  Tất cả <i className="fas fa-chevron-right" />
                </div>
              </Link></label>
          </div>
        </div>

        <div className="cardSongItem">
            {songs.map((item) =>(
              <CardSongItem key = {item.id} img = {item.img} alt = {item.alt} name = {item.name} subtitle = {item.subtitle}/>
            ))}
        </div>
    </div>
  )
}
