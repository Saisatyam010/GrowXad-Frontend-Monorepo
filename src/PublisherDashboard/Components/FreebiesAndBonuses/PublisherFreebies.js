import { FaRegCopy } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";
import { useState } from "react";
import "./PublisherFreebies.css";

const CopyToClipboardComponent = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = "GrowX";
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className={`sana-input_copy_wrapper ${isCopied ? "flashBG" : ""}`}>
      <div className="sana-input_copy">
        <span className="txt">{isCopied ? "Copied " : "GrowX"}</span>
        <span className="icon right" onClick={copyToClipboard}>
          <MdOutlineContentCopy />
        </span>
      </div>
    </div>
  );
};

const PublisherFreebies = () => {
  return (
    <div>
      <div className="container mt-5">
        <h1 className="sana-head-h1 "> Freebies and bonuses</h1>
        <p className="sana-head-pera">
          Get maximum benefits with special bonuses and <br />
          exclusive offers from our partners.
        </p>
        <div  className="col-md-10 d-flex justify-content-center mx-auto  sana-head-links-but">
          <a className="sana-head-link" href="#Trackers">
            Trackers
          </a>
          <a className="sana-head-link" href="#Landing-Page-Builders">
            Landing Page Builders
          </a>
          <a className="sana-head-link" href="#Forums">
            Forums
          </a>
          <a className="sana-head-link" href="#OTT_Plateforms">
            OTT Plateforms
          </a>
          <a className="sana-head-link" href="#Tools">
            Tools
          </a>
          <a className="sana-head-link" href="#Web_Analytics">
            Web Analytics
          </a>
        </div>
        <div className="row">
          <div id="Trackers">
            <h1 className="" style={{ margin: "50px", fontWeight: "700" }}>
              Tracker
            </h1>

            <div className="col-md-12 d-flex justify-content-center mx-auto">
              <div className=" card-deck">
                
                <div className="cardBox m-2">
                <div
                  className="card" id="sana-card-id"
                  style={{ padding: "15px", margin: "10px" }}
                >
                  <img
                    className="card-img-top d-flex justify-content-center mx-auto"
                    src="https://thumb.tildacdn.com/tild3139-6436-4262-b730-373038306563/-/resize/400x/-/format/webp/adsbridge_logo.png"
                    alt="Card image cap"
                    style={{
                      height: "70px",
                      width: "80%",
                      backgroundPosition: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center mx-auto">
                      AdsBridge
                    </h5>
                    <p className="card-text d-flex justify-content-center mx-auto text-center">
                      15% off all plans <br /> except Starter Promo Code
                    </p>

                    <h1
                      className="d-flex justify-content-center"
                      style={{ fontSize: "25px" }}
                    >
                      <CopyToClipboardComponent />
                    </h1>
                    <button className="sana-card-button d-flex justify-content-center mx-auto">
                      Activate
                    </button>
                  </div>
                </div>
                </div>
                <div className="cardBox m-2">
                <div
                  className="card " id="sana-card-id"
                  style={{ padding: "15px", margin: "10px" }}
                >
                  <img
                    className="card-img-top d-flex justify-content-center mx-auto"
                    src="https://thumb.tildacdn.com/tild3139-6436-4262-b730-373038306563/-/resize/400x/-/format/webp/adsbridge_logo.png"
                    alt="Card image cap"
                    style={{
                      height: "70px",
                      width: "80%",
                      backgroundPosition: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center mx-auto">
                      AdsBridge
                    </h5>
                    <p className="card-text d-flex justify-content-center mx-auto text-center">
                      15% off all plans <br /> except Starter Promo Code
                    </p>

                    <h1
                      className="d-flex justify-content-center"
                      style={{ fontSize: "25px" }}
                    >
                      <CopyToClipboardComponent />
                    </h1>
                    <button className="sana-card-button d-flex justify-content-center mx-auto">
                      Activate
                    </button>
                  </div>
                </div>
                </div>
                <div className="cardBox m-2">
                <div
                  className="card " id="sana-card-id"
                  style={{ padding: "15px", margin: "10px" }}
                >
                  <img
                    className="card-img-top d-flex justify-content-center mx-auto"
                    src="https://thumb.tildacdn.com/tild3139-6436-4262-b730-373038306563/-/resize/400x/-/format/webp/adsbridge_logo.png"
                    alt="Card image cap"
                    style={{
                      height: "70px",
                      width: "80%",
                      backgroundPosition: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center mx-auto">
                      AdsBridge
                    </h5>
                    <p className="card-text d-flex justify-content-center mx-auto text-center">
                      15% off all plans <br /> except Starter Promo Code
                    </p>

                    <h1
                      className="d-flex justify-content-center"
                      style={{ fontSize: "25px" }}
                    >
                      <CopyToClipboardComponent />
                    </h1>
                    <button className="sana-card-button d-flex justify-content-center mx-auto">
                      Activate
                    </button>
                  </div>
                </div>
                </div>
                <div className="cardBox m-2">
                <div
                  className="card " id="sana-card-id"
                  style={{ padding: "15px", margin: "10px" }}
                >
                  <img
                    className="card-img-top d-flex justify-content-center mx-auto"
                    src="https://thumb.tildacdn.com/tild3139-6436-4262-b730-373038306563/-/resize/400x/-/format/webp/adsbridge_logo.png"
                    alt="Card image cap"
                    style={{
                      height: "70px",
                      width: "80%",
                      backgroundPosition: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center mx-auto">
                      AdsBridge
                    </h5>
                    <p className="card-text d-flex justify-content-center mx-auto text-center">
                      15% off all plans <br /> except Starter Promo Code
                    </p>

                    <h1
                      className="d-flex justify-content-center"
                      style={{ fontSize: "25px" }}
                    >
                      <CopyToClipboardComponent />
                    </h1>
                    <button className="sana-card-button d-flex justify-content-center mx-auto">
                      Activate
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------Landing-Page-Builders---------------------------------- */}
          <div id="Landing-Page-Builders">
            <h1 style={{ margin: "50px", fontWeight: "700" }}>
              Landing Page Builders
            </h1>

            <div className="col-md-10 d-flex justify-content-start mx-auto">
              <div className=" card-deck">
                <div className="cardBox m-2">
              <div
                  className="card "
                  style={{ padding: "15px", margin: "10px" }}
                >
                  <img
                    className="card-img-top d-flex justify-content-center mx-auto"
                    src="https://static.tildacdn.com/tild3262-6364-4030-a232-393265333461/muvi-logo_1.svg"
                    alt="Card image cap"
                    style={{
                      height: "70px",
                      width: "80%",
                      backgroundPosition: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center mx-auto">
                      AdsBridge
                    </h5>
                    <p className="card-text d-flex justify-content-center mx-auto text-center">
                      15% off all plans <br /> except Starter Promo Code
                    </p>

                    <h1
                      className="d-flex justify-content-center"
                      style={{ fontSize: "25px" }}
                    >
                      <CopyToClipboardComponent />
                    </h1>
                    <button className="sana-card-button d-flex justify-content-center mx-auto">
                      Activate
                    </button>
                  </div>
                </div>
                </div>
                  <div className="cardBox m-2">
                <div
                  className="card "
                  style={{ padding: "15px", margin: "10px" }}
                >
                  <img
                    className="card-img-top d-flex justify-content-center mx-auto"
                    src="https://static.tildacdn.com/tild3262-6364-4030-a232-393265333461/muvi-logo_1.svg"
                    alt="Card image cap"
                    style={{
                      height: "70px",
                      width: "80%",
                      backgroundPosition: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center mx-auto">
                      AdsBridge
                    </h5>
                    <p className="card-text d-flex justify-content-center mx-auto text-center">
                      15% off all plans <br /> except Starter Promo Code
                    </p>

                    <h1
                      className="d-flex justify-content-center"
                      style={{ fontSize: "25px" }}
                    >
                      <CopyToClipboardComponent />
                    </h1>
                    <button className="sana-card-button d-flex justify-content-center mx-auto">
                      Activate
                    </button>
                  </div>
                </div>
                </div>
                <div className="cardBox m-2">
                <div
                  className="card "
                  style={{ padding: "15px", margin: "10px" }}
                >
                  <img
                    className="card-img-top d-flex justify-content-center mx-auto"
                    src="https://static.tildacdn.com/tild3262-6364-4030-a232-393265333461/muvi-logo_1.svg"
                    alt="Card image cap"
                    style={{
                      height: "70px",
                      width: "80%",
                      backgroundPosition: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center mx-auto">
                      AdsBridge
                    </h5>
                    <p className="card-text d-flex justify-content-center mx-auto text-center">
                      15% off all plans <br /> except Starter Promo Code
                    </p>

                    <h1
                      className="d-flex justify-content-center"
                      style={{ fontSize: "25px" }}
                    >
                      <CopyToClipboardComponent />
                    </h1>
                    <button className="sana-card-button d-flex justify-content-center mx-auto">
                      Activate
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------forums------------------------- */}

          <div id="Forums">
            <h1 style={{ margin: "50px", fontWeight: "700" }}>Forums</h1>

            <div className="col-md-10 d-flex justify-content-start mx-auto">
              <div className=" card-deck">
                <div className="cardBox m-2">
                <div
                  className="card "
                  style={{ padding: "15px", margin: "10px" }}
                >
                  <img
                    className="card-img-top d-flex justify-content-center mx-auto"
                    src="https://static.tildacdn.com/tild3262-6364-4030-a232-393265333461/muvi-logo_1.svg"
                    alt="Card image cap"
                    style={{
                      height: "70px",
                      width: "80%",
                      backgroundPosition: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center mx-auto">
                      AdsBridge
                    </h5>
                    <p className="card-text d-flex justify-content-center mx-auto text-center">
                      15% off all plans <br /> except Starter Promo Code
                    </p>

                    <h1
                      className="d-flex justify-content-center"
                      style={{ fontSize: "25px" }}
                    >
                      <CopyToClipboardComponent />
                    </h1>
                    <button className="sana-card-button d-flex justify-content-center mx-auto">
                      Activate
                    </button>
                  </div>
                </div>
                </div>
                <div className="cardBox m-2">
                <div
                  className="card "
                  style={{ padding: "15px", margin: "10px" }}
                >
                  <img
                    className="card-img-top d-flex justify-content-center mx-auto"
                    src="https://static.tildacdn.com/tild3262-6364-4030-a232-393265333461/muvi-logo_1.svg"
                    alt="Card image cap"
                    style={{
                      height: "70px",
                      width: "80%",
                      backgroundPosition: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center mx-auto">
                      AdsBridge
                    </h5>
                    <p className="card-text d-flex justify-content-center mx-auto text-center">
                      15% off all plans <br /> except Starter Promo Code
                    </p>

                    <h1
                      className="d-flex justify-content-center"
                      style={{ fontSize: "25px" }}
                    >
                      <CopyToClipboardComponent />
                    </h1>
                    <button className="sana-card-button d-flex justify-content-center mx-auto">
                      Activate
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* --------------------------Ott-Plateforms------------------------ */}
          <div id="OTT_Plateforms">
            <h1 style={{ margin: "50px", fontWeight: "700" }}>
              OTT Plateforms
            </h1>

            <div className="col-md-10 d-flex justify-content-start mx-auto">
              <div className=" card-deck">
              <div className="cardBox m-2">
                <div
                  className="card "
                  style={{ padding: "15px", margin: "10px" }}
                >
                  <img
                    className="card-img-top d-flex justify-content-center mx-auto"
                    src="https://static.tildacdn.com/tild3262-6364-4030-a232-393265333461/muvi-logo_1.svg"
                    alt="Card image cap"
                    style={{
                      height: "70px",
                      width: "80%",
                      backgroundPosition: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center mx-auto">
                      AdsBridge
                    </h5>
                    <p className="card-text d-flex justify-content-center mx-auto text-center">
                      15% off all plans <br /> except Starter Promo Code
                    </p>

                    <h1
                      className="d-flex justify-content-center"
                      style={{ fontSize: "25px" }}
                    >
                      <CopyToClipboardComponent />
                    </h1>
                    <button className="sana-card-button d-flex justify-content-center mx-auto">
                      Activate
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------tools--------------------------- */}

          <div id="Tools">
            <h1 style={{ margin: "50px", fontWeight: "700" }}>Tools</h1>

            <div className="col-md-10 d-flex justify-content-start mx-auto">
              <div className=" card-deck">
                <div className="cardBox m-2">
                <div
                  className="card"
                  style={{ padding: "15px", margin: "10px" }}
                >
                  <img
                    className="card-img-top d-flex justify-content-center mx-auto"
                    src="https://static.tildacdn.com/tild3262-6364-4030-a232-393265333461/muvi-logo_1.svg"
                    alt="Card image cap"
                    style={{
                      height: "70px",
                      width: "80%",
                      backgroundPosition: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center mx-auto">
                      AdsBridge
                    </h5>
                    <p className="card-text d-flex justify-content-center mx-auto text-center">
                      15% off all plans <br /> except Starter Promo Code
                    </p>

                    <h1
                      className="d-flex justify-content-center"
                      style={{ fontSize: "25px" }}
                    >
                      <CopyToClipboardComponent />
                    </h1>
                    <button className="sana-card-button d-flex justify-content-center mx-auto">
                      Activate
                    </button>
                  </div>
                </div>
                </div>
                <div className="cardBox m-2">
                <div
                  className="card" id="sana-full-card"
                  style={{ padding: "15px", margin: "10px" }}
                >
                  <img
                    className="card-img-top d-flex justify-content-center mx-auto"
                    src="https://static.tildacdn.com/tild3262-6364-4030-a232-393265333461/muvi-logo_1.svg"
                    alt="Card image cap"
                    style={{
                      height: "70px",
                      width: "80%",
                      backgroundPosition: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center mx-auto">
                      AdsBridge
                    </h5>
                    <p className="card-text d-flex justify-content-center mx-auto text-center">
                      15% off all plans <br /> except Starter Promo Code
                    </p>

                    <h1
                      className="d-flex justify-content-center"
                      style={{ fontSize: "25px" }}
                    >
                      <CopyToClipboardComponent />
                    </h1>
                    <button className="sana-card-button d-flex justify-content-center mx-auto">
                      Activate
                    </button>
                  </div>
                </div>
                </div>
                <div className="cardBox m-2">
                <div
                  className="card "
                  style={{ padding: "15px", margin: "10px" }}
                >
                  <img
                    className="card-img-top d-flex justify-content-center mx-auto"
                    src="https://static.tildacdn.com/tild3262-6364-4030-a232-393265333461/muvi-logo_1.svg"
                    alt="Card image cap"
                    style={{
                      height: "70px",
                      width: "80%",
                      backgroundPosition: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center mx-auto">
                      AdsBridge
                    </h5>
                    <p className="card-text d-flex justify-content-center mx-auto text-center">
                      15% off all plans <br /> except Starter Promo Code
                    </p>

                    <h1
                      className="d-flex justify-content-center"
                      style={{ fontSize: "25px" }}
                    >
                      <CopyToClipboardComponent />
                    </h1>
                    <button className="sana-card-button d-flex justify-content-center mx-auto">
                      Activate
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------Web Analytics---------------------- */}

          <div id="Web_Analytics">
            <h1 style={{ margin: "50px", fontWeight: "700" }}>
            Web Analytics
            </h1>

            <div className="col-md-10 d-flex justify-content-start mx-auto">
              <div className=" card-deck">
                <div className="cardBox m-2">
                <div
                  className="card "
                  style={{ padding: "15px",  margin: "10px" }}
                >
                  <img
                    className="card-img-top d-flex justify-content-center mx-auto"
                    src="https://thumb.tildacdn.com/tild3139-6436-4262-b730-373038306563/-/resize/400x/-/format/webp/adsbridge_logo.png"
                    alt="Card image cap"
                    style={{
                      height: "70px",
                      width: "80%",
                      backgroundPosition: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center mx-auto">
                      AdsBridge
                    </h5>
                    <p className="card-text d-flex justify-content-center mx-auto text-center">
                      15% off all plans <br /> except Starter Promo Code
                    </p>

                    <h1
                      className="d-flex justify-content-center"
                      style={{ fontSize: "25px" }}
                    >
                      <CopyToClipboardComponent />
                    </h1>
                    <button className="sana-card-button d-flex justify-content-center mx-auto">
                      Activate
                    </button>
                  </div>
                </div>
                </div>

                <div className="cardBox m-2">
                <div
                  className="card "
                  style={{ padding: "15px", margin: "10px" }}
                >
                  <img
                    className="card-img-top d-flex justify-content-center mx-auto"
                    src="https://thumb.tildacdn.com/tild3139-6436-4262-b730-373038306563/-/resize/400x/-/format/webp/adsbridge_logo.png"
                    alt="Card image cap"
                    style={{
                      height: "70px",
                      width: "80%",
                      backgroundPosition: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center mx-auto">
                      AdsBridge
                    </h5>
                    <p className="card-text d-flex justify-content-center mx-auto text-center">
                      15% off all plans <br /> except Starter Promo Code
                    </p>

                    <h1
                      className="d-flex justify-content-center"
                      style={{ fontSize: "25px" }}
                    >
                      <CopyToClipboardComponent />
                    </h1>
                    <button className="sana-card-button d-flex justify-content-center mx-auto">
                      Activate
                    </button>
                  </div>
                </div>
                </div>
                <div className="cardBox m-2">
                <div
                  className="card "
                  style={{ padding: "15px", margin: "10px" }}
                >
                  <img
                    className="card-img-top d-flex justify-content-center mx-auto"
                    src="https://thumb.tildacdn.com/tild3139-6436-4262-b730-373038306563/-/resize/400x/-/format/webp/adsbridge_logo.png"
                    alt="Card image cap"
                    style={{
                      height: "70px",
                      width: "80%",
                      backgroundPosition: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center mx-auto">
                      AdsBridge
                    </h5>
                    <p className="card-text d-flex justify-content-center mx-auto text-center">
                      15% off all plans <br /> except Starter Promo Code
                    </p>

                    <h1
                      className="d-flex justify-content-center"
                      style={{ fontSize: "25px" }}
                    >
                      <CopyToClipboardComponent />
                    </h1>
                    <button className="sana-card-button d-flex justify-content-center mx-auto">
                      Activate
                    </button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------finish cards------------------------------- */}
       
        </div>
      </div>
    </div>
  );
};

export default PublisherFreebies;

{
  /* <div className="tn-atom" onClick={event => { copytext21(".copy-txt-21 .tn-atom"); }} /> */
}
