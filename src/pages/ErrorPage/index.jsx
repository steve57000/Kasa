import '../../assets/css/App.css';

function ErrorPage() {
  return (
    <div className="ErrorPage">
      <div className="ErrorPage-title">
        <h1>404</h1>
      </div>
      <div className="ErrorPage-text">
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
    </div>
  );
}

export default ErrorPage;
