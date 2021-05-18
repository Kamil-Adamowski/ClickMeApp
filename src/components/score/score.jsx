import React from 'react';
import './style/score.css';

const Score = ({ clickCount, level, nextLevel }) => (
  <div className='score--container'>
    <div className='score--container__top'>
      <h3 className='score--container__text'>Clicks: {clickCount}</h3>
      <h3 className='score--container__text'>Level: {level}</h3>
    </div>
    <h3 className='score--container__text'>Next level: {nextLevel}</h3>
  </div>
);

export default Score;
