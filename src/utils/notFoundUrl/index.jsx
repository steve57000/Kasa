import { Navigate } from 'react-router-dom';

export const Error404Redirect = () => {
  return <Navigate to="/404notfound" />;
};
