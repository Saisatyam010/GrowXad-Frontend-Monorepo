import React from "react";
import "./BannerAd.css";
import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import BannerSwitch from "./BannerSwitch";
import { Link } from "react-router-dom";

const BannerAd = () => {
  const BannerAdsGoodReasons = [
    "Boost Rankings Maximize website visits with our banner ads",
    "Gain Subscribers Multiply video views effortlessly with our banner ads.",
    "Attract New Users Refresh your customer base with our engaging banner ads.",
    "Optimize Buying Cycles Drive seasonal sales with our strategic ",
    "Generating leads and sign-ups",
    "Boosting the downloads number of an app",
    "Enhancing brand or product awareness",
  ];

  const SelfServePlatform = [
    {
      num: "1",
      content:
        "Sign up as a publisher and confirm your email address (you will get a service email with a link). Then, log in to your account.",
    },
    {
      num: "2",
      content: "From your account, find and click the ADD WEBSITE button.",
    },
    {
      num: "3",
      content:
        "Enter your domain and fill out all the fields required. Pick one of the Banner sizes. Click SUBMIT.",
    },
    {
      num: "4",
      content:
        "Wait till we verify your domain (you will see its status change to Approved). Click on the website's name and pick GET CODE.",
    },
    {
      num: "5",
      content:
        "Per our instructions, place the Banner's code on your web page. Get instructions.",
    },
  ];

  return (
    <div className=" px-2 ">
      {/*1st section*/}
      <div className="container py-5">
        <div className="row" style={{ marginTop: "70px" }}>
          <div className="col-md-6">
            <h1 className="SSA_DisplayBanner_font-3rem">
              {" "}
              <span className="SSA_DisplayBanner_VoiletText">Banner Ad</span> —
              Display Banner Advertising on Your Website
            </h1>
            <p className="SSA_DisplayBanner_font-18px pb-3 ">
              {" "}
              Online Banner Ads deliver unprecedented performance to publishers.
              Webmasters and bloggers enjoy 100% fill rates and high payouts.
              Advertisers access reliable traffic sources and reach conscious
              customers that are ready to buy. If it is the result you’re
              looking for, then an online display ad is what you need.
            </p>
            <Link to="/adveriserauthLogin" className='no-underline hover:no-underline'>
              <button className="border-anim-btn">GET BANNER CODE</button>
            </Link>
          </div>
          <div className="col-md-6 pt-4 px-3 px-md-0 px-lg-0 pt-md-0 pt-lg-0">
            <div className="d-flex justify-content-center">
              <img
                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/9930c66e-7112-416e-af20-c7bc5a3f5000/public"
                alt=""
                className="mx-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/*2nd section*/}
      <div className="py-md-5 py-2" style={{ backgroundColor: "#e9e9e9" }}>
        <div className="container py-5">
          <div className="row">
            <div className="SSA_DisplayBanner_font-34px text-center">
              Who benefits from GrowX advertising solutions
            </div>
            <div className="col-md-6 pt-4">
              <div className="SSA_Solution_New_Cards_Box ">
                <div class="SSA_Solution_Cards p-5 ">
                  <div class="SSA_hover_color_bubble"></div>
                  <div className="SSA_BannerDisplay_Card_Title SSA_DisplayBanner_font_26px">
                    Simplify app downloads
                  </div>
                  <p className="SSA_BannerDisplay_Card_desc SSA_DisplayBanner_font-18px">
                    You can easily put an online display ad on any website incl.
                    WordPress and BlogSpot (Blogger), etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-4">
              <div className="SSA_Solution_New_Cards_Box ">
                <div class="SSA_Solution_Cards p-5">
                  <div class="SSA_hover_color_bubble"></div>
                  <div className="SSA_BannerDisplay_Card_Title SSA_DisplayBanner_font_26px">
                    Explore our banner ads
                  </div>
                  <p className="SSA_BannerDisplay_Card_desc SSA_DisplayBanner_font-18px">
                    Guaranteed compatibility across all operating systems for a
                    universal advertising experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-4">
              <div className="SSA_Solution_New_Cards_Box ">
                <div class="SSA_Solution_Cards p-5">
                  <div class="SSA_hover_color_bubble"></div>
                  <div className="SSA_BannerDisplay_Card_Title SSA_DisplayBanner_font_26px">
                    Trusted Advertisers, High CPMs
                  </div>
                  <p className="SSA_BannerDisplay_Card_desc SSA_DisplayBanner_font-18px">
                    Unlock premium earnings with trusted advertisers delivering
                    top-tier CPMs. Partnering with trusted advertisers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-4">
              <div className="SSA_Solution_New_Cards_Box ">
                <div class="SSA_Solution_Cards p-5">
                  <div class="SSA_hover_color_bubble"></div>
                  <div className="SSA_BannerDisplay_Card_Title SSA_DisplayBanner_font_26px">
                    Reliable, Strong Fill Rates
                  </div>
                  <p className="SSA_BannerDisplay_Card_desc SSA_DisplayBanner_font-18px">
                    Dive into banner ads with strong fill rates, ensuring maximum exposure and revenue for your content
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*3rd section*/}
      <div className="container py-md-5 py-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className="SSA_DisplayBanner_font-3rem">
              {" "}
              Types of GrowXads banner ads you can get
            </h1>
            <p className="SSA_DisplayBanner_font-18px pb-3 ">
              {" "}
              Display or banner advertising is the oldest type of online
              advertising with proven efficiency. Banners are images or GIF
              files that are to be placed on publishers’ websites, mobile sites,
              and blogs. According to IAB, there are typical and most clickable
              banner ad formats for desktop and mobile devices.
            </p>
            <Link to="/adveriserauthLogin" className='no-underline hover:no-underline'>
            <button className="border-anim-btn px-5 py-3">
              THE BANNER CODE
            </button>
            </Link>
          </div>
          <div className="col-md-6 pt-md-0 pt-lg-0 pt-3">
            <div className="d-flex justify-content-center">
              <img
                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d05f8379-4baf-4fdf-70ab-9fbbc53f1500/public"
                alt=""
                className="mx-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/*4th section*/}
      <div className="py-md-5 pt-lg-5 pt-1" style={{ backgroundColor: "#333" }}>
        <div className="container  text-white py-5">
          <div className="row">
            <div className="SSA_DisplayBanner_font-34px text-center">
              Who benefits from GrowXads advertising solutions
            </div>
            <div className="col-md-6 pt-4">
              <div className="SSA_DisplayBanner_card_borderwhite SSA_DISPLAYBANNER_CARD SSA_DisplayBAnner_bgBlack p-md-5 p-lg-5 p-4">
                <img
                  style={{ backgroundColor: "#73035b", borderRadius: "12px" }}
                  className="px-2"
                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/f787e604-c053-4fe2-0be2-ff9631519b00/public"
                  alt=""
                />

                <div className="SSA_DisplayBanner_font_26px SSA_DisplayBAnner_bgBlack pt-2">
                  APPS & GAMES
                </div>
                <p className="SSA_DisplayBanner_font-18px">
                  Maximize your website's ad potential! Our display Popunder pull
                  in top-tier offers worldwide—social apps, mobile, and browser
                  games. Thanks to our advanced AI algorithms, your visitors
                  enjoy tailor-made ad content that resonates. Elevate your
                  advertising with relevance and quality.
                </p>
              </div>
            </div>
            <div className="col-md-6 pt-4">
              <div className="SSA_DisplayBanner_card_borderwhite SSA_DISPLAYBANNER_CARD SSA_DisplayBAnner_bgBlack  p-md-5 p-lg-5 p-4">
                <img
                  style={{ backgroundColor: "#73035b", borderRadius: "12px" }}
                  className="px-2"
                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/885a0697-f61c-4e0f-46ea-4a8c0d69c400/public"
                  alt=""
                />
                <div className="SSA_DisplayBanner_font_26px pt-2">
                  E-COMMERCE (SALES)
                </div>
                <p className="SSA_DisplayBanner_font-18px">
                  Unlock consistent income growth with our seasonal sales and
                  offers ad Popunder. Thousands of clicks attest to its success,
                  as numerous brands perpetually run campaigns. Elevate your
                  revenue stream effortlessly.
                </p>
              </div>
            </div>
            <div className="col-md-6 pt-4">
              <div className="SSA_DisplayBanner_card_borderwhite SSA_DISPLAYBANNER_CARD SSA_DisplayBAnner_bgBlack  p-md-5 p-lg-5 p-4">
                <img
                  style={{ backgroundColor: "#73035b", borderRadius: "12px" }}
                  className="px-2"
                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/7371d99a-5b76-49a5-9227-3f3dd2a72600/public"
                  alt=""
                />

                <div className="SSA_DisplayBanner_font_26px  pt-2">
                  UTILITIES & SOFTWARE
                </div>
                <p className="SSA_DisplayBanner_font-18px">
                  Monetize your inventory by featuring advertising Popunder,
                  enabling software brands to showcase products such as VPNs,
                  antiviruses, and cleaners. Enjoy higher payouts as advertisers
                  invest in conversions. Maximize your earnings today.
                </p>
              </div>
            </div>
            <div className="col-md-6 pt-4">
              <div className="SSA_DisplayBanner_card_borderwhite SSA_DISPLAYBANNER_CARD SSA_DisplayBAnner_bgBlack p- md-5 p-lg-5 p-4">
                <img
                  style={{ backgroundColor: "#73035b", borderRadius: "12px" }}
                  className="px-2"
                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/96f611eb-d8be-4951-5ecb-306655a89000/public"
                  alt=""
                />

                <div className="SSA_DisplayBanner_font_26px pt-2">FINANCE</div>
                <p className="SSA_DisplayBanner_font-18px">
                  Draw affluent newcomers to trading platforms or financial
                  services with digital display ads. Advertisers actively engage
                  inactive users through supportive campaigns. Elevate your
                  outreach and reconnect with potential users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*5th section*/}
      <div className="container py-md-5 py-2 py-lg-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="SSA_DisplayBanner_font-3rem">
              {" "}
              What are banner ads good for?
            </h1>
            {BannerAdsGoodReasons.map((item, index) => {
              return (
                <div className="text-left text-start">
                  <div className="d-flex  text-start" key={index}>
                    <TiTick
                      className="mb-2 p-1"
                      size={24}
                      style={{
                        backgroundColor: "#73035b",
                        borderRadius: "50%",
                      }}
                      fill="white"
                    />
                    <p
                      className="SSA_DisplayBanner_font-18px pb-3 mb-0 ml-2 pt-2"
                      style={{ lineHeight: "1", textAlign: "left" }}
                    >
                      {item}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-md-6  pt-md-0 pt-lg-0 pt-3">
            <div className="d-flex justify-content-center p-4">
              <img
                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/f99fd012-8759-4f86-c7e9-1532566b5a00/public"
                alt=""
                className="mx-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/*6th section*/}
      <div className="py-md-5 py-md-2" style={{ backgroundColor: "#e9e9e9" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 pr-md-5 pr-lg-5 pr-0">
              <div className="pr-5">
                <h1 className="SSA_DisplayBanner_font-34px pb-3">
                  {" "}
                  How to put Banners on a website?
                </h1>
                <p className="SSA_DisplayBanner_font-18px pb-3 ">
                  Effortlessly integrate banners anywhere on your
                  webpage—header, sidebar, footer, and more. Implement the
                  GrowX code/script on your website or mobile page to
                  seamlessly showcase advertisements and enhance user
                  engagement.
                </p>
              </div>
            </div>
            <div className="col-md-6 pl-md-5 pl-lg-5 pl-0">
              <div>
                <div>
                  First, register as a Publisher and log in. <br /> <br />
                  Generate code for the needed banner size (160×300, 160×600,
                  300×250, 320х50, 728×90, 468×60), use ADD NEW WEBSITE button
                  and fill out the required fields. Now all you have to do is
                  wait for approval. <br /> <br />
                  Afterward, get the code from your account or the GrowX
                  email, then copy the code and paste it to any page you like.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*7th section*/}
      <div className=" py-5 webbackground_theme">
        <div className="container py-3">
          <div className="row ">
            <div className="col-md-12">
              <h1 className="text-white text-center">Best opportunities</h1>
              <p className=" text-white text-center">
                Leveraging partnerships with 28K+ direct publishers and 13K+
                advertisers, GrowX employs AI algorithms to consistently assess
                traffic quality, ensuring optimal traffic-to-offer matches.
              </p>

              <div className="d-flex align-items-center justify-content-center">
              <Link to="/adveriserauthLogin" className='no-underline hover:no-underline'>

                <button className="btn bg-black text-white mt-3">
                  SIGNUP AND APPLY
                </button>
                </Link>
              </div>
              <div className="d-flex align-tems-end justify-content-end">
              <Link to="/adveriserauthLogin" style={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  fontWeight: "500",
                  textDecoration: "none",
                }} className='no-underline hover:no-underline'>
                  <div className="d-flex">
                    <span>MORE ABOUT OUR PRICING MODEL</span>
                    <span className="px-2"> <FaArrowRight /></span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*8th section*/}
      <div className="container py-md-5 py-lg-5 py-0 my-md-5 my-lg-5 my-3">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h1 className="SSA_DisplayBanner_font-34px pb-3">
              {" "}
              HOW TO GET A BANNER CODE in minutes with GrowX Self-Serve
              Platform{" "}
            </h1>
            {SelfServePlatform.map((item, index) => {
              return (
                <div className="d-flex text-left" key={index}>
                  {/* <span className='p-2' style={{ backgroundColor:'#73035b', borderRadius:'50%',color:'white',fontWeight:'500'}} >{item.num}</span>  */}
                  <p className="pb-3 mb-0 ml-2 " style={{ fontSize: "20px" }}>
                    {item.content}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="col-md-5">
            <div className="d-flex justify-content-center">
              <img
                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/ba9377cb-6ec2-4e1c-33c3-cf037af6eb00/public"
                alt=""
                className="mx-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/*---------switch button_________*/}
      <div className="py-5" style={{ backgroundColor: "#e9e9e9" }}>
        <div className="SSA_DisplayBanner_font-34px py-2 text-center">
          Top GrowX services for advertisers and publishers
        </div>
        <div className="">
          <BannerSwitch />
        </div>
      </div>

      {/*-----------lastt section-----------*/}
    </div>
  );
}

export default BannerAd