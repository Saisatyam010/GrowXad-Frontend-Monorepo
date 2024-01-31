import React from "react";
import Dropdown from "./Dropdown";
const Table = () => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Company</th>
            <th scope="col">Delivery date</th>
            <th scope="col">Delivery method</th>
            <th scope="col">Status</th>
            <th scope="col">Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <td className="d-flex">
                <img
                  src="https://demo.interface.club/limitless/demo/template/assets/images/brands/klm.svg"
                  alt=""
                  style={{ height: "30px", width: "30px", marginRight: "10px" }}
                />
                <p>UPS Express</p>
              </td>
            </th>
            <td>June 12th</td>
            <td className="d-flex">
              <img
                src="https://demo.interface.club/limitless/demo/template/assets/images/brands/ups.svg"
                alt=""
                style={{ height: "30px", width: "30px" }}
              />
              <p>UPS Express</p>
            </td>
            <td>@ Delivered</td>
            <td><Dropdown/></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
