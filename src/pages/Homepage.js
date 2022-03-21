import React, { useState } from 'react';
import Search from '../components/Search';
import Slides from '../components/Slides';

function Homepage(props) {
  return (
    <div>
      <Search />
      <Slides />
    </div>
  );
}

export default Homepage;
