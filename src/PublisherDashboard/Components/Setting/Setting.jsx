import React from "react";
import "./Setting.css";
import { CiSquareCheck } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Setting = () => {
  return (
    <>
      <div className="container-fluid   rs_page-content-wrap">
        <div className="container p-5  ">
          <div className="row d-flex justify-content-center ">
            <div className="col-md-6 bg-white m-3">
              <div className="row d-flex justify-content-between">
                <div className="col-md-6 px-2 ">

                  <h4 className="rs_text-h4 mt-3">My Account Setting</h4>
                  <span>
                    <label className="disabled">E-mail</label>
                    <br />
                    <input
                      className="rs_disabled"
                      disabled="disabled"
                      name="email"
                      placeholder="E-mail"
                      readonly="readonly"
                      title="E-mail"
                      type="text"
                      value="toler58957@wikfee.com"
                    />
                  </span>
                  <br />
                  <span>
                    <label className=" rs_label-text pt-3">
                      Password, blank means no changes applied
                    </label>
                    <input
                      className="rs_disabled"
                      placeholder=""
                      type="password"
                    />
                  </span>
                  <br />

                  <span>
                    <label className=" rs_label-text pt-3">Login</label>
                    <br />
                    <input
                      className="rs_disabled mt-3"
                      disabled="disabled"
                      name="login"
                      placeholder="Login"
                      readonly="readonly"
                      title="Login"
                      type="text"
                      value="ronisharma1208"
                    />
                  </span>

                  <br />
                  <span className="rs_chekbox" style={{ marginLeft: "0" }}>
                    <label className="rs_cutie-checkbox">
                      <span>
                        <br />
                        <input
                          name="userSubscription20"
                          type="checkbox"
                          value="true"
                          className="rs_Checkbox"
                          data-gtm-form-interact-field-id="1"
                        ></input>
                      </span>
                      <span className="rs_checkbox_text">
                        Limits report subscription
                      </span>
                    </label>
                  </span>

                  <br />
                  <span className="rs_chekbox" style={{ marginLeft: "0" }}>
                    <label className="rs_cutie-checkbox">
                      <span>
                        <br />
                        <input
                          name="userSubscription20"
                          type="checkbox"
                          value="true"
                          className="rs_Checkbox"
                          data-gtm-form-interact-field-id="1"
                        ></input>
                      </span>
                      <span className="rs_checkbox_text">
                        Not active by limit report subscription
                      </span>
                    </label>
                  </span>

                </div>
                <div className="col-md-5 mt-3 ">
                  <div className="">
                    <h4 className="rs_text-h4">My contact Information</h4>
                    <span>
                      <label className="disabled">Name,Required</label>
                      <br />
                      <input className="rs_disabled" type="text" />
                    </span>
                    <br />
                    <span>
                      <label className=" rs_label  pt-3">
                        MESSENGER
                        <br />
                        <select
                          className="rs_input-device "
                          placeholder="select"
                        >
                          <option placeholder="hello ">Telegram</option>
                          <option placeholder="welcom ">Facebook </option>
                          <option placeholder="hello3 ">Whatapp</option>
                          <option placeholder="hello3 ">WeChat</option>
                          <option placeholder="hello3 ">Instagram</option>
                          <option placeholder="hello3 ">Twitter</option>
                        </select>
                      </label>
                    </span>
                    <br />

                    <span>
                      <label className=" rs_label-text pt-3">
                        MESSENGER ACCOUNT,REQUIRED
                      </label>
                      <br />
                      <input className="rs_disabled mt-3" type="text" />
                    </span>
                    <br />
                  </div>
                </div>

                <div className="col-md-7 text-center d-flex justify-content-end">
                  <button className="rs_submit-button">SAVE CHANGES</button>
                </div>
              </div>

            </div>

          </div>



        </div>

        <div className="container p-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 bg-white p-4">
              <h2 className=" rs_text-h4 text-center">Active session</h2>
              <div className="row">
                <div className="col-md-3">
                  <span>Last login</span>
                  <br />
                  <span>2023-12-26 09:22:34</span>
                </div>
                <div className="col-md-3">
                  <span>Browser and OS</span>
                  <br />
                  <span>Chrome Window</span>
                </div>
                <div className="col-md-3">
                  <span>IP</span>
                  <br />
                  <span>103.216.143.32</span>
                </div>

                <div className="col-md-3">
                  <span>Location</span>
                  <br />
                  <span>Delhi,India</span>
                </div>

                <div className="row d-flex justify-content-end">
                  <div className="col-md-9 mt-3">
                    <button className="rs_submit-buttons">END ALL OTHER SESSION</button>
                  </div>
                </div>
              </div>



            </div>


          </div>
        </div>


      </div>
    </>
  );
};

export default Setting;
