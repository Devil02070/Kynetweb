import React from 'react'

import aboutImg from '../../assets/images/Rectangle 27.png'
const CaseStudies = () => {
  return (
    <>
      {/* -----------------------------------------------------ABOUT--------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <section className='about text-light page-banner' id="about">
        <h3 class="bg-text">Case Studies</h3>
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
      <section className="loader">
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
        <div className="line line4 text-light d-flex justify-content-center fs-1">Case Studies</div>
        <div className="line line5"></div>
        <div className="line line6"></div>
        <div className="line line7"></div>
      </section>
    </>
  )
}

export default CaseStudies
