import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//Banner
import bannervc1 from '../assets/images/Rectangle 45.png'
import bannervc2 from '../assets/images/Rectangle 40.png'
import bannervc3 from '../assets/images/Rectangle 44.png'
import bannervc4 from '../assets/images/Rectangle 41.png'
import bannervc5 from '../assets/images/Rectangle 42.png'
import bannervc6 from '../assets/images/Rectangle 43.png'

// import arrow from '../assets/images/Line 10.png'
//carousal
import crImg1 from '../assets/images/Group 47.png'
// Cards
import cardImg from '../assets/images/image 12.png'
import cardImg2 from '../assets/images/image 13.png'
//services
import servicesImg from '../assets/images/Group 59.png'
import svec1 from '../assets/images/Group(2).png'
import svec2 from '../assets/images/icon-websites.png'
import svec3 from '../assets/images/icon-brand 1.png'
//about
import aboutImg from '../assets/images/Rectangle 27.png'

import test1 from '../assets/images/Rectangle 18(1).png'
import test2 from '../assets/images/Rectangle 18(2).png'
import test3 from '../assets/images/Rectangle 18(3).png'
import quote from '../assets/images/quote.png'

// import media from '../assets/Untitled.mp4'
// import media from '../assets/home-media.mp4'
import media from '../assets/media3.mp4'

import { ImPlay3 } from 'react-icons/im'



