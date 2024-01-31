import React, { useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import { Container } from 'react-bootstrap';
import "./GrowPricingSlider.css"

const Card = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const GrowPricingSlider = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    // fade: true,
    speed: 1000,
    autoplay: true, 
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: null, // Hides the next arrow
    prevArrow: null, // Hides the previous arrow
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    if (isMobile) {
      // Hide the next arrow after the component has mounted
      const nextArrow = document.querySelector('.slick-next');
      if (nextArrow) {
        nextArrow.style.display = 'block';
        
      }
    }
  }, [isMobile]);

  return (

    <>
      <Container className='text-center px-3'>
        <Slider {...settings}>
          <div className='justify-content-center align-items-center d-flex'>
            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/ebcf98de-badc-4e05-1553-6549f6eb6000/public' />
          </div>

          <div className='justify-content-center align-items-center d-flex'>
            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/cc307b6a-4be3-401f-3bcc-699aeeb2f900/public' />
          </div>
          <div className='justify-content-center align-items-center d-flex'>
            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/413cd010-bd9d-4c59-6878-b5f44cabdf00/public' />
          </div>

          <div className='justify-content-center align-items-center d-flex'>
            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d2c59c0f-3b15-4ef8-404d-e7bef68b4600/public' />
          </div>
          <div className='justify-content-center align-items-center d-flex'>
            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/f4e1a22b-ce19-41f0-51c2-6e5950e03e00/public' />
          </div>

          


        </Slider>
      </Container>



    </>
  );
}

export default GrowPricingSlider