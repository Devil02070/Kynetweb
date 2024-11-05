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
import Contact from './components/views/Contact';
import Courses from './components/views/Courses';
import Error404 from './components/views/Error404';
import TermsConditions from './components/views/Terms_Conditions';
import PrivacyPolicy from './components/views/PrivacyPolicy';
// import Tryouts from './components/views/Tryouts';

function Routing() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/case_studies' element={<CaseStudies />}></Route>
      <Route exact path='/services' element={<Services />}></Route>
      <Route exact path='/courses' element={<Courses />}></Route>
      <Route exact path='/contact_us' element={<Contact />}></Route>
      <Route exact path='/terms' element={<TermsConditions />}></Route>
      <Route exact path='/privacy_policy' element={<PrivacyPolicy />}></Route>
      <Route path ='/*' element={<Error404 />}></Route>
      {/* <Route exact path='/tryouts' element={<Tryouts />}></Route> */}
    </Routes>
  );
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
