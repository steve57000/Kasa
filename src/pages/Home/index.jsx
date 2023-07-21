import '../../assets/css/App.css';
import Banner from '../../assets/img/banner.jpg';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';

function Home() {
  // State (état, données)
  const [error, setError] = useState(false);
  const [dataHousing, setDataHousing] = useState([]);

  // Comportement
  useEffect(() => {
    function getData() {
      fetch('data.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then(function (response) {
          // console.log(response);
          return response.json();
        })
        .then(function (myJson) {
          // console.log(myJson);
          setDataHousing(myJson);
        });
    }
    getData();
  }, []);
  if (error) {
    setError(error);
    return <span>Oups il y a eu un problème ${error.message}</span>;
  }
  // affichage (render)
  return (
    <div className="Home">
      <div className="Banner">
        <img src={Banner} alt="Banner" className="Banner-img" />
        <div className="Banner-content">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>

      <div className="SectionCard">
        <ul>
          {dataHousing.map((card, index) => (
            <Card
              title={card.title}
              key={`${card.title}-${index}`}
              id={card.id}
            ></Card>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
