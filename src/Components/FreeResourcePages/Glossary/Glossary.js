import React, { useState } from "react";
import "./Glossary.css";
import Pagination from "react-bootstrap/Pagination";
import { Row, Col, Container } from "react-bootstrap";
import Layout from "../../Layout/Layout";

const Glossary = () => {
  const [page, setPage] = useState(1);
  return (
    <>
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-2  col-12">
            <h1 className=" rs-h1_text font-600 ms-5">
              Affiliate Marketing
              <br />
              Glossary
            </h1>
            <p className=" rs-p_text font-400 ms-5">
              Here is the complete list of affiliate marketing terminologies
              <br />
              and acronyms either you're a newbie or seasoned veteran.
            </p>
          </div>

          <div className="col-md-6 mt-2  col-12">
            <img
              className="rs-mainimage"
              src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/fe6a3c69-b134-477d-c0f6-680b33e35b00/public"
            ></img>
          </div>

          <div className="row ">
            <div className="col-md-12 mt-5 ">
              <div className="rs-glossary-letter-block">
                <Pagination className="d-flex justify-content-center mt-4">
                  <Pagination.Item onClick={() => setPage(1)}>
                    {1}
                  </Pagination.Item>

                  <Pagination.Item onClick={() => setPage(2)}>
                    {2}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(3)}>
                    {3}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(4)}>
                    {" "}
                    {4}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(5)}>
                    {5}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(6)}>
                    {6}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(7)}>
                    {7}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(8)}>
                    {8}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(9)}>
                    {9}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(10)}>
                    {10}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(11)}>
                    {11}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(12)}>
                    {12}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(13)}>
                    {13}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(14)}>
                    {14}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(15)}>
                    {15}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(16)}>
                    {16}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(17)}>
                    {17}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(18)}>
                    {18}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(19)}>
                    {19}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(20)}>
                    {20}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(21)}>
                    {21}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(22)}>
                    {22}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(23)}>
                    {23}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(24)}>
                    {24}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(25)}>
                    {25}
                  </Pagination.Item>
                  <Pagination.Item onClick={() => setPage(26)}>
                    {26}
                  </Pagination.Item>
                </Pagination>
              </div>
            </div>
            {/* <div className="row d-flex justify-content-center">
        <div className="col-md-3 bg-info">jk</div>
      </div> */}
            {page == 1 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Affiliate Marketing:</strong>
                          <br />
                          Affiliate marketing is a performance-based marketing
                          strategy where businesses reward affiliates for
                          driving traffic or sales to their products or
                          services. Affiliates earn a commission for each
                          successful transaction generated through their
                          promotional efforts.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Affiliate Program:</strong>
                          <br />
                          An affiliate program is a collaborative arrangement
                          between a merchant and affiliates. Merchants provide
                          affiliates with unique tracking links, and affiliates
                          earn commissions for driving traffic, leads, or sales
                          to the merchant's site.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Affiliate Network (AN):</strong>
                          <br />
                          An affiliate network acts as an intermediary between
                          merchants and affiliates, providing a platform for
                          managing affiliate programs, tracking performance, and
                          facilitating commission payments.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Affiliate Manager (AM):</strong>
                          <br />
                          An affiliate manager is responsible for overseeing and
                          managing an affiliate program. Their duties include
                          recruiting new affiliates, providing support, and
                          optimizing the program for better performance.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Ad Creative:</strong>
                          <br />
                          Ad creative refers to the visual and textual elements
                          of an advertisement designed to capture the audience's
                          attention. This includes images, videos, headlines,
                          and copy that collectively make up the ad.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Ad Inventory:</strong>
                          <br />
                          Ad inventory represents the available space on a
                          website or platform where advertisements can be
                          displayed. Publishers manage ad inventory, and
                          advertisers bid or purchase space to showcase their
                          ads.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Ad Tracking:</strong>
                          <br />
                          Ad tracking involves monitoring and recording the
                          performance of advertisements. It includes tracking
                          metrics such as clicks, conversions, and other key
                          data points to analyze the effectiveness of ad
                          campaigns.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Auto-Approval:</strong>
                          <br />
                          Auto-approval is a feature in some affiliate programs
                          where affiliates are automatically accepted into the
                          program without requiring manual review or approval by
                          the merchant.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Average Commission Rate (ACR):</strong>
                          <br />
                          The average commission rate (ACR) represents the
                          average percentage or amount paid to affiliates for
                          each sale or lead they generate. It helps affiliates
                          understand the earning potential of the affiliate
                          program.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Ad Exchange</strong>
                          <br />
                          An ad exchange is a platform that facilitates the
                          buying and selling of online advertising inventory in
                          real-time. Advertisers bid for ad space, and
                          publishers sell their ad inventory through this
                          marketplace.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Ad Click Through Rate (CTR):</strong>
                          <br />
                          Ad Click Through Rate (CTR) is the percentage of users
                          who click on an ad compared to the total number of
                          users who view it. It is a crucial metric for
                          assessing the effectiveness of an ad campaign.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Ad Revenue Share:</strong>
                          <br />
                          Ad Revenue Share represents the percentage of
                          advertising revenue earned by a publisher in a
                          revenue-sharing model. Publishers receive a share of
                          the revenue generated from ads displayed on their
                          platform.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Ad Impression:</strong>
                          <br />
                          An ad impression is counted each time an ad is viewed
                          by a user, irrespective of whether they interact with
                          it. Ad impressions are a key metric used to measure
                          the reach and visibility of an ad campaign.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Attribution:</strong>
                          <br />
                          Attribution is the process of determining which
                          marketing channels or touchpoints contribute to a
                          conversion or sale. It helps marketers understand the
                          customer journey and allocate credit to various
                          marketing efforts.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Ad Copy:</strong>
                          <br />
                          Ad copy refers to the written content of an
                          advertisement, including headlines, body text, and
                          calls-to-action. Compelling ad copy is essential for
                          persuading users to take the desired actio
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Affiliate Link:</strong>
                          <br />
                          An affiliate link is a unique URL assigned to
                          affiliates, enabling merchants to track and attribute
                          sales or leads generated through their promotional
                          efforts. Affiliates use these links to drive traffic
                          to the merchant's site.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 2 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Banner Ad</strong>
                          <br />
                          Graphic advertisements placed on a website or blog by
                          an affiliate to promote the merchant's products or
                          services.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Black Hat Marketing:</strong>
                          <br />
                          Unethical or deceptive affiliate marketing practices
                          that violate the terms of service of affiliate
                          programs or harm the reputation of the industry.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Back-End Commission:</strong>
                          <br />
                          Additional commissions or rewards earned by an
                          affiliate for recurring sales or customer retention
                          beyond the initial transaction.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Brand Ambassadors:</strong>
                          <br />
                          Affiliates who actively promote and represent a brand,
                          often with a strong personal connection to the
                          products or services they promote.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Bridge Page:</strong>
                          <br />A landing page created by an affiliate to bridge
                          the gap between the traffic source and the merchant's
                          website, providing additional information or
                          incentives to encourage conversions.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Breakage:</strong>
                          <br />
                          Commissions that are earned by affiliates but not paid
                          out due to factors like refunds, chargebacks, or
                          unfulfilled transactions.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Bounty Program:</strong>
                          <br />
                          An affiliate program that offers a fixed reward or
                          bounty for a specific action, such as signing up for a
                          trial or completing a specific task, rather than
                          earning a commission on sales.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Bid Shading:</strong>
                          <br />
                          In the context of pay-per-click (PPC) advertising,
                          adjusting bids to optimize the cost per click and
                          maximize return on investment.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Bid Management:</strong>
                          <br />
                          The process of strategically setting and adjusting
                          bids for keywords or ad placements in paid advertising
                          campaigns.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Benchmarking:</strong>
                          <br />
                          Comparing an affiliate's performance metrics, such as
                          conversion rates or earnings, against industry
                          averages or specific benchmarks to assess performance.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 3 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Click-Through Rate (CTR): </strong>
                          <br />
                          The percentage of clicks on an affiliate link relative
                          to the number of times the link was viewed.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Commission:</strong>
                          <br />
                          The monetary reward or percentage of the sale that an
                          affiliate receives for each successful referral or
                          conversion.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Cookie:</strong>
                          <br />A small piece of data stored on the user's
                          device that helps track the user's activity and
                          determine if a sale or lead is attributed to a
                          specific affiliate.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Conversion Rate:</strong>
                          <br />
                          The percentage of clicks that result in a desired
                          action, such as a sale or lead.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>CPA (Cost Per Action):</strong>
                          <br />
                          An affiliate marketing payment model where the
                          advertiser pays the affiliate a set fee for a specific
                          action, such as a sale or lead.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>CPC (Cost Per Click):</strong>
                          <br />
                          An affiliate marketing payment model where the
                          advertiser pays the affiliate a set fee for each click
                          on the affiliate's link.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>CPL (Cost Per Lead):</strong>
                          <br />
                          An affiliate marketing payment model where the
                          advertiser pays the affiliate a set fee for each lead
                          generated, regardless of whether a sale occurs.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>CPS (Cost Per Sale):</strong>
                          <br />
                          An affiliate marketing payment model where the
                          advertiser pays the affiliate a set fee or percentage
                          of the sale for each completed sale.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Click Fraud:</strong>
                          <br />
                          Illegitimate clicks on affiliate links with the
                          intention of generating false commissions, harming
                          advertisers and affiliates.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Contextual Advertising:</strong>
                          <br />
                          Placing ads on websites or platforms relevant to the
                          content, improving the likelihood of reaching a
                          targeted audience.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 4 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Deep Linking: </strong>
                          <br />
                          Creating affiliate links that point to specific pages
                          within the merchant's website rather than just the
                          homepage.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>DoubleClick:</strong>
                          <br />A popular ad-serving platform that provides
                          technology for creating, managing, and tracking online
                          advertising campaigns.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Dropshipping:</strong>
                          <br />
                          An e-commerce fulfillment method where the retailer
                          (affiliate) doesn't keep the products in stock but
                          instead transfers customer orders and shipment details
                          to the manufacturer or another retailer who ships the
                          products directly to the customer.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Domain Authority (DA):</strong>
                          <br />A metric that indicates the authority or
                          credibility of a website, often considered in
                          affiliate partnerships.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Dynamic Content:</strong>
                          <br />
                          Automatically changing website content based on user
                          interactions, preferences, or other criteria,
                          enhancing the relevance of affiliate promotions.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 5 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Earnings Per Click (EPC): </strong>
                          <br />A metric used to measure the average earnings
                          generated per click by an affiliate, calculated by
                          dividing total earnings by the number of clicks.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Engagement:</strong>
                          <br />
                          User interactions with affiliate content, such as
                          clicks, likes, comments, or shares, indicating the
                          effectiveness of the marketing efforts.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Exclusivity:</strong>
                          <br />A situation where an affiliate has exclusive
                          rights to promote a merchant's products or services
                          within a specific market or niche.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>E-commerce Platform:</strong>
                          <br />
                          The software or service that enables online businesses
                          to manage their website, sales, and transactions,
                          often integrated with affiliate marketing programs.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Exit Pop-up:</strong>
                          <br />A pop-up advertisement or offer that appears
                          when a user is about to leave a website, used by
                          affiliates to capture potential leads or sales.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Email Marketing:</strong>
                          <br />
                          Leveraging email campaigns to promote affiliate
                          products or services, nurture leads, and drive
                          conversions.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Evergreen Content:</strong>
                          <br />
                          Timeless and relevant content that remains valuable to
                          users over an extended period, contributing to
                          sustained affiliate marketing success.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Event Tracking:</strong>
                          <br />
                          Monitoring and analyzing user interactions with
                          affiliate links or content, helping affiliates
                          understand the effectiveness of their marketing
                          strategies.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 6 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Funnel: </strong>
                          <br />
                          The step-by-step process that a potential customer
                          goes through, from the initial awareness of a product
                          or service to the final conversion, often visualized
                          as a funnel shape.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Frequency Cap:</strong>
                          <br />
                          The limit on the number of times a particular user
                          sees a specific ad or affiliate link within a set
                          timeframe.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Fraud Protection:</strong>
                          <br />
                          Measures and tools implemented to detect and prevent
                          fraudulent activities, such as click fraud or
                          illegitimate lead generation, within affiliate
                          marketing.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Freebie Seeker:</strong>
                          <br />A term referring to individuals who are
                          primarily interested in obtaining free products,
                          samples, or trial offers, often without a genuine
                          intention to make a purchase.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Full Disclosure:</strong>
                          <br />
                          The ethical practice of affiliates openly disclosing
                          their partnership with a merchant or the fact that
                          they may earn a commission for referred sales.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Fulfillment Center:</strong>
                          <br />A third-party facility that handles the storage,
                          packing, and shipping of products on behalf of
                          merchants or affiliates, particularly relevant in
                          e-commerce.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Forum Marketing:</strong>
                          <br />
                          Participating in online forums to promote affiliate
                          products or services and engage with potential
                          customers within specific interest communities.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Fixed Commission:</strong>
                          <br />A predetermined, unchanging amount or percentage
                          that affiliates earn for each sale or lead generated
                          through their marketing efforts
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 7 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Gateway Page: </strong>
                          <br />A landing page designed to capture user
                          information before directing them to the merchant's
                          site, often used for lead generation by affiliates.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Geo-Targeting:</strong>
                          <br />
                          Delivering specific content or advertisements based on
                          the user's geographic location, allowing affiliates to
                          tailor promotions to a particular audience.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Google AdSense:</strong>
                          <br />A program by Google that allows website owners
                          to display ads on their site and earn money when
                          visitors interact with the ads, distinct from
                          affiliate marketing but complementary for some
                          publishers. marketing.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Freebie Seeker:</strong>
                          <br />A term referring to individuals who are
                          primarily interested in obtaining free products,
                          samples, or trial offers, often without a genuine
                          intention to make a purchase.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Google Analytics:</strong>
                          <br />A web analytics service by Google that provides
                          detailed statistics and analytics for websites, used
                          by affiliates to track and analyze user behavior.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Grassroots Marketing:</strong>
                          <br />
                          Building brand awareness or promoting products through
                          non-traditional, often community-based, methods, which
                          can be employed by affiliates in various marketing
                          campaigns
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Guerrilla Marketing:</strong>
                          <br />
                          Unconventional and creative marketing strategies that
                          rely on low-cost methods, often used by affiliates to
                          gain attention in unique ways.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Gross Clicks:</strong>
                          <br />
                          The total number of clicks on affiliate links,
                          including multiple clicks from the same user, before
                          any deduplication or filtering.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 8 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Hoplink: </strong>
                          <br />A unique URL or hyperlink assigned to an
                          affiliate, used to track clicks and referrals to the
                          merchant's site, synonymous with affiliate link.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>High Ticket Affiliate Marketing:</strong>
                          <br />
                          Promoting and earning commissions from high-value
                          products or services, typically resulting in larger
                          commission payouts for affiliates.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>HTML Link:</strong>
                          <br />
                          An affiliate link coded in HTML format, often
                          customizable, allowing affiliates more control over
                          the appearance and placement of the link.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Hub Site:</strong>
                          <br />A central website or platform where affiliates
                          can access resources, tools, and information related
                          to multiple affiliate programs.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Hybrid Commission Model:</strong>
                          <br />A commission structure that combines different
                          payment models, such as a mix of fixed fees and
                          percentage-based commissions for affiliates.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Header Bidding:</strong>
                          <br />
                          An advanced programmatic advertising technique that
                          allows affiliates to simultaneously auction ad
                          inventory to multiple advertisers, maximizing revenue.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Hidden Text:</strong>
                          <br />
                          Unethical practice of adding text to a webpage that is
                          not visible to users but may be detected by search
                          engines, used to manipulate search rankings. Not
                          recommended in ethical affiliate marketing.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Hosting Provider:</strong>
                          <br />
                          The company or service responsible for hosting a
                          website, where affiliate content is often published.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 9 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Impression: </strong>
                          <br />
                          The number of times an affiliate link or advertisement
                          is displayed, regardless of whether it is clicked.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Influencer Marketing:</strong>
                          <br />
                          Collaborating with individuals who have a significant
                          online following or influence to promote products or
                          services, often through affiliate partnerships.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>In-Text Link:</strong>
                          <br />
                          Hyperlinks within the content of a webpage that lead
                          to the merchant's site, seamlessly integrated into the
                          text.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Incrementality:</strong>
                          <br />
                          Measuring the additional value or revenue generated by
                          affiliate marketing efforts, comparing it to a
                          baseline without those efforts.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Interstitial Ad:</strong>
                          <br />A full-screen ad that appears before the
                          expected content, often used in mobile apps and
                          websites.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Incentive Traffic:</strong>
                          <br />
                          Users are offered rewards or incentives to click on
                          affiliate links or complete desired actions, which can
                          raise ethical concerns and violate affiliate program
                          terms.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Internal Linking:</strong>
                          <br />
                          Strategically placing links within a website's content
                          to direct users to other pages on the same site,
                          enhancing user experience and potentially improving
                          SEO.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>IP Blocking:</strong>
                          <br />
                          Preventing users with specific IP addresses from
                          accessing content, used in affiliate marketing to
                          control access to offers based on geographic location
                          or other factors.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 10 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Joint Venture (JV): </strong>
                          <br />A collaborative partnership between two or more
                          parties, often affiliates or businesses, to promote
                          products or services and share in the resulting
                          profits.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>JavaScript Redirect:</strong>
                          <br />A method used to redirect users from one URL to
                          another, often employed by affiliates for tracking
                          purposes or to enhance user experience. Jargon:
                          Industry-specific terminology and language used within
                          the affiliate
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Jump Page:</strong>
                          <br />A webpage designed to quickly redirect users to
                          another page, often used in affiliate marketing for
                          tracking purposes or to present offers.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Java Applet:</strong>
                          <br />A small application written in Java programming
                          language that can be embedded in web pages,
                          occasionally used in affiliate marketing for
                          interactive content.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>JSON (JavaScript Object Notation):</strong>
                          <br />A lightweight data interchange format that is
                          easy for humans to read and write and easy for
                          machines to parse and generate, sometimes used in data
                          exchange within affiliate marketing.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>JavaScript Pixel:</strong>
                          <br />A small piece of code written in JavaScript and
                          placed on a webpage to track user interactions, often
                          used by affiliates for analytics and conversion
                          tracking.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>JumpLink:</strong>
                          <br />A type of affiliate link that redirects users to
                          a different destination based on certain conditions,
                          enhancing flexibility in affiliate promotions.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Junk Traffic:</strong>
                          <br />
                          Low-quality or irrelevant traffic that does not
                          contribute to meaningful engagement or conversions for
                          affiliates.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 11 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Keyword: </strong>
                          <br />A specific word or phrase that users enter into
                          search engines, and affiliates may target to optimize
                          their content for search engine visibility.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Key Performance Indicator (KPI):</strong>
                          <br />
                          Quantifiable metrics used to evaluate the success and
                          performance of affiliate marketing campaigns, such as
                          conversion rates, click-through rates, and revenue.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Keyword Density::</strong>
                          <br />
                          The percentage of times a keyword or phrase appears
                          within a piece of content compared to the total number
                          of words.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Kickback:</strong>
                          <br />A form of commission or incentive given to an
                          affiliate for generating sales or leads, often used
                          interchangeably with commission or payout.{" "}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>KISS Principle:</strong>
                          <br />
                          Stands for "Keep It Simple, Stupid." A principle
                          emphasizing simplicity and clarity in design and
                          communication, often applied to affiliate websites and
                          promotional materials.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Keyword Research:</strong>
                          <br />
                          The process of identifying and analyzing relevant
                          keywords for content optimization and targeting in
                          affiliate marketing.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Knowledge Commerce:</strong>
                          <br />A model where affiliates sell educational
                          content, courses, or digital products, leveraging
                          their expertise in a specific niche.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Knowledge Base:</strong>
                          <br />A repository of information, often provided by
                          merchants to affiliates, containing resources, FAQs,
                          and guides related to the affiliate program and
                          products.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 12 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Landing Page: </strong>
                          <br /> A specific webpage designed for visitors who
                          click on an affiliate link, often optimized for
                          conversions and focused on a particular product or
                          promotion.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Lead:</strong>
                          <br />A potential customer who has shown interest in a
                          product or service, usually by providing contact
                          information.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Lead Generation:</strong>
                          <br />
                          The process of attracting and capturing potential
                          customers' information, typically for future marketing
                          efforts.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Lifetime Value (LTV):</strong>
                          <br />
                          The predicted net profit attributed to the entire
                          future relationship with a customer, an important
                          metric for assessing the long-term value of customers
                          acquired through affiliate marketing.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Link Clocking:</strong>
                          <br />: The practice of disguising or shortening
                          affiliate links to make them more visually appealing
                          and user-friendly, often done using URL shortening
                          services.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Link Juice:</strong>
                          <br />
                          The value or equity passed from one webpage to another
                          through hyperlinks, impacting search engine rankings
                          and visibility.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Link Share:</strong>
                          <br />A percentage or fixed amount of commission
                          earned by an affiliate for sales or leads generated
                          through their unique affiliate link.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Link Building:</strong>
                          <br />
                          The process of acquiring hyperlinks from other
                          websites to improve a site's search engine ranking, an
                          SEO strategy that can complement affiliate marketing
                          efforts
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}

            {page == 13 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Merchant: </strong>
                          <br /> The company or business that owns the product
                          or service being promoted through the affiliate
                          program.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Marketplace:</strong>
                          <br />A platform where merchants and affiliates can
                          connect and engage in affiliate marketing
                          partnerships, facilitating the management of affiliate
                          programs.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Multi-Tier Marketing:</strong>
                          <br />
                          An affiliate program structure where affiliates earn
                          commissions not only for their direct referrals but
                          also for the referrals brought in by sub-affiliates
                          they recruit.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Minimum Payout:</strong>
                          <br />
                          The lowest amount an affiliate must earn before they
                          are eligible to receive a commission payment from the
                          merchant.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Mobile Optimization:</strong>
                          <br />: Adapting websites, content, or promotions to
                          be easily accessible and effective on mobile devices,
                          considering the growing use of smartphones and
                          tablets.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Micro-Influencer:</strong>
                          <br />
                          An individual with a smaller but highly engaged and
                          niche-specific audience, often leveraged by affiliates
                          for targeted promotions.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Monetization:</strong>
                          <br />
                          The process of converting website traffic or other
                          assets into revenue, commonly achieved through
                          affiliate marketing, advertising, or product sales.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Mailing List:</strong>
                          <br />A list of email addresses collected by
                          affiliates for marketing purposes, used to send
                          newsletters, promotions, or updates to a targeted
                          audience.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 14 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Niche: </strong>
                          <br /> A specialized segment of the market that
                          affiliates may target with their promotional efforts,
                          often focusing on a specific audience or product
                          category.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Network:</strong>
                          <br />
                          An affiliate marketing network acts as an intermediary
                          between merchants and affiliates, providing a platform
                          for affiliate programs, tracking, and payments.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Native Advertising:</strong>
                          <br />
                          Advertising content that seamlessly blends with the
                          style and format of the platform on which it appears,
                          providing a more integrated and less intrusive user
                          experience.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Negative Keywords:</strong>
                          <br />
                          Words or phrases that, when used in search queries,
                          prevent ads from being displayed, helping affiliates
                          refine their targeting and avoid irrelevant clicks.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Non-Disclosure Agreement (NDA):</strong>
                          <br />: A legal contract that outlines confidentiality
                          obligations, ensuring that affiliates do not disclose
                          sensitive information about a merchant's products or
                          marketing strategies.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Nofollow Link:</strong>
                          <br />A hyperlink attribute that tells search engines
                          not to pass authority or "link juice" to the linked
                          page, often used in affiliate links to avoid
                          influencing search rankings.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Notification:</strong>
                          <br />
                          Alerts or messages sent to affiliates about updates,
                          new promotions, or changes in the affiliate program.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>New Customer Bonus:</strong>
                          <br /> An additional commission or incentive offered
                          to affiliates for bringing in new customers to a
                          merchant's site
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 15 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Offer: </strong>
                          <br />
                          The product, service, or promotion that the affiliate
                          is promoting through their marketing efforts
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Opt-In:</strong>
                          <br />
                          When a user willingly provides their contact
                          information or subscribes to a mailing list, signaling
                          their interest in receiving further communication.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Outreach:</strong>
                          <br />
                          The proactive process of reaching out to potential
                          partners, customers, or influencers to establish
                          connections or collaborations.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Outbound Link:</strong>
                          <br />A hyperlink that directs users from one website
                          to another, often an affiliate link leading to the
                          merchant's site.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Ongoing Commission:</strong>
                          <br />: Recurring payments or commissions that
                          affiliates receive for ongoing customer subscriptions
                          or purchases, common in subscription-based models.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Open Rate:</strong>
                          <br />
                          The percentage of recipients who open an email, used
                          to measure the effectiveness of an email marketing
                          campaign.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Overage:</strong>
                          <br />
                          An additional commission paid to affiliates for
                          exceeding predefined performance metrics or sales
                          targets.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Onboarding:</strong>
                          <br /> The process of integrating new affiliates into
                          an affiliate program, providing them with necessary
                          information, resources, and training.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 16 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Pay-Per-Sale (PPS): </strong>
                          <br />
                          An affiliate marketing payment model where affiliates
                          earn a commission based on the number of sales they
                          generate for the merchant.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Pay-Per-Lead (PPL):</strong>
                          <br />
                          An affiliate marketing payment model where affiliates
                          earn a commission for each lead or action they
                          generate for the merchant, irrespective of whether a
                          sale occurs
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Pay-Per-Click (PPC):</strong>
                          <br />
                          An advertising model where advertisers pay affiliates
                          based on the number of clicks their affiliate links
                          receive, regardless of subsequent actions.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Pay-Per-Click Fraud:</strong>
                          <br />
                          Illegitimate clicks on affiliate links with the intent
                          to generate false commissions, a fraudulent activity
                          that can harm advertisers and affiliates.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Publisher:</strong>
                          <br />
                          Another term for an affiliate, referring to the
                          individual or entity that promotes products or
                          services to earn commissions.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Promotional Methods:</strong>
                          <br />
                          Strategies and techniques used by affiliates to
                          promote products or services, including content
                          marketing, social media promotion, and paid
                          advertising.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Product Feed:</strong>
                          <br />A file containing detailed information about a
                          merchant's products, used by affiliates to display
                          accurate and up-to-date product information on their
                          websites.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Private Affiliate Program:</strong>
                          <br /> An affiliate program that requires approval for
                          participation and is not openly accessible to all
                          affiliates, often offering exclusive benefits.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}

            {page == 17 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Qualifying Purchase: </strong>
                          <br />A purchase made by a referred customer that
                          meets the criteria set by the affiliate program for
                          earning commissions, such as completing a transaction
                          within a specific timeframe.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Quality Score:</strong>
                          <br />A metric used by some affiliate programs or
                          advertising platforms to assess the relevance and
                          quality of an affiliate's traffic, clicks, or leads.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Query String:</strong>
                          <br />
                          The part of a URL that contains parameters and values,
                          often used in affiliate tracking links to pass
                          information about the source or campaign.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Quick Response (QR) Code:</strong>
                          <br />A two-dimensional barcode that, when scanned,
                          directs users to a specific URL, often used in offline
                          advertising or product packaging to lead users to
                          affiliate promotions.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Quota:</strong>
                          <br />A predefined target or limit set for affiliates,
                          such as a specific number of sales or leads, to
                          qualify for bonuses, higher commissions, or other
                          incentives.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Qualified Click:</strong>
                          <br />A click on an affiliate link that meets specific
                          criteria, such as originating from a targeted audience
                          or location, and is considered more likely to result
                          in a conversion.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Product Feed:</strong>
                          <br />A file containing detailed information about a
                          merchant's products, used by affiliates to display
                          accurate and up-to-date product information on their
                          websites.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Private Affiliate Program:</strong>
                          <br /> An affiliate program that requires approval for
                          participation and is not openly accessible to all
                          affiliates, often offering exclusive benefits.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 18 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Reciprocal Link: </strong>
                          <br />
                          An agreement between two websites or affiliates to
                          exchange links, often for mutual promotional benefits.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>ROI (Return on Investment):</strong>
                          <br />A measure of the profitability of an investment,
                          calculated by dividing the net profit by the cost of
                          the investment.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Recurring Commission:</strong>
                          <br />
                          Commission earned by affiliates for ongoing purchases
                          or subscriptions made by customers they referred,
                          typically associated with subscription-based models
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Referral Link:</strong>
                          <br />A unique URL assigned to an affiliate that
                          tracks and attributes referrals, allowing merchants to
                          identify and compensate affiliates for their
                          contributions.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Referral Program:</strong>
                          <br /> A structured program where individuals are
                          rewarded for referring others to a business or
                          service, often implemented through affiliate
                          marketing.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Relevance:</strong>
                          <br />
                          The alignment between the content, audience, and
                          affiliate offers, crucial for successful marketing
                          campaigns
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Retargeting:</strong>
                          <br />A marketing strategy that involves displaying
                          ads to users who have previously interacted with a
                          website or product, encouraging them to return and
                          complete a desired action.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>RSS Feed:</strong>
                          <br /> A web feed that allows users to access updates
                          from websites in a standardized format, used by
                          affiliates to syndicate content.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 19 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Sales Page: </strong>
                          <br />A web page specifically designed to promote and
                          sell a product or service. Affiliates often drive
                          traffic to these pages through their marketing
                          efforts.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Sales Funnel:</strong>
                          <br />
                          The series of steps a potential customer goes through,
                          from initial awareness to making a purchase.
                          Affiliates may play a role in various stages of the
                          sales funnel
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>SEO (Search Engine Optimization):</strong>
                          <br />
                          The practice of optimizing a website or content to
                          rank higher in search engine results, increasing
                          visibility and potentially attracting more affiliate
                          traffic.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Split Testing:</strong>
                          <br />
                          Also known as A/B testing, it involves comparing two
                          versions of a webpage or element to determine which
                          performs better in terms of conversion rates or other
                          metrics
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Subscriber:</strong>
                          <br /> A person who has opted to receive emails or
                          other communications from a business or affiliate.
                          Building a subscriber list is crucial for email
                          marketing.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Social Media Marketing:</strong>
                          <br />
                          The use of social media platforms (e.g., Facebook,
                          Instagram, Twitter) for promoting products or
                          services. Affiliates often leverage social media to
                          reach a wider audience.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Super Affiliate:</strong>
                          <br />
                          An exceptionally successful and high-earning affiliate
                          marketer. Super affiliates often have a large
                          following, deep industry knowledge, and the ability to
                          drive significant sales.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Swipe File:</strong>
                          <br /> A collection of successful marketing materials,
                          such as email templates, ad copy, or social media
                          posts, used for inspiration and reference by
                          affiliates.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 20 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Tracking Code: </strong>
                          <br />A unique identifier or snippet of code assigned
                          to an affiliate, used to track their referrals and
                          ensure they receive credit for sales or leads.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Tracking Software:</strong>
                          <br />
                          Software used by merchants or affiliate networks to
                          monitor and manage affiliate activities, including
                          clicks, conversions, and commissions.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Tiered Commission:</strong>
                          <br />A commission structure where affiliates earn
                          different rates of commission based on their
                          performance. Higher-performing affiliates may receive
                          higher percentages.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Text Link:</strong>
                          <br />A hyperlink that appears as text, rather than a
                          graphic or banner. Text links are common in affiliate
                          marketing and can be embedded in content or placed on
                          websites.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Two-Tier Affiliate Program:</strong>
                          <br /> An affiliate program that allows affiliates to
                          earn commissions not only for their direct referrals
                          but also for new affiliates they recruit to the
                          program.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Threshold:</strong>
                          <br />
                          The minimum amount of earnings an affiliate must reach
                          before being eligible for a payout from the merchant
                          or affiliate network.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Terms and Conditions (T&C):</strong>
                          <br />
                          The rules and guidelines set by merchants or affiliate
                          networks that govern the relationship between
                          affiliates and the program.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Testimonials:</strong>
                          <br /> Positive reviews or endorsements from customers
                          or users of a product or service. Affiliates may use
                          testimonials in their promotional efforts to build
                          trust.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 21 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Unique Clicks: </strong>
                          <br />
                          The count of individual users who clicked on an
                          affiliate link. It distinguishes each user, even if
                          they click the link multiple times.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>User-generated Content (UGC):</strong>
                          <br />
                          Content created by users, such as reviews,
                          testimonials, or social media posts. Affiliates may
                          leverage UGC to enhance credibility and promote
                          products.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>User Experience (UX):</strong>
                          <br />
                          The overall experience a visitor has when interacting
                          with a website or digital platform. A positive UX is
                          crucial for affiliates to encourage conversions.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Upsell:</strong>
                          <br />A sales technique where a customer is offered a
                          higher-priced or upgraded product in addition to their
                          initial purchase. Affiliates may earn additional
                          commissions from upsells.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Unsubscribed:</strong>
                          <br />
                          The action taken by a user to opt out of receiving
                          further communications, such as emails, from an
                          affiliate or merchant.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>URL (Uniform Resource Locator):</strong>
                          <br />
                          The web address that specifies the location of a
                          resource, such as a webpage. Affiliates use unique
                          affiliate URLs to track referrals.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Terms and Conditions (T&C):</strong>
                          <br />
                          The rules and guidelines set by merchants or affiliate
                          networks that govern the relationship between
                          affiliates and the program.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Testimonials:</strong>
                          <br /> Positive reviews or endorsements from customers
                          or users of a product or service. Affiliates may use
                          testimonials in their promotional efforts to build
                          trust.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 22 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Viral Marketing: </strong>
                          <br />A marketing strategy that relies on
                          word-of-mouth and the sharing of content to quickly
                          spread information about a product or service,
                          potentially going "viral" on social media.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Vanity Metrics:</strong>
                          <br />
                          Superficial metrics that may look impressive but don't
                          necessarily provide meaningful insights into the
                          performance of an affiliate marketing campaign (e.g.,
                          total clicks without considering conversion rates).
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Vendor:</strong>
                          <br />
                          Another term for a merchant or business that sells
                          products or services. Affiliates often refer to the
                          companies they promote as vendors.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Vertical:</strong>
                          <br />A specific industry or market segment.
                          Affiliates may specialize in promoting products within
                          a particular vertical to target a specific audience.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Visitor:</strong>
                          <br />
                          An individual who visits a website or clicks on an
                          affiliate link. Visitors can be tracked to analyze
                          website traffic and affiliate performance.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Value Proposition:</strong>
                          <br />
                          The unique benefits or value that a product or service
                          offers to customers. Affiliates often highlight the
                          value proposition to attract potential buyers.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Virtual Product:</strong>
                          <br />A product that is delivered electronically, such
                          as software, e-books, or online courses. Affiliates
                          can earn commissions by promoting and selling virtual
                          products.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>View-Through Conversion:</strong>
                          <br />A conversion that occurs when a user sees an ad
                          or affiliate promotion but doesn't click on it.
                          Instead, they later convert on the same website by
                          other means.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 23 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Widgets: </strong>
                          <br />
                          Small, interactive graphical elements or tools that
                          affiliates can embed on their websites to promote
                          products or services.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Webinar:</strong>
                          <br />
                          An online seminar or presentation used for educational
                          or promotional purposes. Affiliates may collaborate
                          with merchants to host webinars as part of their
                          marketing strategy.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>White Label:</strong>
                          <br />A product or service that is produced by one
                          company but rebranded and sold by another. In
                          affiliate marketing, this can refer to white-label
                          affiliate programs or products.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Warm Leads:</strong>
                          <br />
                          Potential customers who have shown interest in a
                          product or service but have not yet made a purchase.
                          Affiliates often focus on converting warm leads into
                          customers.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Wire Transfer:</strong>
                          <br />A method of transferring funds electronically
                          from one bank account to another. Some affiliate
                          programs use wire transfers to pay affiliates their
                          commissions.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Webmaster:</strong>
                          <br />
                          The person responsible for managing and maintaining a
                          website. Affiliates often act as webmasters for their
                          sites, optimizing them for better performance.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Wishlist:</strong>
                          <br />A feature on e-commerce websites that allows
                          users to save products they are interested in for
                          future purchase. Affiliates may promote products based
                          on wishlist recommendations.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Word-of-Mouth Marketing:</strong>
                          <br />
                          Promotion of a product or service through personal
                          recommendations and conversations. Affiliates can
                          leverage word-of-mouth marketing to build trust and
                          credibility.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 24 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>XML Feed: </strong>
                          <br />
                          An XML (eXtensible Markup Language) feed is a
                          structured data format that affiliates can use to
                          access and display real-time product information from
                          a merchant's inventory on their own websites. This
                          feed often includes details like product names,
                          descriptions, prices, and images.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
            {page == 25 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Yearly Payout: </strong>
                          <br />
                          Some affiliate programs may offer affiliates the
                          option to receive their commissions on an annual
                          basis. This is less common than more frequent payout
                          intervals like monthly or weekly.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}

            {page == 26 && (
              <Container>
                <Row className="pt-5">
                  <Col md={6}>
                    <div className="rs-glossary_item">
                      <div className="rs-glossary_item-div">
                        <p className="rs-glossary-item-p">
                          <strong>Zero Click: </strong>
                          <br />
                          Refers to a situation where a user doesn't need to
                          click on an affiliate link for the affiliate to earn a
                          commission. This can happen through certain types of
                          tracking methods, such as view-through conversions,
                          where a sale is attributed to an affiliate even if the
                          user didn't click on the affiliate link.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default Glossary;
