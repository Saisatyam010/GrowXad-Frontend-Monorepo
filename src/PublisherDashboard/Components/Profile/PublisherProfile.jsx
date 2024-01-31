import React from "react";
import "./PublisherProfile.css";

function PublisherProfile() {
  return (
    <div className="py-md-5 py-3 px-3" style={{ backgroundColor: "#eee" }}>
      <div className="container bg-white py-5 px-md-5 px-4 SSA_boxshadow">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <div className="row">
              <h2 className="text-center pb-md-5 pb-4 pt-md-3 ">Personal Information</h2>
              <div className="col-md-6">
                <div class="mb-3">
                  <label
                    for="exampleInputEmail1"
                    class="form-label SSA_PP_Profile_text_14px"
                  >
                    LOGIN
                  </label>
                  <input
                    type="Login"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div class="mb-3">
                  <label
                    for="exampleInputEmail1"
                    class="form-label  SSA_PP_Profile_text_14px"
                  >
                    E-MAIL
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div class="mb-3">
                  <label
                    for="name"
                    class="form-label  SSA_PP_Profile_text_14px"
                  >
                    NAME REQURIED
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div class="mb-3">
                  <label
                    for="exampleInputEmail1"
                    class="form-label  SSA_PP_Profile_text_14px"
                  >
                    PASSWORD, BLANK MEANS NO CHANGES APPLIED
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label
                    for="exampleInputEmail1"
                    class="form-label  SSA_PP_Profile_text_14px"
                  >
                    MESSENGER
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Telegram</option>
                    <option value="1">Facebook</option>
                    <option value="2">WhatsApp</option>
                    <option value="3">WeChat</option>
                    <option value="4">Instagram</option>
                    <option value="3">Twitter</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 pt-3 pt-md-0">
                <label
                  for="exampleInputEmail1"
                  class="form-label  SSA_PP_Profile_text_14px"
                >
                  MESSENGER ACCOUNT, REQUIRED
                </label>
                <input
                  class="form-control floatNumber"
                  name="energy1_total_power_generated"
                  type="text"
                  required=""
                />
              </div>
            </div>

            <div className="row py-md-5 py-4">
              <h4 className="py-4">Payment information</h4>
              <p className=" SSA_PP_Profile_text_14px" style={{ color: "red" }}>
                {" "}
                NO CHANGES DURING PAYMENT PERIOD, SORRY
              </p>
              <p className=" SSA_PP_Profile_text_14px pt-3">
                {" "}
                <span style={{ color: "red" }}> *</span> IF YOU DECIDE TO CHANGE
                THESE DETAILS AFTER YOUR FIRST PAYOUT, PREPARE TO SUBMIT
                SUPPORTING DOCUMENTS
              </p>
              <div className="col-md-6 pt-3">
                <div>
                  <label
                    for="exampleInputEmail1"
                    class="form-label  SSA_PP_Profile_text_14px"
                  >
                    COUNTRY REQURIED ,  <span style={{ color: "red" }}> *</span> 
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                   
                  >
                    <option selected>Select Country</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3 pt-3">
                <div>
                  <label
                    for="exampleInputEmail1"
                    class="form-label SSA_PP_Profile_text_14px"
                  >
                    CURRENCY, REQURIED
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                   
                  >
                    <option selected> </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 pt-4">
                <div>
                  <label
                    for="exampleInputEmail1"
                    class="form-label SSA_PP_Profile_text_14px"
                  >
                    PREFERRED, PAYSYSTEM, REQURIED
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                
                  >
                    <option selected> </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button type="button" class="btn btn-dark px-5 py-2 ">
                Save my Profile
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-center py-md-5 py-2 mt-5">Active sessions</h2>
        <div className="row p-md-5 p-3" style={{ border: "1px solid #ddd" }}>
          <div className="col-md-3 col-6">
            <div>Date of last login</div>
            <p>2023-12-28 11:31:37</p>
          </div>
          <div className="col-md-3 col-6">
            <div>Date of last login</div>
            <p>2023-12-28 11:31:37</p>
          </div>
          <div className="col-md-3 col-6 pt-md-0 pt-3">
            <div>Date of last login</div>
            <p>2023-12-28 11:31:37</p>
          </div>
          <div className="col-md-3 col-6 pt-md-0 pt-3">
            <div>Date of last login</div>
            <p>2023-12-28 11:31:37</p>
          </div>
        </div>
        <div className="text-center">
          <button type="button" class="btn btn-dark px-5 py-2 my-4">
            END ALL OTHER SESSIONS
          </button>
        </div>
      </div>
    </div>
  );
}

export default PublisherProfile;
