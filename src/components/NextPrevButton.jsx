import leftArrow from '../assets/img/arrow_left.svg';
import React from 'react';

export default function NextPrevButton({ altSource }) {
  return <img src={leftArrow} alt={altSource} className={altSource} />;
}
