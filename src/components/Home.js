import React from 'react'

//Banner
import bannervc1 from '../assets/images/Rectangle 45.png'
import bannervc2 from '../assets/images/Rectangle 40.png'
import bannervc3 from '../assets/images/Rectangle 44.png'
import bannervc4 from '../assets/images/Rectangle 41.png'
import bannervc5 from '../assets/images/Rectangle 42.png'
import bannervc6 from '../assets/images/Rectangle 43.png'
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




const Home = () => {
  return (
    <>
      <section className='banner text-light'>
        <div className="container">
          <div className="row">
            <img src={bannervc1} alt="" className='bvc1 p-0' />
            <img src={bannervc2} alt="" className='bvc2 p-0' />

            <img src={bannervc3} alt="" className='bvc3 p-0' />
            <img src={bannervc4} alt="" className='bvc4 p-0' />
            <img src={bannervc5} alt="" className='bvc5 p-0' />
            <img src={bannervc6} alt="" className='bvc6 p-0' />
            <div className="col-5">
              <h1>Take your <span className='bn-txt'>brand to new heights.</span></h1>
              <p>We are a digital agency focused on <strong>Brand</strong>, <strong>Web Design</strong> & <strong>Digital Marketing.</strong></p>
              <button className='btn rounded-pill text-light'>Get Started</button>
            </div>
            <div className="col-7"></div>
          </div>
        </div>
      </section>
      <section class="media text-light text-center d-flex">
        <h2>A digital agency for <span>ambitious brands</span></h2>
      </section>

      <section className='vertical-cr'>
        <h2 class="bg-text">work</h2>
        <div className="container">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-6">
                    <img src={crImg1} className="w-100" alt="cr-1" />
                  </div>
                  <div className="col-6">
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
                  <div className="col-6">
                    <img src={crImg1} className="w-100" alt="cr-1" />
                  </div>
                  <div className="col-6">
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
                  <div className="col-6">
                    <img src={crImg1} className="w-100" alt="cr-1" />
                  </div>
                  <div className="col-6">
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
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button> */}
          </div>
        </div>
      </section>

      <section className='sec-4 bg-dark text-light'>
        <div className="container">
          <div className="row text-center m-auto">
            <div className="col-12">
              {/* <h2 class="m-auto">We design & build frontend apps for brands who want to break barriers and accelerate growth.</h2> */}
              <h2 class="m-auto">We design & build </h2>
              <h2 class="m-auto">frontend apps for brands who want to break barriers and accelerate growth.</h2>
              <button class="btn rounded-pill light m-auto text-light">Let's Talk</button>
            </div>
          </div>
          <div className="row m-auto cards text-center">
            <div className="col design me-3">
              <h4>Stand out</h4>
              <p>from the crowd</p>
              {/* <div className='blury'>
                <h2>UNIQUE</h2>
              </div> */}
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

      <section className='services'>
        <h2 class="bg-text">services</h2>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="row mt-5">
                <div className="col-1"><img src={svec1} alt="" /></div>
                <div className="col-11">
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
              <div className="row mt-5">
                <div className="col-1"><img src={svec2} alt="" /></div>
                <div className="col-11">
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
              <div className="row mt-5 active">
                <div className="col-1"><img src={svec3} alt="" /></div>
                <div className="col-11">
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
            <div className="col-4 d-flex align-items-center">
              <img src={servicesImg} alt="" className='w-100' />
            </div>
          </div>
        </div>
      </section>

      <section className='sec-6 text-light'>
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex align-items-end">
              <h2>We trust our work process that makes us to achieve outstanding results.</h2>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col card-grad grad-1 me-3">
                  <h3 class="text-center rounded-circle m-auto">1</h3>
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
                  <h3 class="text-center rounded-circle m-auto">2</h3>
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
            <div className="col-5">
              <p className='mt-3'>The first place a potential customer will notice you is on the web. So it is imperative that your website be professional, beautiful, and easily navigable. That's where we come in. We make sure your first impression is a lasting one. In a good way.</p>
              <button class="btn rounded-pill light m-auto text-light mt-3">Get a Quote</button>
            </div>
            <div className="col-4">
              <div className="card-grad grad-3 mt-3">
                <h3 class="text-center rounded-circle m-auto">3</h3>
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
      </section>

      <div className="overlay">
        <section className='courses'>
          <h3 class="bg-text">courses</h3>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h2 className='mt-4'>Web Development</h2>
                <ul>
                  <li>Front-end development</li>
                  <li>CMS Development </li>
                  <li>Ecommerce Development</li>
                  <li>Back-end Development</li>
                </ul>
                <h2 className='mt-5'>Digital Marketing</h2>
                <ul>
                  <li>SEO</li>
                  <li>Content Marketing</li>
                  <li>Facebook Marketing</li>
                  <li>Email Marketing</li>
                </ul>
              </div>
              <div className="col-6 d-flex align-items-end">
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
        </section>
      </div>

      <section className='about text-light'>
        <h3 class="bg-text">about</h3>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2>Developing digital everything for ambitious brands.</h2>
              <p className='mt-3'>We are a digital agency in Melbourne, helping organisations and eCommerce brands in building their brand with a user-centric designed website accompanied with multi-channel digital marketing strategies. We are a digital agency in Melbourne, helping organisations and eCommerce brands in building their brand with a user-centric designed website accompanied with multi-channel digital marketing strategies.</p>
              <button class="btn rounded-pill light m-auto text-light mt-3">More about us</button>
            </div>
            <div className="col-6">
              <img src={aboutImg} alt="" className='w-100' />
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Home
