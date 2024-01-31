import React, { useEffect, useState } from "react";
import "./DashboardWelcomePage.css";
import { Col, Container, Row } from "react-bootstrap";
import { BsPhoneVibrate } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

const DashboardWelcomePage = () => {
  return (
    <>
      <Container
        className="mt-3 webcl_theme py-5"
        // style={{ overflowY: "scroll" }}
      >
        <Row>
          <Col>
            <div>
              <h2 className="text-center">Welcome To Grow X Ads!</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="px-3 mt-2 py-1 SSA_DASHBOARD_border">
              <p className="text-black text-[18px]">
                Thanks for joining Adsterra, the reputable advertising network
                with the best Partner Care approach.
                <br />
                We have multiple popular ad formats and tons of high-quality
                traffic from all over the world. You are welcome to take a
                complete video onboarding tour over the platform or choose any
                part of it for quick help!
              </p>
            </div>
          </Col>
        </Row>
        <Row className="py-5 mb-4 d-flex align-items-center ">
          <div className="d-flex justify-content-center mt-5 mb-4">
            <h2>Steps To Create Campaign In GrowxAds</h2>
          </div>

          <Col md={3}>
            <div className=" p-4 mt-3 ab-height mx-auto ">
              <p className=" text-[18px] text-left SSA_GREY_font mt-3">
                <b> 1. </b> 0:32 Find more useful information by this QR-code
                <br />
                <b>2.</b> 0:51 What is Adsterra? <br />
                <b> 3.</b> 1:38 Pricing models and top verticals
                <br />
                <b> 4.</b> 2:02 Adsterra CPA
                <br />
                <b>5.</b> 2:24 Ad formats
                <br />
                <b>6.</b> 3:03 Social Bar examples
                <br />
                <b>7.</b> 4:19 Popunders
                <br />
                <b>8.</b> 4:49 Native Ads
                <br />
                <b>9.</b> 5:06 Video Ads
                <br />
                <b>10.</b> Your first ad campaign in Adsterra <br />
                <b>11.</b> :36 Self-serve vs Managed campaigns
                <br />
                <b>12.</b> 6:54 Postback setting
                <br />
              </p>
            </div>
          </Col>

          <Col md={6} sm={12} c>
            <div>
              <div
                style={{
                  height: "400px",
                  boxShadow:
                    "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                  borderRadius: "10px",
                }}
              >
                <iframe
                  title="YouTube Video"
                  width="100%"
                  height="533px"
                  src="https://www.youtube.com/embed/0Gh77_2SCqA"
                  frameBorder="0"
                  allowFullScreen
                  style={{
                    borderRadius: "inherit",
                    border: "2px solid rgba(142, 29, 169, 0.8)",
                    padding: "5px",
                  }}
                />
              </div>
            </div>
          </Col>

          <Col md={3}>
            <div className="m-1 p-4 ab-height">
              <p className=" text-[18px]  SSA_GREY_font">
                <b>13.</b> 5:20 Banner Ads
                <br />
                <b> 14.</b> 0:32 Find more useful information by this QR-code
                <br />
                <b>15. </b> 8:08 Freebies and bonuses
                <br />
                <b>16.</b> 9:20 Campaign setting
                <br />
                <b>17.</b> 14:18 Tips to start your test
                <br />
                <b>18.</b> 17:47 Useful tips to boost your traffic
                <br />
                <b>19.</b> 20:25 Tips for specific verticals
                <br />
                <b>20. </b> 3:03 Social Bar examples
                <br />
                <b>21.</b> 4:19 Popunders
                <br />
                <b>22.</b> 4:49 Native Ads
                <br />
                <b>23.</b> 5:06 Video Ads
                <br />
                <b>24.</b> 5:20 Banner Ads
              </p>
            </div>
          </Col>
        </Row>
        <Row className="d-flex py-5 text-center justify-content-center align-items-center">
          <h3 style={{ fontWeight: "600", color: "black" }}>
            How to start getting traffic
          </h3>
          <div className="d-flex justify-content-center">
            <h5
              className="w-75 text-center mt-2 mb-5"
              style={{ fontWeight: "700", color: "black" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quis
              harum veritatis tempora ipsam nam sapiente vero consectetur
              impedit eum beatae officiis, unde quidem modi? Minima nisi
              blanditiis nemo nulla ea accusamus numquam aut!
            </h5>
          </div>

          <Col>
            <div class="sana-welcome-card">
              <div class="sana-welcome-card-details">
                <div class="d-flex justify-content-center align-items-start mb-2">
                  <img
                    src="http://localhost:3000/image/Traffic_step1_welcome.gif"
                    alt=""
                  />
                </div>
                <h4 style={{ fontWeight: "800" }}>Step 1</h4>
                <h5 style={{ fontWeight: "800", fontSize: "1.15rem" }}>
                  Choose payment method and top up your balance
                </h5>
                <p class="sana-welcome-text-body">
                  Some methods allow you to make payments by yourself, others
                  require{" "}
                </p>
              </div>
              <button class="sana-welcome-card-button">
                CHOOSE PAYMENT METHOD
              </button>
            </div>
          </Col>

          <Col className="text-center d-none d-md-flex py-2 justify-content-center">
            <FaArrowRightLong size={42} />
          </Col>

          <Col>
            <div class="sana-welcome-card">
              <div class="sana-welcome-card-details">
                <div class="d-flex justify-content-center align-items-start mb-2">
                  <img
                    src="http://localhost:3000/image/Traffic_step2_welcome.gif "
                    alt=""
                    style={{}}
                  />
                </div>
                <h4 style={{ fontWeight: "800" }}>Step 2</h4>

                <h5 style={{ fontWeight: "800", fontSize: "1.15rem" }}>
                  Create a campaign <br />
                  Choose payment method and top up your balance.
                </h5>
                <p class="sana-welcome-text-body mb-3">
                  Popunder (CPM, CPA), Native ads (CPM, CPC), Social Bar
                  (In-Page Push) (CPM, CPC, CPA)
                </p>
              </div>
              <button class="sana-welcome-card-button">CREATE CAMPAIGN</button>
            </div>
          </Col>

          <Col className="text-center d-none d-md-flex py-2 justify-content-center">
            <FaArrowRightLong size={42} />
          </Col>

          <Col>
            <div class="sana-welcome-card">
              <div class="sana-welcome-card-details">
                <div class="d-flex justify-content-center align-items-start mb-2">
                  {/* <CiStar size={62} /> */}
                  <img
                    src="http://localhost:3000/image/Traffic_step3_welcome.gif"
                    alt=""
                  />
                </div>
                <h4 style={{ fontWeight: "800" }}>Step 3</h4>

                <h5 style={{ fontWeight: "800", fontSize: "1.15rem" }}>
                  Set up conversions tracker
                </h5>
                <p class="sana-welcome-text-body">
                  Without Trackers, accessing traffic is impossible. Our
                  managers assist with integration for seamless optimization.
                </p>
              </div>
              <button class="sana-welcome-card-button">SET UP TRACKER</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardWelcomePage;
