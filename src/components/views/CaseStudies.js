import React from 'react'

import aboutImg from '../../assets/images/Rectangle 27.png'
// import cc2 from '../../assets/images/est.png'
const CaseStudies = () => {
  return (
    <>
      {/* -----------------------------------------------------ABOUT--------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <section className='cs page-banner bg-dark animate-up text-light' id="cs">
        <h3 class="bg-text text-md">Case Studies</h3>
        <div className="container page-heading">
          <div className="row">
            <div className="col-12 col-md-12 w-50 m-0 p-0">
              <h2 className='inner'>Creative outcomes that drive real results.</h2>
              <p className='mt-3'>Here are some of the clients we have worked with and what we have achieved.</p>
            </div>
          </div>
        </div>
        <div className="container projects">
          <div className="row d-flex gap-5">
            <div className="box w-47 cs-card">
              <div className="card-img">
                <img src={aboutImg} alt="" className='w-100' />
              </div>
              <div className="row">
                <span class="tags-light">BRANDING</span>
                <span class="tags-light">USER EXPERIENCE</span>
                <span class="tags-light">USER INTERFACE</span>
                <span class="tags-light">WEBSITE DESIGN</span>
                <span class="tags-light">WEBSITE DEVELOPMENT</span>
                <span class="tags-light">GOOGLE ADS</span>
                <span class="tags-light">SOCIALS</span>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <h3>Project Name</h3>
                  <p>type</p>
                </div>
                <div className="col-12 col-md-6 text-end">
                  <button class="btn rounded-pill light m-auto text-light mt-3">View Case Study</button>
                </div>
              </div>
            </div>
             <div className="box w-47 cs-card">
              <div className="card-img">
                <img src={aboutImg} alt="" className='w-100' />
              </div>
              <div className="row">
                <span class="tags-light">BRANDING</span>
                <span class="tags-light">USER EXPERIENCE</span>
                <span class="tags-light">USER INTERFACE</span>
                <span class="tags-light">WEBSITE DESIGN</span>
                <span class="tags-light">GOOGLE ADS</span>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <h3>Project Name</h3>
                  <p>type</p>
                </div>
                <div className="col-12 col-md-6 text-end">
                  <button class="btn rounded-pill light m-auto text-light mt-3">View Case Study</button>
                </div>
              </div>
            </div>
            
            <div className="box w-47 cs-card">
              <img src={aboutImg} alt="" className='w-100' />
              <div className="row">
                <span class="tags-light">BRANDING</span>
                <span class="tags-light">USER EXPERIENCE</span>
                <span class="tags-light">WEBSITE DEVELOPMENT</span>
                <span class="tags-light">GOOGLE ADS</span>
                <span class="tags-light">SOCIALS</span>
              </div>
              <div className="row">

                <div className="col-12 col-md-6">
                  <h3>Project Name</h3>
                  <p>type</p>
                </div>
                <div className="col-12 col-md-6 text-end">
                  <button class="btn rounded-pill light m-auto text-light mt-3">View Case Study</button>
                </div>
              </div>

            </div>
            <div className="box w-47 cs-card">
              <img src={aboutImg} alt="" className='w-100' />
              <div className="row">
                <span class="tags-light">BRANDING</span>
                <span class="tags-light">WEBSITE DESIGN</span>
                <span class="tags-light">WEBSITE DEVELOPMENT</span>
                <span class="tags-light">GOOGLE ADS</span>
                <span class="tags-light">SOCIALS</span>
              </div>
              <div className="row">

                <div className="col-12 col-md-6">
                  <h3>Project Name</h3>
                  <p>type</p>
                </div>
                <div className="col-12 col-md-6">
                  <button class="btn rounded-pill light m-auto text-light mt-3">View Case Study</button>
                </div>
              </div>
            </div>
          </div>
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


      <div id="container">
        <div id="inner">
          <div class="demo-img">
            <div class="demo-overlay">

            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default CaseStudies