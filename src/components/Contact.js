import React from 'react'

import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { FiMapPin } from 'react-icons/fi'

const Contact = () => {

    // let project = document.getElementById('project-tab');
    // // const pj_content = document.getElementById('project');

    // project.addEventListener('click', function(){
    //     console.log('hii');
    //     // if(pj_content.style.display === 'none'){
    //         // pj_content.style.display === 'block';
    //         // console.log('hello');
    //     // }
    // //     }else{
    // //         pj_content.style.display === 'none';
    // //     }
    // });


    return (
        <>
            {/* -----------------------------------------------------ABOUT--------------------------------------------------------- */}
            {/* -------------------------------------------------------------------------------------------------------------------- */}
            <section className='text-light contact'>
                <h3 class="bg-text">Contact Us</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 contact-detials">
                            <div>
                                <div className='w-10 pb-5'>
                                    <h2 className='txt-primary'>Have a Project?</h2>
                                    <h2 className='txt-primary'>We Would Love to Help</h2>
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
                            <div className="tabs text-end py-2">
                                <button className='rounded-pill px-4 py-1' id="project-tab">Project</button>
                                <button className='rounded-pill px-4 py-1 mx-2' id="training-tab">Training</button>
                                <button className='rounded-pill px-4 py-1' id="other-tab">Other</button>
                            </div>
                            <form action="" className='contact-form' id="other">
                                <div className="row">
                                    <div className="col"><input type="text" className='form-control my-4 p-3 bg-transparent text-light' placeholder="Name" /></div>
                                    <div className="col"><input type="text" className='form-control my-4 p-3 bg-transparent text-light' placeholder="Email" /></div>
                                </div>
                                <div className="row">
                                    <div className="col"><input type="text" className='form-control my-4 p-3 bg-transparent text-light' placeholder="Mobile" /></div>
                                    <div className="col"><input type="text" className='form-control my-4 p-3 bg-transparent text-light' placeholder="Reason for Contact" /></div>
                                </div>
                                <textarea name="" id="" cols="30" rows="10" className='form-control my-4 p-3 bg-transparent text-light' placeholder="Message"></textarea>
                                <input type="submit" className='btn btn_submit rounded-pill ms-3 text-light' value="Send Request" />
                            </form>

                            <form action="" className='contact-form' id="project">
                                <div className="row flex-wrap">
                                    <label htmlFor="">I'm interested in....</label>
                                    <div className="col border m-2 text-center align-items-center d-flex p-2"><input type="radio" name='project_detail' />UX/UI Design</div>
                                    <div className="col border m-2 text-center align-items-center d-flex p-2"><input type="radio" name='project_detail' />Website Development</div>
                                    <div className="col border m-2 text-center align-items-center d-flex p-2"><input type="radio" name='project_detail' />Branding</div>
                                    <div className="col border m-2 text-center align-items-center d-flex p-2"><input type="radio" name='project_detail' />Website Designing</div>
                                </div>
                                <div className="row">
                                    <div className="col"><input type="text" className='form-control my-4 p-3 bg-transparent text-light' placeholder="Name" /></div>
                                    <div className="col"><input type="text" className='form-control my-4 p-3 bg-transparent text-light' placeholder="Email" /></div>
                                </div>
                                <textarea name="" id="" cols="30" rows="10" className='form-control my-4 p-3 bg-transparent text-light' placeholder="Message"></textarea>
                                <input type="submit" className='btn btn_submit rounded-pill ms-3 text-light' value="Send Request" />
                            </form>

                            <form action="" className='contact-form' id="training">
                            <div className="row flex-wrap">
                                    <label htmlFor="">I'm interested in....</label>
                                    <div className="col border m-2 text-center align-items-center d-flex p-2"><input type="radio" name='project_detail' />UX/UI Design</div>
                                    <div className="col border m-2 text-center align-items-center d-flex p-2"><input type="radio" name='project_detail' />Website Development</div>
                                    <div className="col border m-2 text-center align-items-center d-flex p-2"><input type="radio" name='project_detail' />Website Designing</div>
                                </div>
                                <div className="row">
                                    <div className="col"><input type="text" className='form-control my-4 p-3 bg-transparent text-light' placeholder="Name" /></div>
                                    <div className="col"><input type="text" className='form-control my-4 p-3 bg-transparent text-light' placeholder="Email" /></div>
                                </div>
                                <textarea name="" id="" cols="30" rows="10" className='form-control my-4 p-3 bg-transparent text-light' placeholder="Message"></textarea>
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
