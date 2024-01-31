import React, { useState } from "react";

const SocialBarAds = () => {
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
          <div
            style={{
              position: "relative",
              paddingTop: "56.25%",
              width: "100%",
            }}
          >
            <iframe
              src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/c5c248ca5ea01777e3f4cab7b89e6684/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fc5c248ca5ea01777e3f4cab7b89e6684%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
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
        {mobile === 2 && (
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/c7fc7e89e3cbf5dc8c4ad59e8c04565c/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fc7fc7e89e3cbf5dc8c4ad59e8c04565c%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
              style={{
                border: "none",
                position: "absolute",
                top: 0,
                left: 0,
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
        <button className="sana-getCode">Get Banner code</button>
      </div>
    </>
  );
};

export default SocialBarAds;
