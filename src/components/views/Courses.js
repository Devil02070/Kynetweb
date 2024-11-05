import React from 'react'
import Loaderanimation from '../common/Loaderanimation'
import Marquee from '../common/Marquee'
import Bannervectors from '../common/Bannervectors';
import { courses } from '../../utils/constants'


import icon from '../../assets/images/Oval.png'
import aboutImg from '../../assets/images/Rectangle 27.png'

const Courses = () => {
    return (
        <>
        <Loaderanimation title='Courses'/>
            <section className='bg-dark page-banner animate-up text-light' >
                <h3 class="bg-text">courses</h3>
                <Bannervectors />
                <div className="container page-heading">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2 className='inner'>What We Offer.</h2>
                            <p className='mt-3'>At Kynet Web Solutions Private Limited, we provide a range of courses designed to equip individuals and teams with the skills needed to thrive in the digital landscape. Our courses cover essential topics in web development, design, and digital marketing, ensuring you have the knowledge to succeed in today's competitive environment.</p>
                            <p className='mt-3'>Our curriculum is crafted by industry experts and includes hands-on projects that allow you to apply what you've learned in real-world scenarios. From beginner to advanced levels, we cater to all learners, providing tailored content that meets your specific needs. With a focus on practical applications, our courses are perfect for professionals looking to enhance their skill set or for businesses aiming to train their teams effectively. Join us to unlock your potential and elevate your expertise in web development and digital strategies.</p>
                            <p className='mt-3'>Experience the difference with Kynet Web Solutions Private Limited, where learning is engaging, interactive, and impactful.</p>
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
                        {
                            courses.map((_v,i)=>{
                                return(
                                    <div key={_v.id} className="course-card w-32">
                                    <img src={icon} alt="" />
                                    <h4 className='mt-4'>{_v.title}</h4>
                                    <p>{_v.description}</p>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <Marquee/>

            
        </>
    )
}

export default Courses
