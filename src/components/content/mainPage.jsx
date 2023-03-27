  import React from 'react';
  import { Link as ScrollLink } from 'react-scroll';
  import { Link as RouterLink } from 'react-router-dom';
  import Navbar from '../header/navbar';

  const MainPage = () => {
    return (
      <div className="main-page bg-image">
        <Navbar />
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-md-12">
              <h1 className="text-center text-white mb-4">PLAY TRADITIONAL GAME</h1>
              <p className="lead text-center text-white mb-5">Experience new traditional game play</p>
              <div className="d-flex justify-content-center">
                <RouterLink to="/gamePage">
                  <button className="btn btn-lg">PLAY NOW</button>
                </RouterLink>
              </div>
            </div>
          </div>
          <div className="row fixed-bottom mb-5">
            <div className="col-12 text-center">
              <ScrollLink className="next-page" to="game-choice" smooth={true}>
                <div className="story-button-text">THE STORY</div>
                <div className="story-button-triangle"></div>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default MainPage;
