import React from 'react';
import Navigation from '../components/Navigation';
import App from './App'
import Footer from '../components/Footer';
import './App.css';

const Home = () => {
  return(
    <>
      <Navigation />
      <App/>
      <Footer />
    </>
  );
}

export default Home;
