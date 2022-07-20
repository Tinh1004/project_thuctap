import React from 'react'
import ListPopularArtistItem from '../../components/content/ListArtists/ListPopularArtist'
import AppDefault from '../app_default/AppDefault'

export default function ListPopularArtists() {
  return (
    <AppDefault>
      <section className="home">
        <ListPopularArtistItem/>    
      </section>
    </AppDefault>
  )
}
