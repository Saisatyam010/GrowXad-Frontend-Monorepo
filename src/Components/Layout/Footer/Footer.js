import React from "react";
import "./Footer.css";


import { FaGoogle } from "react-icons/fa";

import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { SiBinance } from "react-icons/si";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {


  return (
    <>

      <div className="rs_footer_adserver ">
        <footer className="footer-section">
          <div className="container">
            <div className="footer-cta pt-5 pb-5">
              <div className="row"></div>
            </div>
            <div className="footer-content pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                  <div className="footer-widget">
                    <div className="footer-logo">
                      <a href="/">
                        <img
                          src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/eda470eb-c1df-4037-59fd-7bdc265fbe00/public" />
                      </a>
                    </div>
                    <div className="footer-text">
                      <p className=" text-white">
                        GrowXAds helps you Empower your business, with
                        the innovative ads server. Maximize revenue, target audiences effectively,
                        and elevate your brand presence seamlessly.
                      </p>
                    </div>

                    <div className="footer-social-icon pb-3 d-flex gap-1 d-flex align-items-center">
                      <div className="pe-2 ab-fontwhite ">Follow us</div>
                      <div className='ab123ab '>
                        <ul className="abul123">
                          <li>
                            <a class="facebook" href="#">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <div className="d-flex py-2 justify-content-center align-items-center">
                                <Link to="https://www.facebook.com">
                                  <FaFacebook size={30} />
                                </Link>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a className="twitter" href="#">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <div className="d-flex py-2 justify-content-center align-items-center">
                              <Link to="https://www.twitter.com">
                                <FaTwitter size={30} />
                                </Link>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="instagram" href="#">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <div className="d-flex py-2 justify-content-center align-items-center">
                              <Link to="https://www.instagram.com">
                                <FaInstagram size={30} />
                                </Link>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="google" href="#">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <div className="d-flex py-2 justify-content-center align-items-center">
                              <Link to="https://www.google.com">

                                <FaGoogle size={30} />
                                </Link>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Ad Type </h3>
                    </div>
                    <ul>
                      <Link to='/bannerad' className="hover:no-underline  text-white">
                        <li>
                          Banner Ad
                        </li>
                      </Link>
                      <Link to='/nativead' className="hover:no-underline  text-white">
                        <li>
                          Native Ad
                        </li>
                      </Link>
                      <Link to='/directlinkad' className="hover:no-underline  text-white">
                        <li>
                          Direct Link
                        </li>
                      </Link>
                      <Link to='/popunderad' className="hover:no-underline  text-white">
                        <li>
                          Popunder Ad
                        </li>
                      </Link>



                      <Link to='/inpagepushad' className="hover:no-underline  text-white">
                        <li>
                          In-Page Push Ads
                        </li>
                      </Link>

                      <Link to='/interstitialad' className="hover:no-underline text-white">
                        <li>
                          Interstitial Ad
                        </li>
                      </Link>

                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Subscribe</h3>
                    </div>
                    <div className="footer-text mb-25">
                      <p>
                        Don’t miss to subscribe to our new feeds, kindly fill the
                        form below.
                      </p>
                    </div>

                    <div className="subscribe-form ab-td-none">
                      <form action="#">
                        <input className="outline-none" type="text" placeholder="Enter Email Address" />
                        <span className="Subs-form-span">
                          <FaTelegram className="text-white fs-4" />
                        </span>
                      </form>

                      <div className="container pt-3">
                        <div className="row">
                          <div className="col-md-8 text-white fs-3">
                            <p className="text-white">Payment Options</p>
                            <div className="d-flex">
                              <span className="pe-2 "><img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/0bdd07b5-7256-448e-15f2-8d49ca1ea300/public" width={520} className="ab-imgfadeeffect" /></span>

                              <span className="pe-2 "><img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/482a761d-b57f-4560-8b7e-458ade61a000/public" width={520} className="ab-imgfadeeffect" /></span>

                              <span className="pe-2 "><img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/7affb09a-87c6-4dbe-60d6-233ec69a2d00/public" width={520} className="ab-imgfadeeffect" /></span>

                              <span className="pe-2 "><img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/dcfff894-7f66-48ac-34f7-6bb94dffa400/public" width={520} className="ab-imgfadeeffect" /></span>

                              <span className="pe-2 "><img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/e4e134ef-2d48-4783-1ef6-60ddf0d4bb00/public" width={520} className="ab-imgfadeeffect" /></span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </footer>
      </div>
    </>
  );


}

export default Footer