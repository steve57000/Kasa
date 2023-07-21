import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse';
import Gallery from '../../components/Gallery';
import Rating from '../../components/Rating';
import Tags from '../../components/Tags';

const Housing = () => {
  const { id } = useParams();
  const [houseDetails, setHouseDetails] = useState([]);
  const [error, setError] = useState(null);
  const [hostData, setHostData] = useState(null);

  useEffect(() => {
    const fetchIdData = () => {
      fetch('../../data.json', {
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
          const houseDetails = myJson.find((object) => object.id === id);
          setHouseDetails(houseDetails);
          setHostData(houseDetails.host);
        });
    };
    fetchIdData();
  }, [id]);

  if (error) {
    return (
      <span>Oups, il y a eu un problème ${JSON.stringify(error.message)}.</span>
    );
  }

function Logements() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Page Logements</h1>
      </header>
    </div>
  );
};

export default Housing;
