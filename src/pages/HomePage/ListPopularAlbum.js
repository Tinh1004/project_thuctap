import React from 'react'
import ListPopularAlbumItem from '../../components/content/ListPopularSongItem/ListPopularAlbumItem'


import AppDefault from '../app_default/AppDefault'

export default function ListPopularAlbum() {
  return (
    <AppDefault>
      <section className="home">
        <ListPopularAlbumItem/>    
      </section>
    </AppDefault>
  )
}
