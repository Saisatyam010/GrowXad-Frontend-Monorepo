import React from "react";

function Referrals() {
  const Sonali =
    '<a href=""><img alt="banner" src="https://landings-cdn.adsterratech.com/referralBanners/png/120%20x%20600%20px.png" /></a>';
  return (
    <div style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        <div className="pb-5 my-5 pt-4 bg-white text-center">
          <h2>Invite link</h2>
          <p className="pt-5 pb-4">
            Refer new publishers to Adsterra Network and earn 5% of their
            revenue lifetime! The more people you refer, the more income you
            get.
          </p>
          <button className="btn btn-success">GENERATE INVITE</button>
        </div>
        <div className="bg-white text-center  pb-5 my-5 pt-4">
          <h2>Choose a Banner</h2>
          <p>
            Download the banners that suit you the most or copy them in code.
            Both static and animated versions are available.
          </p>
          <div className="px-md-5  mx-md-5">
            <div className="container px-md-5  mx-md-5">
              <div className="row px-5">
                <div className="col-md-6 p-md-4">
                  <div className="d-flex pt-4">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        PNG
                      </label>
                    </div>  &nbsp; &nbsp;
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                      <label class="form-check-label" for="flexRadioDefault2">
                        GIF
                      </label>
                    </div>
                  </div>

                  <div className="my-2">
                    <select class="form-select" aria-label="Default select example">
                      <option selected>PNG 80x30 px</option>
                      <option value="1">PNG 120x60 px</option>
                      <option value="2">PNG 120x150 px</option>
                      <option value="3">PNG 120x300 px</option>

                      <option value="1">PNG 120x600 px</option>
                      <option value="2">PNG 160x90 px</option>
                      <option value="3">PNG 160x600 px</option>


                      <option value="1">PNG 200x200 px</option>
                      <option value="2">PNG 250x250 px</option>
                      <option value="3">PNG 200x350 px</option>
                    </select>
                  </div>

                  <div class="d-grid gap-2">
                    <button class="btn text-white" style={{ backgroundColor: '#73035b' }} type="button">DOWNLOAD BANNER</button>
                  </div>


                  <div className="pt-4">
                    <textarea
                      className="p-3"
                      style={{
                        width: "100%",
                        height: "120px",
                        border: "1px solid grey",
                      }}
                    >
                      &lt;a href=""&gt;&lt;img alt="banner"
                      src="https://landings-cdn.adsterratech.com/referralBanners/png/120%20x%20600%20px.png"
                      /&gt;&lt;/a&gt;
                    </textarea>
                  </div>

                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center pt-md-0 pt-4">
                  <img src="https://landings-cdn.adsterratech.com/referralBanners/gif/120x60_adsterra_reff.gif" alt="" />
                </div>
              </div>
              {/* <code className="w-50">
                {Sonali}
            </code> */}
            </div>
          </div>

          <p className="pt-5">
            Place the banners on your website with your referral link. For more
            information see our blog.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Referrals;
