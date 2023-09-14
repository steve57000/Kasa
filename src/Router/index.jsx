import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Home from '../pages/Home';
import Housing from '../pages/Housing';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';
import { Error404Redirect } from '../utils/notFoundUrl';
import { config } from "../Constantes"
const urlBase: string = config.url
function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
function RouterApp() {
  return (
    <React.StrictMode>
      <Router>
        <Routes basename={`${urlBase}`}>
          <Route path="" element={<BasicLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="/404notFound" element={<ErrorPage />} />
            <Route path="*" element={<Error404Redirect />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default RouterApp;
