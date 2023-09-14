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
    console.log("base url: " + urlBase)
  return (
    <React.StrictMode>
      <Router basename="/">
        <Routes>
          <Route path="" element={<BasicLayout />}>
            <Route index element={<Home />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="/housing/404notFound" element={<ErrorPage />} />
          </Route>
            <Route path="/about" element={<BasicLayout />} >
                <Route index element={<About />} />
            </Route>
            <Route path="*" element={<Error404Redirect />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default RouterApp;
