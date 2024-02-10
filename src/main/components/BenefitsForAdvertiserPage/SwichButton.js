import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SwichButtonComponent = () => {
  const [popunder, setPopunder] = useState(true);
  const [socialBar, setSocialBar] = useState(false);
  const [inPagePush, setInPagePush] = useState(false);

  return (
    <div>
      <div className="container px-2 py-md-5 py-2  my-md-5 my-3">
        <div className="px-md-5 px-0">
          <div
            class="row mx-md-5 mx-0 justify-content-center"
            style={{
              padding: "0px !important",
              margin: "0px !important",
              border: "1px solid black",
              borderRadius: "28px",
            }}
          >
            <div
              className="col-4 text-center "
              onClick={() => {
                setPopunder(true);
                setSocialBar(false);
                setInPagePush(false);
              }}
              style={{
                cursor: "pointer",
                backgroundColor: popunder ? "black" : "white",
                color: popunder ? "white" : "black",
                borderRadius: "28px",
                borderBottomLeftRadius: "28px",
              }}
            >
              <div className="py-3" style={{}}>
                <div>popunder</div>
              </div>
            </div>
            <div
              className="col-4 text-center"
              onClick={() => {
                setPopunder(false);
                setSocialBar(true);
                setInPagePush(false);
              }}
              style={{
                cursor: "pointer",
                backgroundColor: socialBar ? "black" : "white",
                color: socialBar ? "white" : "black",
                borderRadius: "28px",
                borderBottomRightRadius: "28px",
              }}
            >
              <div className="py-3" style={{}}>
                <div>Native Ads</div>
              </div>
            </div>
            <div
              className="col-4 text-center"
              onClick={() => {
                setPopunder(false);
                setSocialBar(false);
                setInPagePush(true);
              }}
              style={{
                cursor: "pointer",
                backgroundColor: inPagePush ? "black" : "white",
                color: inPagePush ? "white" : "black",
                borderRadius: "28px",
                borderBottomRightRadius: "28px",
              }}
            >
              <div className="py-3" style={{}}>
                <div>In-page Push</div>
              </div>
            </div>
          </div>

          {popunder && (
            <>
              <div
                className="container mt-4 p-5"
                style={{ backgroundColor: "#efefef", borderRadius: "30px" }}
              >
                <div className="row ">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="SSA_benefits_font26px_purple SSA_BENEFIT_Text_Black py-2 px-4 text-center"
                          style={{
                            border: "1px solid white",
                            borderRadius: "30px",
                            backgroundColor: "white",
                          }}
                        >
                          {" "}
                          <span style={{ color: "#73035b" }}>2.5B+</span> ad
                          views weekly
                        </div>
                        <div
                          className="pt-4 pb-2"
                          style={{ fontSize: "20px", fontWeight: "600" }}
                        >
                          Use cases
                        </div>
                        <div>
                          <ul className="ssa-uldot">
                            <li> Enter a new market</li>
                            <li> Run a global-reach campaign</li>
                            <li>Increase the number of deposits</li>
                            <li>Attract users to a seasonal sale</li>
                            <li> Increase brand awareness</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="SSA_benefits_font26px_purple SSA_BENEFIT_Text_Black py-2 px-4 text-center"
                          style={{
                            border: "1px solid white",
                            borderRadius: "30px",
                            backgroundColor: "white",
                          }}
                        >
                          {" "}
                          <span style={{ color: "#73035b" }}>
                            CPM, CPA
                          </span>{" "}
                          Traffic
                        </div>

                        <div
                          className="pt-4 pb-2"
                          style={{ fontSize: "20px", fontWeight: "600" }}
                        >
                          Facts
                        </div>
                        <div>
                          <ul className="ssa-uldot">
                            <li> Enter a new market</li>
                            <li> Run a global-reach campaign</li>
                            <li>Increase the number of deposits</li>
                            <li>Attract users to a seasonal sale</li>
                            <li> Increase brand awareness</li>
                          </ul>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap pt-3">
                        <Link
                          to="/adveriserauthLogin"
                          className="text-black no-underline hover:no-underline"
                        >
                          {" "}
                          <button
                            type="button"
                            className=" SSA_Btn_HOME_buytraffic py-3 px-5 mr-2 p-3"
                          >
                            GET TOP TRAFFIC
                          </button>
                        </Link>

                        <Link
                          to="/adveriserauthLogin"
                          className="text-black no-underline hover:no-underline"
                        >
                          {" "}
                          <button className=" SSA_Btn_HOME_buytraffic py-3 px-5 mr-2 p-3">
                            <div className="d-flex">
                              <span>LEARN MORE</span>
                              <span>
                                <FaArrowRightLong className="px-1" />
                              </span>
                            </div>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 mt-3 mt-md-0 ">
                    <div style={{ position: "relative", paddingTop: "56.25%" }}>
                      {/* <iframe src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/ae8b7534f4833b00397c37881063689f/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fae8b7534f4833b00397c37881063689f%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" /> */}
                    </div>

                    <div className="text-center pt-3">
                      Ads open in a new tab after a user clicks anywhere on a
                      website
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {socialBar && (
            <>
              <div
                className="container mt-4 p-5"
                style={{ backgroundColor: "#efefef", borderRadius: "30px" }}
              >
                <div className="row ">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="SSA_benefits_font26px_purple SSA_BENEFIT_Text_Black py-2 px-4 text-center"
                          style={{
                            border: "1px solid white",
                            borderRadius: "30px",
                            backgroundColor: "white",
                          }}
                        >
                          {" "}
                          <span style={{ color: "#73035b" }}>2.5B+</span> ad
                          views weekly
                        </div>
                        <div
                          className="pt-4 pb-2"
                          style={{ fontSize: "20px", fontWeight: "600" }}
                        >
                          Use cases
                        </div>
                        <div>
                          <ul className="ssa-uldot">
                            <li> Enter a new market</li>
                            <li> Run a global-reach campaign</li>
                            <li>Increase the number of deposits</li>
                            <li>Attract users to a seasonal sale</li>
                            <li> Increase brand awareness</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="SSA_benefits_font26px_purple SSA_BENEFIT_Text_Black py-2 px-4 text-center"
                          style={{
                            border: "1px solid white",
                            borderRadius: "30px",
                            backgroundColor: "white",
                          }}
                        >
                          {" "}
                          <span style={{ color: "#73035b" }}>
                            CPM, CPA
                          </span>{" "}
                          Traffic
                        </div>

                        <div
                          className="pt-4 pb-2"
                          style={{ fontSize: "20px", fontWeight: "600" }}
                        >
                          Facts
                        </div>
                        <div>
                          <ul className="ssa-uldot">
                            <li> Enter a new market</li>
                            <li> Run a global-reach campaign</li>
                            <li>Increase the number of deposits</li>
                            <li>Attract users to a seasonal sale</li>
                            <li> Increase brand awareness</li>
                          </ul>
                        </div>
                      </div>
                      <div className="d-flex pt-3">
                        <button
                          type="button"
                          class="btn SSA_btn_BenefitsAd_main"
                        >
                          TRY SOCIAL BAR
                        </button>
                        <button type="button" class="btn  px-5 btn-light ml-3">
                          {" "}
                          <div className="d-flex">
                            LEARN MORE &nbsp;{" "}
                            <FaArrowRightLong className="pt-1" />{" "}
                          </div>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div style={{ position: "relative", paddingTop: "56.25%" }}>
                      {/* < src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/b6e76847ac0cc17448ccec18911f7eb0/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fb6e76847ac0cc17448ccec18911f7eb0%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" /> */}
                    </div>

                    <div className="text-center pt-3">
                      Ads open in a new tab after a user clicks anywhere on a
                      website
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {inPagePush && (
            <>
              <div
                className="container mt-4 p-5"
                style={{ backgroundColor: "#efefef", borderRadius: "30px" }}
              >
                <div className="row ">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="SSA_benefits_font26px_purple SSA_BENEFIT_Text_Black py-2 px-4 text-center"
                          style={{
                            border: "1px solid white",
                            borderRadius: "30px",
                            backgroundColor: "white",
                          }}
                        >
                          {" "}
                          <span style={{ color: "#73035b" }}>2.5B+</span> ad
                          views weekly
                        </div>
                        <div
                          className="pt-4 pb-2"
                          style={{ fontSize: "20px", fontWeight: "600" }}
                        >
                          Use cases
                        </div>
                        <div>
                          <ul className="ssa-uldot">
                            <li> Enter a new market</li>
                            <li> Run a global-reach campaign</li>
                            <li>Increase the number of deposits</li>
                            <li>Attract users to a seasonal sale</li>
                            <li> Increase brand awareness</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="SSA_benefits_font26px_purple SSA_BENEFIT_Text_Black py-2 px-4 text-center"
                          style={{
                            border: "1px solid white",
                            borderRadius: "30px",
                            backgroundColor: "white",
                          }}
                        >
                          {" "}
                          <span style={{ color: "#73035b" }}>
                            CPM, CPA
                          </span>{" "}
                          Traffic
                        </div>

                        <div
                          className="pt-4 pb-2"
                          style={{ fontSize: "20px", fontWeight: "600" }}
                        >
                          Facts
                        </div>
                        <div>
                          <ul className="ssa-uldot">
                            <li> Enter a new market</li>
                            <li> Run a global-reach campaign</li>
                            <li>Increase the number of deposits</li>
                            <li>Attract users to a seasonal sale</li>
                            <li> Increase brand awareness</li>
                          </ul>
                        </div>
                      </div>
                      <div className="d-flex pt-3">
                        <button
                          type="button"
                          class="btn SSA_btn_BenefitsAd_main"
                        >
                          TRY IN-PAGE PUSH{" "}
                        </button>
                        <button type="button" class="btn  px-5 btn-light ml-3">
                          {" "}
                          <div className="d-flex">
                            LEARN MORE &nbsp;{" "}
                            <FaArrowRightLong className="pt-1" />{" "}
                          </div>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div style={{ position: "relative", paddingTop: "56.25%" }}>
                      {/* <iframe src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/0de5bd83fea70a1b8b1f087511321be5/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2F0de5bd83fea70a1b8b1f087511321be5%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" /> */}
                    </div>

                    <div className="text-center pt-3">
                      Ads open in a new tab after a user clicks anywhere on a
                      website
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwichButtonComponent;
