import React from 'react';
import './BenefitAdv.css';
import { ButtonGroup, Button, Col, Container, Row } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { BsArrowRightCircle } from "react-icons/bs";

import { BiLogoMicrosoftTeams } from "react-icons/bi";
// import Map from '../../SampleMap/Samplemap';
import SwichButtonComponent from './SwichButtonComponent';
import BenefitSlider from './BenefitSlider';
import Layout from '../Layout/Layout';
import SampleMap from './SampleMap';
import { Link } from 'react-router-dom';
const BenefitAdv = () => {

  const solutions = [
    {
      title: 'Brands',
      description:
        'Unlock fresh, purchase-ready audiences you wouldn’t find on mainstream networks. Discover new markets to expand your brand presence. Get insights into the best local and global ad strategies from GrowXAds expert managers.',
      icon: <BiLogoMicrosoftTeams />
    },
    {
      title: 'Agencies',
      description:
        'Shake off the stress of meeting KPIs. Drive high-volume traffic with predictable, quality conversions and leads. Scale and optimize ad campaigns flawlessly in the most cost-effective way. Apply ad automation tools to spend less on traffic while reducing time spent on campaign management.',
      icon: <BiLogoMicrosoftTeams />
    },
    {
      title: 'Affiliate teams',
      description:
        'Add a battle-tested, powerful traffic source to your arsenal. Stay profitable by acquiring top-quality conversions and increasing your payouts. If these are CPA offers you’re looking for, then GrowXAds CPA Network is your first choice.',
      icon: <BiLogoMicrosoftTeams size={28} />
    },
    {
      title: 'DSPs and SSPs',
      description:
        'Advance your media-buying toolkit by using GrowXAds Premium Traffic Reselling solutions. Integrate with us as an SSP or DSP partner and profit from high-intent audiences and A-class ad feed with no remnant impressions allowed.',
      icon: <BiLogoMicrosoftTeams />
    },
  ];

  const CardDataSix = [

    {
      imgSrc: 'https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/bd991f45-e278-43b1-00ab-bb0c134a6b00/public',
      title: 'Smart bidding',
      description:
        'You literally spend less with ad automation tools. Save time on adjusting bids and unwanted placements',
    },
    {
      imgSrc: 'https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/8168d479-b128-454b-a377-c8297ddd4c00/public',
      title: 'Traffic estimation',
      description:
        'Use built-in tools for evaluating competitors’ bids and in-network traffic volumes within your targets',
    },
    {
      imgSrc: 'https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/7e2b85c2-31ad-4aaa-0ac6-1ad76b1e3e00/public',
      title: 'Expert Partner Care',
      description:
        "Whichever market you're tapping into, you always get professional support and advice ",
    },
    {
      imgSrc: 'https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/983df64c-0f6b-4db6-ee46-94eed9504e00/public',
      title: 'Advanced tracking',
      description:
        'Stretch your campaign monitoring to a new limit by adding a conversion tracker. Pull all necessary ',
    }
  ]

  return (
    <Layout >
      <div style={{ overflowX: 'hidden' }}>
        {/*--------------------------main Section------------------------*/}
        <div className='container-fluid py-5 SSA_Benefit_bg_img_main webbackground_theme_for_benefit '>
          <div className="container pt-5 mt-5">
            <div className="row mb-2 pt-4 pb-2">
              <div className="col-md-6 pt-4">
                <div className=''>
                  <div className='text-white' style={{ fontSize: '16px' }}>Empowering Advertisers: Unveiling GrowXAds Excellence</div>
                  <div className='SSA_Ad_Benefits_font2rem  text-white pt-2' style={{ lineHeight: '1.2' }}>

                    Achieve an unparalleled marketing impact.</div>
                  <div className='SSA_Ad_Benefits_font20px py-4 text-white'>Prioritize user privacy and data security to align with regulations like GDPR, implementing robust fraud detection for high-quality traffic.
                  </div>
                  <div className=''>
                    <Link to="/adveriserauthLogin" className='text-black no-underline hover:no-underline'> <button type="button" className=" SSA_Btn_HOME_buytraffic py-3 px-5 mr-2 p-3">Acquire Top Traffic</button></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6  pt-md-0 pt-3">
                <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/2c555e13-f367-4156-8f52-cbbda0bc8f00/public" alt="" width='100%' />
              </div>
            </div>
          </div>
        </div>

        {/*--------------------------Second Section------------------------*/}
        <div className="container-fluid py-5 SSA_BenefitsAdv_BG_IMG1" style={{ borderEndStartRadius: '40px' }}>
          <div className="container pt-4 px-md-5 px-2">
            <div className='text-center SSA_Ad_Benefits_font2rem_Section2'>Revolutionizing Your Online Presence: Advanced Digital Marketing Tactics</div>
            <div className="row">
              {solutions.map((item, index) => (
                <div className="col-md-6 pt-4 " key={index}>
                  <div className='p-md-5 p-3 SSA_card1 bg-white SSA_benefits_RoundRadius_card'>
                    <div className='SSA_benefits_font26px_purple pb-3'>{item.title}</div>
                    <div class="SSA_go-corner" href="#">
                      <div class="SSA_go-arrow">
                        {item.icon}
                      </div>
                    </div>
                    <p className='SSA_Ad_Benefits_font19px pb-2'>{item.description}</p>
                  </div>
                </div>
              ))}


            </div>
          </div>
        </div>


        {/*--------------------------Third Section------------------------*/}
        <div className="container  py-md-5 py-3">
          <div className='text-center SSA_Ad_Benefits_font2rem_Section2 pt-5'><span style={{ color: '#73035b', fontWeight: '600' }}> Connect </span> with <span style={{ color: '#73035b', fontWeight: '600' }}> target audiences </span>  ready to engage with your offers</div>
          <div className="row align-items-center container px-md-5 px-3">
            <div className="col-md-7">
            <SampleMap />
            </div>
            <div className="col-md-5 pt-md- pt-4">
              <div className='p-5' >
                <div className='SSA_benefits_font26px_purple pb-3  text-left'>Best-matching traffic sources</div>
                <p className='SSA_Ad_Benefits_font19px text-left'>GrowXAd partners with over 28K direct publishers who send 32B+ ad views monthly. We offer exclusive traffic platforms that perfectly match iGaming, E-commerce, Apps, Utility, Software, and Entertainment verticals.
                  In addition, you can apply for premium RTB traffic served by highly reputable SSP platforms.</p>
              </div>

            </div>
          </div>
          <div className="row align-items-center container px-md-5 px-3 pt-4 pt-md-0">
            <div className="col-md-7 text-left ">
              <div className='SSA_benefits_font26px_purple pb-3 SSA_BENEFIT_Text_Black pl-md-5 pl-0'>Powerful business space</div>
              <p className='SSA_Ad_Benefits_font19px'>The GrowXAds Self-Serve Platform is ideal for people who want to purchase
                traffic without the help of a manager. You'll have access to a range of targeting options, competitive
                intelligence, and ad optimization tools, which will help you improve your campaigns
                and increase conversions. <br /> <br /> </p>
              <Link to="/adveriserauthLogin" className='text-black hover:no-underline'> More about the Self-Serve Platform</Link>
            </div>
            <div className="col-md-5 p-5 text-center ">
              <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/6866317f-03c4-4b32-eb64-e02ebfb77500/public" alt="" width='100%' />
            </div>
          </div>
          <div className="row align-items-center container px-md-5 px-3 pt-4 pt-md-0">
            <div className="col-md-5 p-5 text-center">
              <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/8945d70b-6845-4146-e5f0-744ca5900600/public" alt="" width='100%' />
            </div>
            <div className="col-md-7 text-left pl-md-5 pl-0 pt-md-0 px-2 px-md-0 pt-4">
              <div className='SSA_benefits_font26px_purple pb-3 SSA_BENEFIT_Text_Black'>Budget-saving tools</div>
              <p className='SSA_Ad_Benefits_font19px'>Spend less buying CPM/CPC traffic and setting rules to optimize it by eCPA or conversions (CPA Goal). Add automated bidding to your ad strategy, allowing Smart CPM to find the best-converting placements at the fairest price.</p>
            </div>
          </div>
        </div>

        {/*--------------------------Switch Section------------------------*/}
        <SwichButtonComponent />
        {/*----------------------------9col section-------------------------*/}

        <div className="container py-5 px-5">
          <div className='text-center SSA_benefit_font36px'>Join pros who make 1.34B <span className='webcl_theme'> conversions per year</span></div>
          <div className="d-flex flex-wrap">
      
            <div className="col-md-4 mb-3">
              <div className="d-flex bg-dark py-2 SSA_BENEFITS_OUTER" style={{ borderRadius: '15px' }}>
                <div className="SSA_BENEFITS_ICON bg-white">
                  <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/bb3901d7-3b74-46f5-dc21-df6b86a3a000/public" alt="" />
                </div>
                <div className='text-light px-3' style={{ fontSize: '28px' }}>
                  VPN & Utilities
                </div>
              </div>
            </div>

    
            <div className="col-md-4 mb-3">
              <div className="d-flex bg-dark py-2 SSA_BENEFITS_OUTER" style={{ borderRadius: '15px' }}>
                <div className="SSA_BENEFITS_ICON bg-white">
                  <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/4eaf578b-ddd0-4c1e-700a-058f7aadf100/public" alt="mobile app logo" />
                </div>
                <div className='text-light px-3' style={{ fontSize: '28px' }}>
                  Mobile Apps
                </div>
              </div>
            </div>

            {/* Third Line */}
            <div className="col-md-4 mb-3">
              <div className="d-flex bg-dark py-2 SSA_BENEFITS_OUTER" style={{ borderRadius: '15px' }}>
                <div className="SSA_BENEFITS_ICON bg-white">
                  <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/8b30caf2-0bb1-43eb-f2bd-52e22ec48b00/public" alt="Dating App Icon" />
                </div>
                <div className='text-light px-3' style={{ fontSize: '28px' }}>
                  Dating
                </div>
              </div>
            </div>


            <div className="col-md-4 mb-3">
              <div className="d-flex bg-dark py-2 SSA_BENEFITS_OUTER" style={{ borderRadius: '15px' }}>
                <div className="SSA_BENEFITS_ICON bg-white">
                  <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/2700aa8f-f713-40e7-5759-2d07e9219c00/public" alt="" />
                </div>
                <div className='text-light px-3' style={{ fontSize: '28px' }}>
                  E-commerce
                </div>
              </div>
            </div>



            <div className="col-md-4 mb-3">
              <div className="d-flex bg-dark py-2 SSA_BENEFITS_OUTER" style={{ borderRadius: '15px' }}>
                <div className="SSA_BENEFITS_ICON bg-white">
                  <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/84edbd81-6985-42ca-438e-4478fa2a1300/public" alt="" />
                </div>
                <div className='text-light px-3' style={{ fontSize: '28px' }}>
                  iGaming
                </div>
              </div>
            </div>


            <div className="col-md-4 mb-3">
              <div className="d-flex bg-dark py-2 SSA_BENEFITS_OUTER" style={{ borderRadius: '15px' }}>
                <div className="SSA_BENEFITS_ICON bg-white">
                  <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/4ee58d83-b210-4043-c4a3-c67a30756e00/public" alt="" />
                </div>
                <div className='text-light px-3' style={{ fontSize: '28px' }}>

                  Finance
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="d-flex bg-dark py-2 SSA_BENEFITS_OUTER" style={{ borderRadius: '15px' }}>
                <div className="SSA_BENEFITS_ICON bg-white">
                  <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/5ead73c8-40df-4103-8624-a16638531800/public" alt="" />
                </div>
                <div className='text-light px-3' style={{ fontSize: '28px' }}>
                  Subscriptions
                </div>
              </div>
            </div>


            <div className="col-md-4 mb-3">
              <div className="d-flex bg-dark py-2 SSA_BENEFITS_OUTER" style={{ borderRadius: '15px' }}>
                <div className="SSA_BENEFITS_ICON bg-white">
                  <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/e3023eab-ac49-4256-1603-11683fc46a00/public" alt="" />
                </div>
                <div className='text-light px-3' style={{ fontSize: '28px' }}>
                  Lead Generation
                </div>
              </div>
            </div>


            <div className="col-md-4 mb-3">
              <div className="d-flex bg-dark py-2 SSA_BENEFITS_OUTER" style={{ borderRadius: '15px' }}>
                <div className="SSA_BENEFITS_ICON bg-white">
                  <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d08e8a5d-e3a9-45bb-1078-28986c80aa00/public" alt="" />
                </div>
                <div className='text-light px-3' style={{ fontSize: '28px' }}>

                  Sweepstakes
                </div>
              </div>
            </div>
          </div>
        </div>


        {/*--------------------------six col section------------------------*/}
        <div className="bg-dark py-5">
          <div className="container py-5 px-md-5 px-3">
            <div className='text-center SSA_benefit_font36px text-white'>We do care about your <span className='webcl_theme'>business growth</span> </div>
            <div className="row">
              {CardDataSix.map((item, index) => (
                <div
                  key={index}
                  className="col-md-3 pt-4 px-2 text-white"

                ><div className='py-3 px-3' style={{
                  height: '220px',
                  backgroundImage: 'url(https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d041a509-47f2-4dcf-ea9a-bfdaed17d500/public)',
                  backgroundSize: '100%', 
                  backgroundRepeat: 'no-repeat'
                }}>  <div className='mb-4'>
                      <div className="d-flex">
                        <div style={{ backgroundColor: 'white', borderRadius: '50%' }}>
                          <img src={item.imgSrc} alt="" srcset="" width={42} />
                        </div> &nbsp; &nbsp;
                        <div className='pt-2 ' style={{ fontSize: '25px' }}>
                          {item.title}
                        </div>

                      </div>
                      <div className='pb-2 pl-5' style={{ fontSize: '16px' }}>
                        {item.description}
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>


        {/*--------------------payment section-------------------*/}


        {/*-------------------Box Section-------------------*/}
        <div className='px-3 my-3 ' style={{ bottom: '0px', marginBottom: "20px" }}>
          <div className='px-md-5 px-0 mx-md-5 mx-2 '>
            <div className="container-fluid  SSA_Benefit_Bg_Img3  py-md-5 py-3">
              <div className='text-center text-white pt-5'>
                <div className='SSA_Ad_Benefits_font2rem_Section2  text-white'>Join GrowXAds today</div>
                <p className='SSA_Ad_Benefits_font22px'>You’re only a few minutes away from high-value <br />
                  audiences ready to <span className=''>engage with your offers.</span></p>
                <Col md={{ span: 4, offset: 4 }} className='mb-2 my-5'>
                  <Button className="btn bg-black text-white outline-none border-0">
                    <div className='flex'>
                      <div className='pe-3'>

                        <Link to="/adveriserauthLogin" className='text-white no-underline hover:no-underline'>
                          <span className='fs-3 text-center'>Get CPA Offers</span>
                        </Link>



                      </div>
                      <div className='mt-2 fs-3'>
                        <BsArrowRightCircle className="" />
                      </div>
                    </div>
                  </Button>
                </Col>
              </div>
            </div>
          </div>
        </div>

        {/*-----------second last section------------------*/}
        <div className="container-fluid  SSA_Benefit_BG_IMG2  py-5" >
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className=' SSA_Ad_Benefits_font2rem_Section2  text-white'>Partnerships that you can profit from</div>
                <p className='SSA_Ad_Benefits_font19px pb-4 pr-5 text-white'> GrowXAds is proud of partnering with the most influential ad-tech media, forums, and platforms. Some of our long-term connections resulted in exclusive offers you, as the GrowXAds advertiser, can benefit from. Just open the Freebies and Bonuses tab to unlock promo codes, bonuses, and discounts delivered by market leaders.</p>
                <Button className="btn bg-black text-white outline-none border-0">
                  <div className='flex'>
                    <div className='pe-3'>

                      <Link to="/adveriserauthLogin" className='text-white no-underline hover:no-underline'>
                        <span className='fs-3 text-center'>Register To Unlock</span>
                      </Link>
                      
                    </div>
                    <div className='mt-2 fs-3'>
                      <BsArrowRightCircle className="" />
                    </div>
                  </div>
                </Button>
              </div>
              <div className="col-md-5 pt-md-0  pt-4">
                <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/065bb7f3-2571-428e-4bb8-7f8277e81d00/public" alt="" width='100%' />
              </div>
            </div>
          </div>

        </div>

        {/* <BenefitSlider /> */}
      </div>
    </Layout>
  )
}

export default BenefitAdv