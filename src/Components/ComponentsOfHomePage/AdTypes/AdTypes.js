import React from 'react'
import './AdTypes.css'
import { RxVideo } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";


// import SwitchButtonSection from '../SwichComponent/SwitchButtonSection';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AdTypes = () => {

    const [contentAdvertiser, setContentAdvertiser] = useState(true);
    const [contentPublisher, setContentPublisher] = useState(false);
    return (
        <>
            <div className='container-fluid ' >
                <div className='row mt-3 '>
                    <div className='col-md-12'>
                        <h1 className='text-center text-black'>We deliver <span style={{ color: "#73045b" }}>high-converting ads</span>  and traffic</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div>
                            <div className="container  py-5  " >
                                <div className='px-md-5'>
                                    <div class="row  w-100 justify-content-center" style={{ padding: '0px !important', margin: '0px !important', border: '1px solid black', borderRadius: '28px' }}>
                                        <div className="col-6 text-center " onClick={() => {
                                            setContentAdvertiser(true);
                                            setContentPublisher(false);
                                        }}
                                            style={{
                                                cursor: 'pointer',
                                                backgroundColor: contentAdvertiser ? 'black' : 'white',
                                                color: contentAdvertiser ? 'white' : 'black',
                                                borderTopLeftRadius: '28px',
                                                borderBottomLeftRadius: '28px',
                                            }}


                                        >
                                            <div className='py-3' style={{}}>
                                                <div>Advertisers</div>
                                            </div>
                                        </div>
                                        <div className="col-6 text-center " onClick={() => {
                                            setContentAdvertiser(false);
                                            setContentPublisher(true);
                                        }}
                                            style={{ cursor: 'pointer', backgroundColor: contentPublisher ? 'black' : 'white', color: contentPublisher ? 'white' : 'black', borderTopRightRadius: '28px', borderBottomRightRadius: '28px' }}
                                        >
                                            <div className='py-3' style={{}}>
                                                <div>Publisher</div>
                                            </div>
                                        </div>
                                    </div>

                                    {contentAdvertiser ? <>
                                        <div className="container-fluid">

                                            <div className='row shadow p-3 legue-spartan'>
                                                <div className='col-md-12 p-4 dp_particles_main_container'>
                                                    <div className='row'>
                                                        <div className='col-md-7  dp_particles_paragraph'>
                                                            <h4 className='mt-3 font-[900] webcl_theme'>BANNER ADS</h4>
                                                            <div className='my-5 '>
                                                                <p className='dp_particles_paragraph py-1 fs-5'>Browser-friendly, non-intrusive ads with 2B+ impressions weekly.</p>
                                                                <p className='dp_particles_paragraph py-1'>Out-of-the-box template creatives with 30X higher CTRs compared to web push.</p>
                                                                <p className='dp_particles_paragraph py-1'>Available with CPM, CPC, and CPA.</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-5'>
                                                            <div className="video-container">
                                                                <iframe src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/5ffcdd4471ab8a95f5d8e0cc83e4cfa6/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2F5ffcdd4471ab8a95f5d8e0cc83e4cfa6%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" />
                                                            </div>




                                                        </div>
                                                    </div>

                                                    <div className='row d-flex align-items-center py-2'>
                                                        <div className='col-md-7 col-12'>
                                                            <div className='row'>
                                                                <div className='col-md-5 col-6'>

                                                                    <Link to="/growxadsdemo" className='text-black' style={{ textDecoration: 'none' }}>
                                                                        <button className='dp_particles_livedemo_button webbackground_theme'>
                                                                            <div className='d-flex align-items-center '>
                                                                                <span className='fs-6 pe-2'><RxVideo /></span>


                                                                                <span className='text-white'>LIVE DEMO</span>

                                                                            </div>
                                                                        </button>
                                                                    </Link>
                                                                </div>
                                                                <div className='col-md-4 col-6'>
                                                                    <Link to='/bannerad' className='text-black' style={{ textDecoration: 'none' }}><button className='dp_particles_learnmore_button'>
                                                                        <div className='d-flex'>

                                                                            <span>
                                                                                MORE

                                                                            </span>
                                                                            <span className='fs-6 '><FaArrowRightLong /></span>
                                                                        </div>
                                                                    </button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-5'>
                                                            <p className='text-secondary m-0' style={{ fontSize: "14px" }}>Ads open in a new tab after a user clicks anywhere on a website
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row shadow mt-1 p-3 legue-spartan'>
                                                <div className='col-md-12 p-4 dp_particles_main_container'>
                                                    <div className='row'>
                                                        <div className='col-md-7  dp_particles_paragraph'>
                                                            <h4 className='mt-3 font-[900] webcl_theme'>IN PAGE PUSH</h4>
                                                            <div className='my-5 '>
                                                                <p className='dp_particles_paragraph py-1 fs-5'>In-Page Push ads don’t fall under browser restrictions and appear on websites when users are actively surfing. Expect higher CTR and CR.</p>

                                                            </div>
                                                        </div>
                                                        <div className='col-md-5'>
                                                            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                                                                <iframe src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/0de5bd83fea70a1b8b1f087511321be5/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2F0de5bd83fea70a1b8b1f087511321be5%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" />
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className='row d-flex align-items-center py-2'>
                                                        <div className='col-md-7 col-12'>
                                                            <div className='row'>
                                                                <div className='col-md-5 col-6'>
                                                                    <Link to="/growxadsdemo" className='text-black' style={{ textDecoration: 'none' }}>
                                                                        <button className='dp_particles_livedemo_button webbackground_theme'>
                                                                            <div className='d-flex align-items-center '>
                                                                                <span className='fs-6 pe-2'><RxVideo /></span>


                                                                                <span className='text-white'>LIVE DEMO</span>

                                                                            </div>
                                                                        </button>
                                                                    </Link>
                                                                </div>

                                                                <div className='col-md-4 col-6'>
                                                                    <button className='dp_particles_learnmore_button'>
                                                                        <div className='d-flex'>

                                                                            <span>


                                                                                <Link to='/inpagepushad' className='text-black' style={{ textDecoration: 'none' }}> MORE
                                                                                </Link>

                                                                            </span>
                                                                            <span className='fs-6 pe-2'><FaArrowRightLong /></span>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-5'>
                                                            <p className='text-secondary m-0' style={{ fontSize: "14px" }}>Ads open in a new tab after a user clicks anywhere on a website
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row shadow p-3 legue-spartan'>
                                                <div className='col-md-12 p-4 dp_particles_main_container'>
                                                    <div className='row'>
                                                        <div className='col-md-7  dp_particles_paragraph'>
                                                            <h4 className='mt-3 font-[900] webcl_theme'>NATIVE ADS</h4>
                                                            <div className='my-5 '>
                                                                <p className='dp_particles_paragraph py-1 fs-5'>Browser-friendly, non-intrusive ads with 2B+ impressions weekly.</p>
                                                                <p className='dp_particles_paragraph py-1'>Out-of-the-box template creatives with 30X higher CTRs compared to web push.</p>
                                                                <p className='dp_particles_paragraph py-1'>Available with CPM, CPC, and CPA.</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-5'>

                                                            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                                                                <iframe style={{ border: "none", outline: "none", borderWidth: "0px" }} src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/e3c7c38f9e109e4782a0049b1f0703d6/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fe3c7c38f9e109e4782a0049b1f0703d6%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row d-flex align-items-center py-2'>
                                                        <div className='col-md-7 col-12'>
                                                            <div className='row'>
                                                                <div className='col-md-5 col-6'>
                                                                    <Link to="/growxadsdemo" className='text-black' style={{ textDecoration: 'none' }}>
                                                                        <button className='dp_particles_livedemo_button webbackground_theme'>
                                                                            <div className='d-flex align-items-center '>
                                                                                <span className='fs-6 pe-2'><RxVideo /></span>


                                                                                <span className='text-white'>LIVE DEMO</span>

                                                                            </div>
                                                                        </button>
                                                                    </Link>
                                                                </div>
                                                                <div className='col-md-4 col-6'>
                                                                    <button className='dp_particles_learnmore_button'>
                                                                        <div className='d-flex'>

                                                                            <span>
                                                                                <Link to='/nativead' className='text-black' style={{ textDecoration: 'none' }}> MORE</Link>
                                                                            </span>
                                                                            <span className='fs-6 pe-2'><FaArrowRightLong /></span>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-5'>
                                                            <p className='text-secondary m-0' style={{ fontSize: "14px" }}>Ads open in a new tab after a user clicks anywhere on a website
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row shadow p-3 legue-spartan'>
                                                <div className='col-md-12 p-4 dp_particles_main_container'>
                                                    <div className='row'>
                                                        <div className='col-md-7  dp_particles_paragraph'>
                                                            <h4 className='mt-3 font-[900] webcl_theme'>DIRECT LINK ADSs</h4>
                                                            <div className='my-5 '>
                                                                <p className='dp_particles_paragraph py-1 fs-5'>Browser-friendly, non-intrusive ads with 2B+ impressions weekly.</p>
                                                                <p className='dp_particles_paragraph py-1'>Out-of-the-box template creatives with 30X higher CTRs compared to web push.</p>
                                                                <p className='dp_particles_paragraph py-1'>Available with CPM, CPC, and CPA.</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-5'>
                                                            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                                                                <iframe src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/b6e76847ac0cc17448ccec18911f7eb0/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fb6e76847ac0cc17448ccec18911f7eb0%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" />
                                                            </div>


                                                        </div>
                                                    </div>

                                                    <div className='row d-flex align-items-center py-2'>
                                                        <div className='col-md-7 col-12'>
                                                            <div className='row'>
                                                                <div className='col-md-5 col-6'>
                                                                    <Link to="/growxadsdemo" className='text-black' style={{ textDecoration: 'none' }}>
                                                                        <button className='dp_particles_livedemo_button webbackground_theme'>
                                                                            <div className='d-flex align-items-center '>
                                                                                <span className='fs-6 pe-2'><RxVideo /></span>


                                                                                <span className='text-white'>LIVE DEMO</span>

                                                                            </div>
                                                                        </button>
                                                                    </Link>
                                                                </div>
                                                                <div className='col-md-4 col-6'>
                                                                    <button className='dp_particles_learnmore_button'>
                                                                        <div className='d-flex'>

                                                                            <span>
                                                                                <Link to='/directlinkad' className='text-black' style={{ textDecoration: 'none' }}> MORE</Link>


                                                                            </span>
                                                                            <span className='fs-6 pe-2'><FaArrowRightLong /></span>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-5'>
                                                            <p className='text-secondary m-0' style={{ fontSize: "14px" }}>Ads open in a new tab after a user clicks anywhere on a website
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row shadow p-3 legue-spartan'>
                                                <div className='col-md-12 p-4 dp_particles_main_container'>
                                                    <div className='row'>
                                                        <div className='col-md-7  dp_particles_paragraph'>
                                                            <h4 className='mt-3 font-[900] webcl_theme'>POPUNDER ADS</h4>
                                                            <div className='my-5 '>
                                                                <p className='dp_particles_paragraph py-1 fs-5'>Browser-friendly, non-intrusive ads with 2B+ impressions weekly.</p>
                                                                <p className='dp_particles_paragraph py-1'>Out-of-the-box template creatives with 30X higher CTRs compared to web push.</p>
                                                                <p className='dp_particles_paragraph py-1'>Available with CPM, CPC, and CPA.</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-5'>
                                                            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                                                                <iframe src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/ae8b7534f4833b00397c37881063689f/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fae8b7534f4833b00397c37881063689f%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row d-flex align-items-center py-2'>
                                                        <div className='col-md-7 col-12'>
                                                            <div className='row'>
                                                                <div className='col-md-5 col-6'>
                                                                    <Link to="/growxadsdemo" className='text-black' style={{ textDecoration: 'none' }}>
                                                                        <button className='dp_particles_livedemo_button webbackground_theme'>
                                                                            <div className='d-flex align-items-center '>
                                                                                <span className='fs-6 pe-2'><RxVideo /></span>


                                                                                <span className='text-white'>LIVE DEMO</span>

                                                                            </div>
                                                                        </button>
                                                                    </Link>
                                                                </div>
                                                                <div className='col-md-4 col-6'>
                                                                    <button className='dp_particles_learnmore_button'>
                                                                        <div className='d-flex'>

                                                                            <span>
                                                                                <Link to='/popunderad' className='text-black' style={{ textDecoration: 'none' }}> MORE</Link>

                                                                            </span>
                                                                            <span className='fs-6 pe-2'><FaArrowRightLong /></span>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-5'>
                                                            <p className='text-secondary m-0' style={{ fontSize: "14px" }}>Ads open in a new tab after a user clicks anywhere on a website
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row shadow p-3 legue-spartan'>
                                                <div className='col-md-12 p-4 dp_particles_main_container'>
                                                    <div className='row'>
                                                        <div className='col-md-7  dp_particles_paragraph'>
                                                            <h4 className='mt-3 font-[900] webcl_theme'>INTERSTITIAL ADS</h4>
                                                            <div className='my-5 '>
                                                                <p className='dp_particles_paragraph py-1 fs-5'>Browser-friendly, non-intrusive ads with 2B+ impressions weekly.</p>
                                                                <p className='dp_particles_paragraph py-1'>Out-of-the-box template creatives with 30X higher CTRs compared to web push.</p>
                                                                <p className='dp_particles_paragraph py-1'>Available with CPM, CPC, and CPA.</p>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-5'>
                                                            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                                                                <iframe src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/a48ffc895c18a3ca112ba112252bfd27/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fa48ffc895c18a3ca112ba112252bfd27%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='row d-flex align-items-center py-2'>
                                                        <div className='col-md-7 col-12'>
                                                            <div className='row'>
                                                                <div className='col-md-5 col-6'>
                                                                    <Link to="/growxadsdemo" className='text-black' style={{ textDecoration: 'none' }}>
                                                                        <button className='dp_particles_livedemo_button webbackground_theme'>
                                                                            <div className='d-flex align-items-center '>
                                                                                <span className='fs-6 pe-2'><RxVideo /></span>


                                                                                <span className='text-white'>LIVE DEMO</span>

                                                                            </div>
                                                                        </button>
                                                                    </Link>
                                                                </div>
                                                                <div className='col-md-4 col-6'>
                                                                    <button className='dp_particles_learnmore_button'>
                                                                        <div className='d-flex'>

                                                                            <span>
                                                                                <Link to='/interstitialad' className='text-black' style={{ textDecoration: 'none' }}> MORE</Link>
                                                                            </span>
                                                                            <span className='fs-6 pe-2'><FaArrowRightLong /></span>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-5'>
                                                            <p className='text-secondary m-0' style={{ fontSize: "14px" }}>Ads open in a new tab after a user clicks anywhere on a website
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                        : <>
                                            <div className="container-fluid ">

                                                <div className='row shadow p-3 legue-spartan'>
                                                    <div className='col-md-12 p-4 dp_particles_main_container'>
                                                        <div className='row'>
                                                            <div className='col-md-7  dp_particles_paragraph'>
                                                                <h4 className='mt-3 font-[900] webcl_theme'>NATIVE ADS</h4>
                                                                <div className='my-5 '>
                                                                    <p className='dp_particles_paragraph py-1 fs-5'>Browser-friendly, non-intrusive ads with 2B+ impressions weekly.</p>
                                                                    <p className='dp_particles_paragraph py-1'>Out-of-the-box template creatives with 30X higher CTRs compared to web push.</p>
                                                                    <p className='dp_particles_paragraph py-1'>Available with CPM, CPC, and CPA.</p>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5'>
                                                                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                                                                    <iframe frameBorder="0" src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/e3c7c38f9e109e4782a0049b1f0703d6/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fe3c7c38f9e109e4782a0049b1f0703d6%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='row d-flex align-items-center py-2'>
                                                            <div className='col-md-7 col-12'>
                                                                <div className='row'>
                                                                    <div className='col-md-5 col-6'>
                                                                        <button className='dp_particles_livedemo_button webbackground_theme'>
                                                                            <div className='d-flex '>
                                                                                <span className='fs-6 pe-2'><RxVideo /></span>
                                                                                <span>LIVE DEMO</span>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                    <div className='col-md-4 col-6'>
                                                                        <button className='dp_particles_learnmore_button'>
                                                                            <div className='d-flex'>

                                                                                <span>
                                                                                    <Link to='/nativead' className='text-black' style={{ textDecoration: 'none' }}> MORE</Link>
                                                                                </span>
                                                                                <span className='fs-6 pe-2'><FaArrowRightLong /></span>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5'>
                                                                <p className='text-secondary m-0' style={{ fontSize: "14px" }}>Ads open in a new tab after a user clicks anywhere on a website
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row shadow p-3 legue-spartan'>
                                                    <div className='col-md-12 p-4 dp_particles_main_container'>
                                                        <div className='row'>
                                                            <div className='col-md-7  dp_particles_paragraph'>
                                                                <h4 className='mt-3 font-[900] webcl_theme'>BANNER ADS</h4>
                                                                <div className='my-5 '>
                                                                    <p className='dp_particles_paragraph py-1 fs-5'>Browser-friendly, non-intrusive ads with 2B+ impressions weekly.</p>
                                                                    <p className='dp_particles_paragraph py-1'>Out-of-the-box template creatives with 30X higher CTRs compared to web push.</p>
                                                                    <p className='dp_particles_paragraph py-1'>Available with CPM, CPC, and CPA.</p>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5'>
                                                                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                                                                    <iframe frameBorder="0" style={{ border: "none", outline: "none" }} src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/5ffcdd4471ab8a95f5d8e0cc83e4cfa6/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2F5ffcdd4471ab8a95f5d8e0cc83e4cfa6%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" />
                                                                </div>


                                                            </div>
                                                        </div>

                                                        <div className='row d-flex align-items-center py-2'>
                                                            <div className='col-md-7 col-12'>
                                                                <div className='row'>
                                                                    <div className='col-md-5 col-6'>
                                                                        <button className='dp_particles_livedemo_button webbackground_theme'>
                                                                            <div className='d-flex '>
                                                                                <span className='fs-6 pe-2'><RxVideo /></span>
                                                                                <span>LIVE DEMO</span>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                    <div className='col-md-4 col-6'>
                                                                        <button className='dp_particles_learnmore_button'>
                                                                            <div className='d-flex'>

                                                                                <span>
                                                                                    <Link to='/bannerad' className='text-black' style={{ textDecoration: 'none' }}> MORE</Link>
                                                                                </span>
                                                                                <span className='fs-6 pe-2'><FaArrowRightLong /></span>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5'>
                                                                <p className='text-secondary m-0' style={{ fontSize: "14px" }}>Ads open in a new tab after a user clicks anywhere on a website
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='row shadow p-3 legue-spartan'>
                                                    <div className='col-md-12 p-4 dp_particles_main_container'>
                                                        <div className='row'>
                                                            <div className='col-md-7  dp_particles_paragraph'>
                                                                <h4 className='mt-3 font-[900] webcl_theme'>IN PAGE PUSH</h4>
                                                                <div className='my-5 '>
                                                                    <p className='dp_particles_paragraph py-1 fs-5'>In-Page Push ads don’t fall under browser restrictions and appear on websites when users are actively surfing. Expect higher CTR and CR.</p>

                                                                </div>
                                                            </div>
                                                            <div className='col-md-5'>
                                                                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                                                                    <iframe src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/0de5bd83fea70a1b8b1f087511321be5/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2F0de5bd83fea70a1b8b1f087511321be5%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='row d-flex align-items-center py-2'>
                                                            <div className='col-md-7 col-12'>
                                                                <div className='row'>
                                                                    <div className='col-md-5 col-6'>
                                                                        <button className='dp_particles_livedemo_button webbackground_theme'>
                                                                            <div className='d-flex '>
                                                                                <span className='fs-6 pe-2'><RxVideo /></span>
                                                                                <span>LIVE DEMO</span>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                    <div className='col-md-4 col-6'>
                                                                        <button className='dp_particles_learnmore_button'>
                                                                            <div className='d-flex'>

                                                                                <span>
                                                                                    <Link to='/inpagepushad' className='text-black' style={{ textDecoration: 'none' }}> MORE</Link>
                                                                                </span>
                                                                                <span className='fs-6 pe-2'><FaArrowRightLong /></span>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5'>
                                                                <p className='text-secondary m-0' style={{ fontSize: "14px" }}>Ads open in a new tab after a user clicks anywhere on a website
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>





                                                <div className='row shadow p-3 legue-spartan'>
                                                    <div className='col-md-12 p-4 dp_particles_main_container'>
                                                        <div className='row'>
                                                            <div className='col-md-7  dp_particles_paragraph'>
                                                                <h4 className='mt-3 font-[900] webcl_theme'>DIRECT LINK ADS</h4>
                                                                <div className='my-5 '>
                                                                    <p className='dp_particles_paragraph py-1 fs-5'>Browser-friendly, non-intrusive ads with 2B+ impressions weekly.</p>
                                                                    <p className='dp_particles_paragraph py-1'>Out-of-the-box template creatives with 30X higher CTRs compared to web push.</p>
                                                                    <p className='dp_particles_paragraph py-1'>Available with CPM, CPC, and CPA.</p>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5'>
                                                                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                                                                    <iframe src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/b6e76847ac0cc17448ccec18911f7eb0/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fb6e76847ac0cc17448ccec18911f7eb0%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" />
                                                                </div>


                                                            </div>
                                                        </div>

                                                        <div className='row d-flex align-items-center py-2'>
                                                            <div className='col-md-7 col-12'>
                                                                <div className='row'>
                                                                    <div className='col-md-5 col-6'>
                                                                        <button className='dp_particles_livedemo_button webbackground_theme'>
                                                                            <div className='d-flex '>
                                                                                <span className='fs-6 pe-2'><RxVideo /></span>
                                                                                <span>LIVE DEMO</span>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                    <div className='col-md-4 col-6'>
                                                                        <button className='dp_particles_learnmore_button'>
                                                                            <div className='d-flex'>

                                                                                <span>
                                                                                    <Link to='/directlinkad' className='text-black' style={{ textDecoration: 'none' }}> MORE</Link>
                                                                                </span>
                                                                                <span className='fs-6 pe-2'><FaArrowRightLong /></span>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5'>
                                                                <p className='text-secondary m-0' style={{ fontSize: "14px" }}>Ads open in a new tab after a user clicks anywhere on a website
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='row shadow p-3 legue-spartan'>
                                                    <div className='col-md-12 p-4 dp_particles_main_container'>
                                                        <div className='row'>
                                                            <div className='col-md-7  dp_particles_paragraph'>
                                                                <h4 className='mt-3 font-[900] webcl_theme'>POPUNDER ADS</h4>
                                                                <div className='my-5 '>
                                                                    <p className='dp_particles_paragraph py-1 fs-5'>Browser-friendly, non-intrusive ads with 2B+ impressions weekly.</p>
                                                                    <p className='dp_particles_paragraph py-1'>Out-of-the-box template creatives with 30X higher CTRs compared to web push.</p>
                                                                    <p className='dp_particles_paragraph py-1'>Available with CPM, CPC, and CPA.</p>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5'>
                                                                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                                                                    <iframe src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/ae8b7534f4833b00397c37881063689f/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fae8b7534f4833b00397c37881063689f%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" />
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div className='row d-flex align-items-center py-2'>
                                                            <div className='col-md-7 col-12'>
                                                                <div className='row'>
                                                                    <div className='col-md-5 col-6'>
                                                                        <button className='dp_particles_livedemo_button webbackground_theme'>
                                                                            <div className='d-flex '>
                                                                                <span className='fs-6 pe-2'><RxVideo /></span>
                                                                                <span>LIVE DEMO</span>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                    <div className='col-md-4 col-6'>
                                                                        <button className='dp_particles_learnmore_button'>
                                                                            <div className='d-flex'>

                                                                                <span>
                                                                                    <Link to='/popunderad' className='text-black' style={{ textDecoration: 'none' }}> MORE</Link>
                                                                                </span>
                                                                                <span className='fs-6 pe-2'><FaArrowRightLong /></span>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5'>
                                                                <p className='text-secondary m-0' style={{ fontSize: "14px" }}>Ads open in a new tab after a user clicks anywhere on a website
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='row shadow p-3 legue-spartan'>
                                                    <div className='col-md-12 p-4 dp_particles_main_container'>
                                                        <div className='row'>
                                                            <div className='col-md-7  dp_particles_paragraph'>
                                                                <h4 className='mt-3 font-[900] webcl_theme'>INTERSTITIAL ADS</h4>
                                                                <div className='my-5 '>
                                                                    <p className='dp_particles_paragraph py-1 fs-5'>Browser-friendly, non-intrusive ads with 2B+ impressions weekly.</p>
                                                                    <p className='dp_particles_paragraph py-1'>Out-of-the-box template creatives with 30X higher CTRs compared to web push.</p>
                                                                    <p className='dp_particles_paragraph py-1'>Available with CPM, CPC, and CPA.</p>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5'>
                                                                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                                                                    <iframe src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/a48ffc895c18a3ca112ba112252bfd27/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fa48ffc895c18a3ca112ba112252bfd27%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" />
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div className='row d-flex align-items-center py-2'>
                                                            <div className='col-md-7 col-12'>
                                                                <div className='row'>
                                                                    <div className='col-md-5 col-6'>
                                                                        <button className='dp_particles_livedemo_button webbackground_theme'>
                                                                            <div className='d-flex '>
                                                                                <span className='fs-6 pe-2'><RxVideo /></span>
                                                                                <span>LIVE DEMO</span>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                    <div className='col-md-4 col-6'>
                                                                        <button className='dp_particles_learnmore_button'>
                                                                            <div className='d-flex'>

                                                                                <span>
                                                                                    <Link to='/interstitialad' className='text-black' style={{ textDecoration: 'none' }}> MORE</Link>
                                                                                </span>
                                                                                <span className='fs-6 pe-2'><FaArrowRightLong /></span>
                                                                            </div>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5'>
                                                                <p className='text-secondary m-0' style={{ fontSize: "14px" }}>Ads open in a new tab after a user clicks anywhere on a website
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>






                                            </div></>}





                                </div>


                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}

export default AdTypes
