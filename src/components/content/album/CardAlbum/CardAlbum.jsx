import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.scss";
export default function CardAlbum(item) {
  // let navigate = useNavigate();
  // const navigateListMusic = () => {
  //   switch (props.id) {
  //     case 0:
  //       navigate("/list-song-at-party");
  //       break;
  //     case 1:
  //       navigate("/list-song-at-work");
  //       break;
  //     case 2:
  //       navigate("/list-song-NCSRelease");
  //       break;
  //     case 3:
  //       navigate("/list-song-party-summervibe");
  //       break;
  //     case 4:
  //       navigate("/list-song-USUKTopHit");
  //       break;

  //     default:
  //       break;
  //   }
  // };

  return (
    <div className="cardAlbumContainer">
      <li className="cardAlbum">
        <Link to={`/detail/${item.id}`}>
          <div className="img_play">
              <img className="img" src={item.img} alt={"Loading...."} />
              <i className="far fa-play-circle" />
            {/* <i className="far fa-play-circle" onClick={navigateListMusic} /> */}
          </div>
        </Link>
        <Link to={`/detail/${item.id}`} >
          <h5 className="info">{item.name}</h5>
        </Link>
        <div className="subtitle">{item.author}</div>
      </li>
    </div>
  );
}
