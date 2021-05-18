import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';

import Button from '../../components/button/button';
import './style/shop.css';

const ShopContainer = () => {
  const alert = useAlert();

  const setLocalData = localStorage.getItem('data');
  const local = JSON.parse(setLocalData);

  const [value, setValue] = useState(local);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(value));
  }, [value.clickCount]);

  const autoClickSystem = () => {
    if (value.clickCount < value.autoClickPrice) {
      alert.error(`you are missing ${value.autoClickPrice - value.clickCount} points to buy this item`);
    } else {
      setValue({
        ...value,
        clickCount: value.clickCount - value.autoClickPrice,
        autoClickAmount: value.autoClickAmount + 1,
        autoClickPrice: Math.floor(value.autoClickPrice * 1.31),
      });
    }
  };
  return (
    <div className='shop--container'>
      <h1 className='shop--container__text'>You have acctually: {value.clickCount} Clciks</h1>
      {value.level < 5
        ? <Button type='button' className='shop--container__button--locked' title='You need 5 level to unlock clicker' onClick={null} />
        : <Button type='button' className='shop--container__button--buy' title={`Buy Clicker per ${value.autoClickPrice}`} onClick={() => autoClickSystem()} />}
      <h1 className='shop--container__text'>You have acctually: {value.autoClickAmount} Clickers</h1>
    </div>
  );
};

export default ShopContainer;
