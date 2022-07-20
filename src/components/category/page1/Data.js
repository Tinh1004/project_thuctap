import React, { useContext } from 'react'
import Songfirt from './nhactheochude/Song1';
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
import Song2 from './nhactheoquocgia/Song2';
import Song3 from './nhacbolero/Song3';
import tt1 from '../../../assets/img/tt1.jpg'
import tt2 from '../../../assets/img/tt2.jpg'
import tt3 from '../../../assets/img/tt3.jpg'
import tt4 from '../../../assets/img/tt4.jpg'
import tt5 from '../../../assets/img/tt5.jpg'
import { Link } from 'react-router-dom';
import { song1page } from './datacategory';
import { song2page } from './datacategory';
import { song3page } from './datacategory';
import cfto from '../../../assets/img/cfto.jpg'
import cfnho1 from '../../../assets/img/cfnho1.jpg'
import cfnho2 from '../../../assets/img/cfnho2.jpg'
import cfnho3 from '../../../assets/img/cfnho3.jpg'
import g1 from '../../../assets/img/game1.jpg'
import g2 from '../../../assets/img/game2.jpg'
import g3 from '../../../assets/img/game3.jpg'
import r1 from '../../../assets/img/running1.jpg'
import r2 from '../../../assets/img/running3.jpg'
import r3 from '../../../assets/img/running3.jpg'
import w1 from '../../../assets/img/w1.jpg'
import w2 from '../../../assets/img/w2.jpg'
import w3 from '../../../assets/img/w3.jpg'
export default function Data() {
  return (
    <div className='box'>
        <img className='banner' src="https://photo-zmp3.zmdcdn.me/cover/f/d/1/5/fd1597b58c06b161a37a7d1fb77176c1.jpg" alt="" />
        <div className='tl1'>
            <p className='chude'>Tâm Trạng Và Hoạt Động</p>
            <div className='ds1'>
                {/* {song1page.map((item)=>(
                    <Songfirt key={item.id} imgto={item.imgto} name={item.name} imgnho={item.imgnho}></Songfirt>
                    // <Link key={item.id} to={`/theloai/${id}`}><Songfirt key={item.id} imgto={item.imgto} name={item.name} imgnho={item.imgnho}></Songfirt></Link>
                ))} */}
                <Link to ="/page2"><Songfirt imgto={cfto} name='COFFEE' imgnho1={cfnho1} imgnho2={cfnho2} imgnho3={cfnho3}></Songfirt></Link>
                <Songfirt imgto={Song02} name='GAME' imgnho1={g1} imgnho2={g2} imgnho3={g3}></Songfirt>
                <Songfirt imgto={Song03} name='RUNNING' imgnho1={r1} imgnho2={r2} imgnho3={r3}></Songfirt>
                <Songfirt imgto={Song04} name='RELAX' imgnho1={w1} imgnho2={w2} imgnho3={w3}></Songfirt>
            </div>
        </div>
        <div className='tl2'>
            <p className='chude'>Quốc Gia</p>
            <div className='ds2'>
                {song2page.map((item)=>(
                    <Song2 key={item.id} img2={item.img2} name={item.name}></Song2>
                ))}
                {/* <Song2 img2={VN} name="Việt Nam"></Song2>
                <Song2 img2={AM} name="Âu Mỹ"></Song2>
                <Song2 img2={HQ} name="Hàn Quốc"></Song2>
                <Song2 img2={TQ} name="Trung Quốc"></Song2> */}
            </div>
        </div>
        <div className='tl3'>
            <p className='chude'> Nhạc Bolero</p>
            <div className="ds3">
                {song3page.map((item)=>(
                    <Song3 key={item.id} img3={item.img3} tenbh={item.tenbh} casi={item.casi}></Song3>
                ))}
                {/* <Song3 img3={tt1} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
                <Song3 img3={tt2} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
                <Song3 img3={tt3} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
                <Song3 img3={tt4} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
                <Song3 img3={tt5} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3> */}
            </div>
        </div>
        <div className='tl3'>
            <p className='chude'> Nhạc Bolero</p>
            <div className="ds3">
                {song3page.map((item)=>(
                        <Song3 key={item.id} img3={item.img3} tenbh={item.tenbh} casi={item.casi}></Song3>
                    ))}
                {/* <Song3 img3={tt1} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
                <Song3 img3={tt2} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
                <Song3 img3={tt3} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
                <Song3 img3={tt4} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3>
                <Song3 img3={tt5} tenbh='Miền Trung Ngàn Năm Biển Đợi' casi='Che Linh, Son Tuyen...'></Song3> */}
            </div>
        </div>
    </div>
  )
}