import React from 'react'
import ListPopularSongItem from '../../components/content/ListPopularSongItem/ListPopularSongItem'

import AppDefault from '../app_default/AppDefault'

export default function ListPopularSong() {
  return (
    <AppDefault>
      <section className="home">
        <ListPopularSongItem/>    
      </section>
    </AppDefault>
  )
}
