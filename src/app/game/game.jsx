import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import useSound from 'use-sound';

import clickSfx from '../../sounds/click.mp3';
import alertSfx from '../../sounds/alert.mp3';
import achievementSfx from '../../sounds/achievement.mp3';
import useInterval from '../../hooks/useInterval';

import Button from '../../components/button/button';
import { ResetData } from '../../components/resetData/reset';
import Score from '../../components/score/score';

import './style/game.css';

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
    autoClickAmount: 0,
    autoClickPrice: 10,
  });

  // simple object send to localStorage
  const data = {
    clickCount: value.clickCount,
    level: value.level,
    nextLevel: value.nextLevel,
    clickAchievement: value.clickAchievement,
    autoClickAmount: value.autoClickAmount,
    autoClickPrice: value.autoClickPrice,
  };
  // function adding a click
  const clickAction = clickValue => {
    setValue({ ...value, clickCount: value.clickCount + clickValue });
    playClick();
  };

  // a hook that checks if Local Storage exists, if not, creates basic parameters
  useEffect(() => {
    if (!local) {
      setValue({
        clickCount: 0,
        level: 1,
        nextLevel: 10,
        clickAchievement: 100,
        autoClickAmount: 0,
        autoClickPrice: 10,
      });
    } else {
      setValue({
        clickCount: local.clickCount,
        level: local.level,
        nextLevel: local.nextLevel,
        clickAchievement: local.clickAchievement,
        autoClickAmount: local.autoClickAmount,
        autoClickPrice: local.autoClickPrice,
      });
    }
  }, []);

  // simple level system / achievement (click count) system alert
  useEffect(() => {
    // simple level system
    if (value.clickCount >= value.nextLevel) {
      setValue({
        ...value,
        level: value.level + 1,
        nextLevel: value.nextLevel * 2,
      });
      alert.success(`Wow! you got a level: ${value.level + 1}`);
      playAlert();
    }

    // simple achievement system
    if (value.clickCount >= value.clickAchievement) {
      alert.success(`Wow! you got a new achievement: ${value.clickAchievement}, good job!`);
      playAchievement();
      setValue({
        ...value,
        clickAchievement: value.clickAchievement * 10,
      });
    }
    // sending data to localStorage
    localStorage.setItem('data', JSON.stringify(data));
  }, [value.clickCount, value.level]);

  // a hook that adds the number of clicks bought in "/shop" every second
  useInterval(() => {
    setValue({ ...value, clickCount: value.clickCount + value.autoClickAmount });
  }, 1000);

  return (
    <div className='game__containter'>
      <Score
        clickCount={value.clickCount}
        level={value.level}
        nextLevel={value.nextLevel}
      />
      <Button
        onClick={() => {
          clickAction(1);
          playClick();
        }}
        title='CLICK ME'
        className='game__containter--button--click--count'
      />
      <Button
        onClick={() => {
          // simple confirm validation
          // eslint-disable-next-line
          if (window.confirm('Are you sure you wish to delete your stats?'));
          ResetData(
            setValue({
              clickCount: 0,
              level: 1,
              nextLevel: 10,
              clickAchievement: 100,
              autoClickAmount: 0,
              autoClickPrice: 10,
            }),
          );
        }}
        title='RESET'
        className='game__containter--button--reset--count'
      />
      <p className='game__containter--clicks'>Clicks per secound: {value.autoClickAmount}</p>
    </div>
  );
};

export default Game;
