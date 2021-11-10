import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header'
import Body from './components/Body';
import Footer from './components/Footer';
import Youtube from './components/Youtube';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Body />
      <Youtube />
      <Footer />
    </>
  );
}

export default App;
