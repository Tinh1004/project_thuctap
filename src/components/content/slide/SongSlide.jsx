import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import './styles.scss'
export default function SongSlide() {
  return (
    <div className='songSlideContainer'>
        <Carousel className="slide">
          <Carousel.Item>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            <img
              className="d-block w-100"
              src="https://blog.getsocial.io/wp-content/uploads/2015/08/open_graph_facebook.png"
              alt="Album thang 8"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/vectors/hiphop-music-concept-banner-header-vector-id1144987758"
              alt="Second slide"
            />

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
  )
}
