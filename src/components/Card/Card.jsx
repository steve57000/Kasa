import { NavLink } from 'react-router-dom';
import React from 'react';
import { string } from 'prop-types';
import DefaultImg from '../../assets/img/backgroundCover.svg';
import './Card.css';
export default function Card({ title, cover, id }) {
  // state
  const getStringCover = cover.substring(0, 29);
  const defaultStringCover = '/static/media/backgroundCover';

  // comportements
  const isCover =
    getStringCover === defaultStringCover
      ? 'TextNoBackground'
      : 'TextBackground';
  // affichage (render)
  return (
    <li style={{ backgroundImage: `url(${cover})` }}>
      <NavLink to={`/housing/${id}`} className="LinkHousing">
        <p className={isCover}>{title}</p>
      </NavLink>
    </li>
  );
}

Card.propTypes = {
  title: string,
  cover: string,
  id: string.isRequired,
  isCover: string,
};

Card.defaultProps = {
  title: 'Titre de la location',
  cover: DefaultImg,
};
