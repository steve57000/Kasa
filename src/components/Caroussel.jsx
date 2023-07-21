import React, { useState } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
export default function CarouselPage({ cardInfo }) {
  let length = 0;
  console.log('le caroussel : ' + cardInfo);
  // const info = cardInfo.forEach((picture) => {
  //   for (let i = 0; i < picture.pictures.length; i++) {
  //     const pic = picture.pictures[i];
  //     length++;
  //     imgAdd.push({ pic, index });
  //   }
  // });

  // imgAdd.push({ pic, index });

  // const handlePrevious = () => {
  //   const newIndex = index - 1;
  //   setIndex(newIndex < 1 ? length - 1 : newIndex);
  // };
  //
  // const handleNext = () => {
  //   const newIndex = index + 1;
  //   setIndex(newIndex >= length ? 1 : newIndex);
  // };

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={120}
      totalSlides={length}
    >
      <Slider>
        <Slide>
          <div>
            <img
              src={cardInfo}
              className="carousel-image"
              key={`caroussel-${cardInfo}`}
            ></img>
          </div>
        </Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
    // <div className="carousel">
    //   <button onClick={handlePrevious}>Previous</button>
    //   <button onClick={handleNext}>Next</button>
    //   <p>{index}</p>
    //   <div className="carousel-inner">
    //     {imgAdd.map((picture) => (
    //       <img
    //         src={picture}
    //         className="carousel-image"
    //         key={`caroussel-${picture}`}
    //       ></img>
    //     ))}
    //     ;
    //   </div>
    // </div>
  );
}
// CarouselPage.propTypes = {};
