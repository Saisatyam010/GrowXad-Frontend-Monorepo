import React from 'react'
import './FaqStatsAndPayouts.css'
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FaChevronRight } from "react-icons/fa6";
import Layout from '../Layout/Layout';


export const FaqStatsAndPayouts = () => {
    return (
        <Layout>
            <Container fluid >

                <Row className='d-flex justify-content-center'>
                    <Col md={8}>
                        <Row >

                            {/* All Collection, Setting Icon & Campaign Setting Heading */}

                            <Col md={12}>
                                <div className='d-flex pt-4 fs-4'>
                                    <span className='dp_campaign_guide_items'>All Collections</span>
                                    <span className='px-1'><FaChevronRight className='text-secondary' /></span>
                                    <span className='dp_campaign_guide_sub_items'>Stats and Payouts</span>
                                </div>

                                <h3 className='fw-bold pt-3'>Ads Stats and Payouts</h3>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q1. How can I view the statistics for my ad campaigns or website performance?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className=' fs-5 p-0 m-0'>A : Log in to your dashboard and navigate to the "Statistics" or "Analytics" section to access detailed insights into impressions, clicks, and other key metrics.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q2:  What metrics should I monitor to assess the success of my ad campaigns or website monetization?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Focus on key metrics like CTR (Click-Through Rate), conversion rate, revenue, and user engagement to gauge the effectiveness of your efforts.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q3: How often are statistics updated in the dashboard?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Statistics are typically updated in real-time or at regular intervals, allowing you to monitor campaign or website performance promptly.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q4: Can I track earnings and payouts in real-time?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Yes, many platforms provide real-time tracking of earnings. Check the "Payouts" or "Earnings" section for up-to-date information on your revenue.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q5: What is the payout frequency, and how are payouts processed?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A:  Payout frequencies vary; common options include monthly or on a set schedule. Payouts are often processed through preferred methods like bank transfers or payment processors.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q6:  Is there a minimum payout threshold I need to reach before receiving payments?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Yes, most platforms have a minimum payout threshold. Ensure your earnings exceed this threshold to initiate the payout process. </p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q7: Can I track individual ad performance within a campaign or ad unit?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Yes, platforms often provide granular statistics, allowing you to analyze the performance of each ad within a campaign or on specific website pages.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q8:  What should I do if there are discrepancies in statistics or payouts?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Reach out to customer support for assistance. Discrepancies may be due to technical issues or ad fraud, and support can help resolve the issues.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q9: Are there additional fees or deductions from payouts?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A: Review the platform's terms and conditions to understand any fees or deductions. Common deductions may include transaction fees or taxes.</p>
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

                                                                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>Q10: Can I receive detailed reports on my ad performance or website earnings?</h5>
                                                                </div>
                                                            </div>
                                                        </Accordion.Header>

                                                        <Accordion.Body>

                                                            <div className="container ">
                                                                <div className="row ">
                                                                    <div className="col-md-12 ">
                                                                        <p className='fs-5 p-0 m-0'>A:  Yes, platforms often provide downloadable reports summarizing ad performance, earnings, and other relevant data for further analysis.</p>
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
