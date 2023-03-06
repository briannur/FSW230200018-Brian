import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Image from "../../assets/rockpaperstrategy-1600.jpg";

const GameChoice = () => {
  return (
    <div className="game-choice bg-image">
      <div className="container d-flex align-items-center justify-content-center h-100">
        <div className="row align-items-center w-100">
          <div className="col-md-12">
            <p className="mb-4">What's so special?</p>
          </div>
          <div className="col-md-12">
            <h2 className="mb-4">THE GAMES</h2>
          </div>
          <div className="col-md-8 offset-md-3">
            <Carousel className="px-5" id="carouselExampleControls" indicators={true} nextIcon={null} prevIcon={null}>
              <Carousel.Item>
                <img className="d-block w-100" src={Image} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Image} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Image} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Image} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Image} alt="First slide" />
              </Carousel.Item>
            </Carousel>
            <div className="carousel-nav">
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" data-target="#carouselExampleControls">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" data-target="#carouselExampleControls">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameChoice;

