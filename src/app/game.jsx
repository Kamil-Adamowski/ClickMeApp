import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import useSound from 'use-sound';

import clickSfx from '../sounds/click.mp3';
import alertSfx from '../sounds/alert.mp3';
import achievementSfx from '../sounds/achievement.mp3';

import Button from '../components/button/button';
import { ResetData } from '../components/reset/reset';
import Score from '../components/score/score';

import './game.css';

const Game = () => {
  // simple sound hook
  const alert = useAlert();

  const [playClick] = useSound(clickSfx, { volume: 0.25 });

  const [playAlert] = useSound(alertSfx, { volume: 0.25 });

  const [playAchievement] = useSound(achievementSfx, { volume: 0.25 });

  // import localStorage
  const setLocalData = localStorage.getItem('data');
  const local = JSON.parse(setLocalData);

  // 'game' values
  const [value, setValue] = useState({
    clickCount: 0,
    level: 1,
    nextLevel: 10,
    clickAchievement: 100,
  });

  // simple object send to local data
  const data = {
    clickCount: value.clickCount,
    level: value.level,
    nextLevel: value.nextLevel,
    clickAchievement: value.clickAchievement,
  };

  // a hook that checks if Local Storage exists, if not, creates basic parameters
  useEffect(() => {
    if (!local) {
      setValue({
        clickCount: 0,
        level: 1,
        nextLevel: 10,
        clickAchievement: 100,
      });
    } else {
      setValue({
        clickCount: local.clickCount,
        level: local.level,
        nextLevel: local.nextLevel,
        clickAchievement: local.clickAchievement,
      });
    }
  }, []);

  // simple level system / achievement (click count) system alert
  useEffect(() => {
    switch (value.clickCount) {
      case value.nextLevel:
        setValue({
          ...value,
          level: value.level + 1,
          nextLevel: value.nextLevel * 2,
        });
        alert.success(`Wow you got a level: ${value.level + 1}`);
        playAlert();
        break;

      case value.clickAchievement:
        alert.success(`Wow you got a new achievement: ${value.clickAchievement}, good job!`);
        playAchievement();
        setValue({
          ...value,
          clickAchievement: value.clickAchievement * 10,
        });
        break;
      default:
    }

    localStorage.setItem('data', JSON.stringify(data));
  }, [value.clickCount]);

  return (
    <div className='game-containter'>
      <Score
        clickCount={value.clickCount}
        level={value.level}
        nextLevel={value.nextLevel}
      />
      <Button
        onClick={() => {
          setValue({ ...value, clickCount: value.clickCount + 10 });
          playClick();
        }}
        title='CLICK ME'
        className='game-containter-button-click-count'
      />
      <Button
        onClick={() => {
          if (window.confirm('Are you sure you wish to delete your stats?'));
          ResetData(
            setValue({
              clickCount: 0,
              level: 1,
              nextLevel: 10,
              clickAchievement: 100,
            }),
          );
        }}
        title='RESET'
        className='game-containter-button-reset-count'
      />
    </div>
  );
};

export default Game;
