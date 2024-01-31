import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FaChevronRight } from "react-icons/fa6";
import './FaqForPublisher.css'
import Layout from '../Layout/Layout';

export const FaqForPublisher = () => {
  return (
    <Layout>
    <Container fluid className='m-0 p-0 ' >

        <Row className='m-0 p-0  d-flex justify-content-center'>
          <Col md={8} >
            <Row>

              {/* All Collection, Setting Icon & Campaign Setting Heading */}

              <Col md={12}>
                <div className='d-flex pt-4 fs-4'>
                  <span className='dp_campaign_guide_items'>All Collections</span>
                  <span className='px-1'><FaChevronRight className='text-secondary' /></span>
                  <span className='dp_campaign_guide_sub_items'>FAQ for Publisher</span>
                </div>
                
                <h3 className='fw-bold pt-3'>FAQ for Publisher</h3>
              </Col>


              {/* Setting Items List */}

              <Col md={12} className=' my-4 px-4' >

                <Row className='d-flex justify-content-center p-2' style={{ border: "2px solid #710765", borderRadius: "10px" }}>

                  <div className='dp_campaign_setting_items'>
                    <Row>
                      <Col md={12} className='col-12 py-3'>

                        <Accordion className='mb-3'>
                          <Accordion.Item eventKey="1">

                            <Accordion.Header>
                              <div className='row'>
                                <div className='col-md-12'>
                                  {/* <h5 className=' p-0 m-0' style={{color:"rgb(115,3,91)"}}>How do I access the platform?<h5/> */}
                                  <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q1. What is CPM in advertising statistics?</h5>
                                </div>
                              </div>
                            </Accordion.Header>

                            <Accordion.Body>

                              <div className="container ">
                                <div className="row ">
                                  <div className="col-md-12 ">
                                    <p className=' fs-5 p-0 m-0'>A :  CPM stands for Cost Per Mille, which is the cost of 1,000 impressions. It is a common metric used in online advertising to measure the cost of a thousand ad impressions.</p>
                                  </div>

                                </div>

                              </div>
                            </Accordion.Body>

                          </Accordion.Item>

                        </Accordion>

                        <Accordion className='mb-3'>
                          <Accordion.Item eventKey="2">

                            <Accordion.Header>
                              <div className='row'>
                                <div className='col-md-12'>
                                  {/* <h5 className=' p-0 m-0' style={{color:"rgb(115,3,91)"}}>How do I access the platform?<h5/> */}
                                  <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q2: How is Click-Through Rate (CTR) calculated?</h5>
                                </div>
                              </div>
                            </Accordion.Header>

                            <Accordion.Body>

                              <div className="container ">
                                <div className="row ">
                                  <div className="col-md-12 ">
                                    <p className='fs-5 p-0 m-0'>A: CTR is calculated by dividing the number of clicks on an ad by the number of impressions and then multiplying by 100 to get a percentage.</p>
                                  </div>

                                </div>

                              </div>
                            </Accordion.Body>

                          </Accordion.Item>

                        </Accordion>

                        <Accordion className='mb-3'>
                          <Accordion.Item eventKey="3">

                            <Accordion.Header>
                              <div className='row'>
                                <div className='col-md-12'>
                                  {/* <h5 className=' p-0 m-0' style={{color:"rgb(115,3,91)"}}>How do I access the platform?<h5/> */}
                                  <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q3: What is the significance of Conversion Rate in online advertising?</h5>
                                </div>
                              </div>
                            </Accordion.Header>

                            <Accordion.Body>

                              <div className="container ">
                                <div className="row ">
                                  <div className="col-md-12 ">
                                    <p className='fs-5 p-0 m-0'>A: Conversion Rate is the percentage of users who take a desired action, such as making a purchase or filling out a form. It helps measure the effectiveness of an ad campaign.</p>
                                  </div>

                                </div>

                              </div>
                            </Accordion.Body>

                          </Accordion.Item>

                        </Accordion>

                        <Accordion className='mb-3'>
                          <Accordion.Item eventKey="4">

                            <Accordion.Header>
                              <div className='row'>
                                <div className='col-md-12'>

                                  <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q4: How can I track user engagement on my publisher website?</h5>
                                </div>
                              </div>
                            </Accordion.Header>

                            <Accordion.Body>

                              <div className="container ">
                                <div className="row ">
                                  <div className="col-md-12 ">
                                    <p className='fs-5 p-0 m-0'>A: Use tools like Google Analytics to track user engagement metrics, including page views, time on site, bounce rate, and user demographics.</p>
                                  </div>

                                </div>

                              </div>
                            </Accordion.Body>

                          </Accordion.Item>

                        </Accordion>

                        <Accordion className='mb-3'>
                          <Accordion.Item eventKey="5">

                            <Accordion.Header>
                              <div className='row'>
                                <div className='col-md-12'>

                                  <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q5: What is A/B testing, and why is it important for ad optimization?</h5>
                                </div>
                              </div>
                            </Accordion.Header>

                            <Accordion.Body>

                              <div className="container ">
                                <div className="row ">
                                  <div className="col-md-12 ">
                                    <p className='fs-5 p-0 m-0'>A: A/B testing involves comparing two versions of an ad or webpage to see which performs better. It's crucial for optimizing ad creatives and improving overall campaign performance.</p>
                                  </div>

                                </div>

                              </div>
                            </Accordion.Body>

                          </Accordion.Item>

                        </Accordion>

                        <Accordion className='mb-3'>
                          <Accordion.Item eventKey="6">

                            <Accordion.Header>
                              <div className='row'>
                                <div className='col-md-12'>

                                  <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q6: How do you calculate the Return on Investment (ROI) for an advertising campaign?</h5>
                                </div>
                              </div>
                            </Accordion.Header>

                            <Accordion.Body>

                              <div className="container ">
                                <div className="row ">
                                  <div className="col-md-12 ">
                                    <p className='fs-5 p-0 m-0'>A: ROI is calculated by subtracting the cost of the campaign from the revenue generated and then dividing by the cost. The result is usually multiplied by 100 to get a percentage.</p>
                                  </div>

                                </div>

                              </div>
                            </Accordion.Body>

                          </Accordion.Item>

                        </Accordion>

                        <Accordion className='mb-3'>
                          <Accordion.Item eventKey="7">

                            <Accordion.Header>
                              <div className='row'>
                                <div className='col-md-12'>

                                  <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q7: What are the key metrics to monitor for website ad performance?</h5>
                                </div>
                              </div>
                            </Accordion.Header>

                            <Accordion.Body>

                              <div className="container ">
                                <div className="row ">
                                  <div className="col-md-12 ">
                                    <p className='fs-5 p-0 m-0'>A: Key metrics include CTR, Conversion Rate, Bounce Rate, Impressions, and ROI. Monitoring these metrics provides insights into the effectiveness of your ad strategy.</p>
                                  </div>

                                </div>

                              </div>
                            </Accordion.Body>

                          </Accordion.Item>

                        </Accordion>

                        <Accordion className='mb-3'>
                          <Accordion.Item eventKey="8">

                            <Accordion.Header>
                              <div className='row'>
                                <div className='col-md-12'>

                                  <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q8: How can I reduce ad fraud on my publisher website?</h5>
                                </div>
                              </div>
                            </Accordion.Header>

                            <Accordion.Body>

                              <div className="container ">
                                <div className="row ">
                                  <div className="col-md-12 ">
                                    <p className='fs-5 p-0 m-0'>A: Implement ad fraud detection tools, use reputable ad networks, and regularly monitor for suspicious activity to reduce the risk of ad fraud on your website.</p>
                                  </div>

                                </div>

                              </div>
                            </Accordion.Body>

                          </Accordion.Item>

                        </Accordion>

                        <Accordion className='mb-3'>
                          <Accordion.Item eventKey="9">

                            <Accordion.Header>
                              <div className='row'>
                                <div className='col-md-12'>

                                  <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q9: What is the difference between first-party and third-party data in advertising statistics?</h5>
                                </div>
                              </div>
                            </Accordion.Header>

                            <Accordion.Body>

                              <div className="container ">
                                <div className="row ">
                                  <div className="col-md-12 ">
                                    <p className='fs-5 p-0 m-0'>A: First-party data is collected directly from your audience, while third-party data is obtained from external sources. First-party data is often more reliable and specific to your audience.</p>
                                  </div>

                                </div>

                              </div>
                            </Accordion.Body>

                          </Accordion.Item>

                        </Accordion>

                        <Accordion >
                          <Accordion.Item eventKey="10">

                            <Accordion.Header>
                              <div className='row'>
                                <div className='col-md-12'>

                                  <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q10: How is Click-Through Rate (CTR) calculated?</h5>
                                </div>
                              </div>
                            </Accordion.Header>

                            <Accordion.Body>

                              <div className="container ">
                                <div className="row ">
                                  <div className="col-md-12 ">
                                    <p className='fs-5 p-0 m-0'>A: CTR is calculated by dividing the number of clicks on an ad by the number of impressions and then multiplying by 100 to get a percentage.</p>
                                  </div>

                                </div>

                              </div>
                            </Accordion.Body>

                          </Accordion.Item>

                        </Accordion>

                      </Col>

                    </Row>
                  </div>


                </Row>

              </Col>

            </Row>
          </Col>
        </Row>

      </Container>
      </Layout>
  )
}
