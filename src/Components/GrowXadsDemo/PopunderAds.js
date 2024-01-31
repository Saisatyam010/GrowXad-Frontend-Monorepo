import React, { useState } from "react";

const ImageAnimation = () => {
  const [mobile, setMobile] = useState(1);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const handleMobile = (TabMobile) => {
    setMobile(TabMobile);
  };

  const onAnimationEnd = () => {
    setAnimationPlayed(true);
  };

  return (
    <>
      <div className="sana_main_pop">
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

        {mobile === 1 && (
          <div className="row">
            <div className="col-md-12 ">
              <div className="d-flex justify-content-center sana_img_pop_main ">
                <img
                  className="sana_pop_img-style sana_img_fix "
                  id=""
                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/a9961a4c-b908-4e76-55ef-4dd0ff6a0900/public"
                  alt="Fixed Image"
                />

                <img
                  className={`sana_pop_img-style sana-image ${
                    animationPlayed ? "image-hidden" : "sana-image-visible"
                  }`}
                  src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/c6535ff0-0e80-4af4-ce12-d9b700ead600/public"
                  alt="Moving Image"
                  onAnimationEnd={onAnimationEnd}
                />
              </div>
            </div>
          </div>
        )}

        {mobile === 2 && (
           <div  className="mx-auto d-flex justify-content-center text-center" style={{ position: 'relative', paddingTop: '56.25%', margin: 'auto' }}>
           <iframe
             src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/4754f42c5f87809a1a383135ad991bfe/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2F4754f42c5f87809a1a383135ad991bfe%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
             style={{
               border: 'none',
               position: 'absolute',
               top: '0',
               left: '0',
               height: '50%',
               width: '50%',
               textAlign:"center",
               justifyContent:"center"
             }}
             className="mx-auto d-flex justify-content-center text-center"
             allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
             allowFullScreen
             title="video-player"
           ></iframe>
         </div>
        )}
        <div className="sana-bottom-button mb-5">
          <button className="sana-Launch-Camp">Launch campaign</button>
          <button className="sana-getCode">Get Popunder code</button>
        </div>
      </div>
    </>
  );
};

export default ImageAnimation;
