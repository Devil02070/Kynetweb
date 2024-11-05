import React from 'react'
import Marquee from '../common/Marquee'
import { policies } from '../../utils/constants'
import { refund_policy } from '../../utils/constants'
const PrivacyPolicy = () => {
    
    return (
        <>
            <section className='terms bg-dark page-banner animate-up text-light' id="about">
                <h3 className="bg-text">Privacy Policies</h3>
                <div className="vectors">
                    <div className='bg-vector ip-bvc2 p-0'></div>
                    <div className='bg-vector ip-bvc5 p-0'></div>
                </div>
                <div className="container page-heading mt-5">
                    <div className="row">
                        <div className="col-12">
                        <h1 className='pb-5 txt-primary'>Privacy Policy:-</h1>
                            {
                                policies.map((policy, i) => {
                                    return (
                                        <div key={policy.id} className="mb-4">
                                            <h2>{policy.title}</h2>
                                            <p className='mt-3'>{policy.description}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* Refund Policy */}
                <div className="container page-heading">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='pb-5 txt-primary'>Refund Policy:-</h1>
                            {
                                refund_policy.map((_v, i) => {
                                    return (
                                        <div key={_v.id} className="mb-4">
                                            <h3 className='mt-3'>{_v.title}</h3>
                                            <p className='mt-3'>{_v.description}</p>
                                        </div>
                                    )
                                })
                            }

                            <h3 className='mt-5'>Turnaround Time:</h3>
                            <ul className='mt-4'>
                                <li className='mt-3'>We provide an estimated timeline for each project based on its requirements.</li>
                                <li className='mt-3'>Typical turnaround time is 2-6 weeks depending on project size and complexity.</li>
                                <li className='mt-3'>Delays due to late client feedback or content provision will impact the timeline.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Cancellation Policy */}
                <div className="container page-heading">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='pb-5 txt-primary'>Cancellation Policy:-</h1>
                            <p className='mt-3'>Clients may cancel a project at any time before development begins for a full refund. Cancellations during the project will be handled on a case-by-case basis, with any refunds adjusted according to completed milestones.</p>
                            <p className='mt-3'>    If you have any questions regarding our policies, please don't hesitate to contact us for clarification.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Marquee/>
        </>
    )
}

export default PrivacyPolicy
