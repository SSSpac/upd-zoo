import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

const MainLayout = () => {
  return (
    <div className="app">
      <Header />
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mammals">Mammals</Link></li>
          <li><Link to="/birds">Birds</Link></li>
          <li><Link to="/reptiles">Reptiles</Link></li>
        </ul>
      </nav>
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;