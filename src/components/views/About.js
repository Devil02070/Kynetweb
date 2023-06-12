import React, { useEffect } from 'react'
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

  useEffect(() => {
    const team = document.querySelectorAll('.tm-row');
    team.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.classList.add('active');
      })
      item.addEventListener('mouseout', () => {
        item.classList.remove('active')
      });
    })

    const tab_items = document.querySelectorAll('.ls-item');
    const tab_imgs = document.querySelectorAll('.tab-img');
    tab_items.forEach(item => {
      item.addEventListener('mouseover', () => {
        tab_items.forEach(tab => {
          tab.classList.remove('active')
        })
        tab_imgs.forEach(img => [
          img.classList.remove('active')
        ])
        item.classList.add('active');
        const attribute_value = item.getAttribute('data-attr');
        tab_imgs.forEach(img => {

          if (img.getAttribute('data-attr') === attribute_value) {
            img.classList.add('active')
          }
        })
      })
      item.addEventListener('mouseout', () => {
        item.classList.remove('active')
      })
    })

    const cards = document.querySelectorAll('.dd-card');
    cards.forEach(card => {
      card.addEventListener('mouseover', () => {
        cards.forEach(item => {
          item.classList.remove('active')
        })
        card.classList.add('active')
      })
    })

    //     // Function to handle scroll event
    // function handleScroll() {
    //   var section = document.querySelector('.expand-section');
    //   var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //   var sectionOffsetTop = section.offsetTop;
    //   var sectionHeight = section.offsetHeight;
    //   var scrollPosition = scrollTop + windowHeight;

    //   if (scrollPosition > sectionOffsetTop && scrollPosition < sectionOffsetTop + sectionHeight) {
    //     var scrollPercentage = (scrollPosition - sectionOffsetTop) / sectionHeight;
    //     section.style.width = 40 + scrollPercentage * 60 + '%';
    //   }
    // }

    // // Add scroll event listener
    // window.addEventListener('scroll', handleScroll);

  }, [])
  return (
    <>
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
      {/* ***************************************************************************** */}
      {/* ***************************************************************************** */}
      {/* testing sections */}
      <section className='myteam pb-120'>
        <div className="container">
          <div className="row align-items-center tm-row">
            <div className="col-5 name">
              <h2 className="normal">Member Name</h2>
              <h2 className="hovered">Member Name</h2>
            </div>
            <div className="col-5"><img src={emp1} alt="" className='tm-profile' /></div>
            <div className="col-2"><p className='text-end'>Member Role</p></div>
          </div>
          <hr className="m-0 p-0" />
          <div className="row align-items-center tm-row">
            <div className="col-5 name">
              <h2 className="normal">Member Name</h2>
              <h2 className="hovered">Member Name</h2>
            </div>
            <div className="col-5"><img src={emp2} alt="" className='tm-profile' /></div>
            <div className="col-2"><p className='text-end'>Member Role</p></div>
          </div>
          <hr className="m-0 p-0" />
          <div className="row align-items-center tm-row">
            <div className="col-5 name">
              <h2 className="normal">Member Name</h2>
              <h2 className="hovered">Member Name</h2>
            </div>
            <div className="col-5"><img src={emp1} alt="" className='tm-profile' /></div>
            <div className="col-2"><p className='text-end'>Member Role</p></div>
          </div>
          <hr className="m-0 p-0" />
          <div className="row align-items-center tm-row">
            <div className="col-5 name">
              <h2 className="normal">Member Name</h2>
              <h2 className="hovered">Member Name</h2>
            </div>
            <div className="col-5"><img src={emp1} alt="" className='tm-profile' /></div>
            <div className="col-2"><p className='text-end'>Member Role</p></div>
          </div>
        </div>
      </section>
      <hr />

      <section className='img-tabs py-120'>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <ol className='d-flex'>
                <li className='ls-item active' data-attr='1'><sup>01</sup>Item1
                  <div className="line"></div></li>
                <li className='ls-item' data-attr='2'><sup>02</sup>Item2
                  <div className="line"></div></li>
                <li className='ls-item' data-attr='3'><sup>03</sup>Item3
                  <div className="line"></div></li>
                <li className='ls-item' data-attr='4'><sup>04</sup>Item4
                  <div className="line"></div></li>
                <li className='ls-item' data-attr='5'><sup>05</sup>Item5
                  <div className="line"></div></li>
                <li className='ls-item' data-attr='6'><sup>06</sup>Item6
                  <div className="line"></div></li>
              </ol>
            </div>
            <div className="col-6">
              <img src={emp1} alt="" className="tab-img active" data-attr='1' />
              <img src={emp2} alt="" className="tab-img" data-attr='2' />
              <img src={emp1} alt="" className="tab-img" data-attr='3' />
              <img src={emp2} alt="" className="tab-img" data-attr='4' />
              <img src={emp1} alt="" className="tab-img" data-attr='5' />
              <img src={emp2} alt="" className="tab-img" data-attr='6' />
            </div>
          </div>
        </div>
      </section>

      <section className='dd-section pb-120'>
        <div className="container-fluid">
          <div className="row">
            <div className="dd-card active">
              <div className="row">
                <div className="img-col img1">
                  <img src={emp1} alt="" className='' />
                  <h2 className='card-title '>Heading</h2>
                </div>
                <div className="content">
                  <p>01</p>
                  <h3>Heading</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, obcaecati soluta voluptates officiis unde debitis!</p>
                  <p>more...</p>
                </div>
              </div>
            </div>
            <div className="dd-card">
              <div className="row">
                <div className="img-col img2">
                  <img src={emp2} alt="" className='' />
                  <h2 className='card-title '>Heading</h2>
                </div>
                <div className="content">
                  <p>01</p>
                  <h3>Heading</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, obcaecati soluta voluptates officiis unde debitis!</p>
                  <p>more...</p>
                </div>
              </div>
            </div>
            <div className="dd-card">
              <div className="row">
                <div className="img-col img3">
                  <img src={emp1} alt="" className='' />
                  <h2 className='card-title '>Heading</h2>
                </div>
                <div className="content">
                  <p>01</p>
                  <h3>Heading</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, obcaecati soluta voluptates officiis unde debitis!</p>
                  <p>more...</p>
                </div>
              </div>
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
