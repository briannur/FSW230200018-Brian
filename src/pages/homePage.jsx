import React from 'react';
import { Element, scroller } from 'react-scroll';
import MainPage from '../components/content/mainPage';
import GameChoice from '../components/content/gameChoice';
import GameFeature from '../components/content/gameFeature';
import GameRequirement from '../components/content/gameRequirement';
import TopScore from '../components/content/topScores';
import NewsletterSubscribe from '../components/content/newsletterSubscribe';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

const Home = () => {
  const handleScroll = (elementName) => {
    scroller.scrollTo(elementName, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div name="home">
      <div className="container-fluid p-0" onScroll={() => handleScroll('game-choice')} data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="-70">
        <Element name="main-page">
          <MainPage />
        </Element>
        <Element name="game-choice">
          <GameChoice />
        </Element>
        <Element name="game-feature">
          <GameFeature />
        </Element>
        <Element name="game-requirement">
          <GameRequirement />
        </Element>
        <Element name="top-score">
          <TopScore />
        </Element>
        <Element name="newsletter">
          <NewsletterSubscribe />
        </Element>
      </div>
    </div>
  );
};

export default Home;
