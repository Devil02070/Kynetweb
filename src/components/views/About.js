import React from 'react'
import 'react-multi-carousel/lib/styles.css';

// import { useEffect, useRef, useState } from 'react';

import emp1 from '../../assets/images/umang-fun.jpg'
import emp2 from '../../assets/images/eliza-fun.jpg'
import aboutImg from '../../assets/images/Rectangle 27.png'
const About = () => {
  // const sectionRef = useRef(null);
  // const [inView, setInView] = useState(false);

  // useEffect(() => {
  // const observer = new IntersectionObserver(
  //   ([entry]) => {
  //     setInView(entry.isIntersecting);
  //   },
  //   {
  //     // Set the root margin to trigger the intersection a little earlier or later
  //     rootMargin: '0px 0px -50% 0px',
  //   }
  // );

  // if (sectionRef.current) {
  //   observer.observe(sectionRef.current);
  // }

  // return () => {
  //   if (sectionRef.current) {
  //     observer.unobserve(sectionRef.current);
  //   }
  // };
  // }, [sectionRef]);
  return (
    <>
      {/* -----------------------------------------------------ABOUT--------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <section className='about bg-dark page-banner animate-up text-light' id="about">
        <h3 class="bg-text">about</h3>
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
          {/* <div ref={sectionRef} className={`row team-row ${inView ? 'visible' : ''}`} > */}
          <div className="row team-row" >
            <div className="st-card">
              <img src={emp1} alt="" className='w-100' />
              <h4 className='mt-3'>name</h4>
              <p classNamae='role mt-3'>role</p>
            </div>
            <div className="st-card">
              <img src={emp2} alt="" className='w-100' />
              <h4 className='mt-3'>name</h4>
              <p classNamae='role mt-3'>role</p>
            </div>
            <div className="st-card">
              <img src={emp1} alt="" className='w-100' />
              <h4 className='mt-3'>name</h4>
              <p classNamae='role mt-3'>role</p>
            </div>
            <div className="st-card">
              <img src={emp2} alt="" className='w-100' />
              <h4 className='mt-3'>name</h4>
              <p classNamae='role mt-3'>role</p>
            </div>
            <div className="st-card">
              <img src={emp1} alt="" className='w-100' />
              <h4 className='mt-3'>name</h4>
              <p classNamae='role mt-3'>role</p>
            </div>
            <div className="st-card">
              <img src={emp2} alt="" className='w-100' />
              <h4 className='mt-3'>name</h4>
              <p classNamae='role mt-3'>role</p>
            </div>
            <div className="st-card">
              <img src={emp1} alt="" className='w-100' />
              <h4 className='mt-3'>name</h4>
              <p classNamae='role mt-3'>role</p>
            </div>
            <div className="st-card">
              <img src={emp2} alt="" className='w-100' />
              <h4 className='mt-3'>name</h4>
              <p classNamae='role mt-3'>role</p>
            </div>
            <div className="st-card">
              <img src={emp1} alt="" className='w-100' />
              <h4 className='mt-3'>name</h4>
              <p classNamae='role mt-3'>role</p>
            </div>
          </div>
        </div>
      </section>
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

      <section className="loader">
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
        <div className="line line4"></div>
        <div className="line line5 text-light d-flex justify-content-center fs-1">About</div>
        <div className="line line6"></div>
        <div className="line line7"></div>
        <div className="line line8"></div>
        <div className="line line9"></div>
      </section>
    </>
  )
}

export default About