const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1501 },
      items: 3.5,
      slidesToSlide: 1,
    },
    laptop: {
      breakpoint: { max: 1500, min: 1200 },
      items: 2.8,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1199, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  let myVideo = document.getElementById("sitemedia");
  console.log(myVideo)

  const playPause = () => {
    if (myVideo.paused) {
      myVideo.play();
    } else {
      myVideo.pause();
    }
  }

  return (
    <>
      {/* -----------------------------------------------------Banner--------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <section className='banner text-light' id="banner">
        <div className="container">
          <div className="row">
            <img src={bannervc1} alt="" className='bvc1 p-0' />
            <img src={bannervc2} alt="" className='bvc2 p-0' />

            <img src={bannervc3} alt="" className='bvc3 p-0' />
            <img src={bannervc4} alt="" className='bvc4 p-0' />
            <img src={bannervc5} alt="" className='bvc5 p-0' />
            <img src={bannervc6} alt="" className='bvc6 p-0' />
            {/* <img src={arrow} alt="" className='toper' /> */}
            <div className="col-5 col-md-6">
              <h1 className="main-heading">Take your <span className='bn-txt'>brand to new heights.</span></h1>
              <p>We are a digital agency focused on <strong>Brand</strong>, <strong>Web Design</strong> & <strong>Digital Marketing.</strong></p>
              <button className='btn rounded-pill text-light'>Get Started</button>
            </div>
            <div className="col-7 col-md-6"></div>
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section className='media-overlay'>
        <h2>A digital agency for <span>ambitious brands</span></h2>
        <video autoPlay muted loop className="media1 text-light text-center" src={media} id="sitemedia"></video>
        <button onClick={playPause} className="media-play-btn bg-transparent rounded-circle"><ImPlay3 className='pause-icon' /></button>
      </section>

      {/* -----------------------------------------------------WORK--------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <section className='vertical-cr'>
        <h2 class="bg-text">work</h2>
        <div className="container">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <img src={crImg1} className="w-100" alt="cr-1" />
                  </div>
                  <div className="col-12 col-md-6">
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">BRANDING</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">USER EXPERIENCE</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">USER INTERFACE</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">WEBSITE DESIGN</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">WEBSITE DEVELOPMENT</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">GOOGLE ADS</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">SOCIALS</button>
                    <h2>An illuminating shopping experience.</h2>
                    <h4>Light My Bricks</h4>
                    <p className='meta'>E-commerce</p>
                    <button className='btn vcs-btn rounded-pill'>View Case Study</button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <img src={crImg1} className="w-100" alt="cr-1" />
                  </div>
                  <div className="col-12 col-md-6">
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">BRANDING</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">USER EXPERIENCE</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">USER INTERFACE</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">WEBSITE DESIGN</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">WEBSITE DEVELOPMENT</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">GOOGLE ADS</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">SOCIALS</button>
                    <h2>An illuminating shopping experience.</h2>
                    <h4>Light My Bricks</h4>
                    <p className='meta'>E-commerce</p>
                    <button className='btn vcs-btn rounded-pill'>View Case Study</button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <img src={crImg1} className="w-100" alt="cr-1" />
                  </div>
                  <div className="col-12 col-md-6">
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">BRANDING</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">USER EXPERIENCE</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">USER INTERFACE</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">WEBSITE DESIGN</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">WEBSITE DEVELOPMENT</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">GOOGLE ADS</button>
                    <button class="btn rounded-pill btn-tags mt-2 ms-2">SOCIALS</button>
                    <h2>An illuminating shopping experience.</h2>
                    <h4>Light My Bricks</h4>
                    <p className='meta'>E-commerce</p>
                    <button className='btn vcs-btn rounded-pill'>View Case Study</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
          </div>
        </div>
      </section>


      {/* -----------------------------------------------------CODE/DESIGN--------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <section className='sec-4 bg-dark text-light'>
        <div className="container">
          <div className="row text-center m-auto">
            <div className="col-12 p-0">
              {/* <h2 class="m-auto">We design & build frontend apps for brands who want to break barriers and accelerate growth.</h2> */}
              <h2 class="m-auto">We design & build </h2>
              <h2 class="m-auto">frontend apps for brands who want to break barriers and accelerate growth.</h2>
              <button class="btn rounded-pill light m-auto text-light">Let's Talk</button>
            </div>
          </div>
          <div className="row m-auto cards text-center card-row">
            <div className="col design me-3">
              <h4>Stand out</h4>
              <p>from the crowd</p>
              <img src={cardImg} alt="" className="w-100" />
              <h3>DESIGN TO REMEMBER</h3>
              <p>UX/UI Designs</p>
              <p className='env'>Websites. Mobile Apps. Brands.</p>
            </div>
            <div className="col code ms-3">
              <h4>Exceptional</h4>
              <p>build quality</p>
              <img src={cardImg2} alt="" className="w-100" />
              <h3>CODE TO PERFORM</h3>
              <p>Front End HTML</p>
              <p className='env'>HTML. CSS. JS. Bootstrap. WP</p>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------SERVICES--------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <section className='services' id="services">
        <h2 class="bg-text">services</h2>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="row sv-first">
                <div className="col-12 col-md-1"><img src={svec1} alt="" /></div>
                <div className="col-12 col-md-11">
                  <h2>Digital Marketing</h2>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">BRANDING</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">USER EXPERIENCE</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">USER INTERFACE</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">WEBSITE DESIGN</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">WEBSITE DEVELOPMENT</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">GOOGLE ADS</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">SOCIALS</button>
                </div>
              </div>
              <div className="row">
                <div className="col-1 col-md-1"><img src={svec2} alt="" /></div>
                <div className="col-11 col-md-11">
                  <h2>Websites</h2>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">BRANDING</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">USER EXPERIENCE</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">USER INTERFACE</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">WEBSITE DESIGN</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">WEBSITE DEVELOPMENT</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">GOOGLE ADS</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">SOCIALS</button>
                </div>
              </div>
              <div className="row active">
                <div className="col-1 col-md-1"><img src={svec3} alt="" /></div>
                <div className="col-11 col-md-11">
                  <h2>Branding</h2>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">BRANDING</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">USER EXPERIENCE</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">USER INTERFACE</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">WEBSITE DESIGN</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">WEBSITE DEVELOPMENT</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">GOOGLE ADS</button>
                  <button class="btn rounded-pill btn-tags-light mt-2 ms-2">SOCIALS</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-center svc-img">
              <img src={servicesImg} alt="" className='w-100' />
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------GRID CARD--------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      {/* <section className='sec-6 text-light'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex align-items-end">
              <h2>We trust our work process that makes us to achieve outstanding results.</h2>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col card-grad grad-1 me-3">
                  <span className='number'>1</span>
                  <h4 className='text-center'>Ideate</h4>
                  <ul>
                    <li>Questionnaire</li>
                    <li>Research</li>
                    <li>Consulting</li>
                    <li>Planning</li>
                    <li>Build Strategy</li>
                  </ul>
                </div>
                <div className="col card-grad grad-2 me-3">
                <span className='number'>2</span>
                  <h4 className='text-center'>Design</h4>
                  <ul>
                    <li>User Research</li>
                    <li>Target Audience</li>
                    <li>Interviews</li>
                    <li>User Experience Flows</li>
                    <li>User Interface Design</li>
                    <li>Prototyping</li>
                    <li>Testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5">
              <p className='mt-3'>The first place a potential customer will notice you is on the web. So it is imperative that your website be professional, beautiful, and easily navigable. That's where we come in. We make sure your first impression is a lasting one. In a good way.</p>
              <button class="btn rounded-pill light m-auto text-light mt-3">Get a Quote</button>
            </div>
            <div className="col-12 col-md-4">
              <div className="card-grad grad-3 mt-3">
              <span className='number'>3</span>
                <h4 className='text-center'>Frontend Development</h4>
                <ul>
                  <li>HTML / CSS</li>
                  <li>Responsive to all screens</li>
                  <li>Quality Check</li>
                  <li>Speed Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className='sec-6 text-light'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 pt-5">
              <h2>We trust our work process that makes us to achieve outstanding results.</h2>
              <p className='mt-3 w-75'>The first place a potential customer will notice you is on the web. So it is imperative that your website be professional, beautiful, and easily navigable. That's where we come in. We make sure your first impression is a lasting one. In a good way.</p>
              <button class="btn rounded-pill light m-auto text-light mt-3">Get a Quote</button>
            </div>
            <div className="col-12 col-md-6">
              <div className="row card-floating">
                <div className="col card-grad grad-1 me-4">
                  <span className='number'>1</span>
                  <h4 className='text-center'>Ideate</h4>
                  <ul>
                    <li>Questionnaire</li>
                    <li>Research</li>
                    <li>Consulting</li>
                    <li>Planning</li>
                    <li>Build Strategy</li>
                  </ul>
                </div>
                <div className="col card-grad grad-2 me-3">
                  <span className='number'>2</span>
                  <h4 className='text-center'>Design</h4>
                  <ul>
                    <li>User Research</li>
                    <li>Target Audience</li>
                    <li>Interviews</li>
                    <li>User Experience Flows</li>
                    <li>User Interface Design</li>
                    <li>Prototyping</li>
                    <li>Testing</li>
                  </ul>
                </div>
              </div>
              <div className="row card-extended">
                <div className="col-12 col-md-8">
                  <div className="card-grad grad-3 mt-4">
                    <span className='number'>3</span>
                    <h4 className='text-center'>Frontend Development</h4>
                    <ul>
                      <li>HTML / CSS</li>
                      <li>Responsive to all screens</li>
                      <li>Quality Check</li>
                      <li>Speed Optimization</li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------COURSES--------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <section className='courses-new'>
        <h3 class="bg-text">courses</h3>
        <div className="container">
          <div className="overlay-new">
            <div className="arrow p-0">
              <div className="row">
                <div className="col-12 col-md-6">
                  <h2 className=''>Web Development</h2>
                  <ul>
                    <li>Front-end development</li>
                    <li>CMS Development </li>
                    <li>Ecommerce Development</li>
                    <li>Back-end Development</li>
                  </ul>
                  <h2 className='dm'>Digital Marketing</h2>
                  <ul>
                    <li>SEO</li>
                    <li>Content Marketing</li>
                    <li>Facebook Marketing</li>
                    <li>Email Marketing</li>
                  </ul>
                </div>
                <div className="col-12 col-md-6 d-flex align-items-end">
                  <div className='w-50 ms-auto'>
                    <h2>Visual Design</h2>
                    <ul>
                      <li>Website Design</li>
                      <li>Mobile App Design</li>
                      <li>Graphics Design</li>
                      <li>Logo & Icon Design</li>
                      <li>Dashboard Design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------ABOUT--------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <section className='about text-light' id="about">
        <h3 class="bg-text">about</h3>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Developing digital everything for ambitious brands.</h2>
              <p className='mt-3'>We are a digital agency in Melbourne, helping organisations and eCommerce brands in building their brand with a user-centric designed website accompanied with multi-channel digital marketing strategies. We are a digital agency in Melbourne, helping organisations and eCommerce brands in building their brand with a user-centric designed website accompanied with multi-channel digital marketing strategies.</p>
              <button class="btn rounded-pill light m-auto text-light mt-3">More about us</button>
            </div>
            <div className="col-12 col-md-6 about-img">
              <img src={aboutImg} alt="" className='w-100' />
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------TESTIMONIAL--------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <section className='testmonial'>
        <h3 class="bg-text">testimonial</h3>
        <div className="container-fluid">
          <div className="row">
            <h2>Results that speak<br /> for themselves.</h2>
          </div>
          <div className="row">
            <Carousel responsive={responsive} arrows={true} showDots={false} infinite={true} slidesToScroll={1}>
              <div className='tst-card'>
                <img src={test1} alt="" class="m-auto" />
                <div className="content">
                  <img src={quote} alt="" />
                  <p>Big or small, Blank Theory is the company to speak to when it comes to website and marketing needs. </p>
                  <div className="name-bg">
                    <h3>LEGEAR</h3>
                    <h6>USA - Client</h6>
                  </div>
                </div>
              </div>
              <div className='tst-card'>
                <img src={test2} alt="" />
                <div className="content">
                  <img src={quote} alt="" />
                  <p>Big or small, Blank Theory is the company to speak to when it comes to website and marketing needs. </p>
                  <div className="name-bg">
                    <h3>MONILLA</h3>
                    <h6>Russia - Client</h6>
                  </div>
                </div>
              </div>
              <div className='tst-card'>
                <img src={test3} alt="" />
                <div className="content">
                  <img src={quote} alt="" />
                  <p>Big or small, Blank Theory is the company to speak to when it comes to website and marketing needs. </p>
                  <div className="name-bg">
                    <h3>SOEL DEHA</h3>
                    <h6>USA - Client</h6>
                  </div>
                </div>
              </div>
              <div className='tst-card'>
                <img src={test2} alt="" />
                <div className="content">
                  <img src={quote} alt="" />
                  <p>Big or small, Blank Theory is the company to speak to when it comes to website and marketing needs. </p>
                  <div className="name-bg">
                    <h3>BRIANT YOUN</h3>
                    <h6>USA - Client</h6>
                  </div>
                </div>
              </div>
              <div className='tst-card'>
                <img src={test3} alt="" />
                <div className="content">
                  <img src={quote} alt="" />
                  <p>Big or small, Blank Theory is the company to speak to when it comes to website and marketing needs. </p>
                  <div className="name-bg">
                    <h3>LEGEAR</h3>
                    <h6>USA - Client</h6>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>


    </>
  )
}

export default Home
