import React, { useState } from 'react'
import Select from "react-select";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdvanceSettingAPI } from '../../../../AllApi/AllAuthApi';

function AdvanceSetting() {

  const showToastMessage = () => {
    
  };
  const showToastError = () => {
    toast.error("Please fill all fields", {
      position: toast.POSITION.TOP_CENTER,
    });
  }



  const [setting, setsetting] = React.useState(false);

  const placements = [
    {
      value: "1",
      label: "blacklist",
    },

  ];

  const InitialStateAdvanceSetting = {
    connectionType: "",
    placementValue: "",
    ipRangeTargeting: "",
    placements: "",
    countryCodes: "",
    price: "",
    agreementChecked: false,
  }

  const [AdvanceSettingData, setAdvanceSettingData] = useState(InitialStateAdvanceSetting)

  const handleSelectChange = (selectedOption) => {
    setAdvanceSettingData({
      ...AdvanceSettingData,
      connectionType: selectedOption.value,
    });
    console.log(AdvanceSettingData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdvanceSettingData({
      ...AdvanceSettingData,
      [name]: value,
    });
    console.log(AdvanceSettingData);
  }
  const handlecheckedChange = (event) => {
    const { name, checked } = event.target;

    setAdvanceSettingData({
      ...AdvanceSettingData,
      [name]: checked,
    });
    console.log(AdvanceSettingData)
  };

  const handleAdvanceSettingSubmit = async(e) => {
    e.preventDefault();
    console.log(AdvanceSettingData);

    const res = await AdvanceSettingAPI(AdvanceSettingData);

    if(res.status == "success"){
      toast.success("Advance Setting Added Successfully")
      setAdvanceSettingData(InitialStateAdvanceSetting)
    }

  }

  const isAllFieldsFilled = () => {
    if (AdvanceSettingData.connectionType && AdvanceSettingData.placementValue && AdvanceSettingData.ipRangeTargeting && AdvanceSettingData.placements && AdvanceSettingData.countryCodes && AdvanceSettingData.price) {
      return true;
    }
    else {
      return false;
    }
  }

  const handleCampaignReset = () => {
    setAdvanceSettingData(InitialStateAdvanceSetting)
  }

  return (
    <div>
      <div
        className="bg-white  py-4 px-4 mt-4"
        onClick={() => setsetting(!setting)}
      >
        <div className="d-flex justify-content-between">
          <div>
            <h4 className='SSA_campaign_1remFont'>4. Advanced Settings</h4>
          </div>
          <div>
          </div>
          {!setting ? (
            <>
              <i class="fas fa-chevron-up"></i> <h5 className='SSA_campaign_0remFont'>Show More</h5>
            </>
          ) : (
            <>
              <i class="fas fa-chevron-down"></i> <h5 className='SSA_campaign_0remFont'>Hide</h5>{" "}
            </>
          )}
        </div>
      </div>
      {setting ? (
        <>
          <div className='bg-white  container pb-5'>
            <form onSubmit={handleAdvanceSettingSubmit}>
              <div className="row d-flex align-items-center py-3">
                <div className="col-md-7">

                  <label htmlFor="">Connection type</label> <br />
                  <Select
                    className="SSA-campaign_name_selecter "
                    options={placements}
                    placeholder="Select"
                    name='connectionType'
                    onChange={handleSelectChange}
                  />
                </div>
                <div className="col-md-4 text-end pt-3">
                  <small className='SSA_Campaign_SmallText'>
                    Use blacklists to exclude placements from your campaign
                  </small>

                </div>
              </div>
              <div className="row d-flex align-items-center py-3">
                <div className="col-md-7">

                  <textarea class="form-control" placeholder="Placements, commas placement value"
                    value={AdvanceSettingData.placementValue}
                    name='placementValue'
                    onChange={handleChange}
                    style={{ height: "100px" }}></textarea>
                </div>
                <div className="col-md-4 text-end pt-3">
                  <small className='SSA_Campaign_SmallText'>

                    Only valid placement IDs can be added. Please use Adsterra tracking token ##PLACEMENT_ID## in your URL in order to create blacklists.
                  </small>

                </div>
              </div>
              <div className="row d-flex align-items-center py-3">
                <div className="col-md-7">
                  <label htmlFor="">IP range targeting</label>
                  <textarea class="form-control" placeholder="IP's List, 1 IP or Range per line"
                    value={AdvanceSettingData.ipRangeTargeting}
                    name='ipRangeTargeting' onChange={handleChange} style={{ height: "100px" }}></textarea>
                </div>
                <div className="col-md-4 text-end pt-3">
                  <small className='SSA_Campaign_SmallText'>
                    IP range targeting is only available in include mode
                  </small>

                </div>
              </div>
              <div class="SSA_Campaign_budget-container">
                <h6 className="SSA_MarginRight10px py-2">Custom bid </h6>
                <div class="SSA_Campaign_line"></div>
              </div>

              <div className="row  pt-3 ">
                <div className="col-md-4 col-6">
                  <label htmlFor="">
                    Placements  &nbsp;

                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Comma seperated values"
                    value={AdvanceSettingData.placements}
                    name='placements'
                    onChange={handleChange}
                    className="SSA-campaign_name_input w-100"
                  />
                </div>
                <div className="col-md-4 col-6">
                  <label htmlFor="">
                    Country Codes &nbsp;
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Comma seperated values"
                    value={AdvanceSettingData.countryCodes}
                    name='countryCodes'
                    onChange={handleChange}
                    className="SSA-campaign_name_input w-100"
                  />
                </div>
                <div className="col-md-4 col-12 pt-md-0 pt-3 d-flex">
                  <div className="px-1">
                    <label htmlFor=""> Price &nbsp;</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Price"
                      value={AdvanceSettingData.price}
                      name='price'
                      onChange={handleChange}
                      className="SSA-campaign_name_input w-100"
                    />
                  </div>


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
                    <button type="submit" class="btn btn-secondary px-4 py-2"
                      className={`btn SSA_Campaign_ContinueBtn ${!AdvanceSettingData.agreementChecked && 'disabled'}`}
                      disabled={!AdvanceSettingData.agreementChecked}
                      onClick={isAllFieldsFilled() ? () => { showToastMessage(); } : () => { showToastError(); }} >
                      ADD
                    </button>
                  </div>
                </div>
              </div>

              <small className='SSA_Campaign_SmallText'>Only valid placement IDs and country codes can be added</small>
              <div class="form-check pt-3">
                <input class="form-check-input" type="checkbox" name="agreementChecked"
                  checked={AdvanceSettingData.agreementChecked}
                  onChange={handlecheckedChange}
                  id="flexCheckDefault"
                  disabled={!isAllFieldsFilled()}
                />
                <label class="form-check-label" for="flexCheckDefault">
                  I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                </label>
              </div>
            </form>
          </div>

        </>
      ) : (
        <></>
      )}
    </div>

  );
}

export default AdvanceSetting