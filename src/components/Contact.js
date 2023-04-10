import React, { useEffect } from 'react'

import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { FiMapPin } from 'react-icons/fi'

const Contact = () => {

    useEffect(() => {
        // Contact Tabs------------------------------------------------------------------------------------------------
        // ------------------------------------------------------------------------------------------------------------
        const tabs = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(tab => {
                    tab.classList.remove('active');
                });
                tabContents.forEach(content => {
                    content.classList.remove('active');
                });

                tab.classList.add('active');
                const index = Array.from(tabs).indexOf(tab);
                tabContents[index].classList.add('active');
            });
        });

        // Change heading on click--------------------------------------------------------------------------------------
        // -------------------------------------------------------------------------------------------------------------
        let project = document.getElementById('project-tab');
        let training = document.getElementById('training-tab');
        let other = document.getElementById('other-tab');

        const heading = document.getElementById('contact-heading');

        project.addEventListener('click', function () {
            heading.innerHTML = "Have a Project? We Would Love to Help";
        });
        training.addEventListener('click', function () {
            heading.innerHTML = "Achieve Your Goals with Expert Coaching";
        });
        other.addEventListener('click', function () {
            heading.innerHTML = "Reach Out to Us";
        });
    }, []);
    return (
        <>
            {/* -----------------------------------------------------ABOUT--------------------------------------------------------- */}
            {/* -------------------------------------------------------------------------------------------------------------------- */}
            <section className='text-light contact'>
                <h3 class="bg-text">Contact Us</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 contact-detials">
                            <div className='w-100'>
                                <div className='pb-5'>
                                    <h2 className='txt-primary' id="contact-heading">Have a Project? We Would Love to Help</h2>
                                </div>
                                <div className='w-100'>
                                    <div className="row">
                                        <div className="col-1 pt-2"><FiMapPin /></div>
                                        <div className="col-11">
                                            <h3 className='txt-primary'>Address:</h3>
                                            <p>Abc, adf234,345678</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <div className="row">
                                        <div className="col-1 pt-2">
                                            <BsTelephone />
                                        </div>
                                        <div className="col-11">
                                            <h3 className='txt-primary'>Phone:</h3>
                                            <p>7856746756</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <div className="row">
                                        <div className="col-1 pt-2">
                                            <AiOutlineMail />
                                        </div>
                                        <div className="col-11">
                                            <h3 className='txt-primary'>Email:</h3>
                                            <p>Contact@kynetweb.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 pt-5">
                            <div className="tabs text-end py-2 contact-tabs">
                                <button className='rounded-pill px-4 py-1 tab-btn active' id="project-tab">Project</button>
                                <button className='rounded-pill px-4 py-1 mx-2 tab-btn' id="training-tab">Training</button>
                                <button className='rounded-pill px-4 py-1 tab-btn' id="other-tab">Other</button>
                            </div>

                            {/* ------------------PROJECT------------ */}
                            <form action="" className='contact-form tab-content active' id="project" style={{ display: 'none' }}>
                                <div className="row flex-wrap mb-3">
                                    <label htmlFor="">I'm interested in....</label>
                                    <div className="col-5 border m-2 text-center align-items-center d-flex px-3 py-3"><input type="checkbox" name='project_detail' /><span className='ms-3'>UX/UI Design</span></div>
                                    <div className="col-5 border m-2 text-center align-items-center d-flex px-3 py-3"><input type="checkbox" name='project_detail' /><span className='ms-3'>Web Development</span></div>
                                    <div className="col-5 border m-2 text-center align-items-center d-flex px-3 py-3"><input type="checkbox" name='project_detail' /><span className='ms-3'>Branding</span></div>
                                    <div className="col-5 border m-2 text-center align-items-center d-flex px-3 py-3"><input type="checkbox" name='project_detail' /><span className='ms-3'>Web Designing</span></div>
                                    <div className="col-5 border m-2 text-center align-items-center d-flex px-3 py-3"><input type="checkbox" name='project_detail' /><span className='ms-3'>Other</span></div>
                                </div>
                                <div className="row">
                                    <div className="col"><input type="text" className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Name" /></div>
                                    <div className="col"><input type="text" className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Email" /></div>
                                </div>
                                <textarea name="" id="" cols="30" rows="10" className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Message"></textarea>
                                <input type="submit" className='btn btn_submit rounded-pill ms-3 text-light' value="Send Request" />
                            </form>

                            {/* ------------------TRAINING------------ */}
                            <form action="" className='contact-form tab-content' id="training" style={{ display: 'none' }}>
                                <div className="row flex-wrap mb-4">
                                    <label htmlFor="">I'm interested in....</label>
                                    <div className="col-5 border m-2 text-center align-items-center d-flex p-2"><input type="radio" name='project_detail' /><span className='ms-3'>UX/UI Design</span></div>
                                    <div className="col-5 border m-2 text-center align-items-center d-flex p-2"><input type="radio" name='project_detail' /><span className='ms-3'>Web Development</span></div>
                                    <div className="col-5 border m-2 text-center align-items-center d-flex p-2"><input type="radio" name='project_detail' /><span className='ms-3'>Web Designing</span></div>
                                </div>
                                <div className="row">
                                    <div className="col"><input type="text" className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Name" /></div>
                                    <div className="col"><input type="text" className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Email" /></div>
                                </div>
                                <textarea name="" id="" cols="30" rows="10" className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Message"></textarea>
                                <input type="submit" className='btn btn_submit rounded-pill ms-3 text-light' value="Send Request" />
                            </form>

                            {/* ------------------OTHER------------ */}
                            <form action="" className='contact-form tab-content' id="other">
                                <div className="row">
                                    <div className="col"><input type="text" className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Name" /></div>
                                    <div className="col"><input type="text" className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Email" /></div>
                                </div>
                                <div className="row">
                                    <div className="col"><input type="text" className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Mobile" /></div>
                                    <div className="col"><input type="text" className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Reason for Contact" /></div>
                                </div>
                                <textarea name="" id="" cols="30" rows="10" className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Message"></textarea>
                                <input type="submit" className='btn btn_submit rounded-pill ms-3 text-light' value="Send Request" />
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Contact
