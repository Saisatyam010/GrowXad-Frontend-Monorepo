import { Container } from "react-bootstrap";
import "./AdvRefferals.css";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

const AdvRefferals = () => {
  return (
    <>
      <Layout>
        <div>
          <div className="container-fluid py-5 " style={{ marginTop: "70px" }}>
            <div className="row py-3">
              <div className="col-md-6">
                <div className="sana_referral_heading text-center pt-5 mt-2">
                  <div className="sana-header-heading">
                    <span style={{ color: "rgb(115,3,91)" }}>Join </span>{" "}
                    <span> Our </span>{" "}
                    <span style={{ color: "rgb(115,3,91)" }}> Referral</span>
                    <span> Program Today! </span>
                  </div>
                  <p>
                    Receive 5% of the revenue from every referral you bring in.
                    Simply sign up and receive your exclusive referral link.
                  </p>

                  <Link to="/adveriserauthLogin" className='text-white no-underline hover:no-underline'>
                    <button className="sana-refferral-header-button mt-3">
                      Join as a Referral Partner
                    </button>
                  </Link>
                </div>
              </div>

              <div className="col-md-6">
                <img
                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/9dd99071-0a9b-468d-2e48-5dac32cdd100/public"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* **************************************logo************************************************ */}

          <div className="col-md-8 text-center mx-auto sana-logo-main-div mb-8">
            <h2 className="sana-refferral-content-h2 pt-4">
              <span style={{ color: "rgb(115,3,91)" }}>Earn money</span> by
              recommending{" "}
              <span style={{ color: "rgb(115,3,91)" }}> GrowXAds </span>
              to your friends and colleagues!"
            </h2>
          </div>

          <Container>
            <div className="row mb-5 ">
              <div className="col-md-4 col-sm-12 col-xl-4 col-lg-4 ">
                <div className="text-center rs_pricing_whyjoin sana_referral_card">
                  <div className="d-flex justify-content-center">
                    <img
                      src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/33a5276d-6ae8-496e-5890-6ce868dcf400/public"
                      alt=""
                      width="123px"
                    />
                  </div>
                  <div className="mt-3">
                    <h4>Simple as can be!</h4>
                    <p className="m-0">
                      Join and receive your exclusive referral link to share
                      with friends.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 col-xl-4 col-lg-4 ">
                <div className="text-center rs_pricing_whyjoin sana_referral_card">
                  <div className="d-flex justify-content-center">
                    <img
                      src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/66895cbe-1c87-45e0-a35e-cce5ec4d7f00/public"
                      alt=""
                      width="102px"
                    />
                  </div>
                  <div className="mt-3">
                    <h4>It's gratifying!</h4>
                    <p className="m-0">
                      Gain 5% of the revenue from the publishers you refer to
                      GrowXAds!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 col-xl-4 col-lg-4 ">
                <div className="text-center rs_pricing_whyjoin sana_referral_card">
                  <div className="d-flex pb-2 justify-content-center sana-featured-item__logo">
                    <img
                      src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/f3d2a71c-cbac-45ba-1e79-5616cd9c4600/public"
                      alt=""
                      width="150px"
                    />
                  </div>
                  <div className="mt-3">
                    <h4>It's transparent and clear!</h4>
                    <p className="m-0">
                      Access real-time stats and referral reports, withdraw
                      funds at your convenience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>

          {/* *************************************************bring refferral************************************************** */}

          <div className="col-md-6 text-center mx-auto pt-5  mt-5 pb-3">
            <h2 className="sana-refferral-content-h2 mt-19">
              How can you attract referrals to
              <span style={{ color: "rgb(115,3,91)" }}> GrowXAds?</span>?
            </h2>

            <p className="bring-referral-p py-2">
              Employ any or all of these methods to earn additional income!
            </p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="card py-4">
                  <div
                    className="d-felx justify-content-center text-center align-items-center mx-auto"
                    style={{
                      width: "80px",
                      borderRadius: "20px",
                      height: "70px",
                      backgroundColor: "#FFEFE6",
                    }}
                  >
                    <img
                      className="card-img-top mx-auto"
                      src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/b1169137-5ef0-42ce-dedf-9a176ae08f00/public"
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">Utilize social networks</h5>
                    <p className="card-text ">
                      Connect on social networks, forums, and share GrowXAds
                      with your referral link in discussions on affiliate
                      marketing, ad networks, and traffic monetization.Connect,
                      recommend GrowXAds in forums, socials for traffic, ad
                      networks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card py-4">
                  <div
                    className="d-felx justify-content-center text-center align-items-center mx-auto"
                    style={{
                      width: "80px",
                      borderRadius: "20px",
                      height: "70px",
                      backgroundColor: "#FFEFE6",
                    }}
                  >
                    <img
                      className="card-img-top mx-auto"
                      src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/d2f13f43-98b5-4e0c-4d88-80fcfc345800/public"
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">Utilize YouTube.</h5>
                    <p className="card-text ">
                      Creating a screencast video showcasing GrowXAds's
                      dashboard is simple. Upload it to YouTube, include an
                      affiliate link in the video description, highlight
                      GrowXAds's benefits, and start earning referral profits
                      effortlessly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3 ">
                <div className="card py-4">
                  <div
                    className="d-felx justify-content-center text-center align-items-center mx-auto"
                    style={{
                      width: "80px",
                      borderRadius: "20px",
                      height: "70px",
                      backgroundColor: "#FFEFE6",
                    }}
                  >
                    <img
                      className="card-img-top mx-auto"
                      src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/88be50d9-434e-4d47-194e-d23f9db95500/public"
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body text-center ">
                    <h5 className="card-title">Engage in blogging</h5>
                    <p className="card-text pb-4 ">
                      Are you a blog or site owner? Share a GrowXAds review,
                      provide affiliate tips, and include your referral link to
                      maximize earnings and engagement on your platform! Explore
                      more!{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card py-4">
                  <div
                    className="d-felx justify-content-center text-center align-items-center mx-auto"
                    style={{
                      width: "80px",
                      borderRadius: "20px",
                      height: "70px",
                      backgroundColor: "#FFEFE6",
                    }}
                  >
                    <img
                      className="card-img-top mx-auto"
                      src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/59fa80ed-63aa-4868-e671-e5119a30f200/public"
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">Spread the message</h5>
                    <p className="card-text ">
                      Tell your friends and colleagues about GrowXAds, share
                      your referral link and help them monetize their traffic.
                      If they need further assistance, our Support team is
                      always available via online chat on the dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ***********************************************Refferral-join************************************************** */}

          <div className="sana-join">
            <div className="join-background-img">
              <div className="sana-join-content">
                <h2 className="text-center" style={{ display: "inline-block" }}>
                  Join our Referral Program today!
                </h2>
                <br />
                <p className="text-center " style={{ display: "inline-block" }}>
                  No expertise needed! Don't wait—
                  <br /> log in and begin earning 5% revenue.
                </p>
                <br />
                <button className="sana-join-button1">
                  <Link to="/adveriserauthLogin" className='no-underline hover:no-underline'>
                    {" "}
                    Become a referral
                  </Link>
                </button>

                <Link to="/adveriserauthLogin" className='no-underline hover:no-underline'>
                  <button className="sana-join-button2"> Sign up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdvRefferals;
