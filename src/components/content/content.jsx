import React from "react";
import "./styles.scss";
import Carousel from "react-bootstrap/Carousel";
import SongItem from "./song_item/SongItem";
import image2 from '../../assets/img/image2.jpg'
import image3 from '../../assets/img/image3.jpg'
import Artists from "./artists/artists";
export default function Content() {
  return (
    <div className="contentContainer">
      <div className="songSlide">
        <Carousel className="slide">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://blog.getsocial.io/wp-content/uploads/2015/08/open_graph_facebook.png"
              alt="Album thang 8"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/vectors/hiphop-music-concept-banner-header-vector-id1144987758"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://c8.alamy.com/comp/2G3DJDX/hippie-music-cartoon-banner-with-acoustic-guitar-and-peace-symbol-on-colorful-ornate-psychedelic-background-rock-n-roll-hippy-musical-disco-party-pop-concert-festival-live-event-vector-retro-design-2G3DJDX.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="popular_song">

        <div className="item1">
          <h4>Popular Song</h4>
          <div className="btn_s"> 
            <button className="btn"><i className="fas fa-chevron-left" /></button>
            <button className="btn"><i className="fas fa-chevron-right" /></button>
          </div>
        </div>

        <div className="pop_song">
            <SongItem img={image2} atl='image2' name='Rapitaloud EP' subtitle='Rapital Gang' />
            <SongItem img={image2} atl='image2' name='Rapitaloud EP' subtitle='Rapital Gang' />
            <SongItem img={image2} atl='image2' name='Rapitaloud EP' subtitle='Rapital Gang' />
            <SongItem img={image2} atl='image2' name='Rapitaloud EP' subtitle='Rapital Gang' />
            <SongItem img={image2} atl='image2' name='Rapitaloud EP' subtitle='Rapital Gang' />
            <SongItem img={image2} atl='image2' name='Rapitaloud EP' subtitle='Rapital Gang' />     
        </div>
      </div>
      <div className="popular_artists">
      <div className="item2">
          <h4>Popular Artists</h4>
          <div className="btn_s"> 
            <button className="btn"><i className="fas fa-chevron-left" /></button>
            <button className="btn"><i className="fas fa-chevron-right" /></button>
          </div>
        </div>  
        <div className="artists">
          <Artists img={image3} alt='Singer' name='Space Speaker'/>
          <Artists img={image3} alt='Singer' name='Space Speaker'/>
          <Artists img={image3} alt='Singer' name='Space Speaker'/>
          <Artists img={image3} alt='Singer' name='Space Speaker'/>
          <Artists img={image3} alt='Singer' name='Space Speaker'/>
          <Artists img={image3} alt='Singer' name='Space Speaker'/>
        </div>
      </div>
    </div>
  );
}
