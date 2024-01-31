import React, { useState } from "react";
import Select from "react-select";
import "./CreateCampaign.css";
import Targeting from "./Targeting";
import Capping from "./Capping";
import AdvanceSetting from "./AdvanceSetting";
import BottomText from "./BottomText";
import Preview from "./Preview";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreateCampaignAPI } from "../../../../AllApi/AllAuthApi";
import { Link } from "react-router-dom";

function CreateCampaign() {
  const showToastMessage = () => {
    toast.success("Submitted Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const showToastError = () => {
    toast.error("Please fill all fields", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  const connectionType = [
    { value: "All traffic", label: "All traffic" },
    { value: "3G", label: "3G" },
    { value: "Wi-Fi", label: "Wi-Fi" },
  ];
  const pricingType = [
    { value: "CPM", label: "CPM" },
    { value: "CPA", label: "CPA" },
    { value: "CPC", label: "CPC" },
  ];
  const adUnitCategory = [
    { value: "Popunder", label: "Popunder" },
    { value: "Native", label: "Native" },
    { value: "Social bar", label: "Social bar" },
    { value: "In-Page Push", label: "In-Page Push" },
    { value: "Interstitial", label: "Interstitial" },
  ];
  const afterVerification = [
    { value: "Start", label: "Start" },
    { value: "Scheduled", label: "Scheduled" },
    { value: "Keep inactive", label: "Keep inactive" },
  ];

  const deviceFormat = [
    { value: "Mobile", label: "Mobile" },
    { value: "Desktop", label: "Desktop" },
    { value: "Tab", label: "Tab" },
  ];
  const trafficType = [
    { value: "Mainstream + Adult (All)", label: "Mainstream + Adult (All)" },
    { value: "Mainstream", label: "Mainstream" },
    { value: " Adult", label: "Adult" },
  ];
  const countries = [
    { value: "AF", label: "Afghanistan" },
    { value: "AX", label: "Aland Islands" },
    { value: "AL", label: "Albania" },
    { value: "DZ", label: "Algeria" },
    { value: "AS", label: "American Samoa" },
    { value: "AD", label: "Andorra" },
    { value: "AO", label: "Angola" },
    { value: "AI", label: "Anguilla" },
    { value: "AQ", label: "Antarctica" },
    { value: "AG", label: "Antigua and Barbuda" },
    { value: "AR", label: "Argentina" },
    { value: "AM", label: "Armenia" },
    { value: "AW", label: "Aruba" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "AZ", label: "Azerbaijan" },
    { value: "BS", label: "Bahamas" },
    { value: "BH", label: "Bahrain" },
    { value: "BD", label: "Bangladesh" },
    { value: "BB", label: "Barbados" },
    { value: "BY", label: "Belarus" },
    { value: "BE", label: "Belgium" },
    { value: "BZ", label: "Belize" },
    { value: "BJ", label: "Benin" },
    // ... (Add other countries in a similar format)
    { value: "YE", label: "Yemen" },
    { value: "ZM", label: "Zambia" },
    { value: "ZW", label: "Zimbabwe" },
  ];

  const initialCampaignState = {
    campaignName: '',
    landingUrl: '',
    createcampaign_images: [], 
    connectionType: '',
    countries: '',
    totalBudget: '',
    dailyBudget: '',
    afterVerification: '',
    deviceFormat: '',
    trafficType: '',
    adUnitCategory: '',
    pricingType: '',
    agreementChecked: false,
  };
  const [createCampaign, setCreateCampaign] = useState(initialCampaignState);

  const handleCampaignChange = (e) => {
    const { name, value, type, files } = e.target;
  
    if (type === 'file') {
      // Handle file input
      const fileArray = Array.from(files);
  
      setCreateCampaign({
        ...createCampaign,
        createcampaign_images: [...createCampaign.createcampaign_images, ...fileArray],
      });
    } else {
      // Handle other input types
      setCreateCampaign({
        ...createCampaign,
        [name]: value,
      });
    }
  };
  const handleSelectChange = (name, selectedValue) => {
    setCreateCampaign({
      ...createCampaign,
      [name]: selectedValue.value,
    });
  };
  const handlecheckedChange = (event) => {
    const { name, checked } = event.target;

    setCreateCampaign({
      ...createCampaign,
      [name]: checked,
    });
    console.log(createCampaign)
  };

  const handleCampaignSubmit = async (event) => {
    event.preventDefault();
    console.log(createCampaign,+"createCampaign")
    const formData = new FormData();
    for (const key in createCampaign) {
      if(key != 'createcampaign_images') 
      console.log(createCampaign[key]+"key")
      // Append each field to the FormData object
      formData.append(key, createCampaign[key]);
    }
  
    // Append files to FormData
    // createCampaign.createcampaign_images.forEach((file, index) => {
    //   formData.append(`file${index + 1}`, file);
    // });
     console.log(console.log(formData.get("campaignName"))+"formdata")
    const res = await CreateCampaignAPI(formData);
    if (res?.status === 'success') {
      toast.success('Campaign created Successfully');
      setCreateCampaign(initialCampaignState);
    } else {
      console.log('ERROR');
    }
  };

  const isAllFieldsFilled = () => {
    const {
      campaignName,
      landingUrl,
      connectionType,
      countries,
      totalBudget,
      dailyBudget,
      afterVerification,
      deviceFormat,
      trafficType,
      adUnitCategory,
      pricingType,

    } = createCampaign;

    // Check if all fields have values
    return (
      campaignName &&
      landingUrl && 
      connectionType &&
      countries &&
      totalBudget &&
      dailyBudget &&
      afterVerification &&
      deviceFormat &&
      trafficType &&
      adUnitCategory &&
      pricingType
    );
  };

  return (
    <div className=" pt-5 " style={{ backgroundColor: "rgb(230,230,230)" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-12    ">
            <div className="bg-white pt-4 px-4 pb-5 my-4 SSA_CAmpaign_border">
              <form onSubmit={handleCampaignSubmit}>
                <div className="General pb-3">
                  <h4 className="text-left">1.General</h4>

                  <div className="row py-3">
                    <div className="col-8">
                      <label htmlFor="" className="text-[20px] text-black">
                        Campaign name, &nbsp;
                        <span className="text-[14px] text-black">alphanumeric</span>
                      </label>
                      <br />

                      <input
                        type="text"
                        placeholder="Campaign name"
                        onChange={handleCampaignChange}
                        name='campaignName'
                        className="p-2 w-100 border-solid border-2 border-black placeholder:text-black"
                      />
                    </div>
                    <div className="col-md-4 col-12 pt-4 pt-md-0 pt-lg-0">
                      <label htmlFor="" className="text-black">Connection type</label> <br />
                      <Select
                        className="p-2 w-100 border-black md:border-black xl:border-black placeholder:text-black"
                        options={connectionType}
                        name="connectionType"
                        onChange={(selectedOption) =>
                          handleSelectChange("connectionType", selectedOption)
                        }
                        style={{ border: '1px solid black', outline: 'none' }}
                      />

                    </div>
                  </div>

                  <div className="row py-3">
                    <div className="col-md-8 col-12">
                      <div className="row">
                        <div className="col-md-4 col-6">
                          <label htmlFor="" className="text-black">Pricing type</label>
                          <br />
                          <Select options={pricingType}
                            name="pricingType"
                            onChange={(selectedOption) =>
                              handleSelectChange("pricingType", selectedOption)
                            } />
                          <small className="SSA_Campaign_SmallText">
                            Cost -Per-Action — cost per 1 conversion
                          </small>
                        </div>
                        <div className="col-md-4 col-6">
                          <label htmlFor="" className="text-black">AdUnit category</label> <br />
                          <Select options={adUnitCategory}
                            name="adUnitCategory"
                            onChange={(selectedOption) =>
                              handleSelectChange("adUnitCategory", selectedOption)
                            } />
                          <small className="SSA_Campaign_SmallText">
                            Ad that appears behind the main page.
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-12 pt-4 pt-md-0">
                      <label htmlFor="">Traffic type (All by default)</label>{" "}
                      <br />
                      <Select options={trafficType}
                        name="trafficType"
                        onChange={(selectedOption) =>
                          handleSelectChange("trafficType", selectedOption)
                        }
                      />
                      <small className="SSA_Campaign_SmallText">
                        In case you choose Traffic type - Mainstream+Adult (All)
                        you may get more traffic
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
                        className="SSA-campaign_name_input w-100"
                        onChange={handleCampaignChange}
                        name='landingUrl'
                      />
                      <small className="SSA_Campaign_SmallText">
                        Please use 1000 characters or less.
                        Example: https://grow.com/in.php?placementid=##PLACEMENT_ID##&action=##SUB_ID
                        Check all available ##PLACEHOLDERS##
                      </small>

                    </div>
                    <div className="col-md-4 col-12 pt-4 pt-md-0 pt-lg-0">
                      <div className="col-md-12 col-xl-12 col-12 pt-md-0 pt-4">
                        <label htmlFor="" className="text-black">Device format</label> <br />
                        {/* Assuming Select is a component */}
                        <Select
  className="SSA-campaign_name_selecter"
 
  name="deviceFormat"
  options={deviceFormat}
  onChange={(selectedOption) =>
    handleSelectChange("deviceFormat", selectedOption)
  }
  styles={{
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'black' : 'black',
      backgroundColor: state.isSelected ? 'white' : 'white',
      border: state.isSelected ? '1px solid black' : '1px solid black'
    }),
  }}
/>
                      </div>
                    </div>
                  </div>

                  <div>
  {createCampaign.createcampaign_images.map((image, index) => (
    <img key={index} src={URL.createObjectURL(image)} alt={`Uploaded File ${index}`} />
  ))}
  <label className="SSA_Campaign_custom-file-upload" htmlFor="customFile">
    Upload File
    <input type="file" id="customFile" name="campaign_images" onChange={handleCampaignChange} multiple />
  </label>
</div>
                </div>
                {/*---------------------------------Countries---------------------------------*/}
                <div className="Countries py-3">
                  <div class="SSA_Campaign_budget-container">
                    <h6 className="SSA_MarginRight10px py-2">Countries</h6>
                    <div class="SSA_Campaign_line"></div>
                  </div>
                  <div className="row  ">
                    <div className="col-md-12 col-12">
                      <Select className="" name="countries" options={countries} onChange={(selectedOption) =>
                        handleSelectChange("countries", selectedOption)
                      } />


                    </div>

                    <div className="col">
                      <small className="SSA_Campaign_SmallText">
                        Input countries codes, comma-separated
                      </small>
                    </div>
                  </div>
                  <div className="row  pt-3 ">
                    {/* <div className="col-md-8 col-12">
                    <label htmlFor="">
                      Campaign name, &nbsp;
                      <span className="text-secondary">alphanumeric</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Campaign name"
                      className="SSA-campaign_name_input w-100"
                    />
                  </div> */}
                    <div className="col-md-4 pt-md-0 pt-3  col-12 d-flex">
                      {/* <div className="px-1">
                      <label htmlFor=""> Price &nbsp;</label>
                      <br />
                      <input
                        type="text"
                        placeholder="Price"
                        className="SSA-campaign_name_input w-100"
                      />
                    </div> */}
                      {/* <div className="px-1 pt-4">
                      <button
                        type="button"
                        class="btn btn-light py-2 px-4 w-100"
                      >
                        Reset&nbsp;&#10006;{" "}
                      </button>
                    </div> */}
                      {/* <div className="px-1 pt-4">
                      <button type="button" class="btn btn-secondary px-4 py-2">
                        ADD
                      </button>
                    </div> */}
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
                        class="SSA-campaign_name_input w-100"
                        id="totalBudget"
                        placeholder="Total budget"
                        name='totalBudget'
                        onChange={handleCampaignChange}
                      />
                    </div>&nbsp;
                    &nbsp;
                    <div class="col-md-2 d-flex align-items-center pt-3">
                      <input
                        class="form-check-input SSA_Campaign_Checkbox"
                        type="checkbox"
                        value=""
                        name='checkbox'
                        id="flexCheckDefault"
                        onChange={handleCampaignChange}
                      />{" "}
                      &nbsp;
                      &nbsp;

                      <label class="form-check-label " for="flexCheckDefault">
                        Unlimited
                      </label>
                    </div>
                    <div class="col-md-5">
                      <small class="SSA_Campaign_SmallText">
                        Set up specific budget spending limits or choose unlimited
                        for spending within your account balance.
                      </small>
                    </div>
                  </div>
                  <div class="row align-items-center py-2">
                    <div class="col-md-3">
                      <label for="dailyBudget">Daily budget</label>
                      <input
                        type="number"
                        class="SSA-campaign_name_input w-100"
                        id="dailyBudget"
                        placeholder="Daily budget"
                        onChange={handleCampaignChange}
                        name='dailyBudget'
                      />
                    </div>

                    <div class="col-md-5 pt-2">
                      <small class="SSA_Campaign_SmallText">
                        You will be charged on a CPM basis during the test period.
                        Find more details along with test budgets by geo here.
                      </small>
                    </div>
                  </div>
                </div>

                {/*---------------------------------Start---------------------------------*/}
                <div className="Start">
                  <div class="SSA_Campaign_budget-container">
                    <h6 className="SSA_MarginRight10px py-2">Time of Start</h6>
                    <div class="SSA_Campaign_line"></div>
                  </div>
                  <small className="SSA_Campaign_SmallText">
                    Before start, we send your campaign to verification just to
                    make sure everything works right. It can take 3-12 hours.
                  </small>
                  <div className="row align-items-center">
                    <div className="col-md-4 col-12 pt-md-0 pt-4">
                      <label htmlFor="">After Verification </label> <br />
                      {/* Assuming Select is a component */}
                      <Select
                        className="SSA-campaign_name_selecter"
                        name="afterVerification"
                        options={afterVerification}
                        onChange={(selectedOption) =>
                          handleSelectChange("afterVerification", selectedOption)
                        }
                      />
                    </div>
                    <div className="col-md-5 col-12 pt-md-3 pt-1 SSA_Campaign_SmallText">
                      Campaigns start right after verification
                    </div>
                  </div>
                </div>

                <div class="form-check pt-3">
                  <input class="form-check-input" type="checkbox" name="agreementChecked"
                    checked={createCampaign.agreementChecked}
                    onChange={handlecheckedChange}
                    id="flexCheckDefault"
                    disabled={!isAllFieldsFilled()} />
                  <label class="form-check-label" for="flexCheckDefault">
                    I agree to the <Link to="#" className="no-underline">Terms of Service</Link> and <Link  to="#" className="no-underline">Privacy Policy</Link>
                  </label>
                </div>

                {/*----------------Bottom text-------------------*/}
                <div>
                  <div className="row bg-white  py-md-5 py-4 my-4 mx-0 justify-content-end">
                    <div className="col-md-6 col-12 text-md-end text-left">
                      <div>
                        You can start your campaign right from step 1 (required).
                        Also, you can proceed to steps 2-4 for more settings.
                      </div>
                    </div>

                    <div className="col-md-2  col-12 text-md-end mt-md-0 mt-2 text-left">
                      <button
                        className={`btn bg-black text-white ${!createCampaign.agreementChecked && 'disabled'}`}
                        disabled={!createCampaign.agreementChecked}
                        
                       
                      >
                        Submit
                      </button>

                      <ToastContainer />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <Targeting />

            <Capping />

            <AdvanceSetting />

            <BottomText />
          </div>
          <div className="col-md-3 ">
            <Preview />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCampaign;
