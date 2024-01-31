import React, { useState, useRef } from "react";
import Select from "react-select";
import "./CreateCampaign2.css";
import { CreateCampaignAPI } from "../../../../AllApi/AllAuthApi";
import { ToastContainer, toast } from "react-toastify";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../DashboardHeader/Theme";

function CreateCampaign2() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const [preview, setPreview] = React.useState(true);
  const [targeting, setTargeting] = React.useState(false);
  const [capping, setcapping] = React.useState(false);
  const [setting, setsetting] = React.useState(false);
  const [allData, setAllData] = React.useState([]);

  /*------_____________________________----General option---______________________________----*/
  const connectionType = [
    {
      value: "All traffic",
      label: "All traffic",
      name: "generalConnectionType",
    },
    { value: "3G", label: "3G", name: "generalConnectionType" },
    { value: "Wi-Fi", label: "Wi-Fi", name: "generalConnectionType" },
  ];
  const pricingType = [
    { value: "CPM", label: "CPM", name: "pricingType" },
    { value: "CPA", label: "CPA", name: "pricingType" },
    { value: "CPC", label: "CPC", name: "pricingType" },
  ];
  const adUnitCategory = [
    { value: "Popunder", label: "Popunder", name: "adUnitCategory" },
    { value: "Native", label: "Native", name: "adUnitCategory" },
    { value: "Banner Ad", label: "Banner Ad", name: "adUnitCategory" },
    { value: "In-Page Push", label: "In-Page Push", name: "adUnitCategory" },
    { value: "Interstitial", label: "Interstitial", name: "adUnitCategory" },
  ];
  const afterVerification = [
    { value: "Start", label: "Start", name: "afterVerification" },
    { value: "Scheduled", label: "Scheduled", name: "afterVerification" },
    {
      value: "Keep inactive",
      label: "Keep inactive",
      name: "afterVerification",
    },
  ];

  const deviceFormat = [
    { value: "Mobile", label: "Mobile", name: "deviceFormat" },
    { value: "Desktop", label: "Desktop", name: "deviceFormat" },
    { value: "Tab", label: "Tab", name: "deviceFormat" },
  ];
  const trafficType = [
    {
      value: "Mainstream + Adult (All)",
      label: "Mainstream + Adult (All)",
      name: "trafficType",
    },
    { value: "Mainstream", label: "Mainstream", name: "trafficType" },
    { value: " Adult", label: "Adult", name: "trafficType" },
  ];
  const countries = [
    { value: "all", label: "All Countries", name: "countries" },
    { value: "AF", label: "Afghanistan", name: "countries" },
    { value: "AX", label: "Aland Islands", name: "countries" },
    { value: "AL", label: "Albania", name: "countries" },
    { value: "DZ", label: "Algeria", name: "countries" },
    { value: "AS", label: "American Samoa", name: "countries" },
    { value: "AD", label: "Andorra", name: "countries" },
    { value: "AO", label: "Angola", name: "countries" },
    { value: "AI", label: "Anguilla", name: "countries" },
    { value: "AQ", label: "Antarctica", name: "countries" },
    { value: "AG", label: "Antigua and Barbuda", name: "countries" },
    { value: "AR", label: "Argentina", name: "countries" },
    { value: "AM", label: "Armenia", name: "countries" },
    { value: "AW", label: "Aruba", name: "countries" },
    { value: "AU", label: "Australia", name: "countries" },
    { value: "AT", label: "Austria", name: "countries" },
    { value: "AZ", label: "Azerbaijan", name: "countries" },
    { value: "BS", label: "Bahamas", name: "countries" },
    { value: "BH", label: "Bahrain", name: "countries" },
    { value: "BD", label: "Bangladesh", name: "countries" },
    { value: "BB", label: "Barbados", name: "countries" },
    { value: "BY", label: "Belarus", name: "countries" },
    { value: "BE", label: "Belgium", name: "countries" },
    { value: "BZ", label: "Belize", name: "countries" },
    { value: "BJ", label: "Benin", name: "countries" },
    // ... (Add other countries in a similar format)
    { value: "YE", label: "Yemen", name: "countries" },
    { value: "ZM", label: "Zambia", name: "countries" },
    { value: "ZW", label: "Zimbabwe", name: "countries" },
  ];

  const [previewImages, setPreviewImages] = useState([]); // For previewing images before upload
  const [generalData, setGeneralData] = useState({
    campaignName: "",
    generalConnectionType: "",
    pricingType: "",
    adUnitCategory: "",
    trafficType: [],
    landingUrl: "",
    deviceFormat: [],
    countries: [],
    general_totalBudget: "",
    general_dailyBudget: "",
    afterVerification: "",
    general_AgreementChecked: false,
    createcampaign_images: [],
  });
  const [CountriesData, setCountriesData] = useState([]);
  const handleImageSet = (e) => {
    console.log(e);
    const fileArray = Array.from(e.target.files);
    //sert preview and the actual data
    setGeneralData((prevData) => ({
      ...prevData,
      createcampaign_images: fileArray,
    }));
    setPreviewImages([]);
    fileArray.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImages((prevImages) => [...prevImages, e.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleChangesCountires = (value, action) => {
    console.log(countries);
    if (value && value.length > 0 && value[value.length - 1].value === "all") {
      // If "All Countries" is selected, set all countries as selected
      setCountriesData(countries.filter((country) => country.value !== "all"));

      setGeneralData((prevData) => ({
        ...prevData,
        countries: countries
          .filter((country) => country.value !== "all")
          .map((country) => country.label),
      }));
    } else {
      // Otherwise, update the selected countries normally
      setCountriesData(value);

      setGeneralData((prevData) => ({
        ...prevData,
        countries: value.map((country) => country.label),
      }));
    }
  };
  const isAllFieldsFilledGeneral = () => {
    // Check if all fields have values
    return Boolean(
      generalData.campaignName &&
      generalData.generalConnectionType &&
      generalData.pricingType &&
      generalData.adUnitCategory &&
      generalData.trafficType &&
      generalData.landingUrl &&
      generalData.deviceFormat &&
      generalData.countries &&
      generalData.general_totalBudget &&
      generalData.general_dailyBudget &&
      generalData.afterVerification &&
      generalData.createcampaign_images.length > 0
    );
  };

  // console.log(JSON.stringify(generalData.campaign_images)+ " "+ " files");
  const handleChanges = (value, action) => {
    setGeneralData({
      ...generalData,
      [action.name]: value.map((item) => item.value),
    });
  };
  const handleURL = (selectedOption) => {
    const { name, value } = selectedOption.target;

    // Validate Landing URL to start with "https://"
    if (name === "landingUrl") {
      const validValue = value.startsWith("https://") ? value : "https://";
      setGeneralData({
        ...generalData,
        [name]: validValue,
      });
      return;
    }
  };
  const handleSelectChangeTemp = (selectedOption) => {
    if (
      selectedOption.target &&
      (selectedOption.target.name === "agreementChecked" ||
        selectedOption.target.name === "targetedAgreementChecked" ||
        selectedOption.target.name === "AdvanceSearchagreementChecked" ||
        selectedOption.target.name === "general_AgreementChecked")
    ) {
      setGeneralData({
        ...generalData,
        [selectedOption.target.name]: !generalData[selectedOption.target.name],
      });

      return;
    }

    if (selectedOption.target) {
      setGeneralData({
        ...generalData,
        [selectedOption.target.name]: selectedOption.target.value,
      });
      return;
    }

    setGeneralData({
      ...generalData,
      [selectedOption.name]: selectedOption.value,
    });
    // console.log(generalData);
  };

  const handleSubmitGeneral = (event) => {
    event.preventDefault();
    // formRef.current.reset();
    // setGeneralData.general_AgreementChecked = false;
    console.log("Submitted data:", generalData);
    setTargeting(true);
    // Add any additional logic you need for form submission
  };

  //console.log(generalData.campaign_images+"img urlllll");

  /*-----____________________________-----targeting option---_____________________________________----*/
  const targetingType = [
    {
      value: "Cost -Per-Action 1",
      label: "Cost -Per-Action — cost per 1 conversion",
      name: "targetingType",
    },
    {
      value: "Cost -Per-Action 2",
      label: "Cost -Per-Action — cost per 1 conversion",
      name: "targetingType",
    },
    {
      value: "Cost -Per-Action 3",
      label: "Cost -Per-Action — cost per 1 conversion",
      name: "targetingType",
    },
    {
      value: "Cost -Per-Action 4",
      label: "Cost -Per-Action — cost per 1 conversion",
      name: "targetingType",
    },
  ];

  const [targetingData, setTargetingData] = useState({
    targetingType: "",
    targetedAgreementChecked: false,
  });

  const handleSelectChangeTargeting = (selectedOption) => {
    if (
      selectedOption.target &&
      (selectedOption.target.name === "agreementChecked" ||
        selectedOption.target.name === "targetedAgreementChecked" ||
        selectedOption.target.name === "AdvanceSearchagreementChecked" ||
        selectedOption.target.name === "general_AgreementChecked")
    ) {
      setTargetingData({
        ...targetingData,
        [selectedOption.target.name]:
          !targetingData[selectedOption.target.name],
      });

      return;
    }

    if (selectedOption.target) {
      setTargetingData({
        ...targetingData,
        [selectedOption.target.name]: selectedOption.target.value,
      });
      return;
    }

    setTargetingData({
      ...targetingData,
      [selectedOption.name]: selectedOption.value,
    });
    // console.log(generalData);
  };

  const isAllFieldsFilledTarget = () => {
    // Check if all fields have values
    return Boolean(targetingData.targetingType);
  };

  const handleSubmitTargeting = (event) => {
    event.preventDefault();
    // formRef.current.reset();
    console.log("Submitted Target data:", targetingData);
    setcapping(true);
    // Add any additional logic you need for form submission
  };

  /*------___________________________________----Capping option--_______________________________________-----*/

  const time = [
    {
      value: "hour",
      label: "HOUR",
      name: "periodType",
    },
    {
      value: "day",
      label: "DAY",
      name: "periodType",
    },
  ];

  const [CappingData, setCappingData] = useState({
    impressions: "",
    period: "",
    periodType: "",
    totalBudgetLimits: "",
    dailyBudgetLimits: "",
    hourlyBudgetLimits: "",
    totalBudget: "",
    dailyBudget: "",
    hourlyBudget: "",
    agreementChecked: false,
  });

  const handleButtonClickCap = (event) => {
    event.preventDefault();
    // formRef.current.reset();
    console.log("Submitted Capping data:", CappingData);
    setsetting(true);
    // Add any additional logic you need for form submission
  };

  const isAllFieldsFilledCap = () => {
    // Check if all fields have values
    return Boolean(
      CappingData.impressions &&
      CappingData.period &&
      CappingData.periodType &&
      CappingData.totalBudgetLimits &&
      CappingData.dailyBudgetLimits &&
      CappingData.hourlyBudgetLimits &&
      CappingData.totalBudget &&
      CappingData.dailyBudget &&
      CappingData.hourlyBudget
    );
  };

  console.log(isAllFieldsFilledCap() + "CappingData");

  const handleSelectChangeCap = (selectedOption) => {
    if (
      selectedOption.target &&
      (selectedOption.target.name === "agreementChecked" ||
        selectedOption.target.name === "targetedAgreementChecked" ||
        selectedOption.target.name === "AdvanceSearchagreementChecked" ||
        selectedOption.target.name === "general_AgreementChecked")
    ) {
      setCappingData({
        ...CappingData,
        [selectedOption.target.name]: !CappingData[selectedOption.target.name],
      });

      return;
    }

    if (selectedOption.target) {
      setCappingData({
        ...CappingData,
        [selectedOption.target.name]: selectedOption.target.value,
      });
      return;
    }

    setCappingData({
      ...CappingData,
      [selectedOption.name]: selectedOption.value,
    });
  };

  /*------___________________________________----Advance Setting option--_______________________________________-----*/
  const placements = [
    {
      value: "blacklist",
      label: "blacklist",
      name: "connectionType",
    },
  ];

  const [AdvanceSettingData, setAdvanceSettingData] = useState({
    connectionType: "",
    placementValue: "",
    ipRangeTargeting: "",
    placements: "",
    countryCodes: "",
    price: "",
    agreementChecked: false,
  });

  const isAllFieldsFilledAdvanceSetting = () => {
    // Check if all fields have values
    return Boolean(
      AdvanceSettingData.connectionType &&
      AdvanceSettingData.placementValue &&
      AdvanceSettingData.ipRangeTargeting &&
      AdvanceSettingData.placements &&
      AdvanceSettingData.countryCodes &&
      AdvanceSettingData.price
    );
  };
  console.log(isAllFieldsFilledAdvanceSetting() + "AdvanceSettingData");

  const handleSelectChangeAdvanceSetting = (selectedOption) => {
    if (
      selectedOption.target &&
      (selectedOption.target.name === "targetedAgreementChecked" ||
        selectedOption.target.name === "AdvanceSearchagreementChecked" ||
        selectedOption.target.name === "ipRangeTargeting" ||
        selectedOption.target.name === "placements" ||
        selectedOption.target.name === "countryCodes" ||
        selectedOption.target.name === "price")
    ) {
      setAdvanceSettingData({
        ...AdvanceSettingData,
        [selectedOption.target.name]: selectedOption.target.value,
      });

      return;
    }

    if (selectedOption.target) {
      setAdvanceSettingData({
        ...AdvanceSettingData,
        [selectedOption.target.name]: selectedOption.target.value,
      });
      return;
    }

    setAdvanceSettingData({
      ...AdvanceSettingData,
      [selectedOption.name]: selectedOption.value,
    });
  };

  const formRef = useRef(null);
  const handleAdvanceSettingSubmit = (event) => {
    event.preventDefault();
    // formRef.current.reset();
    console.log("Submitted Advance Setting data:", AdvanceSettingData);
    // Add any additional logic you need for form submission
  };
  const handleCampaignReset = () => {
    formRef.current.reset();
    // setAdvanceSettingData(InitialStateAdvanceSetting);
  };

  /*-__________________________________________------------handle all data-------_______________________________________-------*/
  const [isAgreementCheckedAll, setIsAgreementCheckedAll] = useState(false);
  const handleAllData = async () => {
    formRef.current.reset();
    const newData = {
      ...generalData,
      ...targetingData,
      ...CappingData,
      ...AdvanceSettingData,
    };

    setAllData(newData);

    console.log(`Form data is ${newData}`);
    console.log(`Form Image path is ${newData.createcampaign_images}`);

    const res = await CreateCampaignAPI(newData);

    console.log(`res data is ${newData}`);
    console.log(`res Image path is ${newData.createcampaign_images}`);

    if (res.status == "success") {
      toast.success("Campaign created Successfully", {
        autoClose: 2000
      });
    }
    else {
      console.log("ERROR");
      toast.error("Campaign created Successfully", {
        autoClose: 2000
      });

    }
  };

  const handleSelectChangeAllData = (selectedOption) => {
    setIsAgreementCheckedAll(!isAgreementCheckedAll);
    if (
      selectedOption.target &&
      (selectedOption.target.name === "agreementChecked" ||
        selectedOption.target.name === "targetedAgreementChecked" ||
        selectedOption.target.name === "AdvanceSearchagreementChecked" ||
        selectedOption.target.name === "general_AgreementChecked")
    ) {
      setAllData({
        ...allData,
        [selectedOption.target.name]: !allData[selectedOption.target.name],
      });


      return;
    }

    if (selectedOption.target) {
      setAllData({
        ...allData,
        [selectedOption.target.name]: selectedOption.target.value,
      });
      return;
    }

    setAllData({
      ...allData,
      [selectedOption.name]: selectedOption.value,
    });
    console.log(allData);
  };

  const isAllFieldsFilled = () => {
    return (
      isAllFieldsFilledAdvanceSetting() &&
      isAllFieldsFilledCap() &&
      isAllFieldsFilledGeneral() &&
      isAllFieldsFilledTarget
    );
  };

  return (
    <>
      <div className="container-fluid" style={{ overflowX: "hidden", }}>
        <div className="row">
          <div className="col-md-8">
            <div className="container">
              <ToastContainer />
              {/* { //_______________________GENERAL____________________} */}
              <div className=" pt-4 px-4 pb-5 my-4 SSA_CAmpaign_border" style={{backgroundColor:colors.primary[400]}}>
                <form onSubmit={handleSubmitGeneral} ref={formRef}>
                  <div className="General pb-3">
                    <h4 className="text-left">1.General</h4>
                    <div className="row py-3">
                      <div className="col-8">
                        <label htmlFor="" className="text-[20px] text-black">
                          Campaign name, &nbsp;
                          <span className="text-[14px] text-black">
                            alphanumeric
                          </span>
                        </label>
                        <br />

                        <input
                          type="text"
                          placeholder="Campaign name"
                          onChange={handleSelectChangeTemp}
                          name="campaignName"
                          className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                        />
                      </div>
                      <div className="col-md-4 col-12 pt-4 pt-md-0 pt-lg-0">
                        <label htmlFor="" className="text-black">
                          Connection type
                        </label>{" "}
                        <br />
                        <Select
                          className="SSA_select-option "
                          options={connectionType}
                          name="generalConnectionType"
                          onChange={handleSelectChangeTemp}
                          style={{ border: "1px solid black", outline: "none" }}
                          isSearchable={false}
                        />
                      </div>
                    </div>

                    <div className="row py-3">
                      <div className="col-md-8 col-12">
                        <div className="row">
                          <div className="col-md-4 col-6">
                            <label htmlFor="" className="text-black">
                              Pricing type
                            </label>
                            <br />
                            <Select
                              className="SSA_select-option "
                              options={pricingType}
                              name="pricingType"
                              onChange={handleSelectChangeTemp}
                              isSearchable={false}
                            />
                            <small className="SSA_Campaign_SmallText">
                              Cost -Per-Action — cost per 1 conversion
                            </small>
                          </div>
                          <div className="col-md-4 col-6">
                            <label htmlFor="" className="text-black">
                              AdUnit category
                            </label>{" "}
                            <br />
                            <Select
                              className="SSA_select-option "
                              options={adUnitCategory}
                              name="adUnitCategory"
                              onChange={handleSelectChangeTemp}
                              isSearchable={false}
                            />
                            <small className="SSA_Campaign_SmallText">
                              Ad that appears behind the main page.
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-12 pt-4 pt-md-0">
                        <label htmlFor="">Traffic type (All by default)</label>{" "}
                        <br />
                        <Select
                          className="SSA_select-option "
                          options={trafficType}
                          isMulti={true}
                          name="trafficType"
                          // onChange={handleSelectChangeTemp}
                          onChange={(value, action) => {
                            handleChanges(value, action);
                          }}
                          isSearchable={false}
                        />
                        <small className="SSA_Campaign_SmallText">
                          In case you choose Traffic type - Mainstream+Adult
                          (All) you may get more traffic
                        </small>
                      </div>
                    </div>

                    <div className="row py-3">
                      <div className="col-md-8 col-12">
                        <label htmlFor="">Landing URL</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Landing URL"
                          className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                          onChange={handleURL}
                          name="landingUrl"
                          value={generalData.landingUrl} // Display the value from the state
                        />
                        <small className="SSA_Campaign_SmallText">
                          Please use 1000 characters or less. Example:
                          https://grow.com/in.php?placementid=##PLACEMENT_ID##&action=##SUB_ID
                          Check all available ##PLACEHOLDERS##
                        </small>
                      </div>
                      <div className="col-md-4 col-12 pt-4 pt-md-0 pt-lg-0">
                        <div className="col-md-12 col-xl-12 col-12 pt-md-0 pt-4">
                          <label htmlFor="">Device format</label> <br />
                          {/* Assuming Select is a component */}
                          <Select
                            className="SSA_select-option "
                            isMulti={true}
                            name="deviceFormat"
                            options={deviceFormat}
                            onChange={(value, action) => {
                              handleChanges(value, action);
                            }}
                            isSearchable={false}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex flex-wrap">
                        {previewImages.map((url) => (
                          <img
                            className="p-1"
                            key={url}
                            src={url}
                            alt="campaign images"
                            width={245}
                          />
                        ))}
                      </div>
                      <label
                        className="SSA_Campaign_custom-file-upload"
                        htmlFor="customFile"
                      >
                        Upload File
                        <input
                          type="file"
                          id="customFile"
                          name="createcampaign_images"
                          multiple
                          onChange={handleImageSet}
                        />
                      </label>
                    </div>
                  </div>
                  {/*---------------------------------Countries---------------------------------*/}
                  <div className="Countries py-3">
                    <div className="SSA_Campaign_budget-container">
                      <h6 className="SSA_MarginRight10px py-2">Countries</h6>
                      <div className="SSA_Campaign_line"></div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-12">
                        <Select
                          className="SSA_select-option"
                          isMulti={true}
                          name="countries"
                          options={countries}
                          value={CountriesData}
                          onChange={(value, action) => {
                            handleChangesCountires(value, action);
                          }}
                        />
                      </div>
                      <div className="col">
                        <small className="SSA_Campaign_SmallText">
                          Input countries codes, comma-separated
                        </small>
                      </div>
                    </div>
                  </div>
                  {/*---------------------------------budget---------------------------------*/}
                  <div className="budget py-3">
                    <div class="SSA_Campaign_budget-container">
                      <h6 className="SSA_MarginRight10px py-2">Budget, $</h6>
                      <div class="SSA_Campaign_line"></div>
                    </div>

                    <div class="row align-items-center py-2">
                      <div class="col-md-3">
                        <label for="totalBudget">Total budget</label>
                        <input
                          type="number"
                          className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                          id="totalBudget"
                          min={0}
                          placeholder="Total budget"
                          name="general_totalBudget"
                          onChange={handleSelectChangeTemp}
                        />
                      </div>
                      &nbsp; &nbsp;
                      <div class="col-md-2 d-flex align-items-center pt-3">
                        <input
                          className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                          type="checkbox"
                          value=""
                          name="checkbox"
                          id="flexCheckDefault"
                          onChange={handleSelectChangeTemp}
                        />{" "}
                        &nbsp; &nbsp;
                        <label class="form-check-label " for="flexCheckDefault">
                          Unlimited
                        </label>
                      </div>
                      <div class="col-md-5">
                        <small class="SSA_Campaign_SmallText">
                          Set up specific budget spending limits or choose
                          unlimited for spending within your account balance.
                        </small>
                      </div>
                    </div>
                    <div class="row align-items-center py-2">
                      <div class="col-md-3">
                        <label for="dailyBudget">Daily budget</label>
                        <input
                          type="number"
                          min={0}
                          className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                          id="dailyBudget"
                          placeholder="Test budget"
                          onChange={handleSelectChangeTemp}
                          name="general_dailyBudget"
                        />
                      </div>

                      <div class="col-md-5 pt-2">
                        <small class="SSA_Campaign_SmallText">
                          You will be charged on a CPM basis during the test
                          period. Find more details along with test budgets by
                          geo here.
                        </small>
                      </div>
                    </div>
                  </div>

                  {/*---------------------------------Start---------------------------------*/}
                  <div className="Start">
                    <div class="SSA_Campaign_budget-container">
                      <h6 className="SSA_MarginRight10px py-2">
                        Time of Start
                      </h6>
                      <div class="SSA_Campaign_line"></div>
                    </div>
                    <small className="SSA_Campaign_SmallText">
                      Before start, we send your campaign to verification just
                      to make sure everything works right. It can take 3-12
                      hours.
                    </small>
                    <div className="row align-items-center">
                      <div className="col-md-4 col-12 pt-md-0 pt-4">
                        <label htmlFor="">After Verification </label> <br />
                        {/* Assuming Select is a component */}
                        <Select
                          className="SSA_select-option "
                          name="afterVerification"
                          options={afterVerification}
                          onChange={handleSelectChangeTemp}
                          isSearchable={false}
                        />
                      </div>
                      <div className="col-md-5 col-12 pt-md-3 pt-1 SSA_Campaign_SmallText">
                        Campaigns start right after verification
                      </div>
                    </div>
                  </div>

                  <div class="form-check pt-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="general_AgreementChecked"
                      onChange={handleSelectChangeTemp}
                      id="flexCheckDefault"
                      disabled={!isAllFieldsFilledGeneral()}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      I agree to the <a href="#">Terms of Service</a> and{" "}
                      <a href="#">Privacy Policy</a>
                    </label>
                  </div>

                  {/*----------------Bottom text-------------------*/}
                  <div>
                    <div className="row bg-white  py-md-5 py-4 my-4 mx-0 justify-content-end">
                      <div className="col-md-6 col-12 text-md-end text-left">
                        <div>
                          You can start your campaign right from step 1
                          (required). Also, you can proceed to steps 2-4 for
                          more settings.
                        </div>
                      </div>

                      <div className="col-md-2  col-12 text-md-end mt-md-0 mt-2 text-left">
                        <button
                          type="submit"
                          className="btn SSA_Campaign_ContinueBtn"
                          onClick={handleSubmitGeneral}
                          disabled={
                            !generalData.general_AgreementChecked ||
                            !isAllFieldsFilledGeneral()
                          }
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* { // -___________________________TARGETTING-__________________________} */}
              <div className="SSA_CAmpaign_border"  style={{backgroundColor:colors.primary[400]}}>
                <div
                  className=" py-4 px-4 mt-4"  style={{backgroundColor:colors.primary[400]}}

                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <h4 className="SSA_campaign_1remFont">2. Targeting</h4>
                    </div>
                    <div>

                    </div>
                  </div>
                </div>
                {targeting ? (
                  <>
                    <form
                      onSubmit={handleSubmitTargeting}
                      ref={formRef}
                      encType="multipart/form-data"
                    >
                      <div className="bg-white container pt-4 pb-5">
                        <div className="col-md-3 col-12  ">
                          <label htmlFor="">Targeting type</label>
                          <br />
                          <Select
                            options={targetingType}
                            name="targetingType"
                            className="SSA_select-option "
                            onChange={handleSelectChangeTargeting}
                            isSearchable={false}
                          />
                        </div>

                        <div className="col-12 pt-1">
                          <br />
                          <input
                            type="text"
                            name="Targets"
                            disabled
                            placeholder="No targetings added yet."
                            className="SSA-campaign_name_input w-100"
                          />
                        </div>

                        <div class="form-check pt-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="targetedAgreementChecked"
                            onChange={handleSelectChangeTargeting}
                            id="flexCheckDefault"
                            disabled={!isAllFieldsFilledTarget()}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            I agree to the <a href="#">Terms of Service</a> and{" "}
                            <a href="#">Privacy Policy</a>
                          </label>
                        </div>

                        <button
                          type="submit"
                          className="btn SSA_Campaign_ContinueBtn"
                          disabled={
                            !targetingData.targetedAgreementChecked ||
                            !isAllFieldsFilledTarget()
                          }
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <></>
                )}
              </div>

              {/* { //_______________________CAPPING & LIMITS____________________} */}
              <div className="SSA_CAmpaign_border my-4"  style={{backgroundColor:colors.primary[400]}}>
                <div
                  className=" py-4 px-4 mt-4"  style={{backgroundColor:colors.primary[400]}}

                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <h4 className="SSA_campaign_1remFont">
                        3. Cappings & Limits
                      </h4>
                    </div>
                    <div>

                    </div>
                  </div>
                </div>
                {capping ? (
                  <>
                    <div className="bg-white container pb-5 ">
                      <form action="handleButtonClickCap" ref={formRef}>
                        <div class="SSA_Campaign_budget-container  ">
                          <h6 className="SSA_MarginRight10px py-2">
                            Frequency cappings
                          </h6>
                          <div class="SSA_Campaign_line"></div>
                        </div>
                        <div className="row pt-1 pb-4">
                          <div className="col-md-2 ">
                            <label htmlFor="">Impressions</label>
                            <br />
                            <input
                              type="number"
                              min={0}
                              placeholder="-"
                              onChange={handleSelectChangeCap}
                              name="impressions"
                              className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                            />
                          </div>
                          <div className="col-md-2 ">
                            <label htmlFor="">Period </label>
                            <br />
                            <input
                              type="number"
                              placeholder="-"
                              onChange={handleSelectChangeCap}
                              // value={CappingData.period}
                              name="period"
                              className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                            />
                          </div>
                          <div className="col-md-2 ">
                            <label htmlFor=""> </label> <br />
                            <Select
                              options={time}
                              onChange={handleSelectChangeCap}
                              name="periodType"
                              isSearchable={false}
                              className="SSA_select-option "
                            />
                          </div>
                        </div>
                        <div class="SSA_Campaign_budget-container">
                          <h6 className="SSA_MarginRight10px py-2">
                            Limits of impressions
                          </h6>
                          <div class="SSA_Campaign_line"></div>
                        </div>
                        <div className="row pt-1 pb-4">
                          <div className="col-md-2 ">
                            <label htmlFor="">Total</label>
                            <br />
                            <input
                              type="number"
                              placeholder="-"
                              min={0}
                              onChange={handleSelectChangeCap}
                              // value={CappingData.totalLimits}
                              name="totalBudgetLimits"
                              className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                            />
                          </div>
                          <div className="col-md-2 ">
                            <label htmlFor="">Daily </label>
                            <br />
                            <input
                              type="number"
                              placeholder="-"
                              min={0}
                              // value={CappingData.dailyLimits}
                              name="dailyBudgetLimits"
                              onChange={handleSelectChangeCap}
                              className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                            />
                          </div>
                          <div className="col-md-2 ">
                            <label htmlFor="">Hourly </label>
                            <br />
                            <input
                              type="number"
                              min={0}
                              placeholder="-"
                              // value={CappingData.hourlyLimits}
                              name="hourlyBudgetLimits"
                              onChange={handleSelectChangeCap}
                              className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                            />
                          </div>
                        </div>
                        <div class="SSA_Campaign_budget-container">
                          <h6 className="SSA_MarginRight10px py-2">Budget</h6>
                          <div class="SSA_Campaign_line"></div>
                        </div>
                        <div className="row pt-1 pb-4">
                          <div className="col-md-2 ">
                            <label htmlFor="">Total</label>
                            <br />
                            <input
                              type="number"
                              min={0}
                              placeholder="-"
                              // value={CappingData.totalBudget}
                              name="totalBudget"
                              onChange={handleSelectChangeCap}
                              className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                            />
                          </div>
                          <div className="col-md-2 ">
                            <label htmlFor="">Daily </label>
                            <br />
                            <input
                              type="number"
                              min={0}
                              placeholder="-"
                              // value={CappingData.dailyBudget}
                              name="dailyBudget"
                              onChange={handleSelectChangeCap}
                              className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                            />
                          </div>
                          <div className="col-md-2 ">
                            <label htmlFor="">Hourly </label>
                            <br />
                            <input
                              type="number"
                              placeholder="-"
                              min={0}
                              // value={CappingData.hourlyBudget}
                              name="hourlyBudget"
                              onChange={handleSelectChangeCap}
                              className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                            />
                          </div>
                          <div className="col-md-5 pt-3">
                            <small className="SSA_Campaign_SmallText">
                              {" "}
                              Set up specific budget spending limits or choose
                              unlimited for spending within your account
                              balance.
                            </small>
                          </div>
                        </div>

                        <div class="form-check pt-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="agreementChecked"
                            onChange={handleSelectChangeCap}
                            id="flexCheckDefault"
                            disabled={!isAllFieldsFilledCap()}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            I agree to the <a href="#">Terms of Service</a> and{" "}
                            <a href="#">Privacy Policy</a>
                          </label>
                        </div>
                        <button
                          className="btn SSA_Campaign_ContinueBtn "
                          type="submit"
                          onClick={handleButtonClickCap}
                          disabled={
                            !CappingData.agreementChecked ||
                            !isAllFieldsFilledCap()
                          }
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>

              {/* { //_______________________ADVANCED SEARCH____________________} */}
              <div className="SSA_CAmpaign_border"  style={{backgroundColor:colors.primary[400]}}>
                <div
                  className="  py-4 px-4 mt-4"  style={{backgroundColor:colors.primary[400]}}

                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <h4 className="SSA_campaign_1remFont">
                        4. Advanced Settings
                      </h4>
                    </div>
                    <div></div>

                  </div>
                </div>
                {setting ? (
                  <>
                    <div className="bg-white  container pb-5">
                      <form onSubmit={handleAdvanceSettingSubmit} ref={formRef}>
                        <div className="row d-flex align-items-center py-3">
                          <div className="col-md-7">
                            <label htmlFor="">Connection type</label> <br />
                            <Select
                              className="SSA_select-option "
                              options={placements}
                              placeholder="Select"
                              name="connectionType"
                              onChange={handleSelectChangeAdvanceSetting}
                              isSearchable={false}
                            />
                          </div>
                          <div className="col-md-4 text-end pt-3">
                            <small className="SSA_Campaign_SmallText">
                              Use blacklists to exclude placements from your
                              campaign
                            </small>
                          </div>
                        </div>
                        <div className="row d-flex align-items-center py-3">
                          <div className="col-md-7">
                            <textarea
                              className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                              placeholder="Placements, commas placement value"
                              // value={props.data.placementValue}
                              name="placementValue"
                              onChange={handleSelectChangeAdvanceSetting}
                              style={{ height: "100px" }}
                            ></textarea>
                          </div>
                          <div className="col-md-4 text-end pt-3">
                            <small className="SSA_Campaign_SmallText">
                              Only valid placement IDs can be added. Please use
                              Adsterra tracking token ##PLACEMENT_ID## in your
                              URL in order to create blacklists.
                            </small>
                          </div>
                        </div>
                        <div className="row d-flex align-items-center py-3">
                          <div className="col-md-7">
                            <label htmlFor="">IP range targeting</label>
                            <textarea
                              className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                              placeholder="IP's List, 1 IP or Range per line"
                              // value={props.data.ipRangeTargeting}
                              name="ipRangeTargeting"
                              onChange={handleSelectChangeAdvanceSetting}
                              style={{ height: "100px" }}
                            ></textarea>
                          </div>
                          <div className="col-md-4 text-end pt-3">
                            <small className="SSA_Campaign_SmallText">
                              IP range targeting is only available in include
                              mode
                            </small>
                          </div>
                        </div>
                        <div class="SSA_Campaign_budget-container">
                          <h6 className="SSA_MarginRight10px py-2">
                            Custom bid{" "}
                          </h6>
                          <div class="SSA_Campaign_line"></div>
                        </div>

                        <div className="row  pt-3 ">
                          <div className="col-md-4 col-6">
                            <label htmlFor="">Placements &nbsp;</label>
                            <br />
                            <input
                              type="number"
                              min={0}
                              placeholder="Comma seperated values"
                              // value={props.data.placements}
                              name="placements"
                              onChange={handleSelectChangeAdvanceSetting}
                              className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                            />
                          </div>
                          <div className="col-md-4 col-6">
                            <label htmlFor="">Country Codes &nbsp;</label>
                            <br />
                            <input
                              type="number"
                              min={0}
                              placeholder="Comma seperated values"
                              // value={props.data.countryCodes}
                              name="countryCodes"
                              onChange={handleSelectChangeAdvanceSetting}
                              className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                            />
                          </div>
                          <div className="col-md-2 col-12 pt-md-0 pt-3 d-flex">
                            <div className="px-1">
                              <label htmlFor=""> Price &nbsp;</label>
                              <br />
                              <input
                                type="number"
                                placeholder="Price"
                                // value={props.data.price}
                                name="price"
                                min={0}
                                onChange={handleSelectChangeAdvanceSetting}
                                className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                              />
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div className="px-1 pt-4">
                              <button
                                type="button"
                                onClick={handleCampaignReset}
                                class="btn btn-light py-2 px-4 w-100"
                              >
                                Reset&nbsp;&#10006;{" "}
                              </button>
                            </div>
                            <div className="px-1 pt-4">
                              <button
                                type="submit"
                                class="btn btn-secondary px-4 py-2"
                                className="btn SSA_Campaign_ContinueBtn "
                                onClick={handleAdvanceSettingSubmit}
                                disabled={
                                  !AdvanceSettingData.agreementChecked ||
                                  !isAllFieldsFilledAdvanceSetting()
                                }
                              >
                                ADD
                              </button>
                            </div>
                          </div>
                        </div>

                        <small className="SSA_Campaign_SmallText">
                          Only valid placement IDs and country codes can be
                          added
                        </small>
                        <div class="form-check pt-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="agreementChecked"
                            onChange={handleSelectChangeAdvanceSetting}
                            id="flexCheckDefault"
                            disabled={!isAllFieldsFilledAdvanceSetting()}
                          />

                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            I agree to the <a href="#">Terms of Service</a> and{" "}
                            <a href="#">Privacy Policy</a>
                          </label>
                        </div>
                      </form>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>

              {/* { //_______________________AllSubmit BUtton____________________} */}
              <div  style={{backgroundColor:colors.primary[400]}}>
                <div className="row  py-md-5 py-4 my-4 mx-0 justify-content-end"  style={{backgroundColor:colors.primary[400]}}>
                  <div className="col-md-6 col-12 text-md-end text-left">
                    <div>
                      You can start your campaign right from step 1 (required).
                      Also, you can proceed to steps 2-4 for more settings.
                    </div>
                  </div>
                  <div className="d-flex justify-content-end pt-2">
                    <div className="form-check pt-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="general_AgreementChecked"
                        onChange={handleSelectChangeAllData}
                        id="flexCheckDefault"
                        disabled={!isAllFieldsFilled()}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        I agree to the <a href="#">Terms of Service</a> and{" "}
                        <a href="#">Privacy Policy</a>
                      </label>
                    </div>{" "}
                    &nbsp; &nbsp;
                    <div className=" text-md-end mt-md-0 mt-2 text-left">
                      <button
                        type="submit"
                        onClick={handleAllData}
                        className="btn SSA_Campaign_ContinueBtn"
                        disabled={
                          !isAgreementCheckedAll || !isAllFieldsFilled()
                        }
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 SSA_Campagin_Sticky"  >
            <div className="SSA_BG-Create-Campaign mt-4">
              <div className="SSA_Campagin_Sticky">
                <div className=" py-4 px-4  my-4 SSA_CAmpaign_border"  style={{backgroundColor:colors.primary[400]}}>
                  <div
                    className="d-flex justify-content-between "
                    onClick={() => setPreview(!preview)}
                  >
                    <div className="SSA_campaign_1remFont pb-3">Preview</div>
                    <div>
                      {!preview ? (
                        <>
                          <i class="fas fa-chevron-up "></i>{" "}
                          <h5 className="SSA_campaign_0remFont">Show More</h5>
                        </>
                      ) : (
                        <>
                          <i class="fas fa-chevron-down"></i>{" "}
                          <h5 className="SSA_campaign_0remFont">Hide</h5>{" "}
                        </>
                      )}
                    </div>
                  </div>
                  {preview ? (
                    <>
                      <div className="SSA_Campaign_SmallText2">
                        {" "}
                        <b>Required settings</b>{" "}
                      </div>

                      <div className="SSA_Campaign_SmallText2 pt-3">
                        <b>Campaign Name: </b>
                        <span className="SSA_Campaign_SmallText">
                          {generalData.campaignName}
                        </span>
                      </div>
                      <div className="">
                        <b className="SSA_Campaign_SmallText2 ">
                          Connection Type:
                        </b>
                        <span className="SSA_Campaign_SmallText">
                          {generalData.generalConnectionType}
                        </span>
                      </div>
                      <div>
                        <b className="SSA_Campaign_SmallText2 ">
                          Pricing Type:
                        </b>{" "}
                        <span className="SSA_Campaign_SmallText">
                          {generalData.pricingType}
                        </span>
                      </div>
                      <div className="">
                        <b className="SSA_Campaign_SmallText2 ">
                          AdUnit Category:
                        </b>
                        <span className="SSA_Campaign_SmallText">
                          {generalData.adUnitCategory}
                        </span>
                      </div>
                      <div>
                        <b className="SSA_Campaign_SmallText2 ">
                          Traffic type:
                        </b>{" "}
                        <span className="SSA_Campaign_SmallText">
                          {generalData.trafficType.map(
                            (item) => item.value + ", "
                          )}
                        </span>
                      </div>

                      <div>
                        <b className="SSA_Campaign_SmallText2 ">Image:</b>
                        <span className="SSA_Campaign_SmallText">
                          {generalData.createcampaign_images.map(
                            (item) => item + ", "
                          )}
                        </span>
                      </div>

                      <div className="">
                        <b className="SSA_Campaign_SmallText2 ">Landing URL:</b>
                        <span className="SSA_Campaign_SmallText">
                          {generalData.landingUrl}
                        </span>
                      </div>
                      <div>
                        <b className="SSA_Campaign_SmallText2 ">
                          Device format:
                        </b>
                        <span className="SSA_Campaign_SmallText">
                          {generalData.deviceFormat.map(
                            (item) => item.value + ", "
                          )}
                        </span>
                      </div>
                      <div className="">
                        <b className="SSA_Campaign_SmallText2 ">Countries:</b>
                        <span className="SSA_Campaign_SmallText">
                          {generalData.countries.map((item) => item + ", ")}
                        </span>
                      </div>
                      <div>
                        <b className="SSA_Campaign_SmallText2 ">
                          Total budget:
                        </b>{" "}
                        <span className="SSA_Campaign_SmallText">
                          {generalData.general_totalBudget}
                        </span>
                      </div>
                      <div className="">
                        <b className="SSA_Campaign_SmallText2 ">
                          Daily budget:
                        </b>
                        <span className="SSA_Campaign_SmallText">
                          {generalData.general_dailyBudget}
                        </span>
                      </div>
                      <div>
                        <b className="SSA_Campaign_SmallText2 ">
                          After Verification:
                        </b>
                        <span className="SSA_Campaign_SmallText">
                          {generalData.afterVerification}
                        </span>
                      </div>
                      <div className="d-flex pt-3">
                        <p style={{ fontSize: "18px" }}>Targeting</p>
                        <hr />
                      </div>
                      <div className="SSA_Campaign_SmallText2 pb-3">
                        <b>Targeting type: </b>{" "}
                        <span className="SSA_Campaign_SmallText">
                          {targetingData.targetingType}
                        </span>{" "}
                      </div>

                      <div className="d-flex">
                        <p style={{ fontSize: "18px" }}>Cappings & Limits</p>
                        <hr />
                      </div>
                      <div className="">
                        {" "}
                        <b className="SSA_Campaign_SmallText2 ">
                          Frequency cappings Impression:
                        </b>
                        <span className="SSA_Campaign_SmallText">
                          {CappingData.impressions}
                        </span>
                      </div>
                      <div>
                        {" "}
                        <b className="SSA_Campaign_SmallText2 ">
                          Frequency cappings Period:
                        </b>{" "}
                        <span className="SSA_Campaign_SmallText">
                          {CappingData.period}
                        </span>{" "}
                      </div>
                      <div className="">
                        {" "}
                        <b className="SSA_Campaign_SmallText2 ">
                          Frequency capping Time:
                        </b>
                        <span className="SSA_Campaign_SmallText">
                          {CappingData.periodType}
                        </span>{" "}
                      </div>
                      <div>
                        {" "}
                        <b className="SSA_Campaign_SmallText2 ">
                          Total Limits of impressions:
                        </b>{" "}
                        <span className="SSA_Campaign_SmallText">
                          {CappingData.totalLimits}
                        </span>{" "}
                      </div>
                      <div>
                        {" "}
                        <b className="SSA_Campaign_SmallText2 ">
                          Daily Limits of impressions:
                        </b>{" "}
                        <span className="SSA_Campaign_SmallText">
                          {CappingData.dailyLimits}
                        </span>{" "}
                      </div>
                      <div>
                        {" "}
                        <b className="SSA_Campaign_SmallText2 ">
                          Hourly Limits of impressions:
                        </b>{" "}
                        <span className="SSA_Campaign_SmallText">
                          {CappingData.hourlyLimits}
                        </span>{" "}
                      </div>
                      <div>
                        {" "}
                        <b className="SSA_Campaign_SmallText2 ">
                          Total Budget:
                        </b>{" "}
                        <span className="SSA_Campaign_SmallText">
                          {CappingData.totalBudget}
                        </span>{" "}
                      </div>
                      <div>
                        {" "}
                        <b className="SSA_Campaign_SmallText2 ">
                          Daily Budget:
                        </b>{" "}
                        <span className="SSA_Campaign_SmallText">
                          {CappingData.dailyBudget}
                        </span>{" "}
                      </div>
                      <div>
                        {" "}
                        <b className="SSA_Campaign_SmallText2 ">
                          Hourly Budget:
                        </b>{" "}
                        <span className="SSA_Campaign_SmallText">
                          {CappingData.hourlyBudget}
                        </span>{" "}
                      </div>
                      <div className="d-flex pt-4">
                        <p style={{ fontSize: "18px" }}>Advance Setting</p>
                        <hr />
                      </div>
                      <div>
                        <b className="SSA_Campaign_SmallText2 ">
                          Connection Type:
                        </b>
                        <span className="SSA_Campaign_SmallText">
                          {AdvanceSettingData.connectionType}
                        </span>{" "}
                      </div>
                      <div>
                        <b className="SSA_Campaign_SmallText2 ">
                          Placement Value:
                        </b>
                        <span className="SSA_Campaign_SmallText">
                          {AdvanceSettingData.placementValue}
                        </span>
                      </div>
                      <div>
                        <b className="SSA_Campaign_SmallText2 ">
                          IP Range Targeting:
                        </b>
                        <span className="SSA_Campaign_SmallText">
                          {AdvanceSettingData.ipRangeTargeting}
                        </span>
                      </div>
                      <div>
                        <b className="SSA_Campaign_SmallText2 ">Placements:</b>
                        <span className="SSA_Campaign_SmallText">
                          {AdvanceSettingData.placements}
                        </span>
                      </div>
                      <div>
                        <b className="SSA_Campaign_SmallText2 ">
                          Country Codes:
                        </b>
                        <span className="SSA_Campaign_SmallText">
                          {AdvanceSettingData.countryCodes}
                        </span>
                      </div>
                      <div>
                        <b className="SSA_Campaign_SmallText2 ">Price:</b>
                        <span className="SSA_Campaign_SmallText">
                          {AdvanceSettingData.price}
                        </span>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateCampaign2;
