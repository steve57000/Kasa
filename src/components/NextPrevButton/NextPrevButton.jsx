import leftArrow from '../../assets/media/arrow_left.svg';
import React from 'react';
import { string } from 'prop-types';
import './NextPrevButton.css';
export default function NextPrevButton({ altSource }) {
  return <img src={leftArrow} alt={altSource} className={altSource} />;
}
NextPrevButton.propTypes = {
  altSource: string,
};
