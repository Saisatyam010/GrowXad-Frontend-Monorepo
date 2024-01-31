import Layout from '../Layout/Layout'


import React, { useState } from "react";
import "./GrowXadsDemo.css";

import PopunderAds from "./PopunderAds";
import Interstitial_Ads from "./Interstitial_Ads";
import NativeAds from "./NativeAds";
import BannerAds from "./BannerAds";
import Direct_Link_demo from "./Direct_Link_demo";
import In_page_demo from "./In_page_demo";


export const GrowXadsDemo = () => {
    const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

    return (
        <Layout>    
           <div>
      <h1 className="text-center mt-5"> GROWX ADS DEMO</h1>
      <p className="col-7 d-flex text-center  mt-5 fs-4 mx-auto">
        Use the slider below to switch between the demonstration of the ad
        formats on desktop and mobile devices. Choose the best ads for your
        offer or website.
      </p>
      <div className="sana-tab-buttons col-md-7 mx-auto mt-5">
        <button
          onClick={() => handleTabClick(1)}
          className={activeTab === 1 ? "active" : ""}
          id="sana-tab-button"
        >
          Popunder
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={activeTab === 2 ? "active" : ""}
          id="sana-tab-button"
        >
          Interstitial Ads
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={activeTab === 3 ? "active" : ""}
          id="sana-tab-button"
        >
          Native Ads
        </button>
        <button
          onClick={() => handleTabClick(4)}
          className={activeTab === 4 ? "active" : ""}
          id="sana-tab-button"
        >
          Banners
        </button>

      

        <button
          onClick={() => handleTabClick(5)}
          className={activeTab === 5 ? "active" : ""}
          id="sana-tab-button"
        >
        Direct Link
        </button>
          <button
          onClick={() => handleTabClick(6)}
          className={activeTab === 6 ? "active" : ""}
          id="sana-tab-button"
        >
          In-Page Push Ads
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 1 && (
          <div className="justify-content-center align-items-center  ">
            <PopunderAds />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <Interstitial_Ads />
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <NativeAds />
          </div>
        )}
        {activeTab === 4 && (
          <div>
            <BannerAds />
          </div>
        )}

      


        {activeTab === 5 && (
          <div>
            <Direct_Link_demo/>
          </div>
        )}
        
        {activeTab === 6 && (
          <div>
            <In_page_demo />
          </div>
        )}
      </div>
    </div>
        </Layout>

    )
}
