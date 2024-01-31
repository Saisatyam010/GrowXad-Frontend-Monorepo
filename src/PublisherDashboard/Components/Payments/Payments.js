import React, { useState } from 'react';
import './Payments.css'
import { Button, Modal } from 'react-bootstrap';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

export const Payments = () => {

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <div className="container">
      <h2 className="text-center m-5">Payment Rules</h2>

      <table className="sana-tabel-payment">
        <tr>
          <th scope="col" className="p-4 ">
            Payment Method
          </th>
          <th scope="col" className="p-4 ">
            Time Duration
          </th>
          <th scope="col" className="p-4 ">
            Minimum amount
          </th>
          <th scope="col" className="p-4 fs-5">
            currency
          </th>
          <th scope="col" className="p-4 fs-5 ">
            fee
          </th>
          <th scope="col" className="p-4 fs-5">
            Required info
          </th>
        </tr>
        <tr>
          <th>
            <img
              src="https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png"
              style={{ width: "100px" }}
              alt=""
            />
          </th>
          <td className="">instant </td>
          <td>$100</td>
          <td>USD</td>
          <td>Up to 5.4% of payout sum </td>
          <td>
            country, account type Paypal account email,full name, full address
          </td>
        </tr>
        <tr>
          <th>
            <img
              src="https://www.wmtransfer.com/img/icons/wmlogo_vector_blue.png"
              style={{ width: "120px", height: "40px" }}
              alt=""
            />
          </th>
          <td>instant</td>
          <td>5$</td>
          <td>USD</td>
          <td>
            1% of payout <br />
            sum
          </td>
          <td>
            Country, full name (company name if it a legal entity), full
            address, VAT number if any(for residents of EU countries and UK).{" "}
          </td>
        </tr>
        <tr>
          <th scope="row">
            <img
              src="https://wiki.soulcams.com/images/0/03/Paxum-logo.png"
              alt=""
              style={{ width: "100px" }}
            />
          </th>
          <td>instant</td>
          <td>$5</td>
          <td>USD</td>
          <td>$1</td>
          <td>
            Country account type, Paxum account email full name(company name if
            it is a legal entity), full address,VAT number if any(for residents
            of EU countries and UK).{" "}
          </td>
        </tr>
        <tr>
          <th>
            <img
              src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/745916c4-3d38-4733-8554-27d08e944200/public"
              alt=""
              style={{ width: "80px" }}
            />
          </th>
          <td>3-4 days</td>
          <td>$1000</td>
          <td>USD/EUR</td>
          <td className="m-3">
            $50 for USD <br /> $0 for EUR
          </td>
          <td>
            Country, account type, payout currency, full name (or company name
            if it is a legal entity), full address, VAT number (for residents of
            EU countries and the UK), IBAN, SWIFT, bank address, and
            intermediary bank details (if available).{" "}
          </td>
        </tr>

        <tr>
          <th scope="row">
            <img
              src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/745916c4-3d38-4733-8554-27d08e944200/public"
              alt=""
              style={{ width: "100px", height: "30px", margin: "10px" }}
            />
          </th>
          <td>instant</td>
          <td>$100</td>
          <td>Bitcoin</td>
          <td>Network fee is included</td>
          <td>Country, wallet address</td>
        </tr>
        <tr>
          <th>
            <img
              src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/745916c4-3d38-4733-8554-27d08e944200/public"
              alt=""
              style={{ width: "550px" }}
            />
          </th>
          <td>instant</td>
          <td>$100</td>
          <td>USD(T)</td>
          <td>2% plus network fee</td>
          <td>Country, ERC20 or TRC20 wallet address</td>
        </tr>
      </table>
    </div>
  )
}
