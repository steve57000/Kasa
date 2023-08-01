import React, { useState, useTransition } from 'react';
import leftArrow from '../assets/img/arrow_left.svg';

const Gallery = ({ pictures }) => {
  // const [isPPending, startTransition] = useTransition();
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="Gallery ">
      {pictures.map(
        (picture, index) =>
          index === current && (
            <div className="Picture" key={'gallery_' + index}>
              <img src={picture} key={picture} alt="Logement" />
            </div>
          ),
      )}
      {length > 1 && (
        <div className="Buttons">
          <button className="Prev" onClick={prev}>
            <img src={leftArrow} alt="" />
          </button>

          <button className="Next" onClick={next}>
            <img src={leftArrow} alt="" />
          </button>
        </div>
      )}
      <span className="PictureCompteur">
        {current + 1}/{length}
      </span>
    </div>
  );
};

export default Gallery;
