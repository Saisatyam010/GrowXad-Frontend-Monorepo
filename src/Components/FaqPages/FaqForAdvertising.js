import React from 'react'
import './FaqForAdvertising.css'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import { FaChevronRight } from "react-icons/fa6";
import Layout from '../Layout/Layout';

export const FaqForAdvertising = () => {
    return (
        <Layout>
            <Container fluid className='m-0 p-0'>

                <Row className='m-0 p-0 d-flex justify-content-center'>
                    <Col md={8} >
                        <Row>

                            {/* Top Heading */}

                            <Col md={12}>
                                <div className='d-flex pt-4 fs-4'>
                                    <span className='dp_campaign_guide_items'>All Collections</span>
                                    <span className='px-1'><FaChevronRight className='text-secondary' /></span>
                                    <span className='dp_campaign_guide_sub_items'>FAQ for Advertiser</span>
                                </div>

                                <h3 className='fw-bold pt-3'>FAQ for Advertiser</h3>
                            </Col>

                            {/* FAQ Question List */}

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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q1. How can I track the performance of my ads or website?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className=' fs-5 p-0 m-0'>A : Utilize analytics tools such as Google Analytics to monitor key metrics like impressions, clicks, and conversions in real-time.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q2:  What is the significance of click-through rate (CTR) in ad tracking?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A:  CTR measures the percentage of users who click on an ad after seeing it. A higher CTR often indicates more engaging and relevant ads.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q3: How do I set up conversion tracking for my ad campaigns?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Implement conversion tracking pixels or codes provided by the ad platform. This allows you to measure actions taken by users after clicking on your ads.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q4: Can I track user behavior on my website as a publisher?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A:  Yes, leverage tools like heatmaps and user session recordings to understand how visitors interact with your website, helping optimize content and ad placements.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q5: What is the role of UTM parameters in ad tracking?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A:  UTM parameters are tags added to URLs, providing detailed insights into the source, medium, and campaign associated with a click. Use them for accurate tracking in analytics tools.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q6: How often should I review and analyze my ad campaign stats?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Regularly review stats, especially after launching new campaigns or making significant changes. This ensures timely optimization and improved performance. </p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q7: What metrics are crucial for assessing the success of an ad campaign?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Key metrics include CTR, conversion rate, bounce rate, and return on investment (ROI). Analyzing these metrics provides a comprehensive view of campaign effectiveness.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q8: Can I track cross-device performance for my ads?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Yes, many tracking tools offer cross-device attribution, allowing you to understand how users move between devices before converting or taking action.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q9: How can I troubleshoot discrepancies in tracking data?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Check for issues such as tag implementation errors, ad fraud, or discrepancies between tracking platforms. Consult support or documentation for resolution.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q10:  Are there privacy considerations when tracking user data?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Yes, prioritize user privacy by adhering to data protection regulations. Clearly communicate your privacy policy and ensure compliance with applicable laws.</p>
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




