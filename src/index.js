import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game';
import Navigation from './navigation';


// ========================================

ReactDOM.render(
  <div>
    <Navigation />,
    <Game />
  </div>,
  document.getElementById('root')
);
