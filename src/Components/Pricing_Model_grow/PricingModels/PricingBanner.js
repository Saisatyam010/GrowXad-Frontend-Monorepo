import React from 'react';
import { ButtonGroup, Button, Col, Container, Row } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { BsArrowRightCircle } from "react-icons/bs";
import { FaShield } from "react-icons/fa6";
import { MdBlockFlipped } from "react-icons/md";
import 'react-slick'
import "./PricingBanner.css";
import GrowPricingSlider from '../GrowPricingSlider/GrowPricingSlider';
import GrowXPartner from '../GrowXPartner/GrowXPartner';
import PricingCard from '../PricingCards/PricingCard';
import Layout from '../../Layout/Layout';
import { Link } from 'react-router-dom';



const PricingBanner = () => {

    return (
        <>
            <Layout>
                <div className='container-fluid SSA_Benefit_bg_img_main webbackground_theme_for_benefit '>
                    <div className="container pt-2 mt-1">
                        <div className="row mb-2 pt-4 pb-4">
                            <div className="col-md-6 pt-4">
                                <div className=''>
                                    <div className='text-white' style={{ fontSize: '16px' }}><em>GrowXads Pricing Models</em></div>
                                    <div className='  text-white' >
                                        <h1 style={{ lineHeight: '2.2rem' }}>
                                            To enhance your earnings on GrowXad, it's crucial to select the right pricing model </h1> </div>
                                    <div className='SSA_Ad_Benefits_font20px py-4 text-white'>GrowXad offers balanced pricing and smart tools for global or niche targeting, maximizing your ROI. Benefit from efficient campaign tests and a next-gen traffic estimator to avoid overpaying. Optimize your advertising success with GrowXad.
                                    </div>
                                    <div className=''>
                                        <Link to="/adveriserauthLogin" className='text-white no-underline hover:no-underline'>
                                            <button className='btn  px-5 py-3 rk_PB_button ssa_benefit-button'><span>Create Campaign</span></button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6  pt-md-0 pt-3">
                                <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/6de390dc-1dc4-42b0-0835-88f663227900/public" alt="" width='100%' />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='container-fluid py-4 mt-2' style={{ backgroundColor: "#e5e7eb" }}>

                    <div className='row'>
                        <div className=''>
                            <h1 id="rs_ipp_why-join" className='text-center'>
                                Why to Join
                                <span className='webcl_theme'> GrowXad</span>
                            </h1>
                        </div>
                    </div>


                    <div className='row d-flex justify-content-center px-1'>
                        <div className='col-md-10'>

                            <div className='row'>

                                <div className='col-md-3 mt-3'>

                                    <div className='rs_pricing_whyjoin'>
                                        <Row>
                                            <Col md={12}>
                                                <div className='rs_img'>
                                                    <div className='rs_back d-flex align-item-center justify-content-center'>
                                                        <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/e0087616-43ae-4eba-e718-daedadf22700/public' />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='pt-3  d-flex justify-content-center'>
                                            <Col md={12}>
                                                <p className='m-0 rk_jointxt-2' style={{ fontSize: '20px' }}>Ad services optimize ads with data, targeting demographics for better engagement.</p>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>

                                <div className='col-md-3  mt-3'>

                                    <div className='rs_pricing_whyjoin'>
                                        <Row>
                                            <Col md={12}>
                                                <div className='rs_img'>
                                                    <div className='rs_back d-flex align-item-center justify-content-center'>
                                                        <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/aeed22bc-46c9-4ed2-6fa4-70734f7c8a00/public' />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='pt-3  d-flex justify-content-center'>
                                            <Col md={12}>
                                                <p className='m-0 rk_jointxt-2' style={{ fontSize: '20px' }}>Ad services leverage vast publisher networks for diverse audience reach.</p>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>

                                <div className='col-md-3  mt-3'>

                                    <div className='rs_pricing_whyjoin'>
                                        <Row>
                                            <Col md={12}>
                                                <div className='rs_img'>
                                                    <div className='rs_back d-flex align-item-center justify-content-center'>
                                                        <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/8d31bcd0-dceb-4289-04a2-eb095aad5d00/public' />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='pt-3  d-flex justify-content-center'>
                                            <Col md={12}>
                                                <p className='m-0 rk_jointxt-2' style={{ fontSize: '20px' }}>Ad services streamline campaign control with tools for optimization and tracking.</p>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>

                                <div className='col-md-3  mt-3'>

                                    <div className='rs_pricing_whyjoin'>
                                        <Row>
                                            <Col md={12}>
                                                <div className='rs_img'>
                                                    <div className='rs_back d-flex align-item-center justify-content-center'>
                                                        <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/be2c0346-de0d-45ba-d2ae-84807b9b3400/public' />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='pt-3  d-flex justify-content-center'>
                                            <Col md={12}>
                                                <p className='m-0 rk_jointxt-2' style={{ fontSize: '20px' }}>Ad services supply analytics for informed decisions, enhancing campaign performance.</p>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>

                            </div>

                            <div className='row '>

                                <div className='col-md-3 mt-3'>

                                    <div className='rs_pricing_whyjoin'>
                                        <Row>
                                            <Col md={12}>
                                                <div className='rs_img'>
                                                    <div className='rs_back d-flex align-item-center justify-content-center'>
                                                        <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/6f185979-6b0a-4dfb-96c9-7e72d32f7e00/public' />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='pt-3  d-flex justify-content-center'>
                                            <Col md={12}>
                                                <p className='m-0 rk_jointxt-2' style={{ fontSize: '20px' }}>Ad services amplify brand exposure across diverse platforms for broader awareness.</p>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>


                                <div className='col-md-3  mt-3'>

                                    <div className='rs_pricing_whyjoin'>
                                        <Row>
                                            <Col md={12}>
                                                <div className='rs_img'>
                                                    <div className='rs_back d-flex align-item-center justify-content-center'>
                                                        <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/3b544b8f-dd76-4894-c0d7-0fd464620200/public' />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='pt-3  d-flex justify-content-center'>
                                            <Col md={12}>
                                                <p className='m-0 rk_jointxt-2' style={{ fontSize: '20px' }}>Ad options like CPC or CPM offer cost control for advertisers.</p>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>

                                <div className='col-md-3  mt-3'>

                                    <div className='rs_pricing_whyjoin'>
                                        <Row>
                                            <Col md={12}>
                                                <div className='rs_img'>
                                                    <div className='rs_back d-flex align-item-center justify-content-center'>
                                                        <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/eabd60d1-f48f-480c-86cb-2b38c057b700/public' />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='pt-3  d-flex justify-content-center'>
                                            <Col md={12}>
                                                <p className='m-0 rk_jointxt-2' style={{ fontSize: '20px' }}>Enhance user experience with our service's adblock detection and support.</p>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>

                                <div className='col-md-3  mt-3'>

                                    <div className='rs_pricing_whyjoin'>
                                        <Row>
                                            <Col md={12}>
                                                <div className='rs_img'>
                                                    <div className='rs_back d-flex align-item-center justify-content-center'>
                                                        <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/e936365c-6b8c-40d7-92e9-4ee657282300/public' />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className='pt-3 d-flex justify-content-center'>
                                            <Col md={12} className=''>
                                                <p className='m-0 rk_jointxt-2' style={{ fontSize: '20px' }}>High-security measures: anti-fraud and anti-malware protection for enhanced safety.</p>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='row pt-5'>
                        <div col-md-12>
                            <GrowPricingSlider />
                        </div>
                    </div>
                    <Container fluid className=' mt-5 bg-white' >
                        <Container className='pt-3' >
                            <Row>
                                <Col>
                                    <Row className='d-flex justify-content-center mb-4' >
                                        <Col md={6} className='text-center' >
                                            <h1 className='rk_price_h1' >Operate pricing models to gain
                                                broader reach and <span className='webcl_theme' > larger ROI</span></h1>

                                        </Col>
                                    </Row>
                                    <Row className='' >
                                        <Col md={6} className='' >
                                            <h2 className='webcl_theme rk_price_h2' >CPA</h2>
                                            <h6 className='rk_price_h2'>COST-PER-ACQUISITION</h6>
                                            <p>Opt for Cost-Per-Acquisition (CPA) in familiar markets with a simple conversion process. For uncharted territories or complex flows, start with Cost Per Mille (CPM). This balance optimizes strategies, tailoring them to specific goals, while testing and data analysis pinpoint the most efficient model for maximum return on investment.</p>


                                        </Col>
                                        <Col md={6} className='' >
                                            <Row className='d-flex justify-content-center' >
                                                <Col md={4} sm={5} xs={5} className='' >
                                                    <div className='rk_price_bx-3'>
                                                        <p>TOP VERTICALS:</p>
                                                        <ul>
                                                            <li><Link to='' className='text-black'>VPN & Utility</Link></li>
                                                            <li><Link to='' className='text-black'>PIN Submits</Link></li>
                                                            <li><Link to='' className='text-black'>Sweepstakes</Link></li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col md={1} sm={2} xs={2} className='' >
                                                    <div className='rk_price_bx-3-Vl' ></div>
                                                </Col>
                                                <Col md={4} sm={5} xs={5} >
                                                    <div> <p>TOP AD FORMATS:</p>
                                                        <ul>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Popunder</Link></li>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Popunder</Link></li>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Push Ads</Link></li>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Native Banners</Link></li>
                                                        </ul></div>
                                                </Col>
                                            </Row>


                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr className='rk_price_bx-3-Hl' />

                                        </Col>
                                    </Row>


                                </Col>
                            </Row>

                            <Row>
                                <Col>

                                    <Row className='' >
                                        <Col md={6} className='' >
                                            <h2 className='webcl_theme rk_price_h2' >CPC</h2>
                                            <h6 className='rk_price_h2'>COST-PER-CLICK</h6>
                                            <p>Opt for cost-per-click payment for easily convertible offers, such as a simple opt-in. Utilize the Traffic Chart and Traffic Estimator tools to ensure a substantial volume of impressions. This ensures an effective strategy by aligning the payment model with the simplicity of the conversion process while optimizing impressions for maximum impact.</p>


                                        </Col>
                                        <Col md={6} className='' >
                                            <Row className='d-flex justify-content-center'>
                                                <Col md={4} sm={5} xs={5} className='' >
                                                    <div className='rk_price_bx-3'>
                                                        <p>TOP VERTICALS:</p>
                                                        <ul>
                                                            <li><Link to='' className='text-black text-[18px]'>Mobile Apps & Games</Link></li>
                                                            <li><Link to='' className='text-black text-[18px]'>Mobile Apps & Games</Link></li>
                                                            <li><Link to='' className='text-black text-[18px]'>Utilities & Software</Link></li>
                                                            <li><Link to='' className='text-black text-[18px]'>Subscriptions</Link></li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col md={1} sm={2} xs={2} className='' >
                                                    <div className='rk_price_bx-3-Vl' ></div>
                                                </Col>
                                                <Col md={4} sm={5} xs={5} >
                                                    <div className='rk_price_bx-3 '>
                                                        <div> <p>TOP AD FORMATS:</p>
                                                            <ul>
                                                                <li><Link to='' className='text-black text-[18px] no-underline'>Popunder</Link></li>
                                                                <li><Link to='' className='text-black text-[18px] no-underline'>Popunder</Link></li>
                                                                <li><Link to='' className='text-black text-[18px] no-underline'>Push Ads</Link></li>
                                                                <li><Link to='' className='text-black text-[18px] no-underline'>Native Banners</Link></li>
                                                            </ul></div>
                                                    </div>
                                                </Col>
                                            </Row>


                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr className='rk_price_bx-3-Hl' />

                                        </Col>
                                    </Row>


                                </Col>
                            </Row>

                            <Row>
                                <Col>

                                    <Row className='' >
                                        <Col md={6} className='' >
                                            <h2 className='webcl_theme rk_price_h2' >CPM</h2>
                                            <h6 className='rk_price_h2'>COST-PER-MILLE</h6>
                                            <p>Cost-per-thousand-impressions (CPM) pricing suits exploring new GEOs and testing intricate conversion flows like CC submits. It's cost-effective, aiding bid balance until conversions increase, making it ideal for strategic testing and optimization.</p>


                                        </Col>
                                        <Col md={6} className='' >
                                            <Row className='d-flex justify-content-center'>
                                                <Col md={4} sm={5} xs={5} className='' >
                                                    <div className='rk_price_bx-3'>
                                                        <p className='webcl_theme'>TOP VERTICALS:</p>
                                                        <ul>
                                                            <li><a href='' className='text-black'>Finance</a></li>
                                                            <li><a href='' className='text-black'>E-commerce</a></li>

                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col md={1} sm={2} xs={2} className='' >
                                                    <div className='rk_price_bx-3-Vl' ></div>
                                                </Col>
                                                <Col md={4} sm={5} xs={5} >
                                                    <div> <p>TOP AD FORMATS:</p>
                                                        <ul>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Popunder</Link></li>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Popunder</Link></li>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Push Ads</Link></li>
                                                            <li><Link to='' className='text-black text-[18px] no-underline'>Native Banners</Link></li>
                                                        </ul></div>
                                                </Col>
                                            </Row>


                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr className='rk_price_bx-3-Hl' />

                                        </Col>
                                    </Row>


                                </Col>
                            </Row>

                        </Container>


                    </Container>


                    <div className='row pt-5'>
                        <div col-md-12>
                            <PricingCard />
                        </div>
                    </div>




                </div>





                {/* <div className='container-fluid webbackground_theme mt-5'>
                    <div className='row'>
                        <div className='col-md-12 d-flex align-items-center justify-content-center'>
                            <div className='col-md-8 ' style={{ padding: "40px 0px" }}>
                                <h1 className='text-white fs-3'>Time To Grow With GrowAds</h1>
                                <div className='d-flex gap-2 align-items-center'>
                                    <button className='btn bg-black text-white'>Advertise</button>
                                    <button className='btn btn-outline-dark  text-white'>Monetise</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> */}


            </Layout>

        </>
    )
}

export default PricingBanner