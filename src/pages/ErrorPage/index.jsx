import '../../App.css';
import { Link } from 'react-router-dom';
import colors from '../../utils/style/colors';
import './ErrorPage.css';
function ErrorPage() {
  return (
    <div className="ErrorPage">
      <h1>404</h1>
      <p className="ErrorPage-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/kasa" style={{ color: colors.primary }}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default ErrorPage;
