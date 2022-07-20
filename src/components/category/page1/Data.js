import React from 'react'
import Songfirt from './song1/Song1';
import Song01 from '../../../assets/img/Song1.jpg'
import Song02 from '../../../assets/img/Song2.jpg'
import Song03 from '../../../assets/img/Song3.jpg'
import Song04 from '../../../assets/img/Song4.jpg'
import VN from '../../../assets/img/VN.jpg'
import AM from '../../../assets/img/AuMy.jpg'
import HQ from '../../../assets/img/HQ.jpg'
import TQ from '../../../assets/img/TQ.jpg'
import hinhnho1 from '../../../assets/img/hinhnho1.jpg'
import './data.css';
import Song2 from './song2/Song2';
import Song3 from './song3/Song3';
import tt1 from '../../../assets/img/tt1.jpg'
import tt2 from '../../../assets/img/tt2.jpg'
import tt3 from '../../../assets/img/tt3.jpg'
import tt4 from '../../../assets/img/tt4.jpg'
import tt5 from '../../../assets/img/tt5.jpg'
import { Link } from 'react-router-dom';
export default function Data() {
  return (
    <div className='box'>
        <img className='banner' src="https://photo-zmp3.zmdcdn.me/cover/f/d/1/5/fd1597b58c06b161a37a7d1fb77176c1.jpg" alt="" />
        <div className='tl1'>
            <p className='chude'>Tâm Trạng Và Hoạt Động</p>
            <div className='ds1'>
                <Link to ="/page2"><Songfirt imgto={Song01} alt='img1' name='KHÚC NHẠC VUI' imgnho={hinhnho1}></Songfirt></Link>
                <Songfirt imgto={Song02} alt='img1' name='GAME' imgnho={hinhnho1}></Songfirt>
                <Songfirt imgto={Song03} alt='img1' name='WORKING' imgnho={hinhnho1}></Songfirt>
                <Songfirt imgto={Song04} alt='img1' name='RELAX' imgnho={hinhnho1}></Songfirt>
            </div>
        </div>
        <div className='tl2'>
            <p className='chude'>Quốc Gia</p>
            <div className='ds2'>
                <Song2 img2={VN} name="Viet Nam"></Song2>
                <Song2 img2={AM} name="Âu Mỹ"></Song2>
                <Song2 img2={HQ} name="Hàn Quốc"></Song2>
                <Song2 img2={TQ} name="Trung Quốc"></Song2>
            </div>
        </div>
        <div className='tl3'>
            <p className='chude'> Nhạc Bolero</p>
            <div className="ds3">
                <Song3 img3={tt1} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
                <Song3 img3={tt2} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
                <Song3 img3={tt3} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
                <Song3 img3={tt4} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
                <Song3 img3={tt5} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
            </div>
        </div>
        <div className='tl3'>
            <p className='chude'> Nhạc Bolero</p>
            <div className="ds3">
                <Song3 img3={tt1} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
                <Song3 img3={tt1} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
                <Song3 img3={tt1} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
                <Song3 img3={tt1} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
                <Song3 img3={tt1} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
            </div>
        </div>
    </div>
  )
}