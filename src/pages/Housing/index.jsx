import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import Gallery from '../../components/Gallery/Gallery';
import Rating from '../../components/Rating/Rating';
import Tags from '../../components/Tags/Tags';
import Loader from '../../components/Loader/Loader';
import HousingService from '../../utils/hooks';

import './Housing.css';
const Housing = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorCall, setErrorCall] = useState(false);
  // Call Datas API
  useEffect(() => {
    let housing;

    HousingService.getById(id)
      .then((data) => {
        housing = data;
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
        // if url have bad id or name redirect to 404
        if (!housing) {
          setErrorCall(true);
        } else {
          setData(housing);
        }
      });
  }, [id]);

  if (errorCall) {
    return <Navigate to="404notFound" />;
  }

  if (error) {
    return <h2>Oups il y a eu un problème</h2>;
  }

  return (
    <div className="ContainerHousing">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="Body">
          <Gallery pictures={data.pictures} />
          <div className="Content">
            <div className="Title">
              <h2>{data.title}</h2>
              <h3>{data.location}</h3>
              <Tags tags={data.tags} />
            </div>
            <div className="Infos">
              <div className="Owner">
                <span className="HostName">{data.host.name}</span>
                <img src={data.host.picture} alt={data.host.name} />
              </div>
              <Rating rating={data.rating} />
            </div>
          </div>
          <div className="HouseDescription">
            <Collapse title="Description" content={data.description} />
            <Collapse title="Équipements" content={data.equipments} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Housing;
