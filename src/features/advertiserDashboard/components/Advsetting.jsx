import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
import { GrCircleQuestion } from "react-icons/gr";
import "./Capping_limit.css";
import { FormControlLabel, withStyles } from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button } from "@material-ui/core";
import { SlotBookingChart } from "./SlotBookingChart";
import { useForm, SubmitHandler, Controller, set } from "react-hook-form";
import './AdvancedSetting.css'

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
const TimeZone = ["UTC", "Africa", "America", "Russia"];
const CPArule = ["Allow", "Blocked"];

export default function AdvSetting(props) {

  const { advSettings, handleAdvSettingData, button, func } = props;
  const [selectedValue, setSelectedValue] = useState("");
  const [cpaconnection, setCpaconnection] = React.useState([CPArule[0]]);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [timeZoneSelect, setTimeZoneSelect] = React.useState([TimeZone[0]]);


  const handleRule = (event) => {
    const {
      target: { value },
    } = event;
    setCpaconnection(typeof value === "string" ? value.split(",") : value);
  };

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
    formState: { errors },
  } = useForm({});

  const handleBack = () => {
    props.func(props.button - 1);
  };

  const onSubmit = (data) => {
    console.log(data, "data");

    props.func(props.button + 1);
    handleAdvSettingData(data);
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
   

    

   
    // const HandleProxyFilter = (event) => {
    //     const {
    //         target: { value },
    //     } = event;
    //     setProxyFilter(typeof value === "string" ? value.split(",") : value);
    // };

   

    //setSelectedValue(e.target.value);

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

  const handleWorldTimeZone = (event) => {
    const {
        target: { value },
    } = event;
    setTimeZoneSelect(typeof value === "string" ? value.split(",") : value);
};

const handleCheckboxChange = () => {
  setShowComponent(!showComponent);
};

  useEffect(() => {
    reset(advSettings);
    console.log("comonent Mounted");
    return () => {
      console.log("unmounted");
    };
  }, []);
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-11 ">
            <form
              className="bg-white w-100 p-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <section className="flex flex-col ">
                <div className="row">
                  <div className="col-md-12">
                    <div className="pb-3">
                      <h5 className="fw-bold pb-3">Frequency/Cappings</h5>

                      <p className="pb-2">
                        <span>
                          'User-based frequency' determines how often the ad
                          will be displayed on a publisher's website per
                          individual user at a given period of time and based on
                          a cookie matching.
                        </span>

                        <span className="text-info">More information</span>
                      </p>

                      <p>
                        Example: If your Frequency Capping (Device) is set to
                        3:24, then the ad will be displayed 3 times a day per
                        every individual user.
                      </p>
                    </div>
                  </div>
                </div>

                <form></form>
                <div className="row">
                  <div className="col">
                    <div className="pb-3">
                      <label className="fw-bolder">
                        Frequency (Impression)*
                      </label>

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
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="pb-3">
                      <label className="fw-bolder">Capping (Impression)*</label>

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
                          required: true,
                          onChange: handleInputAdvSettings,
                          validate: (value) =>
                            value <= 24 ||
                            "Capping Impression Should be Less than or equal to 24",
                        })}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                        }}
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
                      <label className="fw-bolder">Frequency (Click)*</label>

                      <TextField
                        placeholder="5454"
                        type="number"
                        value={
                          advSettings.frequencyClick
                            ? advSettings.frequencyClick
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
                        {...register("frequencyClick", {
                          onChange: handleInputAdvSettings,
                        })}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="pb-3">
                      <label className="fw-bolder">Capping (Click)*</label>

                      <TextField
                        placeholder="24 h"
                        type="number"
                        value={
                          advSettings.cappingClick
                            ? advSettings.cappingClick
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
                        {...register("cappingClick", {
                          required: true,
                          onChange: handleInputAdvSettings,
                          validate: (value) =>
                            value <= 24 ||
                            "Capping Click Should be Less than or equal to 24",
                        })}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                        }}
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

              <hr className="h-[1px] bg-gray-700 my-4 " />

              {/* Campaign Filters */}

              <section className="flex flex-col ">
                <h5 className="fw-bold pb-3">Campaign Filters</h5>

                <div className="row">
                  <div className="col">
                    <div className="pb-3">
                      <label className="fw-bolder">Proxy Filter</label>

                      <FormControl sx={{ width: "100%" }}>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          // multiple
                          value={cpaconnection}
                          onChange={handleRule}
                          input={<OutlinedInput />}
                          renderValue={(selected) => selected.join(", ")}
                          MenuProps={MenuProps}
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                          }}
                          {...register("proxyFilter", {
                            onChange: handleInputAdvSettings,
                          })}
                        >
                          {CPArule.map((name) => (
                            <MenuItem key={name} value={name}>
                              <Checkbox
                                checked={cpaconnection.indexOf(name) > -1}
                              />
                              <ListItemText primary={name} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                  <div className="col"></div>
                  <div className="col"></div>
                </div>
              </section>

              <hr className="h-[1px] bg-gray-700 my-4 " />

              {/* Campaign Scheldule */}
              <section className="flex flex-col">
                                <h3 className="fw-bold pb-3">Campaign Scheldule</h3>
                                <div className="row">
                                    <div className="col">
                                        <div>
                                            <span className="fw-bolder px-4 fs-6 text-start ">Day/hour</span>
                                            <span class="form-check form-switch mb-3" style={{ display: "inline" }}>
                                                <input
                                                    className="form-check-input ab-togglewidth SSAR_Targeting_Toggle_color mb-5"
                                                    type="checkbox"
                                                    id="flexSwitchCheckChecked"
                                                    onChange={handleCheckboxChange}
                                                    defaultChecked
                                                />
                                            </span>

                                            <span style={{ display: "inline" }} className="px-4">

                                                

                                                {!showComponent && <FormControl sx={{ width: "20%" }}>
                                                    <Select
                                                        labelId="demo-multiple-checkbox-label"
                                                        id="demo-multiple-checkbox"
                                                        // multiple
                                                        value={timeZoneSelect}
                                                        onChange={handleWorldTimeZone}
                                                        input={<OutlinedInput />}
                                                        renderValue={(selected) => selected.join(", ")}
                                                        MenuProps={MenuProps}
                                                        style={{
                                                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',

                                                        }}
                                                    >
                                                        {TimeZone.map((name) => (
                                                            <MenuItem key={name} value={name}>
                                                                <Checkbox checked={timeZoneSelect.indexOf(name) > -1} />
                                                                <ListItemText primary={name} />
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>}
                                            </span>

                                            <div className="py-4">
                                                {!showComponent && <SlotBookingChart className="py-3" />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
              <hr className= "h-[1px] bg-gray-700 my-4 " />

              {/* Tracking */}

              <section className="flex flex-col ">
                <h5 className="fw-bold pb-3">Tracking</h5>

                <div className="row">
                  <div className="col">
                    <div className="pb-2">
                      <label className="fw-bolder">Postback Url</label>
                      <span>
                        Are you using a tracker? Set Tracking solution for the
                        tracking solution for the entire account in
                      </span>
                      <span>My Account</span>
                    </div>
                    <div className="pb-3">
                      <span>
                        Paste the postback URL in your tracking solution to
                        track your campaign's performance. Remember to add
                        tracking tokens: cid and payout. The "payout" parameter
                        is not obligatory if you select manual conversion
                        payout.
                      </span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center w-100">
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
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                        // Adding padding for the copy icon
                      }}
                      InputProps={{
                        endAdornment: (
                          <ContentCopyIcon
                            onClick={handleCopyLink}
                            style={{ cursor: "pointer" }}
                          />
                        ),
                      }}
                    />
                  </div>
                </div>
              </section>

              <hr className="h-[1px] bg-gray-700 my-4 " />

              {/* Buying Type */}

              <section className="flex flex-col ">
                <h5 className="fw-bold pb-3">Buying Type</h5>

                <div className="row">
                  <div className="col">
                    <div className="pb-3">
                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          defaultValue={advSettings.buyingType}
                        >
                          <FormControlLabel
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
              <div className="d-flex justify-content-end pb-5 mt-3 ">
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
                    background:
                      "linear-gradient(180deg, #73035B 0%, #46133B 100%",
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
          </div>
        </div>
      </div>
    </>
  );
}
