import React from 'react'
import './styles.scss'
import image1 from '../../../assets/img/image1.jpg'
export default function MasterPlay() {
  const img = image1
  return (
    <div className='masterPlayContainer'>
      <div className="wave">
        <div className="wave1"></div>
        <div className="wave1"></div>
        <div className="wave1"></div>
        <div className="wave1"></div>
      </div>
      <img className='image' src={img} alt="image1" />
      <h5>BBOY A Sẩy
        <br/>
        <div className='subtitle'>Xam ft AK49</div>
      </h5>
      <div className='icon'>
        <i className="fas fa-step-backward" />
        <i className="fas fa-play" />
        <i className="fas fa-stop" />
        <i className="fas fa-step-forward" />
      </div>
      <span id = "currentStart">0:00</span>
      <div className="bar">
          <input className='musicRange' type="range" id="seek" min='0' value='0' max='100'/>
          <div className="bar2" id="bar2"></div>
          <div className="dot"></div>
      </div>
      <span id="currentEnd">0:00</span>
      <div className="vol">
        <i className="fas fa-volume-down" />
        <input className='volumeRange' type="range" id="vol" min='0' value='30' max='100'/>
        <div className="volBar"></div>
        <div className="volDot"></div>
      </div>
    </div>
  )
}
