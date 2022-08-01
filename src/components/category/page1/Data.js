import React from 'react'
import Songfirt from './nhactheochude/Song1';
import './data.css';
import Song2 from './nhactheoquocgia/Song2';
import Song3 from './listmusic/Song3';
import { song1page } from './datacategory';
import { song2page } from './datacategory';
import { song3page } from './datacategory';
import { song4page } from './datacategory';

export default function Data() {
  return (
    <div className='box'>
        <img className='banner' src="https://photo-zmp3.zmdcdn.me/cover/f/d/1/5/fd1597b58c06b161a37a7d1fb77176c1.jpg" alt="" />
        <div className='tl1'>
            <p className='chude'>Tâm Trạng Và Hoạt Động</p>
            <div className='ds1'>
                {song1page.map((item)=>(
                    <Songfirt key={item.id} title={item.title} imgto={item.imgto} name={item.name} imgnho1={item.imgnho1} imgnho2={item.imgnho2} imgnho3={item.imgnho3}></Songfirt>
                ))}
                
            </div>
        </div>
        <div className='tl2'>
            <p className='chude'>Quốc Gia</p>
            <div className='ds2'>
                {song2page.map((item)=>(
                    <Song2 key={item.id} title={item.title} img2={item.img2} name={item.name}></Song2>
                ))}
                
            </div>
        </div>
        <div className='tl3'>
            <p className='chude'> Nhạc Bolero</p>
            <div className="ds3">
                {song3page.map((item)=>(
                    <Song3 key={item.id} title={item.title} img3={item.img3} tenbh={item.tenbh} casi={item.casi}></Song3>
                ))}
                
            </div>
        </div>
        <div className='tl3'>
            <p className='chude'>Nhạc EDM</p>
            <div className="ds3">
                {song4page.map((item)=>(
                        <Song3 key={item.id} title={item.title} img3={item.img3} tenbh={item.tenbh} casi={item.casi}></Song3>
                    ))}
                
            </div>
        </div>
    </div>
  )
}