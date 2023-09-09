import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import './Header.css';
import { useLocation } from 'react-router-dom';

import './Header.css';
function Header() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/');

  return (
    <div className="Header">
      <div className="Header-logo">
        <Logo />
      </div>
      <nav className="Header-nav color-red">
        <Link to="/" className={splitLocation[1] === '' ? 'active' : ''}>
          <span>Accueil</span>
        </Link>
        <Link
          to="/about"
          className={splitLocation[1] === 'about' ? 'active' : ''}
        >
          <span>À propos</span>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
