import React, { useReducer, useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";


import { FaUserEdit } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { GiTargeted } from "react-icons/gi";
import { SiDecapcms } from "react-icons/si";
import { TbSettingsCog } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import Pricings from "../components/Pricings";
import Targeting from "../components/Targeting";
import Capping_limit from "../components/Capping_limit";
import Advsetting from "../components/Advsetting";
import GeneralPreview from "../components/GeneralPreview";
import PricingsPreview from "../components/PricingsPreview";
import TargetingsPreview from "../components/TargetingsPreview";
import AdvSettingsPreview from "../components/AdvSettingsPreview";
// import CappingLimit from "../components/Capping_limit";
import PreviewBtns from "../components/PreviewBtns";
import General from "../components/General";


function getSteps() {
  return ["General", "Pricings", "Targetings", "Advance Settings"];
}



const CreateCampaign = () => {
  const campaignDatata = {
    general: { adFormat: "In Page Push Ad", feed: "All", afterVerification: "Start",imageSize: "300x250"},
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
  console.log(state, "state");
  console.log(state.pricings, "campaignDatata.pricings");
  const [campaignData, setCampaignData] = useState({});
  const [pricingData, setPricingData] = useState({});
  const [targetingData, setTargetingData] = useState({});
  const [advSettingData, setAdvSettingData] = useState({});

  const [activeStep, setActiveStep] = useState(1);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  // const isStepOptional = (step) => {
  //   return step === 1 || step === 2;
  // };

  console.log(campaignData, "campaignData");
  console.log(pricingData, "pricingData");
  console.log(targetingData, "targetingData");
  console.log(advSettingData, "advSettingData");

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  
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
        className={`flex gap-2 align-items-center  w-40 justify-center !items-center py-2 rounded-t-md  text-sm ${
          activeStep >= 1
            ? "bg-[#71065D] text-white"
            : "bg-gray-200 text-gray-500"
        }`}
      >
        <FaUserEdit
          size={16}
          className={`${activeStep >= 1 ? "text-white" : "text-gray-400"}`}
        />
        General
        {activeStep >= 2 && (
          <span className="rounded-full p-[2px] bg-green-700 text-white">
            <TiTick size={12} />
          </span>
        )}
      </div>
    );
  };
  const PricingsIcon = () => {
    return (
      <div
        className={`flex gap-2 align-items-center  w-40 justify-center !items-center py-2 rounded-t-md  text-sm ${
          activeStep >= 2
            ? "bg-[#71065D] text-white"
            : "bg-gray-200 text-gray-500"
        }`}
      >
        <IoMdPricetags
          size={16}
          className={`${activeStep >= 2 ? "text-white" : "text-gray-400"}`}
        />
        Pricings
        {activeStep >= 3 && (
          <span className="rounded-full p-[2px] bg-green-700 text-white">
            <TiTick size={12} />
          </span>
        )}
      </div>
    );
  };
  const TargetingsIcon = () => {
    return (
      <div
        className={`flex gap-2 align-items-center  w-40 justify-center !items-center py-2 rounded-t-md  text-sm ${
          activeStep >= 3
            ? "bg-[#71065D] text-white"
            : "bg-gray-200 text-gray-500"
        }`}
      >
        <GiTargeted
          size={16}
          className={`${activeStep >= 3 ? "text-white" : "text-gray-400"}`}
        />
        Targetings
        {activeStep >= 4 && (
          <span className="rounded-full p-[2px] bg-green-700 text-white">
            <TiTick size={12} />
          </span>
        )}
      </div>
    );
  };

  const AdvanceSettings = () => {
    return (
      <div
        className={`flex gap-2 align-items-center  w-40 justify-center !items-center py-2 rounded-t-md  text-sm ${
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
        <h2 className="text-black font-semibold text-xl ml-4">
          Create Campaign
        </h2>
        <Stepper activeStep={activeStep} className="bg-transparent">
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
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
              targetingData={targetingData}
              setTargetingData={setTargetingData}
            />
          )}
          {activeStep == 4 && (
            <Advsetting
              advSettings={state.advSettings}
              handleAdvSettingData={handleAdvSettingData}
              button={activeStep}
              func={setActiveStep}
              advSettingData={advSettingData}
              setAdvSettingData={setAdvSettingData}
            />
          )}

          <div className="d-flex justify-content-center mt-3 "></div>
        </div>
      </section>
      {/* Campaign Summary */}
      <section className="w-[30%]">
        <h2 className="text-black font-semibold text-xl ml-4 mb-4 text-center">
          Campaign Summary
        </h2>
        <div className="space-y-4">
          <GeneralPreview generalData={state.general}/>
          <PricingsPreview pricingData={state.pricings} />
          <TargetingsPreview targetingData={state.targetings} />
          <AdvSettingsPreview advSettingData={state.advSettings} />
          <PreviewBtns />
        </div>
      </section>
    </div>
  );
};

export default CreateCampaign;
