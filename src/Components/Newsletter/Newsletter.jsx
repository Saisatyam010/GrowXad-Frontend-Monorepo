import React from "react";
import "./Newsletter.css";
import { TiArrowForward } from "react-icons/ti";
import Layout from "../Layout/Layout";

function Newsletter() {
  return (
    <Layout>
    <div style={{backgroundColor:'#efeff0'}}>
      <div className="bgimgNEWSLETTER">
        <div class="row py-5 d-flex justify-content-center">
          <div class="col-md-9 ">
            <div>
              <h1 className="SSA_Newsletter_MainHeading">
             <span className="SSA_Newsletter_text_purple">Free, actionable insights </span>  to supercharge your traffic monetization and marketing performance.
              </h1>
              <p className="SSA_Newsletter_Para pt-2">
              Access monthly expert reports and insights from Adsterra and top industry leaders! Expect no spam—just invaluable information and impactful guidance.
              </p>
              <p className="SSA_Newsletter_Para pb-4">
              Zero spam, just valuable insights and impactful tips.
              </p>
              <div class="row">
                <div class="col-md-6 text-left">
                  <div class="form-group">
                    <input
                      type="text"
                      id="lastName"
                      placeholder="first name"
                      class="form-control SSA_Newsletter_form-control"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6 text-left">
                  <div class="form-group">
                    <input
                      type="text"
                      id="firstName"
                      placeholder="last name"
                      class="form-control SSA_Newsletter_form-control"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 text-left">
                  <div class="form-group">
                    <input
                      type="email"
                      id="email"
                      placeholder="email"
                      class="form-control SSA_Newsletter_form-control"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6 text-left">
                  <div class="form-group">
                    <select
                      id="dropdown"
                      class="form-control SSA_Newsletter_form-control"
                      required
                    >
                      <option disabled selected>
                        Select
                      </option>
                      <option value="student">I'm Publisher</option>
                      <option value="job">I'm Advertiser</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  style={{backgroundColor:'black'}}
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="button" class="btn SSA_Newsletter_BTN mt-4 ">
                Subscribe Now!
              </button>{" "}
              <br />
              <div className="SSA_Newsletter_font16px py-4 SSA_Newsletter_text_grey">
              You have the freedom to unsubscribe anytime by simply clicking the 'Unsubscribe' link in our emails. Ad Market Ltd., Cyprus, manages your personal data, using it to send emails, newsletters, and for our marketing endeavors. For more details, please refer to our comprehensive information available here.
              </div>
            </div>
            {/* */}

    
          </div>
        </div>

       
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-md-9">
        <div className="row py-5 align-items-center">
  <div className="col-md-6 py-5">
    <img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d699e4c6-51fe-4a7b-fce8-ad576cde5600/public' alt="" width="100%" />
  </div>
  <div className="col-md-6 py-5">
    <div className="newsletter text-left">
      <h2 className="SSA_Newsletter_MainHeading2">What's in it for you:</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TiArrowForward className="" size={26} fill="#73035b"/>&nbsp;
        <p className="SSA_Newsletter_font18px">Leading geos, offers, and instant traffic bundles available.</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TiArrowForward className="" size={26} fill="#73035b"/>&nbsp;
        <p className="SSA_Newsletter_font18px">Strategies for effective ads and monetization success</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TiArrowForward className="" size={26} fill="#73035b"/>&nbsp;
        <p className="SSA_Newsletter_font18px">Guides for optimizing efforts for brilliant outcomes.</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TiArrowForward className="" size={26} fill="#73035b"/>&nbsp;
        <p className="SSA_Newsletter_font18px">Exclusive insights from top industry leaders.</p>
    </div>
    
    </div>
  </div>
  <div className="SSA_Newsletter_font16px py-1 my-3 SSA_Newsletter_LeftBorder text-left SSA_Newsletter_text_grey">
  We're dedicated to fueling your continuous growth with top-tier expertise and industry-leading service. Join a community of skilled professionals who align with your values and exclusively provide actionable insights. Join us today and elevate your success!
  </div>
</div> 
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Newsletter;
