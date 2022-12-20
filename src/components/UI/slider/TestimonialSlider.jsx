import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../../assets/images/ava-1.jpg';
import '../../../styles/slider.css';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className='review__text'>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nesciunt
          dignissimos iure perspiciatis atque voluptas? Modi quae corporis ad ea
          corrupti itaque voluptatum, sapiente optio laudantium accusamus
          molestiae, natus eum?"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava01} alt='avatar' className=' rounded' />
          <h6>Kasun</h6>
        </div>
      </div>
      
    </Slider>
  );
};

export default TestimonialSlider;
