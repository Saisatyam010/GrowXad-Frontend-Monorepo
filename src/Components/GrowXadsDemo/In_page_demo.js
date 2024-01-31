import React, { useState } from "react";

const In_page_demo = () => {
  const [mobile, setMobile] = useState(1);

  const handleMobile = (TabMobile) => {
    setMobile(TabMobile);
  };

  return (
    <>
      <div className="row">
        <div className="sana-mobile-handle col-md-3 d-flex justify-content-center text-center mx-auto mt-4">
          <button
            onClick={() => handleMobile(1)}
            className={mobile === 1 ? "active" : ""}
            id="sana-mobile-tab-button-desctop"
          >
            Desctop view
          </button>
          <button
            onClick={() => handleMobile(2)}
            className={mobile === 2 ? "active" : ""}
            id="sana-mobile-tab-button-mobile"
          >
            Mobile view
          </button>
        </div>
      </div>
      {/* -------------------------------------------------------- */}
      <div className="container">
        {mobile === 1 && (
          <div className="d-flex justify-content-center align-items-center">
            <div className="row">
              <div
                className="col-md-9 mt-5"
                style={{
                  // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  width: "980px",
                }}
              >
                <div style={{ position: "relative", paddingTop: "56.25%" }}>
                  <iframe
                    src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/a32a80284954e7c07eb6b48291dd01f4/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fa32a80284954e7c07eb6b48291dd01f4%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
                    style={{
                      border: "none",
                      position: "absolute",
                      top: "0",
                      left: "0",
                      height: "100%",
                      width: "100%",
                    }}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen
                    title="video-player"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}

        {mobile === 2 && (
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/93d28fbb22dcbf0cebdb0f14e5a552d0/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2F93d28fbb22dcbf0cebdb0f14e5a552d0%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
              style={{
                border: "none",
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%",
                width: "100%",
              }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen
              title="video-player"
            ></iframe>
          </div>
        )}
      </div>
      {/* ----------------------------------------- */}
      <div className="sana-bottom-button mb-5">
        <button className="sana-Launch-Camp">Launch campaign</button>
        <button className="sana-getCode">Get In page Push code</button>
      </div>
    </>
  );
};

export default In_page_demo;
