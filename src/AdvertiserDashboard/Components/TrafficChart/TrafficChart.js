import './TrafficChart.css'
import React, { useState } from "react";
import Table from "react-bootstrap/Table";


export const TrafficChart = () => {
  
  const [selectedCountry, setSelectedCountry] = useState("All");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const tableData = [
    { country: "India - IN", impressions: "37,385,139 / 40,570,492", cpm: "$0.67" },
    { country: "Indonesia - ID", impressions: "16,530,665 / 17,654,334", cpm: "$1.29" },
    { country: "California - US", impressions: "10,089,557 / 14,637,411", cpm: "$4.73" },
    { country: "Brazil - BR", impressions: "9,240,121 / 10,771,882", cpm: "$2.14" },
    { country: "Turkey - TR", impressions: "7,698,435 / 8,529,690", cpm: "$0.27" },
    { country: "India - IN", impressions: "43,385,139 / 90,570,492", cpm: "$0.53" },
    { country: "Mexico - MX", impressions: "6,090,508 / 7,494,616", cpm: "$1.44" },
    { country: "Russia - RU", impressions: "5,988,000 / 6,500,000", cpm: "$0.67" },
    { country: "Japan - JP", impressions: "5,000,000 / 5,500,000", cpm: "$0.67" },
    { country: "Germany - DE", impressions: "4,500,000 / 5,000,000", cpm: "$0.67" },
    { country: "France - FR", impressions: "4,000,000 / 4,500,000", cpm: "$0.67" },
    { country: "Italy - IT", impressions: "3,500,000 / 4,000,000", cpm: "$0.67" },
    { country: "United Kingdom - GB", impressions: "3,000,000 / 3,500,000", cpm: "$0.67" },
    { country: "Spain - ES", impressions: "2,500,000 / 3,000,000", cpm: "$0.67" },
    { country: "Canada - CA", impressions: "2,000,000 / 2,500,000", cpm: "$0.67" },
    { country: "Argentina - AR", impressions: "1,500,000 / 2,000,000", cpm: "$0.67" },
    { country: "Colombia - CO", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "Poland - PL", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "Netherlands - NL", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "South Korea - KR", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "Saudi Arabia - SA", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "Malaysia - MY", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "Thailand - TH", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "Vietnam - VN", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "South Africa - ZA", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "Egypt - EG", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "Taiwan - TW", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "Hong Kong - HK", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "Romania - RO", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "Sweden - SE", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "Belgium - BE", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "Ukraine - UA", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "Greece - GR", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
    { country: "Portugal - PT", impressions: "1,000,000 / 1,500,000", cpm: "$0.67" },
  ];

  // Filter table data based on the selected country
  const filteredData = selectedCountry !== "All"
    ? tableData.filter((data) => data.country.includes(selectedCountry))
    : tableData;

  return (

    <>
      <div className="container pt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="rs_jHKpMX">
              <p className="rs_OVURq">
                Find out average daily volumes for specific geos and targets.
                Contact our support team to find out best match for geo/type of
                offer.
              </p>

              <div className="row">
                <div className="col-md-3 pt-3">
                  Adunit category
                  <select className="rs_input-device" placeholder="select">
                    <option placeholder="hello ">Popunder</option>

                    <option placeholder="hello3 ">Social bar</option>
                    <option placeholder="hello56 ">Native banner</option>
                  </select>
                </div>

                <div className="col-md-3 pt-3">
                  Traffic Type
                  <select className="rs_input-device" placeholder="select">
                    <option placeholder="hello ">
                      Mainstream + Adult (All)
                    </option>
                    <option placeholder="welcom ">Mainstream </option>
                    <option placeholder="hello3 ">Adult</option>
                  </select>
                </div>

                <div className="col-md-3 pt-3">
                  Device Format
                  <select className="rs_input-device" placeholder="select">
                    <option placeholder="hello ">Mobile</option>
                    <option placeholder="welcom ">Desktop </option>
                    <option placeholder="hello3 ">Mobile</option>
                    <option placeholder="hello3 ">Tablet</option>
                    <option placeholder="hello3 ">TV</option>
                    <option placeholder="hello3 ">Watch</option>
                    <option placeholder="hello3 ">Console</option>
                    <option placeholder="hello3 ">Other</option>
                    <option placeholder="hello3 ">Unknown</option>
                  </select>
                </div>
              </div>

              <div className="row pt-3">
                <div className="col-md-4">
                  Country
                  <select
                    className="rs_input-device"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                  >
                    <option placeholder="hello " value='All'>All</option>
                    <option placeholder="welcom " value='India'>India </option>
                    <option placeholder="hello3 " value='Indonesia'>Indonesia</option>
                    <option placeholder="hello3 " value='Greece'>Greece</option>
                    <option placeholder="hello3 " value='SouthAfrica'>SouthAfrica</option>
                    <option placeholder="hello3  " value='Austria'>Austria</option>
                    <option placeholder="hello3 " value='California'>California</option>
                    <option placeholder="hello3 " value='Germany'>Germany</option>
                    <option placeholder="hello3 " value='UAE'>UAE</option>
                  </select>
                </div>

                <div className="col-md-4  pt-4">
                  <select className="rs_input-device" placeholder="select">
                    <option placeholder="hello ">OS</option>
                    <option placeholder="welcom "> All </option>
                    <option placeholder="hello3 ">Android</option>
                    <option placeholder="hello3 ">iOS</option>
                    <option placeholder="hello3 ">Window Phone</option>
                    <option placeholder="hello3 ">BlackBerry OS</option>
                    <option placeholder="hello3 ">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid  pt-5">

          <div className="row">
            <Table striped bordered hover>
              <thead className="">
                <tr className="bg-danger">
                  <th
                    style={{ backgroundColor: "#71065d" }}
                    className="text-white fs-5"
                  >
                    Country
                  </th>
                  <th
                    style={{ backgroundColor: "#71065d" }}
                    className="text-white fs-5"
                  >
                    Impressions / Total (all devices)
                  </th>
                  <th
                    style={{ backgroundColor: "#71065d" }}
                    className="text-white fs-5"
                  >
                    Recommended CPM
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index}>
                    <td className="fs-5">{row.country}</td>
                    <td className="fs-5">{row.impressions}</td>
                    <td className="fs-5">{row.cpm}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
