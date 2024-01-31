import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import './MainHomePageWorldMap.css';

const MainHomePageWorldMap = () => {
  return (
    <>
      <div className="" >
        <h2 className='d-flex justify-content-center sk_h mb-3'><strong>Who can benefit from <span className='sk_color'>GrowAds</span> ad network</strong></h2>
        <Container  className="bg-black mb-3 sk_border" style={{marginBottom:"100px"}}>
          <Row className="d-flex justify-content-center py-3">
          <Col xs={3} md={9} lg={3} className=" " >
              
              <div className='text-end'>
                <  img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/c8c36009-5d8c-45e8-ad6d-db4659a19d00/public' alt='advertisercaed' />
              </div>
           
            
          </Col>
            <Col xs={12} md={9} lg={9} className=" " >
              
                <div>
                  <h1 className='text-white p-2 fs-2'><strong>Advertisers</strong></h1>
                  <p className='text-white p-2 fs-6'>Adsterra is a powerful online advertising network
                    for brands, agencies, and media buyers. With over
                    20 targeting settings, you deliver ads to the best-
                    matching audiences. Unlock high-quality CPM, CPC,
                    and CPA traffic from 28K+ direct publishers.</p>
                  <div className="p-3 d-flex text-white" > 
                    
                  <p className='pe-2'>  Learn More</p> <div className=' fs-6 pt-1'><FaArrowRight /></div></div>
                </div>
              
            </Col>
          
          </Row>
        </Container>
        <Container  className="bg-black mb-3 sk_border bg-success">
          <Row className="d-flex justify-content-center py-3">
          <Col xs={3} md={9} lg={3} className=" " >
              
              <div className='text-end '>
                <  img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/ee920c45-2758-47cf-86ff-c34622f57d00/public' alt='advertisercaed' />
              </div>
           
            
          </Col>
            <Col xs={12} md={9} lg={9} className=" " >
              
                <div>
                  <h1 className='text-white p-2 fs-2'><strong>Publishers</strong></h1>
                  <p className='text-white p-2 fs-6'>With the highest-paying ad network, publishers
                   can monetize sites, blogs or social media traffic. We provide solutions for earning without a website. AI algorithms
                   are finetuned to send the most relevant CPM rates and ad feed.</p>
                  <div className="p-3 d-flex text-white" > 
                    
                  <p className='pe-2'>  Learn More</p> <div className=' fs-6 pt-1'><FaArrowRight /></div></div>
                </div>
              
            </Col>
           
          </Row>
        </Container>

        <Container  className="bg-black mb-3 sk_border">
          <Row className="d-flex justify-content-center py-3">
          <Col xs={3} md={9} lg={3} className=" " >
              
              <div className='text-end'>
                <  img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/3ef61ccf-dc10-461e-de65-d9d997bd2700/public' alt='advertisercaed' />
              </div>
           
            
          </Col>
            <Col xs={12} md={9} lg={9} className=" " >
              
                <div>
                  <h1 className='text-white p-2 fs-2'><strong>Affiliates</strong></h1>
                  <p className='text-white p-2 fs-6'>Adsterra CPA Network is a source of profitable
                   offers from reputable advertisers. Affiliates enjoy risk-free, superfast payouts
                    while growing profits with a full 
                  range of money-saving tools like backlinks and postbacks.</p>
                  <div className="p-3 d-flex text-white" > 
                    
                  <p className='pe-2'>  Learn More</p> <div className=' fs-6 pt-1'><FaArrowRight /></div></div>
                </div>
              
            </Col>
            
          </Row>
        </Container>

        <div className=" sk_body d-flex justify-content-center mb-2" >
        <div className="container-fluid text-white  mt-5 sk_cont" style={{ 
  backgroundImage: 'linear-gradient(rgba(34, 34, 34, 0.2), rgba(34, 34, 34, 0.5)), url(https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/2f61e883-5425-4374-3c3c-092db4b02400/public)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  // height: '500px',
  width: '100%',
}}>
        <div className="row  text-white d-flex align-items-center pt-5">
              <div className="col-lg-6">
                <div className="p-5 mt-4">
                  <h1 className="display-4">Your Growth Area</h1>
                  <p className="lead">Adsterra has been connecting brands and marketing professionals through top-tier advertising and monetization solutions since 2013. Along with performance-boosting functionality, our platform is a growth area for all our partners, where everyone can get industry-specific support and advice. </p>
                  <button className='btn webbackground_theme text-white'>About Company</button>
                </div>
                <div className='d-flex flex-wrap pb-5 justify-content-center '>
                  <div className='p-3 text-center'>
                    <h1 className='text-white'><strong className='text-white'>1.34B</strong></h1>
                    <p className='text-white '>Conversion/year</p>
                  </div>
                  <div className='p-3 text-center'>
                    <h1 className='text-white'><strong>$56M</strong></h1>
                    <p className='text-white'>Payouts/year</p>
                  </div>
                  <div className='p-3 text-center'>
                    <h1 className='text-white'><strong>40k</strong></h1>
                    <p className='text-white '>Partners</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default MainHomePageWorldMap