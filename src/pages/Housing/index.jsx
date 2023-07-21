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

  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = houseDetails;

  return (
    <div className="house">
      {!hostData ? (
        <h1>Chargement des données...</h1>
      ) : (
        <div className="body">
          <Gallery pictures={pictures} />
          <div className="content">
            <div className="title">
              <h2>{title}</h2>
              <h3>{location}</h3>
              <Tags tags={tags} />
            </div>
            <div className="infos">
              <div className="owner">
                <span className="host-name">{host.name}</span>
                <img src={host.picture} alt={host.name} />
              </div>
              <Rating rating={rating} />
            </div>
          </div>
          <div className="house-description">
            <Collapse title="Description" content={description} />
            <Collapse title="Équipements" content={equipments} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Housing;
