import React from 'react'
import bannervc1 from '../assets/images/Rectangle 45.png'
import bannervc2 from '../assets/images/Rectangle 40.png'

import bannervc3 from '../assets/images/Rectangle 44.png'
import bannervc4 from '../assets/images/Rectangle 41.png'
import bannervc5 from '../assets/images/Rectangle 42.png'
import bannervc6 from '../assets/images/Rectangle 43.png'

const Home = () => {
  return (
    <>
      <section className='banner text-light'>
        <div className="container">
            <div className="row">
                <img src={bannervc1} alt="" className='bvc1 p-0'/>
                <img src={bannervc2} alt="" className='bvc2 p-0'/>

                <img src={bannervc3} alt="" className='bvc3 p-0'/>
                <img src={bannervc4} alt="" className='bvc4 p-0'/>
                <img src={bannervc5} alt="" className='bvc5 p-0'/>
                <img src={bannervc6} alt="" className='bvc6 p-0'/>
                <div className="col-5">
                    <h1>Take your brand to new heights.</h1>
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
      
    </>
  )
}

export default Home
