import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap'
import "./GrowXPartner.css"
const 
GrowXPartner = () => {

  const [startIndex, setStartIndex] = useState(0);
  // const iconsPerPage = 5;
  const [iconsPerPage, setIconsPerPage] = useState(5);

  const icons = [
    'https://cdn-icons-png.flaticon.com/512/732/732171.png',
    'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-audition-icon.png',
    'https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful/2048/5326_-_Amazon-512.png',
    'https://upload.wikimedia.org/wikipedia/commons/4/49/Krafton_Full_Logo.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1w2NFNh10mGbPzIwiFe10kodW-180zKUF891p2hZl0GzJBXZhAmYKCkVW8whAar8z1mU&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYot6xdoG3aBcoarux8MoKvJIzpdV4SZkWw&usqp=CAU',
    'https://cdn-icons-png.flaticon.com/512/732/732171.png',
    'https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful/2048/5326_-_Amazon-512.png',
    'https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful/2048/5326_-_Amazon-512.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1w2NFNh10mGbPzIwiFe10kodW-180zKUF891p2hZl0GzJBXZhAmYKCkVW8whAar8z1mU&usqp=CAU',
  ];

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (icons.length - iconsPerPage + 1));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? icons.length - iconsPerPage : prevIndex - 1
    );
  };
  const visibleIcons = icons.slice(startIndex, startIndex + iconsPerPage);

  return (
    <>

      <Container>
        <Row className=' d-flex text-center ' >
          <Col className=''>
            <h1 className=' p-4'>Our Partners</h1>
          </Col>
        </Row>

        <Row className=' p-4'>
          <Col >
            <div className="slider-container  d-flex justify-content-center align-items-center ">
              <button className='rk_publisher_slider_btn' onClick={handlePrev}>&lt;</button>
              <div className="icons-container">
                {visibleIcons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`icon${startIndex + index + 1}`}
                    className=" rk_publisher_slider_img"
                  />
                ))}
              </div>
              <button className='rk_publisher_slider_btn' onClick={handleNext}>&gt;</button>
            </div>

          </Col>
        </Row>
      </Container>



    </>
  )
}

export default GrowXPartner