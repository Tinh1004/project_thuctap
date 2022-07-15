import React from 'react';
import './styles.scss';
import image1 from '../../../assets/img/image1.jpg';
import { useState } from 'react';
import { useRef } from 'react';
import audio6 from '../../../assets/audio/audio6.mp3';
// import { music } from '../../content/data'

export default function MasterPlay() {
  const img = image1  
  const audioPlayer =useRef();

  const [currentTime,setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const [player, setPlayer] = useState(false)

  // let masterPlayer = document.getElementById('masterPlayer')
  // const handlePlayer = () => {
  //   if (music.paused || music.currentTime <=0) {
  //     music.play();
  //     masterPlayer.classList.remove("fas fa-play");
  //     masterPlayer.classList.add("fas fa-pause")
  //   }
  //   else{
  //     music.pause();
  //     masterPlayer.classList.add("fas fa-play")
  //     masterPlayer.classList.remove("fas fa-pause");
  //   }
  // }
  // const handlePlayer = () => {
  //   { player ?  audioPlayer.current.play() : audioPlayer.current.pause()} ;
  //   setPlayer(!player)
  // }
  const play = () => {
    audioPlayer.current.play();
  };
  // const pause = () => {
  //   audioPlayer.current.pause()
  // };
  const stop = () =>{
    audioPlayer.current.pause();
    audioPlayer.current.currentTime=0;
  };
  const setSpeed = (speed) =>{
    audioPlayer.current.playbackRate = speed;
  };
  const onPlaying = () => {
    setCurrentTime(audioPlayer.current.currentTime);
    setSeekValue(
      (audioPlayer.current.currentTime / audioPlayer.current.duration)
    );
  };
  const handleSeekValue = (e) => {
    const seekto = audioPlayer.current.duration * (+e.target.value / 100);
    audioPlayer.current.currentTime = seekto;
    setSeekValue(e.target.value);
  }

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
      <audio src={audio6}ref={audioPlayer} onTimeUpdate={onPlaying}> <code>audio</code> element.</audio>
      {/* <p>{currentTime}</p> */}
      <div className='icon'>
        <i className="fas fa-step-backward" id='back'/>
        <i className="fas fa-play" id='masterPlayer' onClick={play} />
        <i className="fas fa-stop" onClick= {stop}/> 
        <i className="fas fa-step-forward" id='next'/>

      </div>
      <span id = "currentStart">0:0{Math. round(currentTime)}</span>
      <div className="bar">
          <input className='musicRange' type="range" id="seek" min='0' max='100' step= '1' value ={seekValue} onChange={handleSeekValue}/>
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
      <div className="speed">
        <button onClick={() => setSpeed(0.5)}>0.5x</button>
        <button onClick={() => setSpeed(1)}>1x</button>
        <button onClick={() => setSpeed(1.5)}>1.5x</button>
     </div>
    </div>
  )
}
