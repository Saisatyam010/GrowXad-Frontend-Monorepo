import React, { useState } from "react";

const Interstitial_Ads = () => {
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
                  width: "600px",
                }}
              >
                <div style={{ position: "relative", paddingTop: "56.25%" }}>
                  <iframe
                    src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/a2dd824559b190fa88540154a739a623/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fa2dd824559b190fa88540154a739a623%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
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
           <div style={{ position: 'relative', paddingTop: '56.25%' }}>
           <iframe
             src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/731619ff3f0abaa009c6f38227d12bea/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2F731619ff3f0abaa009c6f38227d12bea%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
             style={{
               border: 'none',
               position: 'absolute',
               top: '0',
               left: '0',
               height: '100%',
               width: '100%',
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
        <button className="sana-getCode">Get Interstitial Ads code</button>
      </div>
    </>
  );
};

export default Interstitial_Ads;
