import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Home from '../pages/Home';
import Housing from '../pages/Housing';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';
import { Error404Redirect } from '../utils/notFoundUrl';

function RouterApp() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/kasa" element={<Home />} />
          <Route path="/kasa/housing/:id" element={<Housing />} />
          <Route path="/kasa/about" element={<About />} />
          <Route path="/kasa/*" element={<Error404Redirect />} />
          <Route path="/kasa/404notFound" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default RouterApp;
