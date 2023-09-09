import { ReactComponent as Logo } from '../../logoWhite.svg';
import './Footer.css';
function Footer() {
  return (
    <div
      className="Footer"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="FooterContent">
        {/* Logo is an actual React component */}
        <Logo className="FooterLogo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
