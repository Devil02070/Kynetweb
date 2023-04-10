import React, {useEffect}from 'react';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Scroller-animation and js
import './assets/js/Animatescroll';
import './assets/js/main';

//Header-Footer
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'


const Routing =()=>{
  return(
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/contact_us' element={<Contact/>}></Route>
    </Routes>
  )
}

function App() {
  useEffect(()=>{
    Routing();
  })
  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
    </>
  )
}

export default App;
