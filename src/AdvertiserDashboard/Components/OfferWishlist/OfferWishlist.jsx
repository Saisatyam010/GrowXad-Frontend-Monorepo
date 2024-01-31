import React, { useState } from "react";
import { SlShareAlt } from "react-icons/sl";
import "./OfferWishlist.css";

function OfferWishlist() {
  const [selectedOfferType, setSelectedOfferType] = useState("All");
  const [selectedDeviceFormat, setSelectedDeviceFormat] = useState("All");

  const handleOfferTypeChange = (e) => {
    setSelectedOfferType(e.target.value);
  };

  const handleDeviceFormatChange = (e) => {
    setSelectedDeviceFormat(e.target.value);
  };

  const OfferWishlist_TableData = [
    {
      OfferName: "AdsPatron ",
      Badge: "New",
      OfferType: "Utility",
      DeviceFormat: "Mobile",
      Geo: "	US",
      OSBrowser: "iOS",
    },
    {
      OfferName: "Afean VPN",
      OfferType: "Utility",
      DeviceFormat: "Mobile",
      Geo: "	US",
      OSBrowser: "iOS",
    },
    {
      OfferName: "Babuplay",
      Badge: "New",
      OfferType: "	Gambling",
      DeviceFormat: "Mobile",
      Geo: "	BD",
      OSBrowser: "Android, iOS",
    },
    {
      OfferName: "Cleaner MAX",
      Badge: "New",
      OfferType: "Utility",
      DeviceFormat: "Mobile",
      Geo: "	US, JP",
      OSBrowser: "iOS",
    },
    {
      OfferName: "Eto Net Proxy",
      Badge: "New",
      OfferType: "Utility",
      DeviceFormat: "Mobile",
      Geo: "	US, JP",
      OSBrowser: "Android, iOS",
    },
    {
      OfferName: "HotTunnel VPN",
      OfferType: "Utility",
      DeviceFormat: "Mobile",
      Geo: "	US, JP",
      OSBrowser: "Android, iOS",
    },
    {
      OfferName: "Cleaner MAX",
      OfferType: "Cams",
      DeviceFormat: "Mobile",
      Geo: "	US, JP",
      OSBrowser: "iOS",
    },
    {
      OfferName: "Sure VPN",
      Badge: "New",
      OfferType: "Subscribe",
      DeviceFormat: "Desktop",
      Geo: "	US, JP",
      OSBrowser: "Window",
    },
    {
      OfferName: "Cleaner MAX",
      OfferType: "Antivirus",
      DeviceFormat: "Mobile",
      Geo: "	US, JP",
      OSBrowser: "Android",
    },
    {
      OfferName: "HotTunnel VPNX",
      OfferType: "Utility",
      DeviceFormat: "Mobile",
      Geo: "	US, JP",
      OSBrowser: "Android",
    },
    {
      OfferName: "African Winner MTN",
      Badge: "New",
      OfferType: "Utility",
      DeviceFormat: "Desktop",
      Geo: "	US, JP",
      OSBrowser: "Window",
    },
  ];

  const filteredTableData = OfferWishlist_TableData.filter((row) => {
    const offerTypeMatch =
      selectedOfferType === "All" || row.OfferType === selectedOfferType;
    const deviceFormatMatch =
      selectedDeviceFormat === "All" ||
      row.DeviceFormat === selectedDeviceFormat;

    return offerTypeMatch && deviceFormatMatch;
  });

  return (
    <div className=" py-5" style={{ backgroundColor: "#eee" }}>
      <div className="container">
        <div className=" p-4 bg-light my-2">
          <div className="SSA_OfferWishlist_font_14px ">
            You have a great chance of getting high ROI with these offers on our
            popunder traffic
          </div>

          <div className="row pt-3">
            <div className="col-md-3 ">
              <label
                for="exampleDataList"
                class="form-label SSA_OfferWishlist_font_14px "
              >
                Offer Type
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={selectedOfferType}
                onChange={handleOfferTypeChange}
              >
                <option selected value="All">
                  All
                </option>
                <option value="Utility">Utility</option>
                <option value="Cams">Cams</option>
                <option value="Subscribe">Subscribe</option>
                <option value="Grambling">Grambling</option>
                <option value="Sweepstakes">Sweepstakes</option>
                <option value="Antivirus">Antivirus</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-3">
              <label
                htmlFor="exampleDataList"
                className="form-label SSA_OfferWishlist_font_14px "
              >
                Device Format
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={selectedDeviceFormat}
                onChange={handleDeviceFormatChange}
              >
                <option selected value="All">
                  All
                </option>
                <option value="Desktop">Desktop</option>
                <option value="Mobile">Mobile</option>
              </select>
            </div>
          </div>
        </div>

        <div className=" p-4 bg-light my-2 table-responsive ">
          <table class="table ">
            <thead>
              <tr>
                <th scope="col">Offer Name</th>
                <th scope="col">Offer Type</th>
                <th scope="col"> Device format</th>
                <th scope="col">Geo</th>
                <th scope="col">OS | Browser</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              {filteredTableData.map((row, index) => (
                <tr key={index}>
                  <td className="SSA_OfferWishlist_font_14px pt-3 ">
                    {row.OfferName} &nbsp;{" "}
                    <span class="badge bg-success p-2  text-right">{row.Badge}</span>{" "}
                  </td>
                  <td className="SSA_OfferWishlist_font_14px pt-3">
                    {row.OfferType}
                  </td>
                  <td className="SSA_OfferWishlist_font_14px pt-3">
                    {row.DeviceFormat}
                  </td>
                  <td className="SSA_OfferWishlist_font_14px pt-3">
                    {row.Geo}
                  </td>
                  <td className="SSA_OfferWishlist_font_14px pt-3">
                    {row.OSBrowser}
                  </td>
                  <td
                    className="SSA_OfferWishlist_font_14px text-end pt-2 "
                   
                  >
                    {" "}
                    <button type="button" class="btn btn-light" style={{ display: "flex", alignItems: "center" }}>
                      {" "}
                      <SlShareAlt className="m-2" /> &nbsp; Preview
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OfferWishlist;
