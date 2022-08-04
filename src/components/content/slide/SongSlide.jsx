import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function SongSlide() {
  return (
    <div className="songSlideContainer">
      <Carousel className="slide">
        <Carousel.Item>
          <Link to="/list-song-at-party">
            <img
              className="d-block w-100"
              src="https://previews.123rf.com/images/zeber/zeber1510/zeber151000356/46878893-disco-party-music-event-background-for-poster-or-banner.jpg"
              alt="Album thang 8"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/list-song-party-summervibe">
            <img
              className="d-block w-100"
              src="https://i.ytimg.com/vi/OsODJ_Jh0pY/maxresdefault.jpg"
              alt="Second slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/list-song-at-work">
            <img
              className="d-block w-100"
              src="https://c8.alamy.com/comp/2G3DJDX/hippie-music-cartoon-banner-with-acoustic-guitar-and-peace-symbol-on-colorful-ornate-psychedelic-background-rock-n-roll-hippy-musical-disco-party-pop-concert-festival-live-event-vector-retro-design-2G3DJDX.jpg"
              alt="Third slide"
            />
          </Link>
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
