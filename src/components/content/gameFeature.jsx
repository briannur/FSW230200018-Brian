import React from 'react';

const GameFeature = () => {
  return (
    <div className="game-feat bg-image">
      <div className="container float">
        <p>What's so special?</p>
        <h2>FEATURES</h2>
        <ul className="bullet-numbering">
          <li><span>TRADITIONAL GAMES</span>
            <ul className="nested-bullet-numbering">
              <li>If you miss your childhood, we provide many traditional games here.</li>
            </ul>
          </li>
          <li><span>GAME SUIT</span></li>
          <li><span>TBD</span></li>
        </ul>
        <div className="bullet-connector"></div>
      </div>
    </div>
  );
};

export default GameFeature;
