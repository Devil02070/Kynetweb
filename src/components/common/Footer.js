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

        // const dots = document.querySelectorAll('.dots');
        // dots.forEach((dot, i) => {
        //     dot.style.animationDelay = `${i * 0.1}s`;
        // })
        window.addEventListener('mousemove', (e) => {
            let xcord = e.clientX;
            let ycord = e.clientY;
            console.log(xcord + ',' + ycord)

            // const c1 = document.getElementsByClassName('.c1');
            // c1.style.left = xcord ;

            // var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            // var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

            let dots = document.querySelectorAll('.dots');
            dots.forEach(dot => {

            //     // var dotX = Math.min(Math.max(xcord, 0), viewportWidth);
            //     // var dotY = Math.min(Math.max(ycord, 0), viewportHeight);

            //     dot.style.left = calc(xcord *1 );
            //     dot.style.top = calc(ycord *1);
                dot.style.left = xcord + 'px';
                dot.style.top = ycord + 'px';
            })
        })
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
                                        <Link to='/cs' className="text-light text-decoration-none"><li>Case Studies</li></Link>
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
                            <p className='mt-1 ms-1 p-0 m-0'>Read our <strong><Link to='https://www.google.com/search?client=firefox-b-d&q=kynet+web.com#lrd=0x3904e224ed86ce59:0x4dedbc29bd9dfc98,1,,,,'>32 Reviews <MdKeyboardArrowRight /></Link> </strong></p>
                        </div>
                        <div className="col-12 col-md-7 text-end terms d-flex align-items-center justify-content-end">
                            {/* <p className='m-0'>@ 2022 Kynet Web Solutions. All rights reserved.</p>
                        <p className='m-0 mt-1'>Terms & Conditions | Privacy Policy</p> */}
                            <p className='m-0'>@ 2022 Kynet Web Solutions. All rights reserved. Terms & Conditions | Privacy Policy</p>
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

            <section class='cursor-follow'>

                <div className="md1 dots"></div>

                <div className="c1 dots" id="dot1"></div>
                <div className="c2 dots"></div>
                <div className="c3 dots"></div>
                <div className="c4 dots"></div>
                <div className="c5 dots"></div>
                <div className="c6 dots"></div>
                {/* <div className="c7 dots"></div> */}
                {/* <div className="c8 dots"></div> */}
                {/* <div className="c9 dots"></div> */}
                {/* <div className="c10 dots"></div> */}
            </section>
        </>
    )
}

export default Footer