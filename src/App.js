import React from 'react';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Scroller-animation
import './assets/js/Animatescroll'

//Header-Footer
import Navbar from './components/Navbar';
import Footer from './components/Footer'

// Pages
import Home from './components/Home'
import About from './components/About'

const Routing =()=>{
  return(
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About/>}></Route>
    </Routes>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
      
    </>
  );
}

export default App;
