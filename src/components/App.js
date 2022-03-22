import React from 'react';
import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Results from '../pages/Results';
import ShowPage from '../pages/ShowPage';

function App() {
  return (
    <div className="background">
      <div className="root">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/results/:q" element={<Results />} />
          <Route path="/show/:id" element={<ShowPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
