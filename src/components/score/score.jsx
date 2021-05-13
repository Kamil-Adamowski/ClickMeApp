import React from 'react';
import './score.css';

const Score = ({ clickCount, level, nextLevel }) => (
  <div className='score-container'>
    <div className='score-container-top'>
      <h3 className='score-container-text'>Points: {clickCount}</h3>
      <h3 className='score-container-text'>Level: {level}</h3>
    </div>
    <h3 className='score-container-text'>Next level: {nextLevel}</h3>
  </div>
);

export default Score;
