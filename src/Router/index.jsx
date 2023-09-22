import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Home from '../pages/Home';
import Housing from '../pages/Housing';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';

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
    <Router basename="/kasa">
      <Routes>
        <Route path="" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="404notFound" element={<ErrorPage />} />
          <Route path="housing/:id" element={<Housing />} />
          <Route
            path="*"
            element={<Navigate to="404notFound" replace={true} />}
          />
        </Route>
        <Route
          path="*"
          element={<Navigate to="404notFound" replace={true} />}
        />
      </Routes>
    </Router>
  );
}

export default RouterApp;
