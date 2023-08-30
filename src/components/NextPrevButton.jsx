import leftArrow from '../assets/img/arrow_left.svg';
import React from 'react';
import { string } from 'prop-types';

export default function NextPrevButton({ altSource }) {
  return <img src={leftArrow} alt={altSource} className={altSource} />;
}
NextPrevButton.propTypes = {
  altSource: string,
};
