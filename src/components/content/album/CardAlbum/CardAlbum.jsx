import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
export default function CardAlbum(props) {
  let navigate = useNavigate();
  const navigateListMusic = () => {
    switch (props.id) {
      case 0:
        navigate("/list-song-at-party");
        break;
      case 1:
        navigate("/list-song-at-work");
        break;
      case 2:
        navigate("/list-song-NCSRelease");
        break;
      case 3:
        navigate("/list-song-party-summervibe");
        break;
      case 4:
        navigate("/list-song-USUKTopHit");
        break;

      default:
        break;
    }
  };
  return (
    <div className="cardAlbumContainer">
      <li className="cardAlbum">
        <div className="img_play">
          <img className="img" src={props.img} alt={props.alt} />
          <i className="far fa-play-circle" onClick={navigateListMusic} />
        </div>
        <h5 className="info" onClick={navigateListMusic}>
          {props.name}
        </h5>
        <div className="subtitle">{props.author}</div>
      </li>
    </div>
  );
}
