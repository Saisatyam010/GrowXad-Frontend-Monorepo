import React from "react";

import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import footerStyles from "./Footer.module.css";
import { AdTypes, PaymentOptions, SocialMediaImage } from "./FooterMenu";
const Footer = () => {

  return (
    <>
      <div className={footerStyles.rs_footer_adserver}>
        <footer className={footerStyles.footer_section}>
          <div className="container">
            <div className={`${footerStyles.footer_cta} pt-5 pb-5`}>
              <div className="row"></div>
            </div>
            <div className={`${footerStyles.footer_content} pt-5 pb-5`}>
              <div className="row">

                <div className="col-xl-4 col-lg-4 mb-50">
                  <div className={`${footerStyles.footer_widget}`}>
                    <div className={`${footerStyles.footer_logo}`}>
                      <Link to='/' className='no-underline'>
                        <img
                          src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/eda470eb-c1df-4037-59fd-7bdc265fbe00/public" />
                      </Link>
                    </div>
                    <div className={`${footerStyles.footer_text}`}>
                      <p className=" text-white">
                        GrowXAds helps you Empower your business, with
                        the innovative ads server. Maximize revenue, target audiences effectively,
                        and elevate your brand presence seamlessly.
                      </p>
                    </div>
                    <div className={`${footerStyles.footer_social_icon} pb-3 d-flex  d-flex align-items-center`}>
                      <div className={`${footerStyles.ab_fontwhite} pe-2 `}>Follow us</div>
                      <div className={`${footerStyles.ab123ab}`}>
                        <ul className={`${footerStyles.abul123}`}>
                          {SocialMediaImage?.map((social, index) =>
                            <li>
                              <Link to={social.Link}>
                             

                                <div className="d-flex py-2 justify-content-center align-items-center">
                                  {social.icon}
                                </div>
                              </Link>
                            </li>
                          )}

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className={`${footerStyles.footer_widget}`}>
                    <div className={`${footerStyles.footer_widget_heading}`}>
                      <h3>Ad Type </h3>
                    </div>
                    <ul>

                      {AdTypes?.map((ad, index) => (
                        <Link key={index} to={ad.Link} className={`hover:no-underline  text-white ${footerStyles.Adtype}`}>
                          <li>
                            {ad.AdType}

                          </li>
                        </Link>))}




                    </ul>
                  </div>
                </div>


                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div className={`${footerStyles.footer_widget}`}>
                    <div className={`${footerStyles.footer_widget_heading}`}>
                      <h3>Subscribe</h3>
                    </div>
                    <div className={`${footerStyles.footer_text} mb-25`}>
                      <p>
                        Don’t miss to subscribe to our new feeds, kindly fill the
                        form below.
                      </p>
                    </div>
                    <div className={`${footerStyles.subscribe_form} ${footerStyles.ab_td_none}`}>
                      <form action="#">
                        <input className="outline-none " type="text" placeholder="Enter Email Address" />
                        <span className={`${footerStyles.Subs_form_span}`}>
                          <FaTelegram className="text-white fs-4" />
                        </span>
                      </form>
                      <div className="container pt-3">
                        <div className="row">
                          <div className="col-md-8 text-white fs-3">
                            <p className="text-white">Payment Options</p>
                            <div className="d-flex">
                              {
                                PaymentOptions?.map((payment, index) => {
                                  return (
                                    <span key={index}><img src={payment.Image} width={60} height={50} className={`${footerStyles.ab_imgfadeeffect} pe-2`} /></span>
                                  )

                                })
                              }


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