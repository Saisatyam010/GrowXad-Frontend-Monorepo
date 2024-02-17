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
import InputLabel from "../shared/Form/Label";
import Input from "@material-ui/core/Input";

const Pricings = (props) => {
  const { pricings, handlePricingData } = props;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ defaultValue: pricings });

  const handleBack = () => {
    props.func(props.button - 1);
  };
  const onSubmit = (data) => {
    props.func(props.button + 1);
  };
  const handleInputPricing = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value, "e.target.value");
    handlePricingData({ ...pricings, [name]: value });
  };

  useEffect(() => {
    reset(pricings);
  }, []);

  return (
    <form
      className="bg-white rounded-sm  border pt-2 border-gray-100 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Pricing & Bidding */}
      <section className="px-12 pt-3 ">
        <h2 className="text-lg text-black  mb-4">Pricings & Biding</h2>

        {/* Pricing Model */}
        <div className="flex flex-col gap-1 mb-2">
          <InputLabel label="Pricing Model" required="true" />
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="pl-2  "
            defaultValue={pricings.pricingModel}
            sx={{
              borderColor: "rgb(115 3 91)",
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(115 3 91)",
                },
                "&:hover fieldset": {
                  borderColor: "rgb(115 3 91)",
                },
              },
            }}

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
              className="text-sm"
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
            <span className="error-message">Please Select Pricing Nodel</span>
          )}
        </div>

        {/* Bidding Value  */}
        <div className="flex flex-col gap-2 mb-4">
          <InputLabel
            label={`Bidding Value (${watch("pricingModel")})`}
            required={true}
          ></InputLabel>
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />

          {errors.biddingValue && (
            <span className="error-message"> Bidding Value is requried</span>
          )}
        </div>
      </section>

      <hr style={{ marginLeft: "36px", marginRight: "36px" }} />

      {/* Advertising Budget */}
      <section className="flex flex-col  px-12 py-3  ">
        <h2 className="text-lg text-black  mb-4">Advertising Budget (USD)</h2>
        <FormControl className="flex flex-row gap-8">
          <div className="flex flex-col gap-1">
            <InputLabel label="Campaign Budget" required="true" />
            <TextField
              placeholder=""
              type="number"
              id="outlined-basic"
              variant="outlined"
              sx={{
                width: 200,
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(115 3 91)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgb(115 3 91)",
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              {...register("campaignBudget", {
                required: "Campaign Budget is required",
                min:{value:100,message:"Campaign Budget Should greater than 100"},
                onChange: handleInputPricing,
                validate: (value) =>
                  value <= 100000 ||
                  "Campaign Budget Should be Less than or equal to 100000",
              })}
            />
            {errors.campaignBudget && (
              <span className="error-message">
                {errors.campaignBudget.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <InputLabel label="Daily Budget" required="true" />
            <TextField
              placeholder=""
              type="number"
              id="outlined-basic"
              variant="outlined"
              sx={{
                width: 200,
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(115 3 91)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgb(115 3 91)",
                  },
                },
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
                  value <= parseInt(watch("campaignBudget")) ||
                  "Daily Budget Should be Less than or equal to Campaign Budget",
              })}
            />
            {errors.dailyBudget && (
              <span className="error-message">
                {errors.dailyBudget.message}
              </span>
            )}
            {/* {errors.dailyBudget && <span style={{ color: 'red'}} >{errors.dailyBudget.message}</span>} */}
          </div>
        </FormControl>
      </section>
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
  );
};
export default Pricings;
