import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="https://steve57000.github.io/kasa/"
            element={<Home />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404Redirect />} />
          <Route path="/404notFound" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default RouterApp;
