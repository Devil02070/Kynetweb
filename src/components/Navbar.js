import React from 'react'
import { Link } from 'react-router-dom'

// import logo from '../assets/images/logo.png';
import logo from '../assets/images/image 1 (1).png';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
    return (
        <>
            <section className='header text-light border' id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-5 col-md-2 nav-logo">
                            <Link to='/' className="text-light text-decoration-none"><img src={logo} alt=""  /></Link>
                        </div>
                        <div className="col-7 col-md-10 nav-menu">
                            <nav class="navbar navbar-expand-lg justify-content-end">
                                <button className="navbar-toggler btn ms-auto text-light border" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <RxHamburgerMenu />
                                </button>
                                <div class="pc-menu">
                                    <ul className='d-flex justify-content-end m-0'>
                                        {/* <Link to='#about' className="text-light text-decoration-none menu-item"><li>About</li></Link> */}
                                        {/* <Link to='/cs' className="text-light text-decoration-none menu-item"><li>Case Studies</li></Link>
                                        <Link to='#services' className="text-light text-decoration-none menu-item"><li>Services</li></Link>
                                        <Link to='#courses' className="text-light text-decoration-none menu-item"><li>Courses</li></Link>
                                        <Link to='/insights' className="text-light text-decoration-none menu-item"><li>Insights</li></Link> */}
                                        <a href='/#about' className="text-light text-decoration-none menu-item"><li>About</li></a>
                                        <a href='/' className="text-light text-decoration-none menu-item"><li>Case Studies</li></a>
                                        <a href='/#services' className="text-light text-decoration-none menu-item"><li>Services</li></a>
                                        <a href='/#courses' className="text-light text-decoration-none menu-item"><li>Courses</li></a>
                                        <a href='/' className="text-light text-decoration-none menu-item"><li>Insights</li></a>
                                      
                                        <Link to='/contact_us' className="text-light text-decoration-none menu-item"><button className='btn border rounded-pill text-light ms-3 nav-btn'>Contact</button></Link>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div class="collapse navbar-collapse justify-content-end mobile-menu" id="navbarSupportedContent">
                        <ul className=' m-0'>
                            {/* <Link to='/#about' className="text-light text-decoration-none"><li>About</li></Link>
                            <Link to='/cs' className="text-light text-decoration-none"><li>Case Studies</li></Link>
                            <Link to='/#services' className="text-light text-decoration-none"><li>Services</li></Link>
                            <Link to='/#courses' className="text-light text-decoration-none"><li>Courses</li></Link>
                            <Link to='/insights' className="text-light text-decoration-none"><li>Insights</li></Link> */}

                            <a href='/#about' className="text-light text-decoration-none"><li>About</li></a>
                            <a href='/' className="text-light text-decoration-none"><li>Case Studies</li></a>
                            <a href='/#services' className="text-light text-decoration-none"><li>Services</li></a>
                            <a href='/#courses' className="text-light text-decoration-none"><li>Courses</li></a>
                            <a href='/' className="text-light text-decoration-none"><li>Insights</li></a>
                            <Link to='/contact_us' className="text-light text-decoration-none"><button className='btn border rounded-pill text-light ms-3 nav-btn'>Contact</button></Link>
                        </ul>
                    </div>
                </div>
            </section>
            <hr className='m-0 text-light' />

        </>
    )
}

export default Navbar
