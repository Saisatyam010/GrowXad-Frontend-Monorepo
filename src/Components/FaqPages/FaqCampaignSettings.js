import React from 'react'
import './FaqCampaignSettings.css'
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FaChevronRight } from "react-icons/fa6";
import Layout from '../Layout/Layout';

export const FaqCampaignSettings = () => {
    return (
        <Layout>
            <Container fluid className='m-0 p-0 ' >

                <Row className='m-0 p-0  d-flex justify-content-center'>
                    <Col md={8} >
                        <Row>

                            {/* Top Headings */}

                            <Col md={12}>
                                <div className='d-flex pt-4 fs-4'>
                                    <span className='dp_campaign_guide_items'>All Collections</span>
                                    <span className='px-1'><FaChevronRight className='text-secondary' /></span>
                                    <span className='dp_campaign_guide_sub_items'>Campaign settings</span>
                                </div>

                                <h3 className='fw-bold pt-4'>Campaign settings</h3>
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
                                                                    {/* <h5 className=' p-0 m-0' style={{color:"rgb(115,3,91)"}}>How do I access the platform?<h5/> */}
                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q1.  How do I create a new advertising campaign?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className=' fs-5 p-0 m-0'>A :  Navigate to your dashboard, click "Create Campaign," set your campaign objectives, budget, and targeting parameters, then launch your campaign</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q2: What targeting options are available for campaigns?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Choose from demographics, interests, location, and device targeting to ensure your ads reach the most relevant audience.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q3: Can I schedule my ad campaigns for specific times?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Yes, use the campaign scheduling feature to set specific start and end times, optimizing your ad delivery for peak engagement</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q4: What is frequency capping, and how does it work?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A:  Frequency capping limits the number of times a user sees your ad. Set this parameter to manage ad exposure and prevent overexposure to the same audience.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q5: How can I optimize my bidding strategy for better results?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Experiment with bidding strategies like CPC (Cost Per Click) or CPM (Cost Per Mille) to find the most effective approach for your campaign goals.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q6: What is ad rotation, and why is it important?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Ad rotation determines how different creatives are displayed. Optimize for clicks, conversions, or evenly distribute to test creatives and improve campaign performance.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q7: How can I track the performance of my campaigns?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Utilize the analytics dashboard to monitor key metrics such as impressions, clicks, and conversions. Adjust settings based on real-time performance data.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q8: Can I run A/B tests on my ad campaigns?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A:  Yes, create variations of your ads and use A/B testing to compare their performance. This helps identify the most effective elements for optimal results.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q9:  What budgeting options are available for campaigns?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Choose between daily and lifetime budgets. Daily budgets set a maximum spend per day, while lifetime budgets cap your total expenditure for the entire campaign.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q10: How can I pause or edit an ongoing campaign?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Access the campaign manager, locate your active campaign, and use the pause/edit options to make adjustments or temporarily halt the campaign.</p>
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
