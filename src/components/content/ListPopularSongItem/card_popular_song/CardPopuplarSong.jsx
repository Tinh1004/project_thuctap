import React, { useEffect, useState } from "react";
import "./styles.scss";
import createSlice from "../../../../redux/dataSlice/dataSlice";
import { useDispatch } from "react-redux";
import AddDropdown from "../../../searchpage_content/add/AddDropdown";
export default function CardPopuplarSong(props) {
  const [duration, setDuration] = useState(0);
  const dispatch = useDispatch();

  const handleChangeAudio = () => {
    dispatch(createSlice.actions.audioChangeSong(props.id));
  };
  const getVal = (audio) => {
    var val = audio.duration;
    setDuration(val);
  };
  const convertDuration = () => {
    return `${Math.round(duration / 60)}:${
      Math.floor(duration % 60) >= 10
        ? Math.floor(duration % 60)
        : `0${Math.floor(duration % 60)}`
    }`;
  };

  useEffect(() => {
    var audio = new Audio();
    audio.src = props.url;
    audio.addEventListener("durationchange", () => getVal(audio));
    return () => {
      audio.removeEventListener("durationchange", () => getVal(audio));
    };
  }, []);
  return (
    <div className="cardPopularSongContainer">
      <div className="song_tag">
        <div className="media">
          <div className="media_left">
            <div className="song_prefix">
              <i
                className="fa-solid fa-music icon"
                onClick={handleChangeAudio}
              ></i>
            </div>
            <div className="song_thumb">
              <figure className="image">
                <img className="img" src={props.image} alt="image playlist" />
              </figure>
              {/* <i className="fa-solid fa-play" /> */}
              <i className="far fa-play-circle" onClick={handleChangeAudio} />
            </div>
            <div className="card_info">
              <div className="title_wrapper">
                <span className="title" onClick={handleChangeAudio}>
                  {props.name}
                </span>
              </div>
              <h3 className="subtitle">
                <a href="#" className="is_subtitle">
                  {props.author}
                </a>
              </h3>
            </div>
          </div>
          <div className="media_content">
            <div className="album_info">
              <span>{props.name}</span>
            </div>
          </div>
          <div className="media_right">
            <div className="hover_items"></div>
            <div className="action_items">
              <div className="level">
                <div className="level_item">
                  <div className="add-item">
                    <AddDropdown />
                  </div>
                </div>
                <div className="level_item duration">
                  {convertDuration(props.url)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
