import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

import lineImg from '../../assets/images/Line 12(1).png'
import Logo from '../../assets/images/Group 19.png'
// import letsGo from '../../assets/images/Group 123.png'
import reviews from '../../assets/images/reviews.png'

// ICONS
// import {AiOutlineInstagram} from 'react-icons/ai'
// import {AiOutlineYoutube} from 'react-icons/ai'

import { SlSocialInstagram } from 'react-icons/sl'
import { SlSocialFacebook } from 'react-icons/sl'
import { SlSocialYoutube } from 'react-icons/sl'
import { SlSocialLinkedin } from 'react-icons/sl'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Footer = () => {
    useEffect(() => {
        const text = document.querySelector('.text p');
        text.innerHTML = text.innerText.split('').map(
            (char, i) =>
                `<span style="transform:rotate(${i * 5.5}deg)">${char}</span>`
        ).join('')


        // cursor
        window.addEventListener('mousemove', (e) => {
            let xcord = e.clientX;
            let ycord = e.clientY;
            // console.log(xcord + ',' + ycord)

            let dots = document.querySelectorAll('.dots');
            dots.forEach(dot => {
                dot.style.left = xcord + 'px';
                dot.style.top = ycord + 'px';
            })
        })
        //cursor-end
        
    }, [])
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
                                    <p>9459050795</p>
                                </div>
                                <div className="col">
                                    <h5>Shoot us a message</h5>
                                    <p>contact@kynetweb.com</p>
                                </div>
                                <div className="col">
                                    <h5>Come and Visit</h5>
                                    <p>#5/4 Hospital Rd, Mandi(HP) - 175001</p>
                                </div>
                            </div>
                        </div>
                        <div className="col right-col">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <Link to="/"><img src={Logo} alt="" className='footer-logo' /></Link>
                                </div>
                                <div className="col-6 text-end">
                                    {/* <img src={letsGo} alt="" className='lets-go' /> */}
                                    <div className="circle">
                                        <div className="text">
                                            <p>LET'S GO - LET'S GO - LET'S GO - LET'S GO - </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-12 footer-menu">
                                    <hr />
                                    <ul className='d-flex m-0 p-0'>
                                        <Link to='/' className="text-light text-decoration-none"><li>Home</li></Link>
                                        <Link to='/about' className="text-light text-decoration-none"><li>About Us</li></Link>
                                        <Link to='/case_studies' className="text-light text-decoration-none"><li>Case Studies</li></Link>
                                        <Link to='/services' className="text-light text-decoration-none"><li>Services</li></Link>
                                        <Link to='/courses' className="text-light text-decoration-none"><li>Courses</li></Link>
                                        {/* <Link to='/insights' className="text-light text-decoration-none"><li>Insights</li></Link> */}
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
                        <div className="col-6 col-md-2"><Link to="/contact_us"><button className="btn rounded-pill light text-light mt-3">Get in touch</button></Link></div>
                        <div className="col-6 col-md-10 socials">
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
                        <div className="col-12 col-md-5">
                            <img src={reviews} alt="" />
                            <p className='mt-1 ms-1 p-0 m-0'>Read our <strong><Link to='https://www.google.com/search?client=firefox-b-d&q=kynet+web.com#lrd=0x3904e224ed86ce59:0x4dedbc29bd9dfc98,1,,,,' className='txt-primary'>24 Reviews <MdKeyboardArrowRight /></Link> </strong></p>
                        </div>
                        <div className="col-12 col-md-7 text-end terms d-flex align-items-center justify-content-end">
                            <p className='m-0'>@2024 Kynet Web Solutions Pvt. Ltd. All rights reserved. <Link to="/terms" className='txt-primary'>Terms & Conditions</Link> | <Link to="/privacy_policy" className='txt-primary'>Privacy Policy</Link></p>
                        </div>
                    </div>

                </div>
            </section>

            <section class='cursor-follow' id='cursor'>
                <span className="c1 dots"></span>
                <span className="c2 dots"></span>
                <span className="c3 dots"></span>
                <span className="c4 dots"></span>
                <span className="c5 dots"></span>
                <span className="c6 dots"></span>
                <span className="c7 dots"></span>
                <span className="c8 dots"></span>
                <span className="c9 dots"></span>
                <span className="c10 dots"></span>
                <span className="c11 dots"></span>
                <span className="c12 dots"></span>
                <span className="c13 dots"></span>
                <span className="c14 dots"></span>
                <span className="c15 dots"></span>
                <span className="c16 dots"></span>
                <span className="c17 dots"></span>
                <span className="c18 dots"></span>
                <span className="c19 dots"></span>
                <span className="c20 dots"></span>
            </section>
        </>
    )
}

export default Footer