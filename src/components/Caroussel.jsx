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
              className="CarouselImage"
              key={`caroussel-${cardInfo}`}
            ></img>
          </div>
        </Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
}
// CarouselPage.propTypes = {};
