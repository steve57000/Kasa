import { Navigate } from 'react-router-dom';

export const Error404Redirect = () => {
  return <Navigate to="/kasa/404notfound" />;
};
