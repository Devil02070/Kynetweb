import React, {useEffect} from 'react'

// import aboutImg from '../../assets/images/Rectangle 27.png'
import project1 from '../../assets/images/pj1.png'
import project2 from '../../assets/images/pj2.png'
import project3 from '../../assets/images/pj3.png'
import project4 from '../../assets/images/pj4.png'
// import cc2 from '../../assets/images/est.png'
const CaseStudies = () => {
  useEffect(()=>{
    const cards = document.querySelectorAll('.cs-card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
        cards.forEach(card => {
            card.classList.remove('active');
        });
        card.classList.add('active');
        });
    });
  },[])
  return (
    <>
      {/* -----------------------------------------------------ABOUT--------------------------------------------------------- */}
      {/* -------------------------------------------------------------------------------------------------------------------- */}
      <section className='cs page-banner bg-dark animate-up text-light' id="cs">
        <h3 className="bg-text">case studies</h3>
        <div className="vectors">
          <div className='bg-vector ip-bvc1 p-0'></div>
          <div className='bg-vector ip-bvc2 p-0'></div>
          <div className='bg-vector ip-bvc3 p-0'></div>
          <div className='bg-vector ip-bvc4 p-0'></div>
          <div className='bg-vector ip-bvc5 p-0'></div>
        </div>
        <div className="container page-heading">
          <div className="row">
            <div className="col-12 col-md-12 w-50 m-0 p-0 wm-100">
              <h2 className='inner'>Creative outcomes that drive real results.</h2>
              <p className='mt-3'>Here are some of the clients we have worked with and what we have achieved.</p>
            </div>
          </div>
        </div>
        <div className="container projects">
          <div className="row d-flex gap-5">
            <div className="box w-47 cs-card">
              <div className="card-img">
                <img src={project1} alt="" className='w-100' />
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
                <div className="col-12 col-md-7">
                  <h3>Hi And Dry</h3>
                  <p>type</p>
                </div>
                <div className="col-12 col-md-5 text-end">
                  <button class="btn rounded-pill light m-auto text-light mt-3 view-cs-btn">View Case Study</button>
                </div>
              </div>
            </div>
            <div className="box w-47 cs-card">
              <div className="card-img">
                <img src={project2} alt="" className='w-100' />
              </div>
              <div className="row">
                <span class="tags-light">BRANDING</span>
                <span class="tags-light">USER EXPERIENCE</span>
                <span class="tags-light">USER INTERFACE</span>
                <span class="tags-light">WEBSITE DESIGN</span>
                <span class="tags-light">GOOGLE ADS</span>
              </div>
              <div className="row">
                <div className="col-12 col-md-7">
                  <h3>Alessi Realty Group</h3>
                  <p>type</p>
                </div>
                <div className="col-12 col-md-5 text-end">
                  <button class="btn rounded-pill light m-auto text-light mt-3 view-cs-btn">View Case Study</button>
                </div>
              </div>
            </div>

            <div className="box w-47 cs-card">
              <div className="card-img">
                <img src={project3} alt="" className='w-100' />
              </div>
              <div className="row">
                <span class="tags-light">BRANDING</span>
                <span class="tags-light">USER EXPERIENCE</span>
                <span class="tags-light">WEBSITE DEVELOPMENT</span>
                <span class="tags-light">GOOGLE ADS</span>
                <span class="tags-light">SOCIALS</span>
              </div>
              <div className="row">

                <div className="col-12 col-md-7">
                  <h3>LehighValley Roofers</h3>
                  <p>type</p>
                </div>
                <div className="col-12 col-md-5 text-end">
                  <button class="btn rounded-pill light m-auto text-light mt-3 view-cs-btn">View Case Study</button>
                </div>
              </div>

            </div>
            <div className="box w-47 cs-card">
              <div className="card-img">
                <img src={project4} alt="" className='w-100' />
              </div>
              <div className="row">
                <span class="tags-light">BRANDING</span>
                <span class="tags-light">WEBSITE DESIGN</span>
                <span class="tags-light">WEBSITE DEVELOPMENT</span>
                <span class="tags-light">GOOGLE ADS</span>
                <span class="tags-light">SOCIALS</span>
              </div>
              <div className="row">

                <div className="col-12 col-md-7">
                  <h3>Hamilton Machenical Services</h3>
                  <p>type</p>
                </div>
                <div className="col-12 col-md-5 text-end">
                  <button class="btn rounded-pill light m-auto text-light mt-3 view-cs-btn">View Case Study</button>
                </div>
              </div>
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
        <div className="line line5 text-light d-flex justify-content-center fs-1">Case Study</div>
        <div className="line line6"></div>
        <div className="line line7"></div>
        <div className="line line8"></div>
        <div className="line line9"></div>
      </section>


    </>
  )
}

export default CaseStudies
