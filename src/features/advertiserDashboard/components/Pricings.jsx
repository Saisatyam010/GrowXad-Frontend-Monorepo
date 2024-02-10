import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { Button } from "@material-ui/core";
import { useForm, SubmitHandler } from "react-hook-form";

const Pricings = (props) => {
  const { pricings, handlePricingData, button, func } = props;
  const [selectedValue, setSelectedValue] = useState("");
  const [campaignBudget, setCampaignBudget] = useState("");
  const [dailyBudget, setDailyBudget] = useState("");

  const handleDailyBudgetChange = (event) => {
    console.log(event.target.value, "event.target.value");
    console.log(watch("campaignBudget"), "cb");
    const newDailyBudget = event.target.value;
    if (newDailyBudget <= watch("campaignBudget")) {
      setValue("dailyBudget", newDailyBudget);
    } else {
      setValue("dailyBudget", 0);
    }
  };
  const handleCampaignBudgetChange = (event) => {
    let newCampaignBudget = event.target.value;
    console.log(newCampaignBudget, "newCampaignBudget");
    // if (parseFloat(newCampaignBudget) > 100000) {
    //   newCampaignBudget = 100000; // Set it to the maximum allowed value
    // }

    setCampaignBudget(newCampaignBudget);
    if (parseFloat(dailyBudget) > parseFloat(newCampaignBudget)) {
      setValue("dailyBudget", newCampaignBudget);
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({ defaultValue: pricings });
  const handleBack = () => {
    props.func(props.button - 1);
  };
  const onSubmit = (data) => {
    // console.log(data, "datasonalisonali")
    handlePricingData(data);
    props.func(props.button + 1);
    // pricingData(data);

    //  console.log(data,"dataparentparent")
  };
  const handleInputPricing = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value, "e.target.value");
    //setSelectedValue(e.target.value);
    handlePricingData({ ...pricings, [name]: value });
  };
  useEffect(() => {
    reset(pricings);
    console.log("comonent Mounted");
    return () => {
      console.log("unmounted");
    };
  }, []);
  console.log(watch("pricingModel"));
  console.log(pricings.campaignBudget + "campaignBudgetSONALISOANALISOANLI");
  return (
    <div>
      <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
        {/* Pricing Model */}
        <div className="flex flex-col px-12 pt-3 ">
          <h2 className="font-semibold mb-2 text-xl text-[#454545] ">
            Pricing & Bidding
          </h2>
          {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue={pricings.pricingModel}

            // onChange={handleRadioChange}
          >
            <FormControlLabel
              value="CPM"
              control={
                <Radio
                  {...register("pricingModel", {
                    required: true,
                    onChange: handleInputPricing,
                  })}
                />
              }
              label="CPM"
            />
            <FormControlLabel
              value="SmartCPM"
              control={
                <Radio {...register("pricingModel", { required: true })} />
              }
              label="SmartCPM"
            />
            <FormControlLabel
              value="CPC"
              control={
                <Radio {...register("pricingModel", { required: true })} />
              }
              label="CPC"
            />
          </RadioGroup>
          {errors.pricingModel && (
            <span style={{ color: "red" }}>Please Select Pricing Nodel</span>
          )}
        </div>
        <hr className="h-[1px] bg-gray-700 my-2 px-4 w-[90%]" />
        {/* Frequency Type */}
        <div className="flex flex-col px-12 py-3  ">
          <h2 className="font-semibold mb-2 text-xl text-[#454545] ">
            Bid Value ({watch("pricingModel")})
          </h2>
          <FormControl className="flex flex-row gap-8">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Connection Type"
                className="block text-sm font-medium  text-black "
              >
                Bidding Value*
              </label>
              <TextField
                placeholder="eg:- $ 0.002"
                type="number"
                id="outlined-basic"
                required
                variant="outlined"
                {...register("biddingValue", {
                  required: true,
                  onChange: handleInputPricing,
                })}
                sx={{ width: 200 }}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </div>
          </FormControl>
          {errors.biddingValue && (
            <span style={{ color: "red" }}> Bidding Value is requried</span>
          )}
        </div>
        <hr className="h-[1px] bg-gray-700 my-2 px-4 w-[90%]" />
        {/* Advertising Budget */}
        <div className="flex flex-col  px-12 py-3  ">
          <h2 className="font-semibold mb-3 text-xl text-[#454545] ">
            Advertising Budget (USD)
          </h2>
          <FormControl className="flex flex-row gap-8">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Connection Type"
                className="block text-sm font-medium  text-black "
              >
                Campaign Budget*
              </label>
              <TextField
                placeholder=""
                type="number"
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 200 }}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                {...register("campaignBudget", {
                  required: "Campaign Budget is required",
                  onChange: handleInputPricing,
                  validate: (value) =>
                    value <= 100000 ||
                    "Campaign Budget Should be Less than or equal to 100000",
                })}
              />
              {errors.campaignBudget && (
                <span style={{ color: "red" }}>
                  {errors.campaignBudget.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Connection Type"
                className="block text-sm font-medium  text-black "
              >
                Daily Budget*
              </label>
              <TextField
                placeholder=""
                type="number"
                id="outlined-basic"
                variant="outlined"
                sx={{ width: 200 }}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                {...register("dailyBudget", {
                  required: "Daily Budget is required",
                  onChange: handleInputPricing,
                  validate: (value) =>
                    value <= watch("campaignBudget") ||
                    "Daily Budget Should be Less than or equal to Campaign Budget",
                })}
              />
              {errors.dailyBudget && (
                <span style={{ color: "red" }}>
                  {errors.dailyBudget.message}
                </span>
              )}
              {/* {errors.dailyBudget && <span style={{ color: 'red'}} >{errors.dailyBudget.message}</span>} */}
            </div>
          </FormControl>
        </div>
        <div className="d-flex justify-content-end  mt-3 pb-5">
          <Button
            className={`${
              props.button > 1 && "text-black !bg-gray-200 mr-3"
            }  disabled:bg-gray-200 disabled:text-gray-300 font-semibold text-sm px-4 py-1 }`}
            disabled={props.button === 1}
            onClick={handleBack}
          >
            Prev Step
          </Button>
          <Button
            className={`  font-semibold text-sm px-4 py-1 mr-5 `}
            style={{
              background: "linear-gradient(180deg, #73035B 0%, #46133B 100%",
              padding: "8px 25px 8px 25px",
            }}
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
            type="submit"
          >
            {props.button === props.button.length ? "Submit" : "Next Step"}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Pricings;
