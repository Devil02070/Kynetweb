import React from 'react'

import icon from '../../assets/images/Oval.png'
import aboutImg from '../../assets/images/Rectangle 27.png'
const Courses = () => {
    return (
        <>
            <section className='bg-dark page-banner animate-up text-light' >
                <h3 class="bg-text">courses</h3>
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
                            <h2 className='inner'>What We Offer.</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi doloremque nulla sequi omnis nobis itaque cumque fugiat officia perspiciatis tempora nihil veniam, architecto fugit minima minus impedit odit quibusdam nam, et sint earum? Beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iure reiciendis quibusdam ducimus nostrum autem unde recusandae animi minus ea, repellendus sequi eos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, error! Eaque unde, at eveniet ipsam molestias aliquam quae a suscipit perspiciatis voluptatibus, repellendus consequatur! Officia nesciunt recusandae atque assumenda laudantium.</p>
                        </div>
                        <div className="col-12 col-md-6 about-img">
                            <img src={aboutImg} alt="" className='w-100' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-120 courses'>
                <div className="container">
                    <div className="row d-flex flex-wrap gap-4">
                        <div className="course-card w-32">
                            <img src={icon} alt="" />
                            {/* <div className="csl-img d-flex align-items-center justify-content-center"><h3>html</h3></div> */}
                            <h4 className='mt-2'>Course Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur saepe ut incidunt dolorum fugit assumenda nostrum, nobis architecto voluptas.</p>
                        </div>
                        <div className="course-card w-32">
                            <img src={icon} alt="" />
                            <h4 className='mt-2'>Course Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur saepe ut incidunt dolorum fugit assumenda nostrum, nobis architecto voluptas.</p>
                        </div>
                        <div className="course-card w-32">
                            <img src={icon} alt="" />
                            <h4 className='mt-2'>Course Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur saepe ut incidunt dolorum fugit assumenda nostrum, nobis architecto voluptas.</p>
                        </div>
                        <div className="course-card w-32">
                            <img src={icon} alt="" />
                            <h4 className='mt-2'>Course Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur saepe ut incidunt dolorum fugit assumenda nostrum, nobis architecto voluptas.</p>
                        </div>
                        <div className="course-card w-32">
                            <img src={icon} alt="" />
                            <h4 className='mt-2'>Course Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur saepe ut incidunt dolorum fugit assumenda nostrum, nobis architecto voluptas.</p>
                        </div>
                        <div className="course-card w-32">
                            <img src={icon} alt="" />
                            <h4 className='mt-2'>Course Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur saepe ut incidunt dolorum fugit assumenda nostrum, nobis architecto voluptas.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='scroll-main courses-scroll'>
                <div className="scroll-left d-flex align-items-center py-2">
                    <div className='mrq-text'>Web Development</div><div className='dash'></div>
                    <div className='mrq-text'>Web Designing</div><div className='dash'></div>
                    <div className='mrq-text'>Logo Designing</div><div className='dash'></div>
                    <div className='mrq-text'>Branding</div><div className='dash'></div>
                    <div className='mrq-text'>Responsive Design</div><div className='dash'></div>
                    <div className='mrq-text'>Live Websites</div><div className='dash'></div>
                </div>
                <div className="gap"></div>
                <div className="scroll-right d-flex align-items-center py-1">
                    <div className='mrq-text'>Web Development</div><div className='dash'></div>
                    <div className='mrq-text'>Web Designing</div><div className='dash'></div>
                    <div className='mrq-text'>Logo Designing</div><div className='dash'></div>
                    <div className='mrq-text'>Branding</div><div className='dash'></div>
                    <div className='mrq-text'>Responsive Design</div><div className='dash'></div>
                    <div className='mrq-text'>Live Websites</div><div className='dash'></div>
                </div>
            </section>

            <section className="loader">
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
                <div className="line line4"></div>
                <div className="line line5 text-light d-flex justify-content-center fs-1">Courses</div>
                <div className="line line6"></div>
                <div className="line line7"></div>
                <div className="line line8"></div>
                <div className="line line9"></div>
            </section>
        </>
    )
}

export default Courses
