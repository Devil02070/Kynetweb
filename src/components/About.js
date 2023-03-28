import React from 'react'
// import Slider from 'react-slick';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import test1 from '../assets/images/Rectangle 18(1).png'
import test2 from '../assets/images/Rectangle 18(2).png'
import test3 from '../assets/images/Rectangle 18(3).png'
import quote from '../assets/images/quote.png'


const About = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <section className='testmonial'>
          <h3 class="bg-text">testmonial</h3>
          <div className="container-fluid">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-10">
              <Carousel responsive={responsive} arrows={true} showDots={false} infinite={true} slidesToScroll={1} verticalMode={true} axis={'y'}>
                <div>
                  <img src={test1} alt="" />
                  <img src={quote} alt="" />
                  <h3>John Doe</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                  <img src={test2} alt="" />
                  <img src={quote} alt="" />
                  <h3>Jane Doe</h3>
                  <p>Nullam eget ante sed sem aliquet consectetur sit amet vel arcu.</p>
                </div>
                <div>
                  <img src={test3} alt="" />
                  <img src={quote} alt="" />
                  <h3>Bob Smith</h3>
                  <p>Mauris euismod dui nec libero tristique, vel rutrum augue varius.</p>
                </div>
                <div>
                  <img src={test2} alt="" />
                  <img src={quote} alt="" />
                  <h3>Bob Smith</h3>
                  <p>Mauris euismod dui nec libero tristique, vel rutrum augue varius.</p>
                </div>
                <div>
                  <img src={test3} alt="" />
                  <img src={quote} alt="" />
                  <h3>Bob Smith</h3>
                  <p>Mauris euismod dui nec libero tristique, vel rutrum augue varius.</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        </section>
















      {/* <Carousel
          responsive={responsive}
          arrows={true}
          showDots={false}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="testimonial-item"
          sliderClass="testimonial-slider"
          axis="y"
        > */}
    </>
  )
}

export default About
