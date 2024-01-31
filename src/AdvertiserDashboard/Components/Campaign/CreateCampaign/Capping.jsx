import React, { useState } from 'react'
import './CreateCampaign.css'
import Select from "react-select";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CappingAndLimit } from '../../../../AllApi/AllAuthApi';

function Capping() {
  const showToastMessage = () => {
    
  };
  const showToastError = () => {
    toast.error("Please fill all fields", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

    const [capping, setcapping] = React.useState(false);

    const time = [
      {
        value: "hour",
        label: "HOUR",
      },
      {
        value: "day",
        label: "DAY",
      },
     
    ];

    const InitialStateCapping={
      impressions : "",
      period : "",
      periodType : "",
      totalLimits : "",
      dailyLimits : "",
      hourlyLimits : "",
      totalBudget : "",
      dailyBudget : "",
      hourlyBudget : "",
      agreementChecked : false,
    }

const [CappingData , setCappingData] = useState(InitialStateCapping)

const handleSelectChange = (selectedOption) => {
  setCappingData({
    ...CappingData,
    periodType: selectedOption.value,
  });
  console.log(CappingData);
}

const handleChange = (e) => {
  const { name, value } = e.target;
  setCappingData({
    ...CappingData,
    [name]: value
  });
  console.log(CappingData);
}

const handleCappingSubmit = async (e) => {
  e.preventDefault();
  // console.log(CappingData);
  const res=await CappingAndLimit(CappingData)
  if(res.status == "success"){
    toast.success("Capping & Limits Added Successfully")

    setCappingData(InitialStateCapping)

  }

 
}

const handlecheckedChange = (event) => {
  const { name, checked } = event.target;

  setCappingData({
    ...CappingData,
    [name]: checked,
  });
  console.log(CappingData)
};


const isAllFieldsFilled = () => {
  if (CappingData.impressions && CappingData.period && CappingData.periodType && CappingData.totalLimits && CappingData.dailyLimits && CappingData.hourlyLimits && CappingData.totalBudget && CappingData.dailyBudget && CappingData.hourlyBudget) {
    return true;
  }
  else {
    return false;
  }
}

    return (
      <div>
        <div
          className="bg-white  py-4 px-4 mt-4"
          onClick={() => setcapping(!capping)}
        >
          <div className="d-flex justify-content-between">
            <div>
              <h4 className='SSA_campaign_1remFont'>3. Cappings & Limits</h4>
            </div>
            <div>
              {!capping ? (
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
          </div>
          {capping ? (
            <>
              <div className='bg-white container pb-5 '>
                <form onSubmit={handleCappingSubmit}>
              <div class="SSA_Campaign_budget-container  ">
                  <h6 className="SSA_MarginRight10px py-2">Frequency cappings</h6>
                  <div class="SSA_Campaign_line"></div>
                </div>
                <div className="row pt-1 pb-4">
                    <div className="col-md-2 ">
                    <label htmlFor="">
                      Impressions
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="-"
                      onChange={handleChange}
value={CappingData.impressions}
                      name='impressions'
                      className="SSA-campaign_name_input w-100"
                    />
                    
                    </div>
                    <div className="col-md-2 ">
                    <label htmlFor="">
                      Period                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="-"
                      onChange={handleChange}
                      value={CappingData.period}
                      name='period'
                      className="SSA-campaign_name_input w-100"
                    />
                    
                    </div>
                    <div className="col-md-2 ">
                    <label htmlFor=""> </label> <br />
                        <Select options={time} 
                        onChange={handleSelectChange}
                        name='periodType'
                        />
                    
                    </div>
                </div>
                <div class="SSA_Campaign_budget-container">
                  <h6 className="SSA_MarginRight10px py-2">Limits of impressions</h6>
                  <div class="SSA_Campaign_line"></div>
                </div>
                <div className="row pt-1 pb-4">
                    <div className="col-md-2 ">
                    <label htmlFor="">
                      Total
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="-"
                      onChange={handleChange}
                      value={CappingData.totalBudgetLimits}
                      name='totalLimits'
                      className="SSA-campaign_name_input w-100"
                    />
                    
                    </div>
                    <div className="col-md-2 ">
                    <label htmlFor="">
                      Daily                   </label>
                    <br />
                    <input
                      type="text"
                      placeholder="-"
                      value={CappingData.dailyBudgetLimits}
                      name='dailyLimits'
                      onChange={handleChange}
                      className="SSA-campaign_name_input w-100"
                    />
                    
                    </div>
                    <div className="col-md-2 ">
                    <label htmlFor="">
                      Hourly                 </label>
                    <br />
                    <input
                      type="text"
                      placeholder="-"
                      value={CappingData.hourlyBudgetLimits}
                      name='hourlyLimits'
                      onChange={handleChange}
                      className="SSA-campaign_name_input w-100"
                    />
                    
                    </div>
                </div>
                <div class="SSA_Campaign_budget-container">
                  <h6 className="SSA_MarginRight10px py-2">Budget</h6>
                  <div class="SSA_Campaign_line"></div>
                </div>
                <div className="row pt-1 pb-4">
                    <div className="col-md-2 ">
                    <label htmlFor="">
                      Total
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="-"
                      value={CappingData.totalBudget}
                      name='totalBudget'
                      onChange={handleChange}
                      className="SSA-campaign_name_input w-100"
                    />
                    
                    </div>
                    <div className="col-md-2 ">
                    <label htmlFor="">
                      Daily                   </label>
                    <br />
                    <input
                      type="text"
                      placeholder="-"
                      value={CappingData.dailyBudget}
                      name='dailyBudget'
                      onChange={handleChange}
                      className="SSA-campaign_name_input w-100"
                    />
                    
                    </div>
                    <div className="col-md-2 ">
                    <label htmlFor="">
                      Hourly                 </label>
                    <br />
                    <input
                      type="text"
                      placeholder="-"
                      value={CappingData.hourlyBudget}
                      name='hourlyBudget'
                      onChange={handleChange}
                      className="SSA-campaign_name_input w-100"
                    />
                    
                    </div>
                    <div className="col-md-5 pt-3">
                     <small className='SSA_Campaign_SmallText'> Set up specific budget spending limits or choose unlimited for spending within your account balance.</small>  
                    </div>

                   
                </div>

                <div class="form-check pt-3">
  <input class="form-check-input" type="checkbox"   name="agreementChecked"
          checked={CappingData.agreementChecked}
          onChange={handlecheckedChange}
          id="flexCheckDefault"
          disabled={!isAllFieldsFilled()}
         />
  <label class="form-check-label" for="flexCheckDefault">
    I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
  </label>
</div>
<button
 className={`btn SSA_Campaign_ContinueBtn ${!CappingData.agreementChecked && 'disabled'}`}
  disabled={!CappingData.agreementChecked}
  onClick={isAllFieldsFilled() ? () => { showToastMessage(); } : () => { showToastError(); }}
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
    );
  }

export default Capping