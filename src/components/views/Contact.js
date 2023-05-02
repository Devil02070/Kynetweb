import React, { useEffect, useState } from 'react'

import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { FiMapPin } from 'react-icons/fi'

const Contact = () => {

    const [contact1, setContact1] = useState({ project_detail: [], name: '', email: '', message: '' });

    const handleInput = (e) => {
        let field = e.target.name;
        let value = e.target.value;
        if (e.target.type === "checkbox") {
            const checkedItems = contact1[field];

            if (e.target.checked) {
                checkedItems.push(value);
            } else {
                // If the checkbox is unchecked, remove its value from the array
                const index = checkedItems.indexOf(value);
                if (index > -1) {
                    checkedItems.splice(index, 1);
                }
            }

            // Update the value of the field with the new array of checked items
            value = checkedItems;
        }
        setContact1({ ...contact1, [field]: value });
    }

    const projectForm = (e) => {
        e.preventDefault();
        console.log(contact1)
    }


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
                                        <div className="col-1 pt-2"><FiMapPin className='contact-icon'/></div>
                                        <div className="col-11">
                                            <h3 className='txt-primary'>Address:</h3>
                                            <p className='w-75'>#5/4, Hospital Rd, Near Divya Jyoti School, Mandi (H.P), 175001</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <div className="row">
                                        <div className="col-1 pt-2">
                                            <BsTelephone className='contact-icon'/>
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
                                            <AiOutlineMail className='contact-icon'/>
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
                            <form onSubmit={projectForm} className='contact-form tab-content active' id="project" style={{ display: 'none' }}>
                                <div className="row flex-wrap mb-3">
                                    <label htmlFor="">I'm interested in....</label>
                                    <div className="col-5 border m-2 text-center align-items-center d-flex px-3 py-3"><input type="checkbox" name='project_detail' value='UX/UI Design' onChange={handleInput} /><span className='ms-3'>UX/UI Design</span></div>
                                    <div className="col-5 border m-2 text-center align-items-center d-flex px-3 py-3"><input type="checkbox" name='project_detail' value='Web Development' onChange={handleInput} /><span className='ms-3'>Web Development</span></div>
                                    <div className="col-5 border m-2 text-center align-items-center d-flex px-3 py-3"><input type="checkbox" name='project_detail' value='Branding' onChange={handleInput} /><span className='ms-3'>Branding</span></div>
                                    <div className="col-5 border m-2 text-center align-items-center d-flex px-3 py-3"><input type="checkbox" name='project_detail' value='Web Designing' onChange={handleInput} /><span className='ms-3'>Web Designing</span></div>
                                    <div className="col-5 border m-2 text-center align-items-center d-flex px-3 py-3"><input type="checkbox" name='project_detail' value='Other' onChange={handleInput} /><span className='ms-3'>Other</span></div>
                                </div>
                                <div className="row">
                                    <div className="col"><input type="text" name="name" onChange={handleInput} value={contact1.name} className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Name" /></div>
                                    <div className="col"><input type="text" name="email" onChange={handleInput} value={contact1.mail} className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Email" /></div>
                                </div>
                                <textarea id="" cols="30" rows="5" name="message" onChange={handleInput} className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Message"></textarea>
                                <input type="submit" className='btn btn_submit rounded-pill ms-3 text-light' value="Send Request" />
                            </form>

                            {/* ------------------TRAINING------------ */}
                            <form action="" className='contact-form tab-content' id="training" style={{ display: 'none' }}>
                                <div className="row flex-wrap mb-4">
                                    <label htmlFor="">I'm interested in....</label>
                                    <div className="col-5 border m-2 text-center align-items-center d-flex p-3"><input type="radio" name='project_detail' value="UX/UI Design" /><span className='ms-3'>UX/UI Design</span></div>
                                    <div className="col-5 border m-2 text-center align-items-center d-flex p-3"><input type="radio" name='project_detail' value="Web Development" /><span className='ms-3'>Web Development</span></div>
                                    <div className="col-5 border m-2 text-center align-items-center d-flex p-3"><input type="radio" name='project_detail' value="Web Designing" /><span className='ms-3'>Web Designing</span></div>
                                </div>
                                <div className="row">
                                    <div className="col"><input type="text" className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Name" /></div>
                                    <div className="col"><input type="text" className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Email" /></div>
                                </div>
                                <textarea name="" id="" cols="30" rows="5" className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Message"></textarea>
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
                                <textarea name="" id="" cols="30" rows="5" className='form-control mb-4 p-3 bg-transparent text-light' placeholder="Message"></textarea>
                                <input type="submit" className='btn btn_submit rounded-pill ms-3 text-light' value="Send Request" />
                            </form>
                        </div>
                    </div>
                </div>
            </section >
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
        </>
    )
}

export default Contact
