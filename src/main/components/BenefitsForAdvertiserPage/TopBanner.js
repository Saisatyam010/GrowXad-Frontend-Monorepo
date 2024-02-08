import React from "react";
import "./BenefitAdv.css";
import { Button, Col } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import SwichButtonComponent from "./SwichButton";
import Layout from "../Layout/Layout";
import SampleMap from "./SampleMap";
import { Link } from "react-router-dom";

const BenefitAdv = () => {
  
  
  return (
    <div className="container-fluid py-5 SSA_Benefit_bg_img_main webbackground_theme_for_benefit ">
          <div className="container pt-5 mt-5">
            <div className="row mb-2 pt-4 pb-2">
              <div className="col-md-6 pt-4">
                <div className="">
                  <div className="text-white" style={{ fontSize: "16px" }}>
                    Empowering Advertisers: Unveiling GrowXAds Excellences
                  </div>
                  <div
                    className="SSA_Ad_Benefits_font2rem  text-white pt-2"
                    style={{ lineHeight: "1.2" }}
                  >
                    Achieve an unparalleled marketing impact.
                  </div>
                  <div className="SSA_Ad_Benefits_font20px py-4 text-white">
                    Prioritize user privacy and data security to align with
                    regulations like GDPR, implementing robust fraud detection
                    for high-quality traffic.
                  </div>
                  <div className="">
                    <Link
                      to="/adveriserauthLogin"
                      className="text-black no-underline hover:no-underline"
                    >
                      {" "}
                      <button
                        type="button"
                        className=" SSA_Btn_HOME_buytraffic py-3 px-5 mr-2 p-3"
                      >
                        Acquire Top Traffic
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6  pt-md-0 pt-3">
                <img
                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/2c555e13-f367-4156-8f52-cbbda0bc8f00/public"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
  );
};

export default BenefitAdv;
