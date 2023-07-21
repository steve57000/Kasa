import { NavLink } from 'react-router-dom';
import { number, string } from 'prop-types';
export default function Card({ title, id }) {
  // state

  // comportements
  // affichage (render)
  return (
    <li>
      <NavLink to={`/housing/${id}`}>
        <p>{title}</p>
      </NavLink>
    </li>
  );
}

Card.propTypes = {
  title: string.isRequired,
  id: string,
};

Card.defaultProps = {
  title: 'Titre de la location',
};
