import React from 'react';
import './style/achievementItem.css';

const AchievementItem = ({
  achievement,
  unlockCount,
  imgLink,
  name,
}) => (
  <div className='container'>
    { achievement <= unlockCount - 1
      ? (
        <div className='container__item'>
          <img className='container__item--image__locked' src={imgLink} alt={name} />
          <h1 className='container__item--name'>{name}</h1>
        </div>
      ) : (
        <div className='container__item'>
          <img className='container__item--image' src={imgLink} alt={name} />
          <h1 className='container__item--name'>{name}</h1>
        </div>
      )}
  </div>
);

export default AchievementItem;
