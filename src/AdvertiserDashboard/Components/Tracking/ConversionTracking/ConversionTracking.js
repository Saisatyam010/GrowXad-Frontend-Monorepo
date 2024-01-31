import React from "react";
import "./ConversionTracking.css";
import { Col, Container, Row } from "react-bootstrap";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../DashboardHeader/Theme";

const RadioButton = ({ id, label }) => {
  
  return (
    <div className="radio-button" >
      <input
        name="radio-group"
        id={id}
        className="radio-button__input"
        type="radio"
      />
      <label
        htmlFor={id}
        className="radio-button__label mr-5"
        style={{ fontSize: "20px", fontWeight: "600" }}
      >
        <span className="radio-button__custom "></span>
        {label}
      </label>
    </div>
  );
};

const ConversionTracking = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>
              <h2 className="mb-2 mt-5">Conversion Tracking</h2>
            </div>
            <div>
              <p className="mb-3" style={{ fontSize: "18px" }}>
                Server-to-server tracking is a cookie-less tracking method used
                to report conversions from advertiser to publisher.
                <br />
                It sends special request to the network’s postback URL.
                <br />
                For CPA pricing model tracking conversion is a must.
                <br />
                If you use CPM model, set postback if you want to track
                conversions and see it in our statistics.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <div>
            <h4 style={{color:colors.grey[300]}} className=" mt-4" >
              <b>1.</b> Choose your postback type:
            </h4>
          </div>

          <div className="radio-buttons-container mt-3 mb-3">
            <RadioButton id="radio1" label="Simple Postback" style={{color:colors.grey[300]}} />
            <RadioButton
              id="radio2"
              label="Simple postback with payout variable"
            />
            <RadioButton
              id="radio3"
              label="Complex postback with currency conversion"
            />
          </div>

          {/* <Col></Col> */}
        </Row>
        <Row className="mb-5">
          <Col md={2}>
            Simple postback for <br /> conversions tracking{" "}
          </Col>
          <Col md={4} className="ml-5">
            <p>
              Use it in case you want to report the <br /> conversion price
            </p>{" "}
          </Col>
          <Col md={3}>
            <p className="">
              Use this one in case you work with any other currency besides US
              Dollars
            </p>{" "}
          </Col>
        </Row>

        <Row className="mb-4 mmt-4">
          <div>
            <h4 className="sana-h4">
              <b>2.</b> Choose your tracking system:
            </h4>
          </div>
          <Col>
            <div className="mt-3 mb-4">
              <RadioButton id="radio4" label="Hasoffer" />
              <RadioButton id="radio5" label="Cake" />
              <RadioButton id="radio6" label="Voluum" />
              <RadioButton id="radio7" label="Binom" />
              <RadioButton id="radio8" label="BeMob" />
              <RadioButton id="radio9" label="Keitaro" />
              <RadioButton id="radio10" label="Adsbridge" />
              <RadioButton id="radio11" label="RedTrack" />
              <RadioButton id="radio12" label="Cpvlab.pro" />
              <RadioButton id="radio13" label="Custom" />
            </div>
            <div>
              <p className="mb-3">
                We are integrated with Appsflyer. If you are using Appsflyer,
                please contact our support team to make test conversion.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <div>
            <h4 className="sana-h4">
              <b>3.</b> Generate postback and set it up in your tracking system:
            </h4>
          </div>
          <Col>
            <div className="mt-3">
              <button className="ab-ctbtngp">GENERATE POSTBACK</button>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <div>
            <h4 className="sana-h4">
              <b>4.</b> Select an offer for the test, generate URL and paste it
              in the field below:
            </h4>
          </div>
          <Col>
            <div>
              <p>
                We recommend you to choose offers with simple flow in order to
                get fast conversion.
              </p>
            </div>
            <div>
              <textarea id="w3review" name="w3review" rows="4" cols="50">
                At w3schools.com you will learn how to make a website. They
                offer free tutorials in all web development technologies.
              </textarea>
            </div>
            <div>
              <p>
                Please note that URL should contain parameter
                ##SUB_ID_SHORT(action)##, which delivers conversions. This is an
                obligatory token. We also recommend you to use token
                ##PLACEMENT_ID## to track traffic from different sources
              </p>
            </div>
            <div className="mt-3 mb-3">
              {/* <button className="ab-ctbtngp1">Check URL</button> */}
              <textarea rows="5" cols="50" className="ab-ctbtngp1"></textarea>
            </div>
            <div>
              <p>
                Please click on this link and make a conversion.
                <br />
                You only need to set conversion tracking once and after that you
                will use it for all your further campaigns
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ConversionTracking;
