import "./CardSong.scss";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import dataSlice from "../../../../redux/dataSlice/dataSlice";
import AddDropdown from "../../add/AddDropdown"
function CardSong({ item }) {
  const [duration, setDuration] = useState(0);
  console.log(duration);

  const dispatch = useDispatch();

  const handleChangeSong = (id) => {
    dispatch(dataSlice.actions.audioChangeSong(id))
  }

  const getVal = (audio) => {
    var val = audio.duration;
    setDuration(val);

  }
  const convertDuration = (url) => {
    return `${Math.round(duration / 60)}:${Math.floor(duration % 60) >= 10 ? Math.floor(duration % 60) : `0${Math.floor(duration % 60)}`}`;
  }


  useEffect(() => {
    var audio = new Audio();
    audio.src = item.url;
    audio.addEventListener("durationchange", () => getVal(audio));
    return () => {
      audio.removeEventListener("durationchange", () => getVal(audio));
    }

  }, [])

  return (
    <>
      <div class="song_tag">
        <div class="media">
          <div class="media_left">
            <div class="song_prefix">
              <i class="fa-solid fa-music"></i>
            </div>
            <div class="song_thumb" onClick={() => handleChangeSong(item.id)}>
              <figure class="image">
                <img
                  src={item.images[1].url}
                  alt="image playlist"
                />
              </figure>
            </div>
            <div class="card_info" onClick={() => handleChangeSong(item.id)}  >
              <div class="title_wrapper">
                <span class="title">
                  <span>{item.title}</span>
                </span>
              </div>
              <h3 class="subtitle">
                <a href="#" class="is_subtitle">
                  {item.singer}
                </a>
              </h3>
            </div>
          </div>
          <div class="media_content">
            <div class="album_info">
              <span>
                <span>
                  <span> Mặt trời của em</span>
                </span>
              </span>
            </div>
          </div>
          <div class="media_right">
            <div class="hover_items"></div>
            <div class="action_items">
            <div className="time-item">
                <div className="add-item">
                    <AddDropdown idSong={item.id}/>
                </div>
                <span>{convertDuration(item.url)}</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSong;
