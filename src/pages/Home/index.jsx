import '../../assets/css/App.css';
import Banner from '../../assets/img/banner.jpg';
function Home() {
  return (
    <div className="Home">
      <div className="Home-banner">
        <img src={Banner} alt="Banner" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Home;
