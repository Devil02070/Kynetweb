import React, {useEffect}from 'react';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Scroller-animation and js
import './assets/js/Animatescroll';
import './assets/js/main';

//Header-Footer
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import Home from './components/views/Home';
import About from './components/views/About';
import CaseStudies from './components/views/CaseStudies';
import Services from './components/views/Services';
import Contact from './components/views/Contact'


const Routing =()=>{
  return(
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/case_studies' element={<CaseStudies/>}></Route>
      <Route exact path='/services' element={<Services/>}></Route>
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
