import React from 'react'
import CardPopularArtist from './card_popular_artist/CardPopularArtist'
import './styles.scss'
export default function ListPopularArtistItem() {
  return (
    <div className='listPopularArtistContainer'>
        <h1>Nghệ sĩ nổi bật</h1>
        <div className="cardPopularArtist">
            <CardPopularArtist/>
            <CardPopularArtist/>
            <CardPopularArtist/>
            <CardPopularArtist/>
            <CardPopularArtist/>
            <CardPopularArtist/>
            <CardPopularArtist/>
            <CardPopularArtist/>
        </div>
    </div>
  )
}
