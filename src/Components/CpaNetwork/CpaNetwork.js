import React from 'react'
import './CpaNetwork.css'
// import CPAForm from './CPA_Form'
import FAQ from './GrowXAdsFaq'
import Layout from '../Layout/Layout';

import CpaForm from './CpaForm';
import { Link } from 'react-router-dom';



const CpaNetwork = () => {
    return (
        <Layout>
            <div style={{ overflowX: 'hidden', marginTop: "10vh" }}>
                {/*----------first Section------------*/}
                <section className="container-fluid bg-white SSA_COM_Network_Bg_main "  >
                    <div className="container">
                        <div className="row pl-4">
                            <div className="col-md-6 pl-5">
                                <div className='SSA_CPA_Font42px text-dark'> <span className='SSA_CPA_TextPurple text-white'>Sign up</span>   with
                                    <span className='SSA_CPA_TextPurple text-white'> GrowXAds </span> today to access exclusive offers directly from advertisers! </div>
                                <div className='SSA_CPA_Font22px py-4 ' style={{ color: '#6d6d6d' }}>Unlock exclusive offers with higher payouts and exceptional conversion rates just moments away. Explore our top selection of VPN, Utility, and Sweepstake Offers – start testing now!"</div>
                                <div className="">
                                    <Link to="/adveriserauthLogin" className='no-underline hover:no-underline'>
                                        <button type="button" class="btn text-white py-3 px-5" style={{ fontSize: '18px', backgroundColor: '#73035b' }}>Register Now</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d741e910-49e8-411d-f605-2f6ed68a9c00/public" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>


                {/*----------second Section(It'll Repeat)------------*/}


                <div className="container py-2">
                    <div className="row container justify-content-center px-md-5 px-2">
                        <div className='SSA_CPA_Font42px text-center pb-3'> Access exclusive <span className='SSA_CPA_TextPurple '> opportunities </span>  with <span className='SSA_CPA_TextPurple '>GrowXAds CPA...</span> </div>
                        <div className="col-md-4 col-sm-6 col-12 justify-content-center pt-4">
                            <div className='SSA_CPA_Card text-center py-5'>
                                <div className='SSA_CPA_Font22px pt-3 ssa_font-weight-500'> Discover premium, carefully curated offers.</div>
                                <div class="SSA_CPA_Width25px my-2"></div>
                                <div className='SSA_CPA_Font18px'>Our affiliates benefit from a wide array of global and local offers, featuring boosted payouts</div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 justify-content-center pt-2" >
                            <div className='SSA_CPA_Card text-center py-5' style={{ boxShadow: '0 0 34px 0 rgba(0,0,0,.2)' }}>
                                <div className='SSA_CPA_Font22px pt-3 ssa_font-weight-500'> Experience swift and lucrative payouts.</div>
                                <div class="SSA_CPA_Width25px my-2"></div>
                                <div className='SSA_CPA_Font18px'>Our affiliates enjoy a large number of worldwide and local offers with increased payouts</div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 justify-content-center pt-4">
                            <div className='SSA_CPA_Card text-center py-5'>
                                <div className='SSA_CPA_Font22px pt-3 ssa_font-weight-500'> Exclusive, Direct, Unique, Special Offers</div>
                                <div class="SSA_CPA_Width25px my-2"></div>
                                <div className='SSA_CPA_Font18px'>We offer exclusive, top-tier direct deals. Select high-reward offers unique to us.</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/*----------Let's Talk Form(I'll Repeat)------------*/}
                <div className="container px-md-5 pt-4 pt-md-0 px-2 py-md-5 py-2">
                    <div className="px-md-5 px-2 row justify-content-center">
                        <div className='SSA_CPA_Font42px col-md-8 text-center  '> Interested in   <span className='SSA_CPA_TextPurple '> promoting your offer </span>  through <span className='SSA_CPA_TextPurple '>
                            GrowXads </span>  CPA Network? Let's discuss</div>
                    </div>
                    <CpaForm />
                </div>


               

                {/*-------------7 circles section-----------------*/}

                <div className='container pb-5'>
                    <div className='row justify-content-center'>
                        <div className='SSA_CPA_Font42px text-center col-md-6'>
                            Verticals that work best with <span className='SSA_CPA_TextPurple'>GrowXAds traffic</span>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-4">
                        <div className="col-md-2 col-6 ">
                          
                            <div className="SSA_CPA_circle ">
                                <div className='SSA_CPA_img_zoom'>
                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/b1a746b0-175b-464b-e1ad-2108a5925900/public' alt="" />
                                </div>

                            </div>
                            <div className='text-center pt-1' style={{ fontSize: '21px', fontWeight: '600' }}>VPN</div>
                        </div>

                        <div className="col-md-2 col-6">
                            <div className="SSA_CPA_circle p-2">
                                <div className='SSA_CPA_img_zoom'>
                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/fef100dd-2458-400b-02a5-7830a38df100/public' alt="" />
                                </div>

                            </div>
                            <div className='text-center pt-1' style={{ fontSize: '21px', fontWeight: '600' }}>ANTIVIRUS</div>
                        </div>


                        <div className="col-md-2 col-6">
                            <div className="SSA_CPA_circle">
                                <div className='SSA_CPA_img_zoom'>
                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/eef0fdbb-6e3a-48f9-0b6b-e2a81e410b00/public' alt="" />
                                </div>

                            </div>
                            <div className='text-center pt-1' style={{ fontSize: '21px', fontWeight: '600' }}>FINANCE</div>
                        </div>

                        <div className="col-md-2 col-6">
                            <div className="SSA_CPA_circle">
                                <div className='SSA_CPA_img_zoom'>
                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/654a583d-03f4-4adb-b297-d73c8f17be00/public' alt="" />
                                </div>

                            </div>
                            <div className='text-center pt-1' style={{ fontSize: '21px', fontWeight: '600' }}>SWEEPSTAKES</div>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-4">
                        <div className="col-md-2 col-6 ">
                            <div className="SSA_CPA_circle">
                                <div className='SSA_CPA_img_zoom'>
                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/399edcea-9091-4db1-21cd-4235277a5000/public' alt="" />
                                </div>

                            </div>
                            <div className='text-center pt-1' style={{ fontSize: '21px', fontWeight: '600' }}>UTILITY</div>
                        </div>

                        <div className="col-md-2 col-6">
                            <div className="SSA_CPA_circle">
                                <div className='SSA_CPA_img_zoom'>
                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/41df2390-24c3-494e-946f-da7f9f15a000/public' alt="" />
                                </div>

                            </div>
                            <div className='text-center pt-1' style={{ fontSize: '21px', fontWeight: '600' }}>GAMING</div>
                        </div>


                        <div className="col-md-2 col-6">
                            <div className="SSA_CPA_circle">
                                <div className='SSA_CPA_img_zoom'>
                                    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/80696e3f-2e38-48a1-a3eb-68ab47e6c600/public' alt="" />
                                </div>

                            </div>
                            <div className='text-center pt-1' style={{ fontSize: '21px', fontWeight: '600' }}>SOFTWARE</div>
                        </div>

                    </div>
                </div>


                {/*----------second Section(It'll Repeat)------------*/}
                <div className="container py-md-5 py-4 px-md-5 px-2">
                    <div className='SSA_CPA_Font42px text-center '> <span className='SSA_CPA_TextPurple '>Discover </span> Our Key Features </div>
                    <div className='text-center SSA_CPA_Font22px py-md-4 py-2'>Every day, our dedicated work strives to improve and brighten our clients' lives.</div>
                    <div className="row container px-md-5 px-3 py-5">

                        <div className="col-md-4 col-sm-6 col-12 justify-content-center pt-4">
                            <div className='SSA_CPA_Card text-center pb-5' style={{ position: 'relative' }}>
                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/a5ebc0bd-8762-41cf-7c95-13a27a9f0c00/public' alt="" style={{ position: 'absolute', top: '0%', left: '50%', transform: 'translate(-50%, -50%)' }} width='122px' />
                                <div className='SSA_CPA_Font20px pt-5'>Extensive Range of Exclusive Offers</div>
                                <div class="SSA_CPA_Width25px my-2"></div>
                                <div className='SSA_CPA_Font18px'>Access Exclusive Direct Offers,
                                    Public Offers - No Extra Review,
                                    Private Offers - Pre-Moderated</div>
                            </div>
                        </div>
                        <div className="col-md-4  col-sm-6 col-12 justify-content-center pt-md-2 pt-5" >
                            <div className='SSA_CPA_Card text-center pb-5' style={{ position: 'relative', boxShadow: '0 0 34px 0 rgba(0,0,0,.2)' }} >
                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/ec967948-3878-437b-5422-0db7259b4e00/public' alt="" style={{ position: 'absolute', top: '0%', left: '50%', transform: 'translate(-50%, -50%)' }} width='122px' />
                                <div className='SSA_CPA_Font20px pt-5'>Partner-Centric Support Approach</div>
                                <div class="SSA_CPA_Width25px my-2"></div>
                                <div className='SSA_CPA_Font18px'>Quick approvals, expert guidance, and automated weekly payments - your hassle-free solution.</div>
                            </div>
                        </div>
                        <div className="col-md-4  col-sm-6 col-12 justify-content-center pt-md-4 pt-5">
                            <div className='SSA_CPA_Card text-center pb-5' style={{ position: 'relative' }}>
                                <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/c390db6d-fec1-42a1-548d-40091d7cdf00/public' alt="" style={{ position: 'absolute', top: '0%', left: '50%', transform: 'translate(-50%, -50%)' }} width='158px' />
                                <div className='SSA_CPA_Font20px pt-5'>Beneficial Features</div>
                                <div class="SSA_CPA_Width25px my-2"></div>
                                <div className='SSA_CPA_Font18px'>Global & Custom Postback Integration, No-Loss Backlink Solution, Statistics with Key Metrics</div>
                            </div>
                        </div>
                    </div>

                </div>


                {/*----------FAQ SECTION------------*/}

                <div className="container" >
                    <div className="row py-md-4 py-1 px-md-5 px-2">
                        <div className='col-md-12'>
                            <FAQ />
                        </div>
                    </div>
                </div>

                {/*----------ABOUT SECTION------------*/}
                <div className="container" >
                    <div className='SSA_CPA_Font42px text-center p-4'>About <span className='SSA_CPA_TextPurple '>GrowXAds</span> </div>
                    <div className="row py-md-4 py-1 px-md-5 px-3">
                        <div className="col-md-6">
                            <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/99e4efb9-a05f-4c97-78dd-e20b8c367900/public' alt="" className='pt-4' />
                        </div>
                        <div className="col-md-6">
                            <div className='SSA_CPA_Card p-md-5 p-3'>
                                <div>
                                    Welcome to GrowXAds, a pioneering ad network established in 2013. Trusted by over 30,000 advertisers and publishers globally, we offer an intuitive platform featuring regularly updated offers, rapid and generous payouts, user-friendly statistics, and an advanced tracking system.
                                    <br /><br />
                                    Experience unique, high-payout offers tailored for individual affiliates – seize the opportunity to be the first to access exclusive closed offers!
                                    <br /><br />
                                    At GrowXAds, we prioritize top-notch service, ensuring full support throughout your campaign launch. Join us for a seamless and rewarding advertising journey!</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*--------------Last Section--------------*/}
                <div className='SSA_CPA_BG_img2'>
                    <div className="container">
                        <div className='SSA_CPA_Font42px text-center '>Be part of the <span className='SSA_CPA_TextPurple '>GrowXAds </span>   community,
                            where <span className='SSA_CPA_TextPurple '> passionate professionals </span>  thrive. </div>
                        <div className='text-center SSA_CPA_Font22px py-md-4 py-2'>Stay ahead with early access to new offers, traffic insights, and expert strategies.</div>

                        <CpaForm />
                    </div>
                    <div className="row justify-content-center pt-md-4 pt-2 px-3">
                        <div className="col-md-1 col-4">
                            <img style={{ borderRadius: '50%' }} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/7e9060c9-bc47-4362-c25f-a8c21eec9000/public" alt="" width='80%' />
                        </div>
                        <div className="col-md-1 col-4">
                            <img style={{ borderRadius: '50%' }} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/7c775b9f-3ad0-489a-2e7e-537e9bb43900/public" alt="" width='80%' />
                        </div>
                        <div className="col-md-1 col-4">
                            <img style={{ borderRadius: '50%' }} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/88e3ade8-6a01-4e7e-77ec-84fdf79e2c00/public" alt="" width='80%' />
                        </div>
                        <div className="col-md-1 col-4">
                            <img style={{ borderRadius: '50%' }} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/a55928a0-6ccc-4421-e9b8-925a8e489100/public" alt="" width='80%' />
                        </div>
                        <div className="col-md-1 col-4">
                            <img style={{ borderRadius: '50%' }} src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/7ad21265-0551-480f-7163-c16e439e7200/public" alt="" width='80%' />
                        </div>
                    </div>
                </div>

            </div>
        </Layout >
    )
}

export default CpaNetwork