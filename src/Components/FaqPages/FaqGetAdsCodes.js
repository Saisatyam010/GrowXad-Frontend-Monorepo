import React from 'react'
import './FaqGetAdsCodes.css'
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FaChevronRight } from "react-icons/fa6";
import Layout from '../Layout/Layout';

export const FaqGetAdsCodes = () => {
    return (
        <>
            <Layout>
                <Container fluid className='m-0 p-0 ' >

                    <Row className='m-0 p-0  d-flex justify-content-center'>
                        <Col md={8} >
                            <Row>

                                {/* Top Heading */}

                                <Col md={12}>
                                    <div className='d-flex pt-4 fs-4'>
                                        <span className='dp_campaign_guide_items'>All Collections</span>
                                        <span className='px-1'><FaChevronRight className='text-secondary' /></span>
                                        <span className='dp_campaign_guide_sub_items'>How to get Ads Codes and Snippets </span>
                                    </div>

                                    <h3 className='fw-bold pt-3'>Ads Codes and Snippets </h3>
                                </Col>

                                {/* FAQ Questions */}

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

                                                                        <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q1. How do I get ad codes for my website?</h5>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Header>

                                                            <Accordion.Body>

                                                                <div className="container ">
                                                                    <div className="row ">
                                                                        <div className="col-md-12 ">
                                                                            <p className=' fs-5 p-0 m-0'>A : Log in to your advertiser or publisher account, navigate to the "Ad Codes" or "Generate Ad" section, and follow the instructions to create and retrieve your ad codes. </p>
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

                                                                        <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q2: Can I customize the appearance of ad units on my website?</h5>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Header>

                                                            <Accordion.Body>

                                                                <div className="container ">
                                                                    <div className="row ">
                                                                        <div className="col-md-12 ">
                                                                            <p className='fs-5 p-0 m-0'>A: Yes, many platforms allow customization. Adjust ad sizes, colors, and styles during the ad code generation process to seamlessly integrate with your website's design.</p>
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

                                                                        <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q3: Where can I find the ad code for a specific ad campaign?</h5>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Header>

                                                            <Accordion.Body>

                                                                <div className="container ">
                                                                    <div className="row ">
                                                                        <div className="col-md-12 ">
                                                                            <p className='fs-5 p-0 m-0'>A:  In your advertiser dashboard, locate the campaign you want to get the ad code for. Click on the campaign details or settings to find the corresponding ad code.</p>
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

                                                                        <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q4: How do I integrate ad codes into my website?</h5>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Header>

                                                            <Accordion.Body>

                                                                <div className="container ">
                                                                    <div className="row ">
                                                                        <div className="col-md-12 ">
                                                                            <p className='fs-5 p-0 m-0'>A:  Copy the generated ad code snippet and paste it into the HTML code of your website where you want the ad to appear. Ensure proper placement for optimal visibility.</p>
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

                                                                        <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q5: Are there different ad codes for various ad formats?</h5>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Header>

                                                            <Accordion.Body>

                                                                <div className="container ">
                                                                    <div className="row ">
                                                                        <div className="col-md-12 ">
                                                                            <p className='fs-5 p-0 m-0'>A: Yes, each ad format may have a unique ad code. When creating a new ad unit or campaign, select the format you want, and the platform will provide the corresponding ad code.</p>
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

                                                                        <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q6: Can I use the same ad code on multiple pages of my website?</h5>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Header>

                                                            <Accordion.Body>

                                                                <div className="container ">
                                                                    <div className="row ">
                                                                        <div className="col-md-12 ">
                                                                            <p className='fs-5 p-0 m-0'>A: Yes, you can use the same ad code on multiple pages. However, consider customizing ad placements for each page to maximize engagement and revenue. </p>
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

                                                                        <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q7: Do I need to update ad codes regularly?</h5>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Header>

                                                            <Accordion.Body>

                                                                <div className="container ">
                                                                    <div className="row ">
                                                                        <div className="col-md-12 ">
                                                                            <p className='fs-5 p-0 m-0'>A: It depends on your platform and settings. Some platforms automatically update ad codes, while others may require manual updates. Check your platform's documentation for guidance.</p>
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

                                                                        <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q8:  Is there a preview option for ad codes before implementation?</h5>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Header>

                                                            <Accordion.Body>

                                                                <div className="container ">
                                                                    <div className="row ">
                                                                        <div className="col-md-12 ">
                                                                            <p className='fs-5 p-0 m-0'>A: Many platforms offer a preview feature, allowing you to see how the ad will appear on your website before final implementation. Use this to ensure a seamless integration.</p>
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

                                                                        <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q9: What should I do if the ad code is not displaying ads on my website?</h5>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Header>

                                                            <Accordion.Body>

                                                                <div className="container ">
                                                                    <div className="row ">
                                                                        <div className="col-md-12 ">
                                                                            <p className='fs-5 p-0 m-0'>A: Double-check the code placement, ensure there are no typos, and verify that the ad format is supported by your chosen platform. If issues persist, contact customer support.</p>
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

                                                                        <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q10:  Can I track performance through the ad code?</h5>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Header>

                                                            <Accordion.Body>

                                                                <div className="container ">
                                                                    <div className="row ">
                                                                        <div className="col-md-12 ">
                                                                            <p className='fs-5 p-0 m-0'>A:  Yes, the ad code often includes tracking elements. Monitor performance metrics such as impressions, clicks, and conversions through your platform's analytics or reporting tools.</p>
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
        </>
    )
}
