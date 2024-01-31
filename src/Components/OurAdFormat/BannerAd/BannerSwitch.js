import React from "react";
import { useState } from "react";
import Layout from "../../Layout/Layout";

const BannerSwitch = () => {
  const [contentAdvertiser, setContentAdvertiser] = useState(true);
  const [contentPublisher, setContentPublisher] = useState(false);

  const data1 = [
    {
      imgSrc:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/054c8ec1-b1c9-466d-f4f5-02aaeac6f900/public",
      title: "MAXIMIZE INCOME WITH HIGHER ECPM",
      description:
        "Revenue and eCPM can rise with effective CPM, influenced by both impressions and conversions. Even with lower GEO bids.",
    },
    {
      imgSrc:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/911ba654-7590-4994-5ea2-1328a2b53c00/public",
      title: "INTUITIVE SELF-SERVICE HUB",
      description:
        "Access ad format codes swiftly. Track statistics and CPM effortlessly. Customize ad types with easy filtering options.",
    },
    {
      imgSrc:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/90d69162-aa06-4faa-2074-272a1dc78b00/public",
      title: "INSTANT REVENUE MANAGEMENT",
      description:
        "Observe advertisers competing for your traffic, track click volumes, and witness real-time revenue expansion.",
    },
    {
      imgSrc:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/1d87d26e-070a-4f1f-de1a-32a204503a00/public",
      title: "EARN +5% LIFETIME BONUS",
      description:
        "GrowX's Referral Program lets you earn from every partner who joins our network using your referral link. There are no restrictions on the number of partners you can refer.",
    },
    {
      imgSrc:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/9fa435ce-9ac2-4fea-87d5-707fbd28b000/public",
      title: "PARTNER SUPPORT HUB",
      description:
        "Receive help with GrowX's code integration, gain insights on boosting CPM, and resolve payment concerns with our dedicated team.",
    },
    {
      imgSrc:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d7c8d56b-9f02-4d05-3b19-1d408af80500/public",
      title: "TRAFFIC PERFORMANCE TRACKING VIA API",
      description:
        "Effortlessly monitor the performance of your domains and placements. Seamlessly share your statistics with third-party systems.",
    },
  ];

  const data2 = [
    {
      imgSrc:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/78c3f4d5-ae56-4a44-bf07-5c7c56c78f00/public",
      title: "TOTAL AUTONOMY VIA SELF-SERVICE PLATFORM",
      description:
        "Take command of campaigns: launch, refine bids, adjust targeting, and boost efficiency from your control center.",
    },
    {
      imgSrc:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/3f5b7fb4-56d9-4500-485d-305a3ffc0100/public",
      title: "USER BID & TRAFFIC OPTIMIZATION",
      description:
        "Maximize savings and allocate budgets wisely with intelligent features such as Traffic Chart, Traffic Estimation, and Custom Bid within our smart toolkit.",
    },
    {
      imgSrc:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/93bd61a8-2d9b-4271-bf29-6e547a64e900/public",
      title: "RETARGETING & REAL-TIME BIDDING (RTB) ALGORITHMS",
      description:
        "Maximize budget efficiency through automated traffic auctions (RTB). Instantly re-engage warm leads who haven't converted using our retargeting pixel.",
    },
    {
      imgSrc:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/504782f4-e1ad-44d8-dccf-edc6baeed700/public",
      title: "API INTEGRATION & CONVERSION MONITORING",
      description:
        "Leverage API for seamless data export and analytics. Integrate your preferred tracker—be it Voluum, Binom, Cake, or others—to oversee all CPA conversions effectively.",
    },
    {
      imgSrc:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/42bc11a7-e1f8-4170-6a0d-6de27b749900/public",
      title: "PROFESSIONAL CAMPAIGN OVERSIGHT",
      description:
        "Achieve complete transparency with thorough reporting. Our skilled managers effectively execute global campaigns for both direct advertisers and agencies..",
    },
    {
      imgSrc:
        "https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/12526b4d-40c5-4959-57e8-226c62a44d00/public",
      title: "24/7 LIVE SUPPORT AND DEDICATED ACCOUNT MANAGERS",
      description:
        "Rely on our multilingual managers for campaign launches and guidance on creatives, source whitelists, and top-performing offers.",
    },
  ];

  return (
    <Layout>
      <div>
        <div className="container px-md-5 px-lg-5 px-2 py-5">
          <div className="px-md-5 px-0">
            <div
              class="row mx-md-5 mx-0 justify-content-center"
              style={{
                padding: "0px !important",
                margin: "0px !important",
                border: "1px solid black",
                borderRadius: "28px",
              }}
            >
              <div
                className="col-6 text-center "
                onClick={() => {
                  setContentAdvertiser(true);
                  setContentPublisher(false);
                }}
                style={{
                  cursor: "pointer",
                  backgroundColor: contentAdvertiser ? "black" : "white",
                  color: contentAdvertiser ? "white" : "black",
                  borderTopLeftRadius: "28px",
                  borderBottomLeftRadius: "28px",
                }}
              >
                <div className="py-3" style={{}}>
                  <div>Advertisers</div>
                </div>
              </div>
              <div
                className="col-6 text-center"
                onClick={() => {
                  setContentAdvertiser(false);
                  setContentPublisher(true);
                }}
                style={{
                  cursor: "pointer",
                  backgroundColor: contentPublisher ? "black" : "white",
                  color: contentPublisher ? "white" : "black",
                  borderTopRightRadius: "28px",
                  borderBottomRightRadius: "28px",
                }}
              >
                <div className="py-3" style={{}}>
                  <div>Publisher</div>
                </div>
              </div>
            </div>

            {contentAdvertiser ? (
              <>
                <div className=" pt-3 pt-md-5 pt-lg-5">
                  <div>
                    <div className="row">
                      {data2.map((item, index) => (
                        <div className="col-md-4 pt-4 " key={index} s>
                          <div className="SSA_DisplayBanner_card_borderwhite pb-5 pt-4 SSA_DisplayBanner_heightCard_306px px-4">
                            <img
                              className="d-flex text-center mx-auto"
                              src={item.imgSrc}
                              alt=""
                              style={{ width: "76px" }}
                            />
                            <div className="pt-3 pb-2 SSA_DisplayBanner_font_22px">
                              {item.title}
                            </div>
                            <div className="SSA_DisplayBanner_font-18px">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className=" pt-3 pt-md-5 pt-lg-5">
                  <div className="row">
                    {data1.map((item, index) => (
                      <div className="col-md-4 pt-4 " key={index} s>
                        <div className="SSA_DisplayBanner_card_borderwhite pb-5 pt-4 SSA_DisplayBanner_heightCard_306px px-4">
                          <img
                            className="d-flex text-center mx-auto"
                            src={item.imgSrc}
                            alt=""
                          />
                          <div className="pt-3 pb-2 SSA_DisplayBanner_font_22px">
                            {item.title}
                          </div>
                          <div className="SSA_DisplayBanner_font-18px">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BannerSwitch;
