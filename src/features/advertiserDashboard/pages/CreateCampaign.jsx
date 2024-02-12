import React, { useReducer, useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { FaUserEdit } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { GiTargeted } from "react-icons/gi";
import { TbSettingsCog } from "react-icons/tb";
import Pricings from "../components/Create-Campaign/Pricings";
import Targeting from "../components/Create-Campaign/Targeting";
import Advsetting from "../components/Create-Campaign/AdvanceSettings";
import GeneralPreview from "../components/Create-Campaign/GeneralPreview";
import PricingsPreview from "../components/Create-Campaign/PricingsPreview";
import TargetingsPreview from "../components/Create-Campaign/TargetingsPreview";
import AdvSettingsPreview from "../components/Create-Campaign/AdvSettingsPreview";
import PreviewBtns from "../components/Create-Campaign/PreviewBtns";
import General from "../components/Create-Campaign/General";

const CreateCampaign = () => {
  const steps=["General", "Pricings", "Targetings", "Advance Settings"];
  const campaignDatata = {
    general: { adFormat: "Banner Ad", feed: "All", afterVerification: "Start",imageSize: "300x250"},
    pricings: { pricingModel: "CPM" },
    targetings: {},
    advSettings: { proxyFilter: "Allow", buyingType: "Smoothly" },
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_GENERAL_DATA":
        return { ...state, general: action.payload };
      case "ADD_PRICING_DATA":
        return { ...state, pricings: action.payload };
      case "ADD_TARGETING_DATA":
        return { ...state, targetings: action.payload };
      case "ADD_ADVSETTING_DATA":
        return { ...state, advSettings: action.payload };
      default:
        return state;
    }
  };

  const handlePricingData = (data) => {
    dispatch({ type: "ADD_PRICING_DATA", payload: data });
  };

  const handleGeneralData = (data) => {
    dispatch({ type: "ADD_GENERAL_DATA", payload: data });
  };
  const handleTargetingData = (data) => {
    dispatch({ type: "ADD_TARGETING_DATA", payload: data });
  };
  const handleAdvSettingData = (data) => {
    dispatch({ type: "ADD_ADVSETTING_DATA", payload: data });
  };
  const [state, dispatch] = useReducer(reducer, campaignDatata);
  const [activeStep, setActiveStep] = useState(1);
 
  const StepIconComponent = (index) => {
    switch (index) {
      case 0:
        return GeneralIcon;
      case 1:
        return PricingsIcon;
      case 2:
        return TargetingsIcon;

      case 3:
        return AdvanceSettings;

      default:
        return GeneralIcon;
    }
  };
  const GeneralIcon = () => {
    return (
      <div
        onClick={() => setActiveStep(1)}
        className={`cursor-pointer flex gap-2 align-items-center  w-40 justify-center !items-center py-2 rounded-t-md  text-sm ${
          activeStep == 1
            ? "bg-[#71065D] text-white"
            : "bg-gray-200 text-gray-500"
        }`}
      >
        <FaUserEdit
          size={16}
          className={`${activeStep == 1 ? "text-white" : "text-gray-400"}`}
        />
        General
        {/* {activeStep >= 2 && (
          <span className="rounded-full p-[2px] bg-green-700 text-white">
            <TiTick size={12} />
          </span>
        )} */}
      </div>
    );
  };
  const PricingsIcon = () => {
    return (
      <div
      onClick={() => setActiveStep(2)}
        className={`cursor-pointer flex gap-2 align-items-center  w-40 justify-center !items-center py-2 rounded-t-md  text-sm ${
          activeStep == 2
            ? "bg-[#71065D] text-white"
            : "bg-gray-200 text-gray-500"
        }`}
      >
        <IoMdPricetags
          size={16}
          className={`${activeStep == 2 ? "text-white" : "text-gray-400"}`}
        />
        Pricings
        {/* {activeStep == 3 && (
          <span className="rounded-full p-[2px] bg-green-700 text-white">
            <TiTick size={12} />
          </span>
        )} */}
      </div>
    );
  };
  const TargetingsIcon = () => {
    return (
      <div
        onClick={() => setActiveStep(3)}
        className={`cursor-pointer flex gap-2 align-items-center  w-40 justify-center !items-center py-2 rounded-t-md  text-sm ${
          activeStep == 3
            ? "bg-[#71065D] text-white"
            : "bg-gray-200 text-gray-500"
        }`}
      >
        <GiTargeted
          size={16}
          className={`${activeStep == 3 ? "text-white" : "text-gray-400"}`}
        />
        Targetings
        {/* {activeStep >= 4 && (
          <span className="rounded-full p-[2px] bg-green-700 text-white">
            <TiTick size={12} />
          </span>
        )} */}
      </div>
    );
  };

  const AdvanceSettings = () => {
    return (
      <div
      onClick={() => setActiveStep(4)}
        className={`cursor-pointer flex gap-2 align-items-center  w-40 justify-center !items-center py-2 rounded-t-md  text-sm ${
          activeStep == 4
            ? "bg-[#71065D] text-white"
            : "bg-gray-200 text-gray-500"
        }`}
      >
        <TbSettingsCog
          size={16}
          className={`${activeStep == 4 ? "text-white" : "text-gray-400"}`}
        />
        Advance Settings
      </div>
    );
  };
  return (
    <div className="bg-[#fafafa] px-12 py-4 m-0 h-auto flex gap-4 ">
      <section className="w-[70%]">
        <h2 className="text-black font-medium text-xl ml-2">
          Create Campaign
        </h2>
        <Stepper activeStep={activeStep} className="bg-transparent">
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};

           
            return (
              <Step {...stepProps} key={index}>
                <StepLabel
                  {...labelProps}
                  StepIconComponent={StepIconComponent(index)}
                ></StepLabel>
              </Step>
            );
          })}
        </Stepper>

        <div>
          
          {activeStep == 1 && (
            <General
              generalData={state.general}
              handleGeneralData={handleGeneralData}
              button={activeStep}
              func={setActiveStep}
            />
          )}
          {activeStep == 2 && (
            <Pricings
              pricings={state.pricings}
              handlePricingData={handlePricingData}
              button={activeStep}
              func={setActiveStep}
            />
          )}
          {activeStep == 3 && (
            <Targeting
              targetings={state.targetings}
              handleTargetingData={handleTargetingData}
              button={activeStep}
              func={setActiveStep}
             
            />
          )}
          {activeStep == 4 && (
            <Advsetting
              advSettings={state.advSettings}
              handleAdvSettingData={handleAdvSettingData}
              button={activeStep}
              func={setActiveStep}
              
            />
          )}

          <div className="d-flex justify-content-center mt-3 "></div>
        </div>
      </section>
      {/* Campaign Summary */}
      <section className="w-[30%]">
        <h2 className="text-black font-medium text-xl ml-4 mb-4 text-center">
          Campaign Summary
        </h2>
        <div className="space-y-4">
          <GeneralPreview generalData={state.general} setActiveStep={setActiveStep}/>
          <PricingsPreview pricingData={state.pricings} setActiveStep={setActiveStep} />
          <TargetingsPreview targetingData={state.targetings} setActiveStep={setActiveStep} />
          <AdvSettingsPreview advSettingData={state.advSettings} setActiveStep={setActiveStep} />
          <PreviewBtns />
        </div>
      </section>
    </div>
  );
};

export default CreateCampaign;
