import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './FreeResourcesCaseStudies.css'
import { CiSearch } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import Layout from '../Layout/Layout';

export const FreeResourcesCaseStudies = () => {

    return (

        <Layout>

            <Container className='py-4'>

                {/* Heading */}

                <Row>
                    <Col md={12}>
                        <Row className='py-0'>
                            <Col md={8} className='col-12 d-flex align-items-center'>
                                <h3 className='m-0'>CASE STUDIES</h3>
                            </Col>
                            <Col md={4} className='col-12 px-4 '>
                                <Row className='dp_blog_casestudy_search_container d-flex justify-content-between'>

                                    <Col md={10} className='col-10'>
                                        <input type='text' placeholder='Type and hit enter...' className='dp_blog_casestudy_search_input'></input>
                                    </Col>

                                    <Col md={2} className='col-2 text-end px-2'>
                                        <CiSearch className='fs-4' />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Latest Posts & Categories */}

                <Row>
                    <Col md={12}>

                        {/* News Cards & Latest Posts */}

                        <Row className='pt-2 ' >

                            {/* 4 News Cards */}

                            <Col md={8}>

                                <Row>

                                    <Col md={12} className='pb-3'>
                                        <div className='dp_blog_casestudy_container'>
                                            <Row>
                                                <Col md={6} className='dp_blogs_casestudy_imgContainer'>
                                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/3ebe0227-37e5-49f3-9c8a-1cba32b74000/public' alt='' width="100%" height="100%"></img>
                                                </Col>

                                                <Col md={6} className='p-0 m-0 d-flex align-items-center '>
                                                    <div className='px-3'>
                                                        <p className='fw-bold'>Publisher G Enhances User Experience :</p>
                                                        <p className='fs-6 mb-3 text-dark'>Publisher G integrates AI technology to personalize ad content, delivering a tailored experience for users and a boost in ad conversion rates.</p>
                                                        <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    <Col md={12} className='pb-3'>
                                        <div className='dp_blog_casestudy_container'>
                                            <Row>

                                                <Col md={6} className='dp_blogs_casestudy_imgContainer'>
                                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/1da01b63-635a-4da4-e900-d83a37e01000/public' alt='' width="100%" height="100%"></img>
                                                </Col>

                                                <Col md={6} className='p-0 m-0 d-flex align-items-center '>
                                                    <div className='px-3'>
                                                        <p className='fw-bold'>Publisher Revenue Soars with Ad Partnerships :</p>
                                                        <p className='fs-6 mb-3 text-dark'>Publisher C diversifies its ad partnerships, unlocking new revenue streams and achieving record-breaking profits in a quarter.</p>
                                                        <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    <Col md={12} className='pb-3'>
                                        <div className='dp_blog_casestudy_container'>
                                            <Row>
                                                <Col md={6} className='dp_blogs_casestudy_imgContainer'>
                                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/f1c62acd-632e-4429-2aec-3dd4660baf00/public' alt='' width="100%" height="100%"></img>
                                                </Col>

                                                <Col md={6} className='p-0 m-0 d-flex align-items-center '>
                                                    <div className='px-3'>
                                                        <p className='fw-bold'>How Publisher Navigates Market Trends :</p>
                                                        <p className='fs-6 mb-3 text-dark'>Publisher adopts a dynamic approach, adjusting ad campaigns based on real-time market trends, resulting in increased ad effectiveness.</p>
                                                        <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    <Col md={12} className='pb-3'>
                                        <div className='dp_blog_casestudy_container'>
                                            <Row>
                                                <Col md={6} className='dp_blogs_casestudy_imgContainer'>
                                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/026e4a5d-d2cf-4be1-0dfe-3afa48faca00/public' alt='' width="100%" height="100%"></img>
                                                </Col>

                                                <Col md={6} className='p-0 m-0 d-flex align-items-center '>
                                                    <div className='px-3'>
                                                        <p className='fw-bold'>Publisher Z Implements Robust Security Measures :</p>
                                                        <p className='fs-6 mb-3 text-dark'>After detecting suspicious activities, Publisher Z strengthens its security protocols, successfully thwarting ad fraud attempts and ensuring advertisers get genuine impressions.</p>
                                                        <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    <Col md={12} className='pb-3'>
                                        <div className='dp_blog_casestudy_container'>
                                            <Row>
                                                <Col md={6} className='dp_blogs_casestudy_imgContainer'>
                                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/3ebe0227-37e5-49f3-9c8a-1cba32b74000/public' alt='' width="100%" height="100%"></img>
                                                </Col>

                                                <Col md={6} className='p-0 m-0 d-flex align-items-center '>
                                                    <div className='px-3'>
                                                        <p className='fw-bold'>Publisher G Enhances User Experience :</p>
                                                        <p className='fs-6 mb-3 text-dark'>Publisher G integrates AI technology to personalize ad content, delivering a tailored experience for users and a boost in ad conversion rates.</p>
                                                        <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    <Col md={12} className='pb-3'>
                                        <div className='dp_blog_casestudy_container'>
                                            <Row>

                                                <Col md={6} className='dp_blogs_casestudy_imgContainer'>
                                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/1da01b63-635a-4da4-e900-d83a37e01000/public' alt='' width="100%" height="100%"></img>
                                                </Col>

                                                <Col md={6} className='p-0 m-0 d-flex align-items-center '>
                                                    <div className='px-3'>
                                                        <p className='fw-bold'>Publisher Revenue Soars with Ad Partnerships :</p>
                                                        <p className='fs-6 mb-3 text-dark'>Publisher C diversifies its ad partnerships, unlocking new revenue streams and achieving record-breaking profits in a quarter.</p>
                                                        <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    <Col md={12} className='pb-3'>
                                        <div className='dp_blog_casestudy_container'>
                                            <Row>
                                                <Col md={6} className='dp_blogs_casestudy_imgContainer'>
                                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/f1c62acd-632e-4429-2aec-3dd4660baf00/public' alt='' width="100%" height="100%"></img>
                                                </Col>

                                                <Col md={6} className='p-0 m-0 d-flex align-items-center '>
                                                    <div className='px-3'>
                                                        <p className='fw-bold'>How Publisher Navigates Market Trends :</p>
                                                        <p className='fs-6 mb-3 text-dark'>Publisher adopts a dynamic approach, adjusting ad campaigns based on real-time market trends, resulting in increased ad effectiveness.</p>
                                                        <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    <Col md={12} className='pb-3'>
                                        <div className='dp_blog_casestudy_container'>
                                            <Row>
                                                <Col md={6} className='dp_blogs_casestudy_imgContainer'>
                                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/026e4a5d-d2cf-4be1-0dfe-3afa48faca00/public' alt='' width="100%" height="100%"></img>
                                                </Col>

                                                <Col md={6} className='p-0 m-0 d-flex align-items-center '>
                                                    <div className='px-3'>
                                                        <p className='fw-bold'>Publisher Z Implements Robust Security Measures :</p>
                                                        <p className='fs-6 mb-3 text-dark'>After detecting suspicious activities, Publisher Z strengthens its security protocols, successfully thwarting ad fraud attempts and ensuring advertisers get genuine impressions.</p>
                                                        <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    <Col md={12} className='pb-3'>
                                        <div className='dp_blog_casestudy_container'>
                                            <Row>
                                                <Col md={6} className='dp_blogs_casestudy_imgContainer'>
                                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/3ebe0227-37e5-49f3-9c8a-1cba32b74000/public' alt='' width="100%" height="100%"></img>
                                                </Col>

                                                <Col md={6} className='p-0 m-0 d-flex align-items-center '>
                                                    <div className='px-3'>
                                                        <p className='fw-bold'>Publisher G Enhances User Experience :</p>
                                                        <p className='fs-6 mb-3 text-dark'>Publisher G integrates AI technology to personalize ad content, delivering a tailored experience for users and a boost in ad conversion rates.</p>
                                                        <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    <Col md={12} className='pb-3'>
                                        <div className='dp_blog_casestudy_container'>
                                            <Row>

                                                <Col md={6} className='dp_blogs_casestudy_imgContainer'>
                                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/1da01b63-635a-4da4-e900-d83a37e01000/public' alt='' width="100%" height="100%"></img>
                                                </Col>

                                                <Col md={6} className='p-0 m-0 d-flex align-items-center '>
                                                    <div className='px-3'>
                                                        <p className='fw-bold'>Publisher Revenue Soars with Ad Partnerships :</p>
                                                        <p className='fs-6 mb-3 text-dark'>Publisher C diversifies its ad partnerships, unlocking new revenue streams and achieving record-breaking profits in a quarter.</p>
                                                        <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    <Col md={12} className='pb-3'>
                                        <div className='dp_blog_casestudy_container'>
                                            <Row>
                                                <Col md={6} className='dp_blogs_casestudy_imgContainer'>
                                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/f1c62acd-632e-4429-2aec-3dd4660baf00/public' alt='' width="100%" height="100%"></img>
                                                </Col>

                                                <Col md={6} className='p-0 m-0 d-flex align-items-center '>
                                                    <div className='px-3'>
                                                        <p className='fw-bold'>How Publisher Navigates Market Trends :</p>
                                                        <p className='fs-6 mb-3 text-dark'>Publisher adopts a dynamic approach, adjusting ad campaigns based on real-time market trends, resulting in increased ad effectiveness.</p>
                                                        <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    <Col md={12} className='pb-3'>
                                        <div className='dp_blog_casestudy_container'>
                                            <Row>
                                                <Col md={6} className='dp_blogs_casestudy_imgContainer'>
                                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/026e4a5d-d2cf-4be1-0dfe-3afa48faca00/public' alt='' width="100%" height="100%"></img>
                                                </Col>

                                                <Col md={6} className='p-0 m-0 d-flex align-items-center '>
                                                    <div className='px-3'>
                                                        <p className='fw-bold'>Publisher Z Implements Robust Security Measures :</p>
                                                        <p className='fs-6 mb-3 text-dark'>After detecting suspicious activities, Publisher Z strengthens its security protocols, successfully thwarting ad fraud attempts and ensuring advertisers get genuine impressions.</p>
                                                        <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    <Col md={12} className='pb-3'>
                                        <div className='dp_blog_casestudy_container'>
                                            <Row>
                                                <Col md={6} className='dp_blogs_casestudy_imgContainer'>
                                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/3ebe0227-37e5-49f3-9c8a-1cba32b74000/public' alt='' width="100%" height="100%"></img>
                                                </Col>

                                                <Col md={6} className='p-0 m-0 d-flex align-items-center '>
                                                    <div className='px-3'>
                                                        <p className='fw-bold'>Publisher G Enhances User Experience :</p>
                                                        <p className='fs-6 mb-3 text-dark'>Publisher G integrates AI technology to personalize ad content, delivering a tailored experience for users and a boost in ad conversion rates.</p>
                                                        <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    <Col md={12} className='pb-3'>
                                        <div className='dp_blog_casestudy_container'>
                                            <Row>

                                                <Col md={6} className='dp_blogs_casestudy_imgContainer'>
                                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/1da01b63-635a-4da4-e900-d83a37e01000/public' alt='' width="100%" height="100%"></img>
                                                </Col>

                                                <Col md={6} className='p-0 m-0 d-flex align-items-center '>
                                                    <div className='px-3'>
                                                        <p className='fw-bold'>Publisher Revenue Soars with Ad Partnerships :</p>
                                                        <p className='fs-6 mb-3 text-dark'>Publisher C diversifies its ad partnerships, unlocking new revenue streams and achieving record-breaking profits in a quarter.</p>
                                                        <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    <Col md={12} className='pb-3'>
                                        <div className='dp_blog_casestudy_container'>
                                            <Row>
                                                <Col md={6} className='dp_blogs_casestudy_imgContainer'>
                                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/f1c62acd-632e-4429-2aec-3dd4660baf00/public' alt='' width="100%" height="100%"></img>
                                                </Col>

                                                <Col md={6} className='p-0 m-0 d-flex align-items-center '>
                                                    <div className='px-3'>
                                                        <p className='fw-bold'>How Publisher Navigates Market Trends :</p>
                                                        <p className='fs-6 mb-3 text-dark'>Publisher adopts a dynamic approach, adjusting ad campaigns based on real-time market trends, resulting in increased ad effectiveness.</p>
                                                        <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                    <Col md={12} className='pb-3'>
                                        <div className='dp_blog_casestudy_container'>
                                            <Row>
                                                <Col md={6} className='dp_blogs_casestudy_imgContainer'>
                                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/026e4a5d-d2cf-4be1-0dfe-3afa48faca00/public' alt='' width="100%" height="100%"></img>
                                                </Col>

                                                <Col md={6} className='p-0 m-0 d-flex align-items-center '>
                                                    <div className='px-3'>
                                                        <p className='fw-bold'>Publisher Z Implements Robust Security Measures :</p>
                                                        <p className='fs-6 mb-3 text-dark'>After detecting suspicious activities, Publisher Z strengthens its security protocols, successfully thwarting ad fraud attempts and ensuring advertisers get genuine impressions.</p>
                                                        <h6 className='text-secondary'>Updated : 22nd December 2023</h6>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                </Row>
                            </Col>

                            {/* Lastest Post */}

                            <Col md={4} className='pt-2 px-4 '>

                                <Row >
                                    <Col md={12} >
                                        <h3 className='dp_blog_casestudy_post_heading' >LATEST POSTS</h3>
                                        <p className='dp_blog_casestudy_post_lists pt-2'>Breaking: AI-Powered Analytics Unleash Unprecedented Affiliate Revenue Surge!</p>
                                        <p className='dp_blog_casestudy_post_lists'>Exclusive Interview: Top Marketers Share Secrets to Success in 2023!</p>
                                        <p className='dp_blog_casestudy_post_lists'>Trend Watch: NFT Affiliates Paving the Way for Innovative Earning Opportunities!</p>
                                        <p className='dp_blog_casestudy_post_lists'>Game-Changer Alert: Blockchain Integration Revolutionizes Affiliate Tracking Systems!</p>
                                    </Col>
                                </Row>

                                <Row className='stick'>
                                    <Col md={12} >

                                        <ul className='dp_blog_casestudy_items  pt-0'>

                                            <h3 className='dp_blog_post_heading pt-4' >CATEGORIES</h3>

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
    )
}
