import React from "react";
import Slider from "react-slick";


const BenefitSlider = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}`;
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container px-5 py-5 my-5">
      <div className="SSA_Ad_Benefits_font2rem_Section2">
        Latest in the blog
      </div>
      <Slider {...settings}>
        <div className="px-1">
       
          <label className="sana-label">
            <input type="checkbox" />
            <div className="flip-card">
              <div className="front">
                <img
                  src="https://assets-global.website-files.com/614b3e8cafbd9789234c277e/64f8a2c21096201030ac1700_Facebook%20advertising.jpg"
                  alt=""
                  style={{height:"180px"}}
                />
                <h2>
                  Interstitial Ads by Adsterra: Grab All Target Views and Clicks
                </h2>
                <h5>Updated {formattedDate}</h5>
                <p>Learn More → </p>
              </div>
              <div className="back">
                <h1>Latest in the blog</h1>
                <hr />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since forever.
                </p>
                <hr />
                <p>back →</p>
              </div>
            </div>
          </label>
        </div>
        <div className="px-1">
          <label className="sana-label">
            <input type="checkbox" />
            <div className="flip-card">
              <div className="front">
                <img
                  src="https://assets-global.website-files.com/614b3e8cafbd9789234c277e/64f8a2c21096201030ac1700_Facebook%20advertising.jpg"
                  alt=""
                />
                <h2>
                  Interstitial Ads by Adsterra: Grab All Target Views and Clicks
                </h2>
                <h5>Updated {formattedDate}</h5>
                <p>Learn More → </p>
              </div>
              <div className="back">
                <h1>Latest in the blog</h1>
                <hr />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since forever.
                </p>
                <hr />
                <p>back →</p>
              </div>
            </div>
          </label>
        </div>
        <div className="px-1">
          <label className="sana-label">
            <input type="checkbox" />
            <div className="flip-card">
              <div className="front">
                <img
                  src="https://assets-global.website-files.com/614b3e8cafbd9789234c277e/64f8a2c21096201030ac1700_Facebook%20advertising.jpg"
                  alt=""
                />
                <h2>
                  Interstitial Ads by Adsterra: Grab All Target Views and Clicks
                </h2>
                <h5>Updated {formattedDate}</h5>
                <p>Learn More → </p>
              </div>
              <div className="back">
                <h1>Latest in the blog</h1>
                <hr />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since forever.
                </p>
                <hr />
                <p>back →</p>
              </div>
            </div>
          </label>
        </div>
        <div className="px-1">
          <label className="sana-label">
            <input type="checkbox" />
            <div className="flip-card">
              <div className="front">
                <img
                  src="https://assets-global.website-files.com/614b3e8cafbd9789234c277e/64f8a2c21096201030ac1700_Facebook%20advertising.jpg"
                  alt=""
                />
                <h2>
                  Interstitial Ads by Adsterra: Grab All Target Views and Clicks
                </h2>
                <h5>Updated {formattedDate}</h5>
                <p>Learn More →</p>
              </div>
              <div className="back">
                <h1>Latest in the blog</h1>
                <hr />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since forever.
                </p>
                <hr />
                <p>back →</p>
              </div>
            </div>
          </label>
        </div>
        <div className="px-1">
          <label className="sana-label">
            <input type="checkbox" />
            <div className="flip-card">
              <div className="front">
                <img
                  src="https://assets-global.website-files.com/614b3e8cafbd9789234c277e/64f8a2c21096201030ac1700_Facebook%20advertising.jpg"
                  alt=""
                />
                <h2>
                  Interstitial Ads by Adsterra: Grab All Target Views and Clicks
                </h2>
                <h5>Updated {formattedDate}</h5>
                <p>Learn More → </p>
              </div>
              <div className="back">
                <h1>Latest in the blog</h1>
                <hr />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since forever.
                </p>
                <hr />
                <p>back →</p>
              </div>
            </div>
          </label>
        </div>
        <div className="px-1">
          <label className="sana-label">
            <input type="checkbox" />
            <div className="flip-card">
              <div className="front">
                <img
                  src="https://assets-global.website-files.com/614b3e8cafbd9789234c277e/64f8a2c21096201030ac1700_Facebook%20advertising.jpg"
                  alt=""
                />
                <h2>
                  Interstitial Ads by Adsterra: Grab All Target Views and Clicks
                </h2>
                <h5>Updated {formattedDate}</h5>
                <p>Learn More → </p>
              </div>
              <div className="back">
                <h1>Latest in the blog</h1>
                <hr />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since forever.
                </p>
                <hr />
                <p>back →</p>
              </div>
            </div>
          </label>
        </div>
      </Slider>
    </div>
  );
}

export default BenefitSlider