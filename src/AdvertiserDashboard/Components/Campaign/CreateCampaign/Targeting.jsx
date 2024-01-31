import React,{useState} from "react";
import Select from "react-select";
import "./CreateCampaign.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TargetingAuth } from "../../../../AllApi/AllAuthApi";

function Targeting() {
  const [isToastDisplayed, setIsToastDisplayed] = useState(false);

  const showToastMessage = () => {
    toast.dismiss(); // Dismiss any active toasts
    // toast.success("Submitted Successfully", {
    //   position: toast.POSITION.TOP_CENTER,
    //   onClose: () => setIsToastDisplayed(false), // Reset state on close
    // });
    setIsToastDisplayed(true);
  };

  const showToastError = () => {
    toast.dismiss(); // Dismiss any active toasts
    toast.error("Please fill all fields", {
      position: toast.POSITION.TOP_CENTER,
      onClose: () => setIsToastDisplayed(false), // Reset state on close
    });
    setIsToastDisplayed(true);
  };

  const handleButtonClick = () => {
    if (isAllFieldsFilled()) {
      if (!isToastDisplayed) {
        showToastMessage();
      }
    } else {
      if (!isToastDisplayed) {
        showToastError();
      }
    }
  };


  const [targeting, setTargeting] = React.useState(false);

  const targetingType = [
    {
      value: "Cost -Per-Action 1",
      label: "Cost -Per-Action — cost per 1 conversion",
    },
    {
      value: "Cost -Per-Action 2",
      label: "Cost -Per-Action — cost per 1 conversion",
    },
    {
      value: "Cost -Per-Action 3",
      label: "Cost -Per-Action — cost per 1 conversion",
    },
    {
      value: "Cost -Per-Action 4",
      label: "Cost -Per-Action — cost per 1 conversion",
    },
  ];

  const InitialStateTargeting={
    targetingType : "",
    Targets : "",
    agreementChecked : false,
  }

  const [TargetingData , setTargetingData] = React.useState(InitialStateTargeting)


  const handleSelectChange = (selectedOption) => {
    setTargetingData({
      ...TargetingData,
      targetingType: selectedOption.value,
    });
    console.log(TargetingData);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTargetingData({
      ...TargetingData,
      [name]: value,
    });
    console.log(TargetingData);
  };

  const handlecheckedChange = (event) => {
    const { name, checked } = event.target;

    setTargetingData({
      ...TargetingData,
      [name]: checked,
    });
    console.log(TargetingData)
  };

  
  const handleTargetingSubmit = async(e) => {
    e.preventDefault();
    // console.log(TargetingData);
   var res= await TargetingAuth(TargetingData)
   if(res.status == "success"){
    toast.success("Targeting Added Successfully")
    setTargetingData(InitialStateTargeting);
   }
  };

  
  const isAllFieldsFilled = () => {
    if (TargetingData.targetingType ) {
      return true;
    } else {
      return false;
    }
  };


  
  return (
    <div>
      <div
        className="bg-white  py-4 px-4 mt-4"
        onClick={() => setTargeting(!targeting)}
      >
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="SSA_campaign_1remFont">2. Targeting</h4>
          </div>
          <div>
            {!targeting ? (
              <>
                <i class="fas fa-chevron-up "></i> <h5 className="SSA_campaign_0remFont">Show More</h5>
              </>
            ) : (
              <>
                <i class="fas fa-chevron-down"></i> <h5 className="SSA_campaign_0remFont">Hide</h5>{" "}
              </>
            )}
          </div>
        </div>
        </div>
        {targeting ? (
          <>
          <form  onSubmit={handleTargetingSubmit}>
            <div className="bg-white container pt-4 pb-5">
              <div className="col-md-2 col-12  ">
                <label htmlFor="">Targeting type</label>
                <br />
                <Select
                
  options={targetingType}
  name="targetingType"
  onChange={handleSelectChange}
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
  <input class="form-check-input" type="checkbox"   name="agreementChecked"
          checked={TargetingData.agreementChecked}
          onChange={handlecheckedChange}
          id="flexCheckDefault"
          disabled={!isAllFieldsFilled()}
         />
  <label class="form-check-label" for="flexCheckDefault">
    I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
  </label>
</div>


              <button
        className={`btn SSA_Campaign_ContinueBtn ${!TargetingData.agreementChecked && 'disabled'}`}
        disabled={!TargetingData.agreementChecked}
        onClick={handleButtonClick}
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

  );
}

export default Targeting;
