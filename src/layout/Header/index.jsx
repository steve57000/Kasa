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
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </div>
  );
}

export default Header;
