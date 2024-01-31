import React from "react";
import "./Finance.css";
import { BiSolidHandRight } from "react-icons/bi";
import { LiaHandPointRight } from "react-icons/lia";

function Finance() {
  return (
    <div className="" style={{ backgroundColor: '#eee' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div
              className="bg-white p-4 my-4"
              style={{ position: "sticky", top: "22px" }}
            >
              <div className="SSA_Finance_font_20px">Payment steps</div>
              <div className="SSA_Finance_font_16px">
                1. Choose payment method
              </div>
              <p className="SSA_Finance_font_14px">
                You can check instructions and minimum amount in methods
                description. Keep in mind that few methods are available only on
                request
              </p>
              <div className="SSA_Finance_font_16px">2. Make payments</div>
              <p className="SSA_Finance_font_14px">
                Click on the payment method and follow the instructions: make an
                instant payment or submit a request for other payment methods
              </p>

              <div className="SSA_Finance_font_16px">3. Get funds credited</div>
              <p className="SSA_Finance_font_14px">
                Check you balance. Note that each payment takes a certain time
                period
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="bg-white  py-4 px-4 my-4">
              <div className="SSA_Finance_font_20px">Payment methods</div>
              <div className="SSA_Finance_font_16px">Instant payment</div>
              <div className="row py-2 px-0">
                <div className="col-md-3 px-0">
                  <div className="px-4 py-5 SSA_finance_borderGrey">
                    <img
                      src="https://partners.adsterra.com/images/finances/PX.png"
                      alt=""
                      width="100%"
                    />
                  </div>
                </div>
                <div className="col-md-3 px-0">
                  <div className="px-4 py-5 SSA_finance_borderGrey">
                    <img
                      src="https://partners.adsterra.com/images/finances/PX.png"
                      alt=""
                      width="100%"
                    />
                  </div>
                </div>
              </div>

              <div className="SSA_Finance_font_16px pt-2">
                Payment available on requestt
              </div>
              <div className="row py-2 px-0">
                <div className="col-md-3 px-0">
                  <div className="px-4 py-5 SSA_finance_borderGrey">
                    <img
                      src="https://partners.adsterra.com/images/finances/CP.png"
                      alt=""
                      width="100%"
                    />
                  </div>
                </div>
                <div className="col-md-3 px-0">
                  <div className="px-4 py-5 SSA_finance_borderGrey">
                    <img
                      src="https://partners.adsterra.com/images/finances/CP.png"
                      alt=""
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white py-4 px-4 my-4">
              <div className="SSA_Finance_font_20px">Promo code</div>
              <div className="row">
                <div className="col-md-6">
                  <form class="d-flex">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Promo code"
                      aria-label="Search"
                    />
                    <button class="btn btn-dark px-4" type="submit">
                      Activate
                    </button>
                  </form>
                </div>
              </div>

              <div className="pt-3" style={{ display: 'flex', alignItems: 'center' }}>
                {" "}
                <LiaHandPointRight style={{ fontSize: "28px" }} /> &nbsp; Note that the required activation
                sum is the sum after a payment system's fee (if applicable).
              </div>
              <p className="SSA_Finance_font_14px pt-3">
                Please note that the deposit sum is non-refundable due to the
                use of a promo code{" "}
              </p>
            </div>

            <div className="bg-white py-4 px-4 my-4">
              <div className="SSA_Finance_font_20px">Documents</div>
              <p className="SSA_Finance_font_14px py-3">
                If your desired payment method requires any documents, <br />
                please upload them to launch campaigns with us
              </p>

              <button
                className="btn btn-dark px-4 py-2"
                style={{ fontSize: "14px", fontWeight: "bold" }}
              >
                ADD DOCUMENT
              </button>
              <table class="table mt-3">
                <thead>
                  <tr>
                    <th scope="col SSA_Finance_font_14px SSA_GRey_Color" >Document Title</th>
                    <th scope="col SSA_Finance_font_14px SSA_GRey_Color">Status</th>
                    <th scope="col"> </th>
                    <th scope="col">	</th>
                    <th scope="col"> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row SSA_Finance_font_14px SSA_GRey_Color">Nothing found</td>

                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white py-4 px-4 my-4">
              <div className="SSA_Finance_font_20px">Payments history</div>
              <div className="row">
                <div className="col-md-3">
                  <label
                    htmlFor="exampleDataList"
                    className="form-label SSA_OfferWishlist_font_14px "
                  >
                    TYPE
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected value="All">
                      All
                    </option>
                    <option value="Desktop">Invoice</option>
                    <option value="Mobile">Payments</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="exampleDataList"
                    className="form-label SSA_OfferWishlist_font_14px "
                  >
                    TYPE
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected value="All">
                      All
                    </option>
                    <option value="Desktop">Invoice</option>
                    <option value="Mobile">Payments</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="exampleDataList"
                    className="form-label SSA_OfferWishlist_font_14px "
                  >
                    TYPE
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected value="All">
                      All
                    </option>
                    <option value="Desktop">Invoice</option>
                    <option value="Mobile">Payments</option>
                  </select>
                </div>
              </div>
              <div className="py-3">
                <button
                  className="btn btn-dark mx-1 px-4 py-2"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  APPLY FILTER
                </button>
                <button
                  className="btn btn-light mx-1 px-2 py-2"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  RESET
                </button>

                <button
                  className="btn btn-light mx-1 px-2 py-2"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  GET CSV
                </button>
              </div>

              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Invoice ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">	Payment system</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">Nothing found</td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finance;
