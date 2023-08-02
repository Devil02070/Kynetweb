import React, { useEffect } from 'react';

import emp1 from '../../assets/images/umang-fun.jpg'
import emp2 from '../../assets/images/eliza-fun.jpg'

const Tryouts = () => {

    useEffect(() => {

        // section-1
        const team = document.querySelectorAll('.tm-row');
        team.forEach(item => {
            item.addEventListener('mouseover', () => {
                item.classList.add('active');
            })
            item.addEventListener('mouseout', () => {
                item.classList.remove('active')
            });
        })

        // section-2
        const tab_items = document.querySelectorAll('.ls-item');
        const tab_imgs = document.querySelectorAll('.tab-img');
        tab_items.forEach(item => {
            item.addEventListener('mouseover', () => {
                tab_items.forEach(tab => {
                    tab.classList.remove('active')
                })
                tab_imgs.forEach(img => [
                    img.classList.remove('active')
                ])
                item.classList.add('active');
                const attribute_value = item.getAttribute('data-attr');
                tab_imgs.forEach(img => {

                    if (img.getAttribute('data-attr') === attribute_value) {
                        img.classList.add('active')
                    }
                })
            })
            item.addEventListener('mouseout', () => {
                item.classList.remove('active')
            })
        })

        // section-3
        const cards = document.querySelectorAll('.dd-card');
        cards.forEach(card => {
            card.addEventListener('mouseover', () => {
                cards.forEach(item => {
                    item.classList.remove('active')
                })
                card.classList.add('active')
            })
        })

    }, [])
    return (
        <>

        <section className='bg-dark page-banner  '>

        </section>
            {/* ***************************************************************************** */}
            {/* ***************************************************************************** */}
            {/* testing sections 1*/}
            
            <section className='myteam py-120'>
                <div className="container">
                    <div className="row align-items-center tm-row">
                        <div className="col-5 name">
                            <h2 className="normal">Member Name</h2>
                            <h2 className="hovered">Member Name</h2>
                        </div>
                        <div className="col-5"><img src={emp1} alt="" className='tm-profile' /></div>
                        <div className="col-2"><p className='text-end'>Member Role</p></div>
                    </div>
                    <hr className="m-0 p-0" />
                    <div className="row align-items-center tm-row">
                        <div className="col-5 name">
                            <h2 className="normal">Member Name</h2>
                            <h2 className="hovered">Member Name</h2>
                        </div>
                        <div className="col-5"><img src={emp2} alt="" className='tm-profile' /></div>
                        <div className="col-2"><p className='text-end'>Member Role</p></div>
                    </div>
                    <hr className="m-0 p-0" />
                    <div className="row align-items-center tm-row">
                        <div className="col-5 name">
                            <h2 className="normal">Member Name</h2>
                            <h2 className="hovered">Member Name</h2>
                        </div>
                        <div className="col-5"><img src={emp1} alt="" className='tm-profile' /></div>
                        <div className="col-2"><p className='text-end'>Member Role</p></div>
                    </div>
                    <hr className="m-0 p-0" />
                    <div className="row align-items-center tm-row">
                        <div className="col-5 name">
                            <h2 className="normal">Member Name</h2>
                            <h2 className="hovered">Member Name</h2>
                        </div>
                        <div className="col-5"><img src={emp1} alt="" className='tm-profile' /></div>
                        <div className="col-2"><p className='text-end'>Member Role</p></div>
                    </div>
                </div>
            </section>
            <hr />

            {/* section-2 */}
            <section className='img-tabs py-120'>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h2 className='inner'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <ol className='d-flex'>
                                <li className='ls-item active' data-attr='1'><sup>01</sup>Item1
                                    <div className="line"></div></li>
                                <li className='ls-item' data-attr='2'><sup>02</sup>Item2
                                    <div className="line"></div></li>
                                <li className='ls-item' data-attr='3'><sup>03</sup>Item3
                                    <div className="line"></div></li>
                                <li className='ls-item' data-attr='4'><sup>04</sup>Item4
                                    <div className="line"></div></li>
                                <li className='ls-item' data-attr='5'><sup>05</sup>Item5
                                    <div className="line"></div></li>
                                <li className='ls-item' data-attr='6'><sup>06</sup>Item6
                                    <div className="line"></div></li>
                            </ol>
                        </div>
                        <div className="col-6">
                            <img src={emp1} alt="" className="tab-img active" data-attr='1' />
                            <img src={emp2} alt="" className="tab-img" data-attr='2' />
                            <img src={emp1} alt="" className="tab-img" data-attr='3' />
                            <img src={emp2} alt="" className="tab-img" data-attr='4' />
                            <img src={emp1} alt="" className="tab-img" data-attr='5' />
                            <img src={emp2} alt="" className="tab-img" data-attr='6' />
                        </div>
                    </div>
                </div>
            </section>

            {/* section-3 */}
            <section className='dd-section pb-120'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="dd-card active">
                            <div className="row">
                                <div className="img-col img1">
                                    <img src={emp1} alt="" className='' />
                                    <h2 className='card-title '>Heading</h2>
                                </div>
                                <div className="content">
                                    <p>01</p>
                                    <h3>Heading</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, obcaecati soluta voluptates officiis unde debitis!</p>
                                    <p>more...</p>
                                </div>
                            </div>
                        </div>
                        <div className="dd-card">
                            <div className="row">
                                <div className="img-col img2">
                                    <img src={emp2} alt="" className='' />
                                    <h2 className='card-title '>Heading</h2>
                                </div>
                                <div className="content">
                                    <p>01</p>
                                    <h3>Heading</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, obcaecati soluta voluptates officiis unde debitis!</p>
                                    <p>more...</p>
                                </div>
                            </div>
                        </div>
                        <div className="dd-card">
                            <div className="row">
                                <div className="img-col img3">
                                    <img src={emp1} alt="" className='' />
                                    <h2 className='card-title '>Heading</h2>
                                </div>
                                <div className="content">
                                    <p>01</p>
                                    <h3>Heading</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, obcaecati soluta voluptates officiis unde debitis!</p>
                                    <p>more...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section-3 */}
            <section className='py-120'>
                <div className="container">
                    <h2 className='anm-heading'>Hello <span classname='animated-text'>World</span></h2>
                </div>
            </section>
            {/* ***************************************************************************** */}
            {/* ***************************************************************************** */}
        </>
    )
}

export default Tryouts