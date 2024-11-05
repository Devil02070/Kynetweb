import React from 'react'

const Marquee = () => {
    return (
        <>
            <section className='scroll-main courses-scroll'>
                <div className="scroll-left d-flex align-items-center py-2">
                    <div className='mrq-text'>Web Development</div><div className='dash'></div>
                    <div className='mrq-text'>Web Designing</div><div className='dash'></div>
                    <div className='mrq-text'>Logo Designing</div><div className='dash'></div>
                    <div className='mrq-text'>Branding</div><div className='dash'></div>
                    <div className='mrq-text'>Responsive Design</div><div className='dash'></div>
                    <div className='mrq-text'>Live Websites</div><div className='dash'></div>
                </div>
                <div className="gap"></div>
                <div className="scroll-right d-flex align-items-center py-1">
                    <div className='mrq-text'>Web Development</div><div className='dash'></div>
                    <div className='mrq-text'>Web Designing</div><div className='dash'></div>
                    <div className='mrq-text'>Logo Designing</div><div className='dash'></div>
                    <div className='mrq-text'>Branding</div><div className='dash'></div>
                    <div className='mrq-text'>Responsive Design</div><div className='dash'></div>
                    <div className='mrq-text'>Live Websites</div><div className='dash'></div>
                </div>
            </section>
        </>
    )
}

export default Marquee
