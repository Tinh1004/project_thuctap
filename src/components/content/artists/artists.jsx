import React from 'react'
import { Link } from "react-router-dom";
import './styles.scss'
import { arraySinger } from '../../../redux/selectors'
import CardArtist from './CardArtist/CardArtist';
import { useSelector } from 'react-redux';
export default function Artists() {
  const array = useSelector (arraySinger)
  return (
    <div className='artistsContainer'>
        <div className="artist">
          <h4>Nghệ Sĩ Nổi Bật</h4>
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
          {
            array.slice(0,6).map((item) => (
              <CardArtist img = {item.links.images[0].url} author = {item.author}/>
            ))
          }
        </div>
    </div>
  )
}
