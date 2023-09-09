import React from 'react';
import { arrayOf, string } from 'prop-types';
import './Banner.css';

export default function Banner({ imgUrl, title }) {
  // state

  // comportements

  // affichage (render)
  return (
    <div className="Banner" style={{ backgroundImage: `url(${imgUrl})` }}>
      {title ? (
        <div className="Banner-img">
          <h1>
            {title[0]}
            <span>{title[1]}</span>
          </h1>
        </div>
      ) : (
        <div className="Banner-img"></div>
      )}
    </div>
  );
}

Banner.propTypes = {
  imgUrl: string,
  title: arrayOf(string), // Contient un tableau de données de type string
};
