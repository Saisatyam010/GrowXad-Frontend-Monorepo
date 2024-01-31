import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { GoRocket } from "react-icons/go";

import './BenefitsForPublishers.css'
import Layout from '../Layout/Layout';
import { Link } from 'react-router-dom';
const BenefitsForPublishers = () => {
    return (
        <>
            <Layout>
                <Container fluid>
                    <Row className='d-flex justify-content-center p-4'>
                        <Col md={10}>

                            <Row >
                                <Col md={6} className='py-3'>

                                    <div className='dp_publisher_heading'>

                                        <span>Your Premier</span>
                                        <span style={{ color: "rgb(121,3,91" }}> Destination </span>
                                        <span>for </span>
                                        <span style={{ color: "rgb(121,3,91" }}>Publishers </span>
                                        <span>and </span>
                                        <span style={{ color: "rgb(121,3,91" }}>Ads</span>

                                    </div>

                                    <p className='dp_publisher_paragraph'>
                                        Partner with us for a lifetime and receive dedicated support, ensuring continuous growth in your revenue endeavors.
                                    </p>

                                    <button className='dp_start_button'>
                                        <Link to="/adveriserauthLogin" className='text-white no-underline hover:no-underline'>
                                            <div className='d-flex'>
                                                <span>
                                                    <GoRocket />
                                                </span>
                                                <span className='px-2'>
                                                    Start Monetizing
                                                </span>
                                            </div>
                                        </Link>
                                    </button>

                                </Col>
                                <Col md={6} >
                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/9aeac015-b088-42cb-0f24-a295c24d5a00/public' alt='' width="100%" height="100%">
                                    </img>
                                </Col>
                            </Row>

                            {/* 3 Cards */}

                            <Row className='pt-5'>

                                <Col md={4}>
                                    <div className='dp_publisher_card'>
                                        <h5 className='m-0'>2.5 Million + </h5>
                                        <p className='dp_publisher_card_heading'>Impressions</p>
                                    </div>
                                </Col>

                                <Col md={4}>
                                    <div className='dp_publisher_card'>
                                        <h5 className='m-0'>64 % </h5>
                                        <p className='dp_publisher_card_heading'>Click-Through Rate (CTR)</p>
                                        <p className='dp_publisher_underline'></p>
                                    </div>
                                </Col>

                                <Col md={4}>
                                    <div className='dp_publisher_card'>
                                        <h5 className='m-0'>$ 1.2 Million + </h5>
                                        <p className='dp_publisher_card_heading'>Revenue or Earnings</p>
                                        <p className='dp_publisher_underline'></p>
                                    </div>
                                </Col>

                            </Row>


                            <Row>
                                <Col md={12}>

                                    <Row >

                                        <div className='dp_publisher_heading text-center py-3'>

                                            <span style={{ color: "rgb(121,3,91" }}> Monetize </span>
                                            <span> any type of </span>
                                            <span style={{ color: "rgb(121,3,91" }}>Traffic </span>

                                        </div>


                                        <Col md={6} className=' d-flex align-items-center'>
                                            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/f0b0ccff-8792-403e-7d3c-3fab8fcfe200/public' width="80%" height="80%" alt=''></img>
                                        </Col>

                                        <Col md={6} className='d-flex align-items-center '>
                                            <Row>
                                                <Col md={12} >
                                                    <div className='dp_publisher_img_row'>
                                                        <span style={{ color: "rgb(121,3,91" }}>Mobile </span>
                                                        <span>and </span>
                                                        <span style={{ color: "rgb(121,3,91" }}>Desktop </span>
                                                        <span>Traffic</span>
                                                    </div>
                                                </Col>

                                                <Col md={12}>
                                                    <p className='m-0 pt-1'>Optimize your website for diverse user experiences with our mobile and desktop traffic solutions. Engage a mobile audience on the go and capture the attention of desktop users with responsive designs.</p>
                                                </Col>

                                            </Row>

                                        </Col>
                                    </Row>

                                    <Row >

                                        <Col md={6} className='d-flex align-items-center '>
                                            <Row>
                                                <Col md={12}>
                                                    <div className='dp_publisher_img_row'>
                                                        <span style={{ color: "rgb(121,3,91" }}>Referral </span>
                                                        <span>and </span>
                                                        <span style={{ color: "rgb(121,3,91" }}>Social </span>
                                                        <span>Traffic </span>
                                                    </div>
                                                </Col>

                                                <Col md={12} >
                                                    <p className='m-0 pt-1'>Elevate your reach with our referral and social traffic solutions. Leverage word-of-mouth marketing for organic growth through referrals, while harnessing social media platforms to engage and captivate audiences.</p>
                                                </Col>

                                            </Row>

                                        </Col>

                                        <Col md={6} className='d-flex align-items-center'>
                                            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/9702214c-f9bf-4422-ed15-2554092afe00/public' width="80%" height="80%" alt=''></img>
                                        </Col>
                                    </Row>

                                    <Row >


                                        <Col md={6} className='d-flex align-items-center'>
                                            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/df452dda-7e47-48c6-05a7-2d0ca21fa500/public' width="80%" height="80%" alt=''></img>
                                        </Col>

                                        <Col md={6} className='d-flex align-items-center'>
                                            <Row>

                                                <Col md={12}>
                                                    <div className='dp_publisher_img_row'>
                                                        <span style={{ color: "rgb(121,3,91" }}>Paid Advertising</span>
                                                        <span> Traffic</span>
                                                    </div>
                                                </Col>

                                                <Col md={12}>
                                                    <p className='m-0 pt-1'>Elevate your brand with our paid advertising solutions and Transform your brand's visibility.achieve exceptional results as your brand takes center stage in the competitive landscape through our proven paid advertising strategies.</p>
                                                </Col>
                                            </Row>

                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            {/* Why Choose us */}

                            <Row className='py-4'>
                                <Col md={12}>

                                    <Row>
                                        <Col md={12} className='p-2 text-center'>

                                            <div className='dp_publisher_heading text-center'>

                                                <span>Why </span>
                                                <span style={{ color: "rgb(121,3,91" }}>Choose </span>
                                                <span>us </span>

                                            </div>
                                        </Col>
                                    </Row>

                                    <Row className='mt-3'>

                                        <Col md={4} className='pt-3'>

                                            <div className='dp_publisher_whywechoose_container'>
                                                <Row className='d-flex align-items-center' style={{ padding: "1px 10px" }}>
                                                    <Col md={2} className='col-2'>

                                                        <div className='dp_publisher_whywechoose_icon_img'>
                                                            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/1264b2c5-e36e-41f8-6ae4-73cc66150c00/public' alt='' height="100%" width="100%"></img>
                                                        </div>
                                                    </Col>
                                                    <Col md={9} className='col-10 dp_publisher_whywechoose_heading px-4'>
                                                        <p>Dedicated Support and Customer Service</p>
                                                    </Col>
                                                </Row>

                                                <Row >
                                                    <Col md={12} style={{ fontSize: "14px" }}>
                                                        <p className='m-0 pt-2'>Our customer support is dedicated to prompt and effective resolution of issues for advertisers and publishers. </p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>

                                        <Col md={4} className='pt-3'>
                                            <div className='dp_publisher_whywechoose_container'>
                                                <Row className='d-flex align-items-center' style={{ padding: "1px 10px" }}>
                                                    <Col md={2} className='col-2'>

                                                        <div className='dp_publisher_whywechoose_icon_img'>
                                                            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/5275d796-7cbf-4d7c-9e5f-bfd7318b3900/public' alt='' height="100%" width="100%"></img>
                                                        </div>
                                                    </Col>
                                                    <Col md={9} className='col-10 dp_publisher_whywechoose_heading px-4'>
                                                        <p>Customization and Personalization</p>
                                                    </Col>
                                                </Row>

                                                <Row >
                                                    <Col md={12} style={{ fontSize: "14px" }}>
                                                        <p className='m-0 pt-2'>
                                                            Empower advertisers with robust customization tools for personalized campaigns, elevating effectiveness through tailored targeting.</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>

                                        <Col md={4} className='pt-3'>
                                            <div className='dp_publisher_whywechoose_container'>

                                                <Row className='d-flex align-items-center' style={{ padding: "1px 10px" }}>
                                                    <Col md={2} className='col-2'>

                                                        <div className='dp_publisher_whywechoose_icon_img'>
                                                            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/2db4585d-3d7b-488c-c556-60d54e5f7c00/public' alt='' height="100%" width="100%"></img>
                                                        </div>
                                                    </Col>
                                                    <Col md={9} className='col-10 dp_publisher_whywechoose_heading px-4'>
                                                        <p>Partnerships and Collaborations</p>
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col md={12} style={{ fontSize: "14px" }}>
                                                        <p className='m-0 pt-2'>
                                                            Showcase esteemed partnerships and collaborations to boost advertiser confidence in your platform's credibility and influence.</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>

                                        <Col md={4} className='pt-3'>
                                            <div className='dp_publisher_whywechoose_container'>

                                                <Row className='d-flex align-items-center' style={{ padding: "1px 10px" }}>
                                                    <Col md={2} className='col-2'>

                                                        <div className='dp_publisher_whywechoose_icon_img'>
                                                            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/bd4002c9-6d52-4dee-7a77-6cfcd60e2a00/public' alt='' height="100%" width="100%"></img>
                                                        </div>
                                                    </Col>
                                                    <Col md={9} className='col-10 dp_publisher_whywechoose_heading px-4'>
                                                        <p>Cross-Channel Marketing Opportunities</p>
                                                    </Col>
                                                </Row>

                                                <Row >
                                                    <Col md={12} style={{ fontSize: "14px" }}>
                                                        <p className='m-0 pt-2'>
                                                            Highlight cross-channel opportunities for advertisers to extend reach across platforms, enhancing campaign effectiveness.</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>

                                        <Col md={4} className='pt-3'>
                                            <div className='dp_publisher_whywechoose_container'>

                                                <Row className='d-flex align-items-center' style={{ padding: "1px 10px" }}>
                                                    <Col md={2} className='col-2'>

                                                        <div className='dp_publisher_whywechoose_icon_img'>
                                                            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/99d8cca9-97f0-4a09-654c-216a7c030100/public' alt='' height="100%" width="100%"></img>
                                                        </div>
                                                    </Col>
                                                    <Col md={9} className='col-10 dp_publisher_whywechoose_heading px-4'>
                                                        <p>Highly Targeted Audience</p>
                                                    </Col>
                                                </Row>

                                                <Row >
                                                    <Col md={12} style={{ fontSize: "14px" }}>
                                                        <p className='m-0 pt-2'>Connect advertisers with a niche or well-defined demographic, optimizing relevance for successful campaigns.
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>

                                        <Col md={4} className='pt-3'>
                                            <div className='dp_publisher_whywechoose_container'>

                                                <Row className='d-flex align-items-center' style={{ padding: "1px 10px" }}>
                                                    <Col md={2} className='col-2'>

                                                        <div className='dp_publisher_whywechoose_icon_img'>
                                                            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/352ba55c-983c-4a59-2143-5e1feb3e4700/public' alt='' height="100%" width="100%"></img>
                                                        </div>
                                                    </Col>
                                                    <Col md={9} className='col-10 dp_publisher_whywechoose_heading px-4'>
                                                        <p>Brand Safety and Ad Fraud Prevention</p>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col md={12} style={{ fontSize: "14px" }}>

                                                        <p className='m-0 pt-2'>
                                                            Committed to brand safety, we employ rigorous measures to combat ad fraud, ensuring a secure advertising environment.
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>


                            <Row>
                                <Col md={12}>
                                    <Row>
                                        <Col md={12} className='p-2 text-center'>
                                            <div className='dp_publisher_heading text-center'>

                                                <span>Top Bloggers' </span>
                                                <span style={{ color: "rgb(121,3,91" }}>Review </span>

                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Col md={4} className='pt-3'>
                                            <div className='dp_publisher_blogger_container'>
                                                <Row >
                                                    <Col md={12} style={{ fontSize: "14px" }}>
                                                        <p className='m-0 pt-2'>“Ad placement flexibility is fantastic! Seamless integration enhances user experience. Customizable positions maintain a clean look on my blog.”</p>
                                                    </Col>
                                                </Row>
                                                <Row className='d-flex align-items-center pt-4' style={{ padding: "1px 10px" }}>
                                                    <Col md={3} className='col-3'>
                                                        <div className='dp_publisher_blogger_icon_img'>
                                                            <img src='https://adsterra.com/_nuxt/img/person_1.a0cb0d8.png' alt='' height="100%" width="100%"></img>
                                                        </div>
                                                    </Col>
                                                    <Col md={6} className='col-6'>
                                                        <p className='m-0 text-center'> ~ George Wood</p>
                                                    </Col>
                                                    <Col md={3} className='col-3'>
                                                        <div >
                                                            <img src='https://www.pngarts.com/files/12/Apostrophe-Icon-PNG-Image.png' alt='' height="100%" width="100%"></img>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>

                                        <Col md={4} className='pt-3'>
                                            <div className='dp_publisher_blogger_container'>
                                                <Row >
                                                    <Col md={12} style={{ fontSize: "14px" }}>
                                                        <p className='m-0 pt-2'>“Effortless navigation! The clean, intuitive interface simplifies ad management and performance tracking. A big thumbs up for the simple, effective design !”</p>
                                                    </Col>
                                                </Row>
                                                <Row className='d-flex align-items-center pt-4' style={{ padding: "1px 10px" }}>
                                                    <Col md={3} className='col-3'>
                                                        <div className='dp_publisher_blogger_icon_img'>
                                                            <img src='	https://adsterra.com/_nuxt/img/person_1.a0cb0d8.png' alt='' height="100%" width="100%"></img>
                                                        </div>
                                                    </Col>
                                                    <Col md={6} className='col-6'>
                                                        <p className='m-0 text-center'> ~ Steve John</p>
                                                    </Col>
                                                    <Col md={3} className='col-3'>
                                                        <div >
                                                            <img src='https://www.pngarts.com/files/12/Apostrophe-Icon-PNG-Image.png' alt='' height="100%" width="100%"></img>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>

                                        <Col md={4} className='pt-3'>
                                            <div className='dp_publisher_blogger_container'>
                                                <Row >
                                                    <Col md={12} style={{ fontSize: "14px" }}>
                                                        <p className='m-0 pt-2'>“Standout innovation in ad formats! Native interactive features add creativity to my blog, refreshing to see a platform embracing innovation.”</p>
                                                    </Col>
                                                </Row>
                                                <Row className='d-flex align-items-center pt-4' style={{ padding: "1px 10px" }}>
                                                    <Col md={3} className='col-3'>
                                                        <div className='dp_publisher_blogger_icon_img'>
                                                            <img src='	https://adsterra.com/_nuxt/img/person_1.a0cb0d8.png' alt='' height="100%" width="100%"></img>
                                                        </div>
                                                    </Col>
                                                    <Col md={6} className='col-6'>
                                                        <p className='m-0 text-center'> ~ Johnson</p>
                                                    </Col>
                                                    <Col md={3} className='col-3'>
                                                        <div >
                                                            <img src='https://www.pngarts.com/files/12/Apostrophe-Icon-PNG-Image.png' alt='' height="100%" width="100%"></img>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
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

export default BenefitsForPublishers