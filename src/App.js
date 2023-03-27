import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../src/pages/homePage';
import GamePage from '../src/pages/gamePage';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/gamePage" element={<GamePage/>} />
        <Route element={<NotFound/>} />
      </Routes>
    </div>

  );
};

const NotFound = () => {
  return <h1>Page not found</h1>;
};

export default App;
