import React from 'react'
import image11 from '../../../assets/img/image11.png'
import { Link } from "react-router-dom";
import './styles.scss'
import CardArtist from './CardArtist/CardArtist';
export default function Artists() {
  return (
    <div className='artistsContainer'>
        <div className="artist">
          <h4>Popular Artists</h4>
          <div className="btn_s"> 
            <label className="btn">
              <Link to = '/list-popular-artist'>
                <div className='btn'>
                  Tất cả <i className="fas fa-chevron-right"/>
                </div>
              </Link>
            </label>
          </div>
        </div>  
        <div className="cardArtists">
          <CardArtist img={image11} alt='Singer' name='Space Speaker'/>
          <CardArtist img={image11} alt='Singer' name='Space Speaker'/>
          <CardArtist img={image11} alt='Singer' name='Space Speaker'/>
          <CardArtist img={image11} alt='Singer' name='Space Speaker'/>
          <CardArtist img={image11} alt='Singer' name='Space Speaker'/>
          <CardArtist img={image11} alt='Singer' name='Space Speaker'/>
        </div>
    </div>
  )
}
