import React from 'react'
import Ctpage2 from './chitetpage3/Ctpage3'
import './datapage3.css'
import h1 from '../../../assets/img/p2h1.jpg'
import h2 from '../../../assets/img/p2h2.jpg'
import h3 from '../../../assets/img/p2h3.jpg'
import h4 from '../../../assets/img/p2h4.jpg'
import h5 from '../../../assets/img/p2h5.jpg'
import Sidebar from '../../sidebar'
import Footer from '../../footer'
import NavBar from '../../navbar'
import { songpage2 } from './data'
export default function Datapage2() {
  return (
    <>
      <div>
        <div className="bg"></div>
        <Sidebar />
        <NavBar />
        <section className="home">
          <div className='box2'>
            <div className='hinhto'>
              <img id='banner' src="https://photo-zmp3.zmdcdn.me/cover/d/f/b/2/dfb2357709d81574da689144f0348c78.jpg"></img>
              <span className='gradien'></span>
            </div>
            <div className='listtl'>
              {songpage2.map((item) => (
                <Ctpage2 key={item.id} imgp2={item.imgp2} tenbh={item.tenbh} casi={item.casi}></Ctpage2>
              ))}
              {/* <Ctpage2 imgp2={h1} tenbh='Your Favorite CoffeeHouse' casi='Emilee, Surf Mesa....'></Ctpage2>
                  <Ctpage2 imgp2={h2} tenbh='Your Favorite CoffeeHouse' casi='Emilee, Surf Mesa....'></Ctpage2>
                  <Ctpage2 imgp2={h3} tenbh='Your Favorite CoffeeHouse' casi='Emilee, Surf Mesa....'></Ctpage2>
                  <Ctpage2 imgp2={h4} tenbh='Your Favorite CoffeeHouse' casi='Emilee, Surf Mesa....'></Ctpage2>
                  <Ctpage2 imgp2={h5} tenbh='Your Favorite CoffeeHouse' casi='Emilee, Surf Mesa....'></Ctpage2> */}
            </div>
            <div className='listtl'>
              {songpage2.map((item) => (
                <Ctpage2 key={item.id} imgp2={item.imgp2} tenbh={item.tenbh} casi={item.casi}></Ctpage2>
              ))}
              {/* <Ctpage2 imgp2={h1} tenbh='Your Favorite CoffeeHouse' casi='Emilee, Surf Mesa....'></Ctpage2>
                  <Ctpage2 imgp2={h2} tenbh='Your Favorite CoffeeHouse' casi='Emilee, Surf Mesa....'></Ctpage2>
                  <Ctpage2 imgp2={h3} tenbh='Your Favorite CoffeeHouse' casi='Emilee, Surf Mesa....'></Ctpage2>
                  <Ctpage2 imgp2={h4} tenbh='Your Favorite CoffeeHouse' casi='Emilee, Surf Mesa....'></Ctpage2>
                  <Ctpage2 imgp2={h5} tenbh='Your Favorite CoffeeHouse' casi='Emilee, Surf Mesa....'></Ctpage2> */}
            </div>
            <div className='listtl'>
              {songpage2.map((item) => (
                <Ctpage2 key={item.id} imgp2={item.imgp2} tenbh={item.tenbh} casi={item.casi}></Ctpage2>
              ))}
              {/* <Ctpage2 imgp2={h1} tenbh='Your Favorite CoffeeHouse' casi='Emilee, Surf Mesa....'></Ctpage2>
                  <Ctpage2 imgp2={h2} tenbh='Your Favorite CoffeeHouse' casi='Emilee, Surf Mesa....'></Ctpage2>
                  <Ctpage2 imgp2={h3} tenbh='Your Favorite CoffeeHouse' casi='Emilee, Surf Mesa....'></Ctpage2>
                  <Ctpage2 imgp2={h4} tenbh='Your Favorite CoffeeHouse' casi='Emilee, Surf Mesa....'></Ctpage2>
                  <Ctpage2 imgp2={h5} tenbh='Your Favorite CoffeeHouse' casi='Emilee, Surf Mesa....'></Ctpage2> */}
            </div>
          </div>
        </section>
        <Footer />

      </div>
    </>
  )
}
