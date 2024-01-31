import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './FreeResourcesBlogPage.css'
import { CiSearch } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlinePaid } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";
import { IoPricetagsOutline } from "react-icons/io5";
import Layout from '../Layout/Layout';

export const FreeResourcesBlogPage = () => {
    return (
        <>
            <Layout>

                <Container>

                    {/* Top Photo */}

                    <Row className='pt-5'>

                        <Col md={6} className='py-2 '>
                            <div className='dp_blogs_top_photo_container text-center '>
                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/73554e33-3b25-41a2-27cc-2a2f3b3fb900/public' width="100%" height="100%"></img>
                            </div>
                        </Col>

                        <Col md={6} className='d-flex align-items-center'>
                            <div className='p-2'>
                                <p className='dp_blog_main_heading1'>Your Story, Our Platform:</p>
                                <p className='dp_blog_main_heading2'>
                                    Advertise effectively on premier publisher websites, transforming your narrative with a strategic $200 investment. Unlock enhanced visibility, engage a broader audience online. Seize the opportunity to amplify your message, connecting meaningfully in the digital realm.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    {/* Top Categories */}

                    <Row>
                        <Col md={12} >
                            <Row className='py-5'>

                                <Col md={3} className='col-6'>
                                    <div className='dp_blog_3cards'>
                                        <Row>
                                            <Col md={12} className='d-flex align-items-center justify-content-center '>
                                                <IoPricetagsOutline className='dp_blog_3cards_icon' />
                                            </Col>
                                            <Col md={12}>
                                                <p className='dp_blog_3cards_heading'>$200 FOR STORY </p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>

                                <Col md={3} className='col-6'>
                                    <div className='dp_blog_3cards'>
                                        <Row>
                                            <Col md={12} className='d-flex align-items-center justify-content-center '>
                                                <RiAdvertisementLine className='dp_blog_3cards_icon' />
                                            </Col>
                                            <Col md={12}>
                                                <p className='dp_blog_3cards_heading '>DISPLAY ADS FORMAT</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>

                                <Col md={3} className='col-6'>
                                    <div className='dp_blog_3cards'>
                                        <Row>
                                            <Col md={12} className='d-flex align-items-center justify-content-center '>
                                                <TbDiscount2 className='dp_blog_3cards_icon' />
                                            </Col>
                                            <Col md={12}>
                                                <p className='dp_blog_3cards_heading '>TOP OFFERS</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>

                                <Col md={3} className='col-6'>
                                    <div className='dp_blog_3cards'>
                                        <Row>
                                            <Col md={12} className='d-flex align-items-center justify-content-center '>
                                                <MdOutlineTipsAndUpdates className='dp_blog_3cards_icon' />
                                            </Col>
                                            <Col md={12}>
                                                <p className='dp_blog_3cards_heading '>TIPS AND GUIDES</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>

                            </Row>
                        </Col>
                    </Row>


                    {/* Latest Posts & NEWSLETTER */}

                    <Row >
                        <Col md={12}>

                            {/* Latest Posts */}

                            <Row className='pt-2 '>

                                <Col md={8} className='col-12 d-flex align-items-center '>

                                    <Row>
                                        <Col md={12} className='col-12'>

                                            {/* Traffic Monitisation */}

                                            <Row>

                                                <Col md={12}>
                                                    <h3 className='m-0 pb-2'>TRAFFIC MONETIZATION</h3>
                                                </Col>

                                                <Col md={6} className='pb-3'>
                                                    <div className='dp_blog_TrafficMonitisation_container'>
                                                        <Row>
                                                            <Col md={12} className='d-flex align-tems-center justify-content-center '>
                                                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/5290476b-5cd6-4044-e83c-6b0dbe07ca00/public' alt='' width="100%" height="100%"></img>
                                                            </Col>

                                                            <Col md={12} className='p-0 m-0 d-flex align-items-center '>
                                                                <div className='p-3'>
                                                                    <p className='fw-bold'>Mastering the Art of Advertising:</p>
                                                                    <p className='fs-6 mb-3 text-dark'>Affiliate embraces native advertising promotional content that resonates audiences, leading to enhanced user engagement and trust.</p>
                                                                    <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>

                                                <Col md={6} className='pb-3'>
                                                    <div className='dp_blog_TrafficMonitisation_container'>
                                                        <Row>
                                                            <Col md={12} className='dp_blogs_TrafficMonitisation_imgContainer '>
                                                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/e0dab2d0-1148-425d-36b4-db2cbd23ce00/public' alt='' width="100%" height="100%"></img>
                                                            </Col>

                                                            <Col md={12} className='p-0 m-0 d-flex align-items-center '>
                                                                <div className='p-3'>
                                                                    <p className='fw-bold'>Partnerships and Collaborations:</p>
                                                                    <p className='fs-6 mb-3 text-dark'>Learn about recent partnerships and collaborations between technology companies, advertisers, and publishers, and how these alliances are advertising.</p>
                                                                    <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>

                                                <Col md={6} className='pb-3'>
                                                    <div className='dp_blog_TrafficMonitisation_container'>
                                                        <Row>

                                                            <Col md={12} className='dp_blogs_TrafficMonitisation_imgContainer '>
                                                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d681584c-03fa-4cb7-e170-9916d1d3a700/public' alt='' width="100%" height="100%"></img>
                                                            </Col>

                                                            <Col md={12} className='p-0 m-0 d-flex align-items-center '>
                                                                <div className='p-3'>
                                                                    <p className='fw-bold'>Apple's App Tracks Transparency:</p>
                                                                    <p className='fs-6 mb-3 text-dark'>Explore how Apple's App Tracking Transparency (ATT) policy is affecting ad targeting, and how advertisers are adjusting their strategies.</p>
                                                                    <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>

                                                <Col md={6} className='pb-3'>
                                                    <div className='dp_blog_TrafficMonitisation_container'>
                                                        <Row>
                                                            <Col md={12} className='dp_blogs_TrafficMonitisation_imgContainer '>
                                                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/b82ccfe6-574a-4a6d-bea3-4ccfffa77400/public' alt=''></img>
                                                            </Col>


                                                            <Col md={12} className='p-0 m-0 d-flex align-items-center '>
                                                                <div className='p-3'>
                                                                    <p className='fw-bold'>Innovations in Ad Creative:</p>
                                                                    <p className='fs-6 mb-3 text-dark'>Look into ad creative, such as interactive and immersive formats, and how these innovations impact user engagement and monetization.</p>
                                                                    <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>

                                                <Col md={6} className='pb-3'>
                                                    <div className='dp_blog_TrafficMonitisation_container'>
                                                        <Row>
                                                            <Col md={12} className='dp_blogs_TrafficMonitisation_imgContainer '>
                                                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/5290476b-5cd6-4044-e83c-6b0dbe07ca00/public' alt='' width="100%" height="100%"></img>
                                                            </Col>

                                                            <Col md={12} className='p-0 m-0 d-flex align-items-center '>
                                                                <div className='p-3'>
                                                                    <p className='fw-bold'>Mastering the Art of Advertising:</p>
                                                                    <p className='fs-6 mb-3 text-dark'>Affiliate embraces native advertising promotional content that resonates audiences, leading to enhanced user engagement and trust.</p>
                                                                    <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>

                                                <Col md={6} className='pb-3'>
                                                    <div className='dp_blog_TrafficMonitisation_container'>
                                                        <Row>
                                                            <Col md={12} className='dp_blogs_TrafficMonitisation_imgContainer '>
                                                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/e0dab2d0-1148-425d-36b4-db2cbd23ce00/public' alt='' width="100%" height="100%"></img>
                                                            </Col>

                                                            <Col md={12} className='p-0 m-0 d-flex align-items-center '>
                                                                <div className='p-3'>
                                                                    <p className='fw-bold'>Partnerships and Collaborations:</p>
                                                                    <p className='fs-6 mb-3 text-dark'>Learn about recent partnerships and collaborations between technology companies, advertisers, and publishers, and how these alliances are advertising.</p>
                                                                    <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>

                                                <Col md={6} className='pb-3'>
                                                    <div className='dp_blog_TrafficMonitisation_container'>
                                                        <Row>

                                                            <Col md={12} className='dp_blogs_TrafficMonitisation_imgContainer '>
                                                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d681584c-03fa-4cb7-e170-9916d1d3a700/public' alt='' width="100%" height="100%"></img>
                                                            </Col>

                                                            <Col md={12} className='p-0 m-0 d-flex align-items-center '>
                                                                <div className='p-3'>
                                                                    <p className='fw-bold'>Apple's App Tracks Transparency:</p>
                                                                    <p className='fs-6 mb-3 text-dark'>Explore how Apple's App Tracking Transparency (ATT) policy is affecting ad targeting, and how advertisers are adjusting their strategies.</p>
                                                                    <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>

                                                <Col md={6} className='pb-3'>
                                                    <div className='dp_blog_TrafficMonitisation_container'>
                                                        <Row>
                                                            <Col md={12} className='dp_blogs_TrafficMonitisation_imgContainer '>
                                                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/b82ccfe6-574a-4a6d-bea3-4ccfffa77400/public' alt=''></img>
                                                            </Col>


                                                            <Col md={12} className='p-0 m-0 d-flex align-items-center '>
                                                                <div className='p-3'>
                                                                    <p className='fw-bold'>Innovations in Ad Creative:</p>
                                                                    <p className='fs-6 mb-3 text-dark'>Look into ad creative, such as interactive and immersive formats, and how these innovations impact user engagement and monetization.</p>
                                                                    <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>
                                            </Row>

                                            {/* Case Study */}

                                            <Row>

                                                <Col md={12}>
                                                    <h3 className='m-0 pb-2'>CASE STUDY</h3>
                                                </Col>

                                                <Col md={6} className='pb-3'>
                                                    <div className='dp_blog_casestudy_container'>
                                                        <Row>
                                                            <Col md={12} className='dp_blogs_casestudy_imgContainer'>
                                                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/3ebe0227-37e5-49f3-9c8a-1cba32b74000/public' alt='' width="100%" height="100%"></img>
                                                            </Col>

                                                            <Col md={12} className='p-0 m-0 d-flex align-items-center '>
                                                                <div className='p-3'>
                                                                    <p className='fw-bold'>Publisher G Enhances User Experience by AI Technology :</p>
                                                                    <p className='fs-6 mb-3 text-dark'>Publisher G integrates AI technology to personalize ad content, delivering a tailored experience for users and a boost in ad conversion rates.</p>
                                                                    <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>

                                                <Col md={6} className='pb-3'>
                                                    <div className='dp_blog_casestudy_container'>
                                                        <Row>

                                                            <Col md={12} className='dp_blogs_casestudy_imgContainer'>
                                                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/1da01b63-635a-4da4-e900-d83a37e01000/public' alt='' width="100%" height="100%"></img>
                                                            </Col>

                                                            <Col md={12} className='p-0 m-0 d-flex align-items-center '>
                                                                <div className='p-3'>
                                                                    <p className='fw-bold'>Publisher Revenue Soars with Ad Partnerships :</p>
                                                                    <p className='fs-6 mb-3 text-dark'>Publisher C diversifies its ad partnerships, unlocking new revenue streams and achieving record-breaking profits in a quarter.</p>
                                                                    <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>

                                                <Col md={6} className='pb-3'>
                                                    <div className='dp_blog_casestudy_container'>
                                                        <Row>
                                                            <Col md={12} className='dp_blogs_casestudy_imgContainer'>
                                                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/f1c62acd-632e-4429-2aec-3dd4660baf00/public' alt='' width="100%" height="100%"></img>
                                                            </Col>

                                                            <Col md={12} className='p-0 m-0 d-flex align-items-center '>
                                                                <div className='p-3'>
                                                                    <p className='fw-bold'>How Publisher Navigates Market Trends :</p>
                                                                    <p className='fs-6 mb-3 text-dark'>Publisher adopts a dynamic approach, adjusting ad campaigns based on real-time market trends, resulting in increased ad effectiveness.</p>
                                                                    <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>

                                                <Col md={6} className='pb-3'>
                                                    <div className='dp_blog_casestudy_container'>
                                                        <Row>
                                                            <Col md={12} className='dp_blogs_casestudy_imgContainer'>
                                                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/026e4a5d-d2cf-4be1-0dfe-3afa48faca00/public' alt='' width="100%" height="100%"></img>
                                                            </Col>

                                                            <Col md={12} className='p-0 m-0 d-flex align-items-center '>
                                                                <div className='p-3'>
                                                                    <p className='fw-bold'>Publisher Z Implements Robust Security Measures :</p>
                                                                    <p className='fs-6 mb-3 text-dark'>Publisher G integrates AI technology to personalize ad content, delivering a tailored experience for users and a boost in ad conversion rates.</p>
                                                                    <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Col>



                                            </Row>

                                        </Col>
                                    </Row>

                                </Col>

                                <Col md={4} className='pt-2 px-4' >

                                    <Row>
                                        <Col md={12}>
                                            <h3 className='dp_blog_post_heading' >LATEST POSTS</h3>
                                            <p className='fs-5 text-black'>Breaking: AI-Powered Analytics Unleash Unprecedented Affiliate Revenue Surge!</p>
                                            <p className='dp_blog_post_lists'>Exclusive Interview: Top Marketers Share Secrets to Success in 2023!</p>
                                            <p className='dp_blog_post_lists'>Trend Watch: NFT Affiliates Paving the Way for Innovative Earning Opportunities!</p>
                                            <p className='dp_blog_post_lists'>Game-Changer Alert: Blockchain Integration Revolutionizes Affiliate Tracking Systems!</p>
                                            <p className='dp_blog_post_lists'>Insider Scoop: New Affiliate Platform Promises Sky-High Commissions and Conversions!</p>
                                            <p className='dp_blog_post_lists'>Elevate Your Strategy: Influencer Redefine Affiliate Marketing Landscape!</p>
                                            <p className='dp_blog_post_lists'>The Future Is Now: Augmented Reality Ads Set to Transform Affiliate Campaigns!</p>
                                            <p className='dp_blog_post_lists'>Trend Watch: NFT Affiliates Paving the Way for Innovative Earning!</p>
                                            <p className='dp_blog_post_lists'>How AI and Machine Learning are Transforming Ad Targeting in Affiliate Marketing</p>
                                            <p className='dp_blog_post_lists'>Affiliate Marketing Success Stories: Real-Life Examples of High-Converting Campaigns</p>
                                            <p className='dp_blog_post_lists'>Navigating Regulatory Changes: GDPR and Its Effects on Affiliate Marketing</p>
                                            <p className='dp_blog_post_lists'>Diversifying Revenue Streams: Beyond Traditional Affiliate Models</p>
                                            <p className='dp_blog_post_lists'>Affiliate Marketing for E-commerce: Maximizing Sales for Online Retailers</p>
                                        </Col>
                                    </Row>

                                    <Row className='dp_blog_blogs_stick'>

                                        <Col md={12} className='px-4 pt-3' >

                                            <ul className='dp_blog_items pt-0'>

                                                <h3 className='dp_blog_post_heading' >CATEGORIES</h3>

                                                <li>

                                                    Affiliate Marketing & Advertising
                                                </li>
                                                <li>

                                                    Best Traffic and Offers
                                                </li>
                                                <li>

                                                    Case Studies
                                                </li>
                                               
                                                <li>

                                                    Optimization
                                                </li>
                                                <li>

                                                    Affiliate Marketing & Advertising
                                                </li>
                                                <li>

                                                    Best Traffic and Offers
                                                </li>
                                                <li>

                                                    Case Studies
                                                </li>
                                                <li>

                                                    Contests and Fun
                                                </li>
                                                <li>

                                                    Optimization
                                                </li>
                                                <li>

                                                    Ad Trends
                                                </li>
                                                <li>

                                                    Affiliate Marketing & Advertising
                                                </li>
                                                <li>

                                                    Best Traffic and Offers
                                                </li>
                                                <li>

                                                    Case Studies
                                                </li>
                                                <li>

                                                    Contests and Fun
                                                </li>
                                                <li>

                                                    Business Technology (BizTech)
                                                </li>
                                                <li>

                                                    Leadership and Management
                                                </li>
                                                <li>

                                                    Industry Insights and Analysis
                                                </li>
                                                <li>

                                                    Optimization
                                                </li>

                                            </ul>
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

