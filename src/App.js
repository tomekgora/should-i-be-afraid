import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import Container from  './components/Container.js'
import Banner from  './components/Banner-title.js'
import Footer from './components/Footer.js'
import LikeCounter from './components/LikeCounter.js'

function App() {
  return (
    <div className="App">
      <Banner/>
      {/* <NavBar/> */}
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
