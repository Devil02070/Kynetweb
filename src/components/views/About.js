import React from 'react'
import 'react-multi-carousel/lib/styles.css';

import Loaderanimation from '../common/Loaderanimation'

// import { useEffect, useRef, useState } from 'react';

import emp1 from '../../assets/images/umang-fun.jpg'
import emp2 from '../../assets/images/eliza-fun.jpg'
import aboutImg from '../../assets/images/Rectangle 27.png'
const About = () => {
  return (
    <>
    <Loaderanimation title='About'/>
      {/* -----------------------------------------------------ABOUT--------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <section className='about bg-dark page-banner animate-up text-light' id="about">
        <h3 className="bg-text">about</h3>
        <div className="vectors">
          <div className='bg-vector ip-bvc1 p-0'></div>
          <div className='bg-vector ip-bvc2 p-0'></div>
          <div className='bg-vector ip-bvc3 p-0'></div>
          <div className='bg-vector ip-bvc4 p-0'></div>
          <div className='bg-vector ip-bvc5 p-0'></div>
        </div>
        <div className="container page-heading">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Developing digital everything for ambitious brands.</h2>
              <p className='mt-3'>We are a digital agency in Melbourne, helping organisations and eCommerce brands in building their brand with a user-centric designed website accompanied with multi-channel digital marketing strategies. We are a digital agency in Melbourne, helping organisations and eCommerce brands in building their brand with a user-centric designed website accompanied with multi-channel digital marketing strategies.</p>
              <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi doloremque nulla sequi omnis nobis itaque cumque fugiat officia perspiciatis tempora nihil veniam, architecto fugit minima minus impedit odit quibusdam nam, et sint earum? Beatae. Lorem ipsum sit amet consectetur adipisicing elit. Maxime iure reiciendis lorem5
              </p>
            </div>
            <div className="col-12 col-md-6 about-img">
              <img src={aboutImg} alt="" className='w-100' />
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------TEAM--------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <section className="py-120 team">
        <div className="container">
          <h2 className='inner'>Our digital team is experienced, curious & eager to work on your project.</h2>
          <div className="row team-row" >
            <div className="st-card">
              <div classname='profile-img'>
                <img src={emp2} alt="" className='w-100' />
              </div>
              <h4 className='mt-3'>Rekha Sharma</h4>
              <p classNamae='role mt-3'>Founder</p>
            </div>
            <div className="st-card">
              <div classname='profile-img'>
                <img src={emp1} alt="" className='w-100' />
              </div>
              <h4 className='mt-3'>Prashant Thakur</h4>
              <p classNamae='role mt-3'>Manager</p>
            </div>
            <div className="st-card">
              <div classname='profile-img'>
                <img src={emp1} alt="" className='w-100' />
              </div>
              <h4 className='mt-3'>Sunil Kumar</h4>
              <p classNamae='role mt-3'>Full-Stack Developer</p>
            </div>
            <div className="st-card">
              <div classname='profile-img'>
                <img src={emp1} alt="" className='w-100' />
              </div>
              <h4 className='mt-3'>Ajay Kumar</h4>
              <p classNamae='role mt-3'>Full-Stack Developer</p>
            </div>
            <div className="st-card">
              <div classname='profile-img'>
                <img src={emp2} alt="" className='w-100' />
              </div>
              <h4 className='mt-3'>Komal Thakur</h4>
              <p classNamae='role mt-3'>Frontend Developer</p>
            </div>
            <div className="st-card">
              <div classname='profile-img'>
                <img src={emp1} alt="" className='w-100' />
              </div>
              <h4 className='mt-3'>Satish Thakur</h4>
              <p classNamae='role mt-3'>Full-Stack Developer</p>
            </div>
            <div className="st-card">
              <div classname='profile-img'>
                <img src={emp1} alt="" className='w-100' />
              </div>
              <h4 className='mt-3'>Rajesh Sharma</h4>
              <p classNamae='role mt-3'>Full-Stack Developer</p>
            </div>
            <div className="st-card">
              <div classname='profile-img'>
                <img src={emp2} alt="" className='w-100' />
              </div>
              <h4 className='mt-3'>Pooja Sharma</h4>
              <p classNamae='role mt-3'>Full-Stack Developer</p>
            </div>
            <div className="st-card">
              <div classname='profile-img'>
                <img src={emp1} alt="" className='w-100' />
              </div>
              <h4 className='mt-3'>Mayank Thakur</h4>
              <p classNamae='role mt-3'>Web Developer</p>
            </div>
            <div className="st-card">
              <div classname='profile-img'>
                <img src={emp1} alt="" className='w-100' />
              </div>
              <h4 className='mt-3'>Tarun Thakur</h4>
              <p classNamae='role mt-3'>Web Developer</p>
            </div>
            <div className="st-card">
              <div classname='profile-img'>
                <img src={emp1} alt="" className='w-100' />
              </div>
              <h4 className='mt-3'>Pankaj Sharma</h4>
              <p classNamae='role mt-3'>Web Developer</p>
            </div>
            <div className="st-card">
              <div classname='profile-img'>
                <img src={emp1} alt="" className='w-100' />
              </div>
              <h4 className='mt-3'>Nikhil Saini</h4>
              <p classNamae='role mt-3'>UX/UI Designer</p>
            </div>
            <div className="st-card">
              <div classname='profile-img'>
                <img src={emp2} alt="" className='w-100' />
              </div>
              <h4 className='mt-3'>Poonam Thakur</h4>
              <p classNamae='role mt-3'>UX/UI Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* ***************************************************************************** */}
      {/* ***************************************************************************** */}

      <section className='scroll-main'>
        <div className="scroll-left d-flex align-items-center py-2">
          <div className='mrq-text'>Videographers</div><div className='dash'></div>
          <div className='mrq-text'>Developers</div><div className='dash'></div>
          <div className='mrq-text'>Content Planners</div><div className='dash'></div>
          <div className='mrq-text'>Copywriters</div><div className='dash'></div>
          <div className='mrq-text'>Designers</div><div className='dash'></div>
          <div className='mrq-text'>Videographers</div><div className='dash'></div>
          <div className='mrq-text'>Developers</div><div className='dash'></div>
        </div>
        <div className="gap"></div>
        <div className="scroll-right d-flex align-items-center py-1">
          <div className='mrq-text'>Videographers</div><div className='dash'></div>
          <div className='mrq-text'>Developers</div><div className='dash'></div>
          <div className='mrq-text'>Content Planners</div><div className='dash'></div>
          <div className='mrq-text'>Copywriters</div><div className='dash'></div>
          <div className='mrq-text'>Designers</div><div className='dash'></div>
          <div className='mrq-text'>Videographers</div><div className='dash'></div>
          <div className='mrq-text'>Developers</div><div className='dash'></div>
        </div>
      </section>
    </>
  )
}

export default About
