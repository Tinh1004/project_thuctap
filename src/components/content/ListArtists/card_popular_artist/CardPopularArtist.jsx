import React from "react";
import './styles.scss'
export default function CardPopularArtist() {
  return (
    <div className="cardPopularArtistContainer">
      <div className="popularArtistItem">
        <div className="imageArtist">
          <img className="img" src='https://www.spacespeakers.vn/images/HOME/ssg.jpg' alt='imageArtist' />
        </div>
        <h5 className="info">SpaceSpeaker</h5>
      </div>
    </div>
  );
}
