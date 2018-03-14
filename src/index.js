import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game';
import Navigation from './navigation';
import Center from 'react-center';

// ========================================

ReactDOM.render(
  <Center>
    <div>
      <Navigation />,
      <Game />
    </div>
  </Center>,
  document.getElementById('root')
);
