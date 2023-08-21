import React from 'react';

const Loaderanimation = (props) =>{
    return(
        <>
        <section className="loader">
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
            <div className="line line4"></div>
            <div className="line line5 text-light d-flex justify-content-center fs-1">{props.title}</div>
            <div className="line line6"></div>
            <div className="line line7"></div>
            <div className="line line8"></div>
            <div className="line line9"></div>
        </section>
        </>
    )
}
export default Loaderanimation;