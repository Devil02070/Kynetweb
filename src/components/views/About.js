import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import Loaderanimation from '../common/Loaderanimation'
import Marquee from '../common/Marquee';
import Bannervectors from '../common/Bannervectors';
import { team } from '../../utils/constants';
import aboutImg from '../../assets/images/Rectangle 27.png'
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <Loaderanimation title='About' />
      {/* -----------------------------------------------------ABOUT--------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <section className='about bg-dark page-banner animate-up text-light' id="about">
        <h3 className="bg-text">about</h3>
        <Bannervectors />
        <div className="container page-heading">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Developing digital everything for ambitious brands.</h2>
              <p className='mt-3'>Welcome to Kynet Web Solutions Private Limited, where we transform ideas into impactful digital experiences. As a trusted partner in web development and design, we specialize in crafting unique, user-friendly websites that elevate brands and drive growth.</p>
              <p className='mt-3'>With expertise in both frontend and backend development, we offer a full range of web solutions to meet the evolving needs of businesses today. From engaging web design to robust backend architecture, our team of experienced developers is skilled in creating custom, scalable websites tailored to your vision. We excel in WordPress development, delivering intuitive sites with seamless functionality that are easy to manage and built to last.</p>
            </div>
            <div className="col-12 col-md-6 about-img">
              <img src={aboutImg} alt="" className='w-100' />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-secondary pb-120 websites'>
        <div className="container">
          <h3 className="text-md-light">Pricing</h3>
          <div className="row">
            <div className="col-12 col-md-6 pe-4">
              <h2>Our Pricing Structure</h2>
              <p>Our pricing structure depends on the scope, complexity, and specific needs of each project. Below is a general outline:</p>
              <ul className="list-unstyled mt-5">
                <li className='mt-3 fs-5'><strong>Website Design:</strong> Starting at <span className="price">$500</span></li>
                <li className='mt-3 fs-5'><strong>Website Development:</strong> Starting at <span className="price">$1000</span></li>
                <li className='mt-3 fs-5'><strong>E-commerce Solutions:</strong> Starting at <span className="price">$1500</span></li>
                <li className='mt-3 fs-5'><strong>Custom WordPress Development:</strong> Starting at <span className="price">$1200</span></li>
              </ul>
              <p>Contact us for a detailed quote tailored to your requirements.</p>
              <Link to='/contact_us'><button className='btn vcs-btn rounded-pill'>Contact Us</button></Link>

            </div>
            <div className="col-12 col-md-6 text-end pm-0">
              <img src={aboutImg} alt="Demo" className='w-100' />
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------TEAM--------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <section className="py-120 team d-none">
        <div className="container">
          <h2 className='inner'>Our digital team is experienced, curious & eager to work on your project.</h2>
          <div className="row team-row" >
            {
              team.map((tm, i) => {
                return (
                  <div key={i} className="st-card">
                    <div classname='profile-img'>
                      <img src={tm.profile} alt="" className='w-100' />
                    </div>
                    <h4 className='mt-3'>{tm.name}</h4>
                    <p classNamae='role mt-3'>{tm.role}</p>
                  </div>
                )
              })
            }

          </div>
        </div>
      </section>

      <Marquee />


    </>
  )
}

export default About
