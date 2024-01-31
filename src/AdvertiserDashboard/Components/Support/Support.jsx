import React from "react";
import "./Support.css";
import { FaRegLifeRing } from "react-icons/fa";
import Table from "react-bootstrap/Table";

const Support = () => {
  return (
    <>
      <div className="container pt-5">

        <div className="row">
          <div className="rs_main-wrapper">
            <h1 className="rs_heading-text">Support</h1>
            <div className="row d-flex justify-content-center">
              <div className="col-md-8 ">
                <div className="row">
                  <div className="col-md-6 ">
                    <span>TYPE</span>
                    <select
                      className="rs_input-device w-100"
                      placeholder="select"
                    >
                      <option placeholder="hello ">Any</option>
                      <option placeholder="welcom ">General Question </option>
                      <option placeholder="hello3 ">My Account</option>
                      <option placeholder="hello3 ">Payment</option>
                      <option placeholder="hello3 ">Request manager</option>
                      <option placeholder="hello3 ">
                        Visa/MasterCard activation
                      </option>
                    </select>
                    <div>
                      <span className="d-flex"><FaRegLifeRing /></span>
                      <span> SUBMIT NEW TICKET</span>
                    </div>


                  </div>

                  <div className="col-md-6 ">
                    <span>STATUS</span>
                    <select
                      className="rs_input-device w-100"
                      placeholder="select"
                    >
                      <option placeholder="welcom ">Open </option>
                      <option placeholder="hello3 ">Any</option>
                      <option placeholder="hello3 ">Open</option>
                      <option placeholder="hello3 ">Closed</option>
                    </select>

                    <button className="rs_button">Apply</button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-11  mt-5">
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th style={{ backgroundColor: "#71065d" }}>Type</th>
                          <th style={{ backgroundColor: "#71065d" }}>
                            Subject
                          </th>
                          <th style={{ backgroundColor: "#71065d" }}>
                            Created On
                          </th>
                          <th style={{ backgroundColor: "#71065d" }}>
                            Updated On
                          </th>
                          <th style={{ backgroundColor: "#71065d" }}>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Nothing Found</td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                      </tbody>
                    </Table>
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

export default Support;
