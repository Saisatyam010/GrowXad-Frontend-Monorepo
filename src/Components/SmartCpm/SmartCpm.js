import React from "react";
import "./SmartCpm.css";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const SmartCpm = () => {
    const SmartCPMExpenses = [
        {
            num: "1",
            content: "You set a bid cap for a specific ad placement.",
        },
        {
            num: "2",
            content: "SmartCPM algorithm evaluates the overall competition.",
        },
        {
            num: "3",
            content: "The algorithm bids for traffic within your targeting.",
        },
        {
            num: "4",
            content: "The algorithm bids for traffic within your targeting.",
        },
        {
            num: "5",
            content: "The algorithm bids for traffic within your targeting.",
        },
        {
            num: "6",
            content: "The algorithm bids for traffic within your targeting.",
        },
    ];
    return (
        <>
            <Layout>
                <div className="container-fluid py-5 as_SSA_Benefit_bg_img_main webbackground_theme ">
                    <div className="container pt-5 mt-5">
                        <div className="row mb-2 pt-4 pb-2">
                            <div className="col-md-6 pt-4">
                                <div className="">
                                    <div className="text-white" style={{ fontSize: "16px" }}>
                                        GrowXads for Advertisers.
                                    </div>
                                    <div
                                        className="SSA_Ad_Benefits_font2rem  text-white pt-2"
                                        style={{ lineHeight: "1.2" }}
                                    >
                                        Enhance Your Marketing Output to Achieve Excellence!
                                    </div>
                                    <div className="SSA_Ad_Benefits_font20px py-4 text-white">
                                        Revolutionary advertising platform connecting media buyers and affiliates with
                                        high-engagement traffic sources, transforming your approach to reaching targeted
                                        audiences.
                                    </div>
                                    <div className="">
                                        <Link
                                            to="/adveriserauthLogin"
                                            className="text-black no-underline hover:no-underline"
                                        >
                                            <button className="btn  px-5 py-3 ssa_benefit-button">
                                                Buy Traffic Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6  pt-md-0 pt-3">
                                <img
                                    src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/5e2208a6-8e6b-43d3-e60e-3810e388bc00/public"
                                    alt=""
                                    width="100%"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {/*-----------------SmartCPM MAin Page-------------------*/}

                    {/*-----------------second section-------------------*/}
                    <div className="py-md-5 py-0" style={{ backgroundColor: "#212529" }}>
                        <div className="container py-3">
                            <div className="row text-white">
                                <div className="SSA_SmartCPM_Font_34px pb-2 text-center pb-2 pt-4">
                                    Unlocking SmartCPM with GrowXAds: Key Highlights
                                </div>
                                <div className="col-md-3 px-3  pt-3">
                                    <div className="">
                                        <div className="SSA_SmartCPM_imgbgcolor">
                                            <img
                                                className="pt-3 px-1"
                                                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/55b28d18-a5e2-4d93-d76e-c7b9e7ca6900/public"
                                                alt=""
                                            />
                                        </div>
                                        <div className="SSA_benefits_font26px_purple pt-4 pb-2 text-white">
                                            Inexpensive Traffic Acquisition
                                        </div>
                                        <div className="SSA_Ad_Benefits_font19px pb-4">
                                            SmartCPM optimizes bids, ensuring maximum ROI within your budget by
                                            evaluating competition and selecting the most effective options.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3  px-3  pt-3">
                                    <div className="">
                                        <div className="SSA_SmartCPM_imgbgcolor">
                                            <img
                                                className="pt-2 px-1"
                                                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/026bfd41-ffeb-4665-ea64-928589d5a900/public"
                                                alt=""
                                            />
                                        </div>
                                        <div className="SSA_benefits_font26px_purple pt-4 pb-2 text-white">
                                            Customized Automated Bidding
                                        </div>
                                        <div className="SSA_Ad_Benefits_font19px pb-4">
                                            Continuous SmartCPM Bidding Secures Placements, Frees Time Spent on Manual
                                            Efforts, Ensuring Efficient Campaign Management Round the Clock
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 px-3 pt-3">
                                    <div className="">
                                        <div className="SSA_SmartCPM_imgbgcolor">
                                            <img
                                                className="px-2 pt-1 pb-2"
                                                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/848bd5dc-cc78-4e9e-cf68-dba23e558b00/public"
                                                alt=""
                                            />
                                        </div>
                                        <div className="SSA_benefits_font26px_purple pt-4 pb-2 text-white">
                                            Enhanced Targeted Traffic
                                        </div>
                                        <div className="SSA_Ad_Benefits_font19px pb-4">
                                            Dynamic, Real-Time Bid Adjustments Tailored for Each Ad Placement, Ensuring
                                            Relevance and Increased Traffic for Your Promotions.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3   px-3 pt-3">
                                    <div className=" ">
                                        <div className="SSA_SmartCPM_imgbgcolor">
                                            <img
                                                className="p-1"
                                                src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/83b163ec-f692-4832-36e2-dcb58bfe8e00/public"
                                                alt=""
                                            />
                                        </div>
                                        <div className="SSA_benefits_font26px_purple pt-4 pb-2 text-white">
                                            Effective Testing, Scaling
                                        </div>
                                        <div className="SSA_Ad_Benefits_font19px pb-4">
                                            It’s a perfect pricing for testing new traffic slices or scaling your
                                            campaigns since it protects you from overspending and sends quality ad
                                            views.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-----------------third section-------------------*/}
                    <div className="container py-5 px-3 x">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-6 text-left">
                                <div className="SSA_SmartCPM_Font_34px pb-2 ">SmartCPM: Reducing Your Costs</div>
                                <p className="SSA_smartCPM_Font18px py-3">
                                    💡 SmartCPM utilizes second-price auction logic: Set a bidding cap, and the
                                    algorithm competes strategically within your targeting. It estimates competitors'
                                    bids, offering just above the second-highest CPM to win, keeping costs controlled.
                                </p>
                                <Link to="/adveriserauthLogin" className="text-black no-underline hover:no-underline">
                                    <button type="button" class="btn btn-dark px-5 py-2">
                                        TRY NOW
                                    </button>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <img
                                    src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/6fe45403-130c-46ae-383c-3e3cdf48fb00/public"
                                    alt=""
                                    width="100%"
                                />
                            </div>
                        </div>
                    </div>

                    {/*-----------------fourth section-------------------*/}
                    <div className="container px-3 py-md-5 py-0 py-lg-5">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                                <img src="https://adsterra.com/_nuxt/img/screenshot.17ddd39.png" alt="" />
                            </div>
                            <div className="col-md-6 text-left pt-3 pt-md-0">
                                <div className="SSA_SmartCPM_Font_34px pb-2 ">Quick Enablement Guide for SmartCPM</div>
                                {SmartCPMExpenses.map((item, index) => {
                                    return (
                                        <div className="d-flex " key={index}>
                                            <span
                                                className="mb-3"
                                                style={{
                                                    backgroundColor: "#73035b",
                                                    borderRadius: "50%",
                                                    padding: "4px 12px",
                                                    color: "white",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                {item.num}
                                            </span>
                                            <p className="pb-3 mb-0 ml-2 " style={{ fontSize: "20px" }}>
                                                {item.content}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/*-----------------fifth section-------------------*/}
                    <div className="my-md-5 my-0 pt-md-5 pt-3">
                        <div className="" style={{ marginBottom: "-130px " }}>
                            <div className="container py-3">
                                <div className="row">
                                    <div className="col-md-3 text-white mt-2">
                                        <div className="SSA_SmartCPM_card_black_bg">
                                            <div className="SSA_SmartCPM_imgbgcolor p-1">
                                                <img
                                                    src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/4f0dab38-f520-457b-78e6-00b6f8078700/public"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="SSA_smartCPM_Font18px pt-3">
                                                Mitigate Risks When Exploring New Traffic Segments, Ad Formats, and
                                                Geographical Areas
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-white mt-2">
                                        <div className="SSA_SmartCPM_card_black_bg">
                                            <div className="SSA_SmartCPM_imgbgcolor p-1">
                                                <img
                                                    src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/e58488bf-6bdc-45d8-a187-a6a13cee7900/public"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="SSA_smartCPM_Font18px pt-3">
                                                Expand Current Ad Campaigns with New Traffic Sources
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-white mt-2">
                                        <div className="SSA_SmartCPM_card_black_bg">
                                            <div className="SSA_SmartCPM_imgbgcolor p-2">
                                                <img
                                                    src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/260e447f-5c10-4935-a144-af0678235600/public"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="SSA_smartCPM_Font18px pt-3">
                                                Meet ad impressions KPIs set by your advertiser
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-white mt-2">
                                        <div className="SSA_SmartCPM_card_black_bg">
                                            <div className="SSA_SmartCPM_imgbgcolor px-1 pt-2">
                                                <img
                                                    src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/a118be0e-1604-4277-a829-042dff265300/public"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="SSA_smartCPM_Font18px pt-3">
                                                Automate campaign setup and save time on bid adjustment
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*-----------------sixth section-------------------*/}
                        <div className="px-3  ">
                            <div
                                className="py-5 text-white "
                                style={{
                                    backgroundColor: "#73035b",
                                    borderBottomRightRadius: "30px",
                                    borderBottomLeftRadius: "30px",
                                }}
                            >
                                <div className="pt-5 mt-3">
                                    <div className="row d-flex py-5 justify-content-center align-items-center">
                                        <div className="col-md-7">
                                            <div className="text-center text-white fs-3 font-[600]">
                                                What Makes SmartCPM Worth Trying Today?
                                            </div>
                                            <p className="text-white text-center fs-5 ">
                                                Our intelligent pricing model addresses overpayment for traffic,
                                                maximizing savings and ROI. Automated bidding ensures optimal costs for
                                                relevant ad views. The algorithm competes non-stop for traffic.
                                            </p>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <Link
                                                    to="/adveriserauthLogin"
                                                    className="text-black no-underline hover:no-underline"
                                                >
                                                    <button type="button" class="btn btn-dark px-5 py-2">
                                                        Activate SmartCPM
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default SmartCpm;
