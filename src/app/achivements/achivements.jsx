import React from 'react';
import AchievementItem from '../../components/achievementItem/achievementItem';
import './style/achievements.css';

const AchievementContainer = () => {
  const setLocalData = localStorage.getItem('data');
  const local = JSON.parse(setLocalData);

  return (
    <>
      <div className='achievements--container'>
        <AchievementItem
          achievement={local.level}
          unlockCount={5}
          imgLink='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bcn1HQLGnsVzfJZua0Fvtf_RlyqY6a1vRg&usqp=CAU'
          name='5 level'
        />
        <AchievementItem
          achievement={local.level}
          unlockCount={10}
          imgLink='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bcn1HQLGnsVzfJZua0Fvtf_RlyqY6a1vRg&usqp=CAU'
          name='10 level'
        />
        <AchievementItem
          achievement={local.level}
          unlockCount={50}
          imgLink='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bcn1HQLGnsVzfJZua0Fvtf_RlyqY6a1vRg&usqp=CAU'
          name='50 level'
        />
        <AchievementItem
          achievement={local.level}
          unlockCount={100}
          imgLink='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bcn1HQLGnsVzfJZua0Fvtf_RlyqY6a1vRg&usqp=CAU'
          name='100 level'
        />
      </div>
    </>
  );
};
export default AchievementContainer;
