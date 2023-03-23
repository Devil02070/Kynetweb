import React from 'react';
import { Link } from 'react-router-dom'

import lineImg from '../assets/images/Line 12(1).png'
import Logo from '../assets/images/Group 19.png'
import letsGo from '../assets/images/Group 123.png'
import reviews from '../assets/images/reviews.png'

// ICONS
// import {AiOutlineInstagram} from 'react-icons/ai'
// import {AiOutlineYoutube} from 'react-icons/ai'

import { SlSocialInstagram } from 'react-icons/sl'
import { SlSocialFacebook } from 'react-icons/sl'
import { SlSocialYoutube } from 'react-icons/sl'
import { SlSocialLinkedin } from 'react-icons/sl'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Footer = () => {
    return (
        <>
            <section className='footer text-light'>
                <div className="container">
                    <div className="row">
                        <div className="col left-col">
                            <img src={lineImg} alt="" /><span class="ms-3">Contact Us</span>
                            <h2>Let’s kickstart your business success.</h2>
                            <div className="row contact-details">
                                <div className="col">
                                    <h5>Drop us a line</h5>
                                    <p>91 98732 19808</p>
                                </div>
                                <div className="col">
                                    <h5>Shoot us a message</h5>
                                    <p>info@kynetweb.com</p>
                                </div>
                                <div className="col">
                                    <h5>Come and Visit</h5>
                                    <p>#5/4 Hospital Rd, Mandi(HP) - 175001</p>
                                </div>
                            </div>
                        </div>
                        <div className="col right-col">
                            <div className="row align-items-center">
                                <div className="col-6"><img src={Logo} alt="" /></div>
                                <div className="col-6 text-end"><img src={letsGo} alt="" /></div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-12 footer-menu">
                                    <ul className='d-flex m-0 p-0'>
                                        <Link to='/' className="text-light text-decoration-none"><li>Home</li></Link>
                                        <Link to='/about' className="text-light text-decoration-none"><li>About Us</li></Link>
                                        <Link to='/cs' className="text-light text-decoration-none"><li>Case Studies</li></Link>
                                        <Link to='/services' className="text-light text-decoration-none"><li>Services</li></Link>
                                        <Link to='/courses' className="text-light text-decoration-none"><li>Courses</li></Link>
                                        <Link to='/insights' className="text-light text-decoration-none"><li>Insights</li></Link>
                                        <Link to='/contact_us' className="text-light text-decoration-none"><li>Contact Us</li></Link>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className='ft-social bg-dark text-light'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-2"><button className="btn rounded-pill light text-light mt-3">Get in touch</button></div>
                        <div className="col-10 socials">
                            <SlSocialInstagram className='text-light' />
                            <SlSocialFacebook className='text-light' />
                            <SlSocialYoutube className='text-light' />
                            <SlSocialLinkedin className='text-light' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='ft-reviews bg-dark text-light'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={reviews} alt="" />
                            <p className='mt-1 ms-1 p-0 m-0'>Read our <strong><Link to='https://www.google.com/search?client=firefox-b-d&q=kynet+web.com#lrd=0x3904e224ed86ce59:0x4dedbc29bd9dfc98,1,,,,'>32 Reviews <MdKeyboardArrowRight /></Link> </strong></p>
                        </div>
                        <div className="col text-end terms">
                        <p className='m-0'>@ 2022 Kynet Web Solutions. All rights reserved.</p>
                        <p className='m-0 mt-1'>Terms & Conditions | Privacy Policy</p>
                        </div>
                    </div>
                    
                </div>
            </section> 
            {/* <section className='ft-terms bg-dark text-light text-end pe-3'>
                <p className='m-0'>@ 2022 Kynet Web Solutions. All rights reserved. | Terms & Conditions | Privacy Policy</p>
            </section>
            <section className='ft-reviews bg-dark text-light'>
                <div className="container">
                    <img src={reviews} alt="" />
                    <p className='mt-1 ms-1 p-0 m-0'>Read our <strong>32 Reviews <MdKeyboardArrowRight className='text-light' /></strong></p>
                </div>
            </section> */}
        </>
    )
}

export default Footer