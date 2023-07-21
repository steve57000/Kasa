import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';

function Header() {
  return (
    <div className="Header">
      <div className="Header-logo">
        {/* Logo is an actual React component */}
        <Logo />
      </div>
      <nav className="Header-nav color-red">
        <Link to="/">
          <span>Accueil</span>
        </Link>
        <Link to="/about">
          <span>À propos</span>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
