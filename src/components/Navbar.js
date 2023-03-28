import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
    return (
        <>
            <section className='header text-light border'>
                <div className="container">
                    <div className="row">
                        <div className="col-2 nav-logo">
                            <Link to='/' className="text-light text-decoration-none"><img src={logo} alt="" /></Link>
                        </div>
                        <div className="col-10 nav-menu">
                            <nav class="navbar navbar-expand-lg justify-content-end">
                                <button className="navbar-toggler btn ms-auto text-light border" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <RxHamburgerMenu />
                                </button>
                                <div class="pc-menu">
                                    <ul className='d-flex justify-content-end m-0'>
                                        <Link to='#about' className="text-light text-decoration-none"><li>About</li></Link>
                                        <Link to='/cs' className="text-light text-decoration-none"><li>Case Studies</li></Link>
                                        <Link to='#services' className="text-light text-decoration-none"><li>Services</li></Link>
                                        <Link to='#courses' className="text-light text-decoration-none"><li>Courses</li></Link>
                                        <Link to='/insights' className="text-light text-decoration-none"><li>Insights</li></Link>
                                        <Link to='/contact' className="text-light text-decoration-none"><button className='btn border rounded-pill text-light ms-3 nav-btn'>Contact</button></Link>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div class="collapse navbar-collapse justify-content-end mobile-menu" id="navbarSupportedContent">
                        <ul className=' m-0'>
                            <Link to='#about' className="text-light text-decoration-none"><li>About</li></Link>
                            <Link to='/cs' className="text-light text-decoration-none"><li>Case Studies</li></Link>
                            <Link to='#services' className="text-light text-decoration-none"><li>Services</li></Link>
                            <Link to='#courses' className="text-light text-decoration-none"><li>Courses</li></Link>
                            <Link to='/insights' className="text-light text-decoration-none"><li>Insights</li></Link>
                            <Link to='/contact' className="text-light text-decoration-none"><button className='btn border rounded-pill text-light ms-3 nav-btn'>Contact</button></Link>
                        </ul>
                    </div>
                </div>
            </section>
            <hr className='m-0 text-light' />

        </>
    )
}

export default Navbar
