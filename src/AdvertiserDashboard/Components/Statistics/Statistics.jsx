import React from "react";
import "./Statistics.css";
import { VscDebugRestart } from "react-icons/vsc";
import { TiExport } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import Table from "react-bootstrap/Table";

const Statistics = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row d-flex justify-content-center">
          <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/5a097966-dff8-4467-6cd3-c6764d81b200/public" />
          <p className="rs_p-text mt-3">NO SUITABLE CAMPAIGNS FOUND</p>
          <p className="rs_p-text mt-3">
            Please contact support or visit the Create campaign section to start
            your first campaign.
          </p>
        </div>

        <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-3 ">
            <p>COUNTRY</p>
            <select className="rs_input-device w-100" placeholder="select">
              <option placeholder="hello ">Any</option>
              <option placeholder="welcom ">General Question </option>
              <option placeholder="hello3 ">My Account</option>
              <option placeholder="hello3 ">Payment</option>
              <option placeholder="hello3 ">Request manager</option>
              <option placeholder="hello3 ">Visa/MasterCard activation</option>
            </select>
          </div>
          <div className="col-md-3 ">
            <p>DOMAIN</p>
            <select className="rs_input-device w-100" placeholder="select">
              <option placeholder="hello ">Any</option>
              <option placeholder="welcom ">General Question </option>
              <option placeholder="hello3 ">My Account</option>
              <option placeholder="hello3 ">Payment</option>
              <option placeholder="hello3 ">Request manager</option>
              <option placeholder="hello3 ">Visa/MasterCard activation</option>
            </select>
          </div>
          <div className="col-md-3 ">
            <p>PLACEMENT</p>
            <select className="rs_input-device w-100" placeholder="select">
              <option placeholder="hello ">Any</option>
              <option placeholder="welcom ">General Question </option>
              <option placeholder="hello3 ">My Account</option>
              <option placeholder="hello3 ">Payment</option>
              <option placeholder="hello3 ">Request manager</option>
              <option placeholder="hello3 ">Visa/MasterCard activation</option>
            </select>
          </div>
        </div>

        <div className="row mt-5  d-flex justify-content-center">
          <div className="col-md-3">
            <span>START DATE</span>
            <br />
            <input type="number" placeholder="02/01/2024" />
          </div>
          <div className="col-md-3">
            <span>FINISHED DATE</span>
            <br />
            <input type="number" placeholder="02/06/2024" />
          </div>
          <div className="col-md-1">
            <span>Yesterday</span>
          </div>
          <div className="col-md-1">
            <span>Last 7 days</span>
          </div>
          <div className="col-md-1">
            <span>Last 30 days</span>
          </div>
          <div className="col-md-1">
            <span>
              <VscDebugRestart className="rs_icon-reset" />
              Reset
            </span>
          </div>
          <div className="col-md-1">
            <button className="rs-button_apply">Apply</button>
          </div>
        </div>

        <div className="row mt-5 d-flex justify-content-start">
          <div className="col-md-7">
            GROUP BY:
            <br />
            <div className="rs-group-data ">
              <button>Data</button>
              <button>Domain</button>
              <button>Placement</button>
              <button>Country</button>
              <button>Device Format</button>
              <button>Operating System</button>
              <button>Browser</button>
            </div>
          </div>
        </div>

        <div className="row mt-5 d-flex  justify-content-center">
          <div className="col-md-8 text-end">
            <TiExport />
            <span className="rs-exeto-SV">EXPORT TO CSV</span>
            <span>
              <input type="text" placeholder="Search.." name="search" />
            </span>
          </div>
        </div>

        <div className="row mt-2">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Impression</th>
                <th>Clicks</th>
                <th>CTR</th>
                <th>CPM</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024/02/1</td>
                <td>4413</td>
                <td>0</td>
                <td>0.000%</td>
                <td>$0.027</td>
                <td>$0.118%</td>
              </tr>
              <tr>
                <td>2024/03/01</td>
                <td>3865</td>
                <td>0</td>
                <td>0.000%</td>
                <td>$0.031</td>
                <td>$0.121</td>
              </tr>
              <tr>
                <td>2024/10/01</td>
                <td>0</td>
                <td>0</td>
                <td>0.000%</td>
                <td>$0.000</td>
                <td>$0.000</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>8287</td>
                <td>2</td>
                <td>0.024%</td>
                <td>$0.000</td>
                <td>$0.000</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Statistics;
