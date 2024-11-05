import React from 'react'
import Marquee from '../common/Marquee'
import { terms } from '../../utils/constants'
const Terms_Conditions = () => {
    return (
        <>
            <section className='terms bg-dark page-banner animate-up text-light' id="about">
                <h3 className="bg-text">Terms & Conditions</h3>
                <div className="vectors">
                    <div className='bg-vector ip-bvc2 p-0'></div>
                    <div className='bg-vector ip-bvc5 p-0'></div>
                </div>
                <div className="container page-heading mt-5">
                    <div className="row">
                        <div className="col-12">
                            {
                                terms.map((term, i) => {
                                    return (
                                        <div key={term.id} className="mb-4">
                                            <h2>{term.title}</h2>
                                            <p className='mt-3'>{term.description}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Marquee/>
        </>
    )
}

export default Terms_Conditions
