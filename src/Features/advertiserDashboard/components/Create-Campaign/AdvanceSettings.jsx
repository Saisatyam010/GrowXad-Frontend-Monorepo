import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
import { GrCircleQuestion } from "react-icons/gr";
import "./Capping_limit.css";
import { FormControlLabel, withStyles } from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import Select from "react-select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Button } from "@material-ui/core";
import { SlotBookingChart } from "./SlotBookingChart";
import { useForm, Controller } from "react-hook-form";
import "./AdvanceSettings.css";
import InputLabel from "../shared/Form/Label";
import { createCampaign } from "../../apis/Campaign";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const customTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#73035b", // sets the border color when focused
    primary25: "#fbe5f6", // sets the background color when focused
    primary50: "#fbe5f6", // sets the border color when not focused
  },
});
const timeZoneData = [
  { label: "UTC", value: "UTC" },
  { label: "Africa", value: "Africa" },
  { label: "America ", value: "America" },
  { label: "Russia ", value: "Russia" },
];
const proxyFilterData = [
  { label: "Allow", value: "Allow" },
  { label: "Block", value: "Block" },
]; 

export default function AdvSetting(props) {
  const { advSettings, handleAdvSettingData,state } = props;
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
 

  // console.log(advSettings.buyingType+'sonaliAdvsettings');
  const CheckboxColor = withStyles({
    root: {
      color: "gray", // Green color
      "&$checked": {
        color: "#71065d", // Green color when checked
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const linkRef = React.useRef(null);

  const handleCopyLink = () => {
    if (linkRef.current) {
      linkRef.current.select();
      document.execCommand("copy");
      // Optionally, you can provide feedback to the user that the link has been copied.
      alert("Link copied to clipboard!");
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm({});

  const handleBack = () => {
    props.func(props.button - 1);
  };

  const onSubmit =async (data) => {
    
    const res=await createCampaign(state);
    console.log(res,"res")
      
  };
  const handleInputAdvSettings = (e) => {
    const { name, value } = e.target;
    const fieldName = e.target.name;
    if (
      fieldName === "frequenctImpression" ||
      fieldName === "cappingImpression"
    ) {
      setIsChecked1(false);
    }

    if (fieldName === "frequencyClick" || fieldName === "cappingClick") {
      setIsChecked2(false);
    }

    handleAdvSettingData({ ...advSettings, [name]: value });
  };

  const handleNoCapping = () => {
    if (!isChecked1) {
      //set frequency and capping to 0
      handleAdvSettingData({
        ...advSettings,
        frequenctImpression: 0,
        cappingImpression: 0,
      });
    }

    setIsChecked1(!isChecked1);
  };

  const handleNoCapping2 = () => {
    if (!isChecked2) {
      //set frequency and capping to 0
      handleAdvSettingData({
        ...advSettings,
        frequencyClick: 0,
        cappingClick: 0,
      });
    }
    setIsChecked2(!isChecked2);
  };

 

  const handleCheckboxChange = () => {
    setShowComponent(!showComponent);
  };

  useEffect(() => {
    reset(advSettings);
    
  }, []);
  return (
    <form
      className="bg-white rounded-sm  border pt-2 border-gray-100 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Frequency/Cappings */}
      <section className="px-12 pt-3 ">
        <div className="row">
          <div className="col-md-12">
            <div className="pb-3">
              <h2 className="text-lg text-black  mb-4">Frequency/Cappings</h2>

              <p className="mb-1 text-sm font-light">
                <span>
                  'User-based frequency' determines how often the ad will be
                  displayed on a publisher's website per individual user at a
                  given period of time and based on a cookie matching.
                </span>

                <span className="text-info ">More information</span>
              </p>

              <p className="font-light text-sm">
                Example: If your Frequency Capping (Device) is set to 3:24, then
                the ad will be displayed 3 times a day per every individual
                user.
              </p>
            </div>
          </div>
        </div>

       
        <div className="row">
          <div className="col">
            <div className="pb-3">
             <InputLabel label="Frequency (Impression)" required={false} />

              <TextField
                placeholder="54541"
                type="number"
                value={
                  advSettings.frequenctImpression
                    ? advSettings.frequenctImpression
                    : ""
                }
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "rgb(115 3 91)", // Set your desired focus color here
                    },
                  },
                }}
                {...register("frequenctImpression", {
                  onChange: handleInputAdvSettings,
                })}
                
              />
            </div>
          </div>

          <div className="col">
            <div className="pb-3">
              <InputLabel label="Capping (Impression)" required={false} />

              <TextField
                placeholder="24 h"
                type="number"
                value={
                  advSettings.cappingImpression
                    ? advSettings.cappingImpression
                    : ""
                }
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "rgb(115 3 91)", // Set your desired focus color here
                    },
                  },
                }}
                {...register("cappingImpression", {
                  
                  onChange: handleInputAdvSettings,
                  validate: (value) =>
                    value <= 24 ||
                    "Capping Impression Should be Less than or equal to 24",
                })}
               
              />
              {errors.cappingImpression && (
                <span style={{ color: "red" }}>
                  {errors.cappingImpression.message}
                </span>
              )}
            </div>
          </div>

          <div className="col d-flex align-items-center pt-3">
            <FormControlLabel
              required
              control={
                <CheckboxColor
                  checked={isChecked1}
                  onChange={() => {
                    handleNoCapping();
                  }}
                />
              }
              label={
                <>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <span>No Cappings</span>
                    <span style={{ marginLeft: "5px" }}>
                      <GrCircleQuestion />
                    </span>
                  </span>
                </>
              }
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="pb-3">
             <InputLabel label="Frequency (Click)" required={false} />

              <TextField
                placeholder="5454"
                type="number"
                value={
                  advSettings.frequencyClick ? advSettings.frequencyClick : ""
                }
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "rgb(115 3 91)", // Set your desired focus color here
                    },
                  },
                }}
                {...register("frequencyClick", {
                  onChange: handleInputAdvSettings,
                })}
               
              />
            </div>
          </div>

          <div className="col">
            <div className="pb-3">
              <InputLabel label="Capping (Click)" required={false} />

              <TextField
                placeholder="24 h"
                type="number"
                value={advSettings.cappingClick ? advSettings.cappingClick : ""}
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "rgb(115 3 91)", // Set your desired focus color here
                    },
                  },
                }}
                {...register("cappingClick", {
                  
                  onChange: handleInputAdvSettings,
                  validate: (value) =>
                    value <= 24 ||
                    "Capping Click Should be Less than or equal to 24",
                })}
                
              />
              {errors.cappingClick && (
                <span style={{ color: "red" }}>
                  {errors.cappingClick.message}
                </span>
              )}
            </div>
          </div>

          <div className="col d-flex align-items-center pt-3">
            <FormControlLabel
              required
              control={
                <CheckboxColor
                  checked={isChecked2}
                  onChange={() => {
                    handleNoCapping2();
                  }}
                />
              }
              label={
                <>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <span>No Cappings</span>
                    <span style={{ marginLeft: "5px" }}>
                      <GrCircleQuestion />
                    </span>
                  </span>
                </>
              }
            />
          </div>
        </div>
      </section>

      <hr style={{ marginLeft: "36px", marginRight: "36px" }} />

      {/* Campaign Filters */}

      <section className="px-12 pt-3">
        <h2 className="text-lg text-black  mb-4">Campaign Filters</h2>

        <div className="row">
          <div className="col">
            <div className="pb-3">
            <InputLabel label="Proxy Filter" required={false} />
            <Controller
                    name="proxyFilter"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        defaultValue={proxyFilterData.find(
                          (v) => v.value === 'Allow'
                        )}
                        options={proxyFilterData}
                        value={proxyFilterData.find((v) => v.value === value)}
                        onChange={(value) => {
                          onChange(value);
                          handleInputAdvSettings({
                            target: {
                              name: "proxyFilter",
                              value: value.value,
                            },
                          });
                        }}
                        className="SSAR_Targeting_purple_border w-60 text-sm"
                       
                        theme={customTheme}
                      />
                    )}
                    
                  />
            </div>
          </div>

          <div className="col"></div>
          <div className="col"></div>
        </div>
      </section>

      <hr style={{ marginLeft: "36px", marginRight: "36px" }} />

      {/* Campaign Scheldule */}
      <section className="px-12 pt-3">
        <h2 className="text-lg text-black  mb-4">Campaign Scheldule</h2>
        
        <div className="flex flex-col gap-4">
          
            <div className="flex gap-2">
             <InputLabel label="Day Slots" required={false} />
              <span
                class="form-check form-switch mb-3"
                style={{ display: "inline" }}
              >
                <input
                  className="form-check-input ab-togglewidth SSAR_Targeting_Toggle_color mb-5"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  onChange={handleCheckboxChange}
                  defaultChecked
                />
              </span>

              
                {!showComponent && (
                    <Controller
                    name="campaignSchedule.timeZone"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        defaultValue={timeZoneData.find(
                          (v) => v.value === 'UTC'
                        )}
                        options={timeZoneData}
                        value={timeZoneData.find((v) => v.value === value)}
                        onChange={(value) => {
                          onChange(value);
                          handleInputAdvSettings({
                            target: {
                              name: "campaignSchedule.timeZone",
                              value: value.value,
                            },
                          });
                        }}
                        className="SSAR_Targeting_purple_border w-60 text-sm"
                       
                        theme={customTheme}
                      />
                    )}
                    
                  />
                )}
              
             </div>
              <div className="">
                {!showComponent && <SlotBookingChart className="py-3" />}
              </div>
           
         
        </div>
      </section>
      <hr style={{ marginLeft: "36px", marginRight: "36px" }} />

      {/* Tracking */}

      <section className="px-12 pt-3">
      <h2 className="text-lg text-black  mb-4">Tracking</h2>

        <div className="row">
          <div className="col">
            <div className="pb-2 text-sm font-light">
             
              <span>
                Are you using a tracker? Set Tracking solution for the tracking
                solution for the entire account in
              </span>
              <span>My Account</span>
            </div>
            <div className="pb-3 text-sm font-light">
              <span>
                Paste the postback URL in your tracking solution to track your
                campaign's performance. Remember to add tracking tokens: cid and
                payout. The "payout" parameter is not obligatory if you select
                manual conversion payout.
              </span>
            </div>
          </div>

          <div className="d-flex flex-col mb-4">
          <InputLabel label="Postback Url" required={false}/>
            <TextField
              inputRef={linkRef}
              placeholder="$ 2244"
              defaultValue="http://localhost:3000/advertiserdashboard/campaign/createcampaign"
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(115 3 91)", // Set your desired focus color here
                  },
                },
                "& .MuiOutlinedInput-input::placeholder": {
                  color: "black", // Set the placeholder color to black
                },
              }}
              {...register("tracking", {
                onChange: handleInputAdvSettings,
              })}
              
              // InputProps={{
              //   endAdornment: (
              //     <ContentCopyIcon
              //       onClick={handleCopyLink}
              //       style={{ cursor: "pointer" }}
              //     />
              //   ),
              // }}
            />
          </div>
        </div>
      </section>

      <hr style={{ marginLeft: "36px", marginRight: "36px" }} />

      {/* Buying Type */}

      <section className="px-12 pt-3">
      <h2 className="text-lg text-black  mb-4">Buying Type</h2>

        <div className="row">
          <div className="col">
            <div className="pb-3">
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  defaultValue={advSettings.buyingType}
                  className="pl-2 flex gap-2"
                >
                  <FormControlLabel
                    className="flex gap-1"
                    value="Smoothly"
                    control={
                      <Radio
                    
                        {...register("buyingType", {
                          onChange: handleInputAdvSettings,
                        })}
                      />
                    }
                    label="Smoothly"
                  />
                  <FormControlLabel
                   className="flex gap-1"
                    value="Custom"
                    control={<Radio {...register("buyingType")} />}
                    label="Custom"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-end gap-3 pb-5 px-12 ">
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
          className={`  font-semibold text-sm px-4 py-1 `}
          style={{
            background: "linear-gradient(180deg, #73035B 0%, #46133B 100%",
            padding: "8px 25px 8px 25px",
          }}
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
