import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import "./Targetings.css";
import Select from "react-select";
import { Button } from "@material-ui/core";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { set } from "date-fns";

const Targeting = (props) => {
  const { targetings, handleTargetingData, button, func } = props;
  const [isGeoEnabled, setIsGeoEnabled] = useState(
    typeof targetings.geo == "object" ? true : false
  );
  const [isDeviceEnabled, setIsDeviceEnabled] = useState(
    typeof targetings.device == "object" ? true : false
  );
  const [isOSEnabled, setIsOSEnabled] = useState(
    typeof targetings.os == "object" ? true : false
  );
  const [isBrowserEnabled, setIsBrowserEnabled] = useState(
    typeof targetings.browser == "object" ? true : false
  );
  const [isConnectionTypeEnabled, setIsConnectionTypeEnabled] = useState(
    typeof targetings.connectionType == "object" ? true : false
  );
  const [isLanguageEnabled, setIsLanguageEnabled] = useState(
    typeof targetings.language == "object" ? true : false
  );
  const [isIPRangeEnabled, setIsIPRangeEnabled] = useState(
    typeof targetings.ipRange == "object" ? true : false
  );
  const [osOptions, setOSOptions] = useState([]);
  const handleToggleChangeGeo = (e) => {
    console.log(e.target.checked, "e.target.checked");
    setIsGeoEnabled(!isGeoEnabled);
    if (!e.target.checked) {
      delete targetings.geo;
      handleTargetingData({ ...targetings });
    }
   
  };
  const handleToggleChangeDevice = (e) => {
    setIsDeviceEnabled(!isDeviceEnabled);
    if(isOSEnabled){
      setIsOSEnabled(false)
      delete targetings.os;
      handleTargetingData({ ...targetings });
    }
    if (!e.target.checked) {
      delete targetings.device;
      handleTargetingData({ ...targetings });
    }
  };
  const handleToggleChangeOS = (e) => {
    setIsOSEnabled(!isOSEnabled);
    if (!e.target.checked) {
      delete targetings.os;
      handleTargetingData({ ...targetings });
    }
  };
  const handleToggleChangeBrowser = (e) => {
    setIsBrowserEnabled(!isBrowserEnabled);
    if (!e.target.checked) {
      delete targetings.browser;
      handleTargetingData({ ...targetings, });
    }
  };
  const handleToggleChangeConnectionType = (e) => {
    setIsConnectionTypeEnabled(!isConnectionTypeEnabled);
    if (!e.target.checked) {
      handleTargetingData({ ...targetings });
    }
  };
  const handleToggleChangeLanguage = (e) => {
    setIsLanguageEnabled(!isLanguageEnabled);
    if (!e.target.checked) {
      delete targetings.language;
      handleTargetingData({ ...targetings});
    }
  };
  const handleToggleChangeIPRange = (e) => {
    setIsIPRangeEnabled(!isIPRangeEnabled);
    if (!e.target.checked) {
      delete targetings.ipRange;
      handleTargetingData({ ...targetings });
    }
  };
  const handleOSOptions=(deviceType)=>{
    if(deviceType){
      if(deviceType.length>0){
        if(deviceType.includes("Mobile")){
          console.log("deviceType")
          console.log(mobileOs,"mobileOS")
          setOSOptions([...osOptions,...mobileOs])
        } else {
          // Remove mobileOs from osOptions if deviceType does not include "Mobile"
          console.log("mobile not")
          setOSOptions(osOptions.filter(os => !mobileOs.find(os=>os.value===os.value)))
        }
      if(deviceType.includes("Desktop")){
        setOSOptions([...osOptions,...desktopOs])
    } else {
        // Remove mobileOs from osOptions if deviceType does not include "Mobile"
        setOSOptions(osOptions.filter(os => !desktopOs.includes(os)))
    }
      
    }
    
  }
  
}
  console.log(osOptions,"osOptions")
  const customTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: "#73035b", // sets the border color when focused
      primary25: "#fbe5f6", // sets the background color when focused
      primary50: "#fbe5f6", // sets the border color when not focused
    },
  });

  const geo = [
    {
      value: "India",
      label: "India",
      name: "Geo",
    },
    {
      value: "USA",
      label: "USA",
      name: "Geo",
      
    },
    {
      value: "UK",
      label: "UK",
      name: "Geo",
    },
    {
      value: "Canada",
      label: "Canada",
      name: "Geo",
    },
    {
      value: "Australia",
      label: "Australia",
      name: "Geo",
    },
    {
      value: "Other",
      label: "Other",
      name: "Geo",
    },
  ];
  const Browser = [
    {
      value: "Chrome",
      label: "Chrome",
      name: "Browser",
    },
    {
      value: "Firefox",
      label: "Firefox",
      name: "Browser",
    },
    {
      value: "Edge",
      label: "Edge",
      name: "Browser",
    },
    {
      value: "Opera",
      label: "Opera",
      name: "Browser",
    },
    {
      value: "Other",
      label: "Other",
      name: "Browser",
    },
  ];
  const Devices=[
    {
      value: "Mobile",
      label: "Mobile",
      name: "Device",
    },
    {
      value: "Desktop",
      label: "Desktop",
      name: "Device",
    },

    {
      value: "Other",
      label: "Other",
      name: "Device",
    },
  ]
  const desktopOs = [
    {
      value: "Windows",
      label: "Windows",
    },
    {
      value: "MacOS",
      label:"MacOS"
    },
    {
      value: "Linux",
      label: "Linux",
    }
  ];
  const mobileOs = [
    {
      value: "Andriod",
      label: "Andriod",
      
    },
    {
      value: "Blackberry",
      label: "Blackberry",
      
    },
    {
      value: "IOS",
      label: "IOS",
     
    },
    {
      value: "IPadOs",
      label: "IPadOs",
      
    },
    {
      value: "Symbian",
      label: "Symbian",
      
    },
    {
      value: "Window Phone",
      label: "Window Phone",
      
    },

  ];
  const otherOs = [
    {
      value: "ChromeOS",
      label: "ChromeOS",
      
    },
    {
      value: "ChromeCast",
      label: "ChromeCast",
      
    },
    {
      value: "Nintendo",
      label: "Nintendo",
     
    },
    {
      value: "WebOS",
      label: "WebOs",
      
    },
    {
      value: "XboxOS",
      label: "XboxOS",
      
    },
    {
      value: "Window Phone",
      label: "Window Phone",
      
    },
    
  ];

  const connectiontype = [
    {
      value: "Wifi",
      label: "Wifi",
      name: "ConnectionType",
    },
    {
      value: "3G/LTE",
      label: "3G/LTEle",
      name: "ConnectionType",
    },
    {
      value: "4G",
      label: "4G",
      name: "ConnectionType",
    },
    {
      value: "5G",
      label: "5G",
      name: "ConnectionType",
    },
    {
      value: "Other",
      label: "Other",
      name: "ConnectionType",
    },
  ];

  const language = [
    {
      value: "English",
      label: "English",
      name: "Language",
    },
    {
      value: "Hindi",
      label: "Hindi",
      name: "Language",
    },
    {
      value: "French",
      label: "French",
      name: "Language",
    },
    {
      value: "Spanish",
      label: "Spanish",
      name: "Language",
    },
    {
      value: "Other",
      label: "Other",
      name: "Language",
    },
  ];

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      geo: "All",
      os: "All",
      browser: "All",
      connectionType: "All",
      language: "All",
    },
  });

  const handleBack = () => {
    props.func(props.button - 1);
  };

  const onSubmit = (data) => {
    props.func(props.button + 1);
  };
  const handleInputTaregting = (e) => {
    const { name, value } = e.target;
    
   
    handleTargetingData({ ...targetings, [name]: value });
  };

  useEffect(() => {
    reset(targetings);
  }, []);
  useEffect(()=>{
    console.log("Changed")
    handleOSOptions(targetings.device)
  },[targetings.device])

  return (
    <div>
    
       
        <form  className="bg-white rounded-sm  border pt-2 border-gray-100 w-full" onSubmit={handleSubmit(onSubmit)}>
          <section className="px-12 pt-3 ">
            <h2 className="text-lg text-black  mb-4">Targetings</h2>
          <div className=" row p-3">
            <div className="col-md-3 ">
              <label
                for="exampleInputEmail1"
                class="form-label pt-1  d-flex justify-content-start align-items-center "
              >
                Geo (countries)
              </label>
            </div>
            <div className="col-md-1">
              <div className="text-center pt-2 d-flex SSAR_CreateCamp_18px_font SSA_fontgrey  justify-content-center ">
                <span class="form-check form-switch">
                  &nbsp;
                  <input
                    className="form-check-input SSAR_Targeting_Toggle_color"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    name="geo"
                    onChange={handleToggleChangeGeo}
                    checked={isGeoEnabled}
                  />
                </span>
              </div>
            </div>
            <div className="col-md-8 pt-1 ps-5">
              <Controller
                control={control}
                name="geo"
                render={({ field: { onChange, value } }) => (
                  <Select
                    value={
                      typeof targetings.geo == "object"
                        ? targetings.geo?.map((v) => ({ value: v, label: v }))
                        : "ALL"
                    } // assuming 'all' is expected as string
                    onChange={(newValue) => {
                      if (!newValue || newValue.length === 0) {
                        delete targetings.geo;
                        handleTargetingData({ ...targetings})
                        setIsGeoEnabled(false);
                      } else {
                        onChange(newValue);
                        console.log(newValue);
                        handleInputTaregting({
                          target: {
                            name: "geo",
                            value: newValue.map((v) => v.value),
                          },
                        });
                      }
                    }}
                    className="SSAR_Targeting_purple_border text-sm"
                    aria-label="Default select example"
                    options={geo}
                    isMulti={true}
                    isDisabled={!isGeoEnabled}
                    theme={customTheme}
                  ></Select>
                )}
              />
            </div>
          </div>
          <div className=" row p-3">
            <div className="col-md-3 ">
              <label
                for="exampleInputEmail1"
                class="form-label pt-1  d-flex justify-content-start align-items-center "
              >
                Devices
              </label>
            </div>
            <div className="col-md-1">
              <div className="text-center pt-2 d-flex SSAR_CreateCamp_18px_font SSA_fontgrey  justify-content-center ">
                <span class="form-check form-switch">
                  &nbsp;
                  <input
                    className="form-check-input SSAR_Targeting_Toggle_color"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    onChange={handleToggleChangeDevice}
                    checked={isDeviceEnabled}
                  />
                </span>
              </div>
            </div>
            <div className="col-md-8 pt-1 ps-5">
              <Controller
                control={control}
                name="device"
                render={({ field: { onChange, value } }) => (
                  <Select
                    value={
                      typeof targetings.device == "object"
                        ? targetings.device?.map((v) => ({ value: v, label: v }))
                        : "ALL"
                    } // assuming 'all' is expected as string
                    onChange={(newValue) => {
                      if (!newValue || newValue.length === 0) {
                       
                        
                       delete targetings.device;
                      handleTargetingData({ ...targetings})
                      setIsDeviceEnabled(false);
                      } else {
                        onChange(newValue);
                        console.log(newValue);
                        handleInputTaregting({
                          target: {
                            name: "device",
                            value: newValue.map((v) => v.value),
                          },
                        });
                      }
                    }}
                    className="SSAR_Targeting_purple_border text-sm"
                    aria-label="Default select example"
                    options={Devices}
                    isMulti={true}
                    isDisabled={!isDeviceEnabled}
                    theme={customTheme}
                  ></Select>
                )}
              />
            </div>
          </div>

          <div className=" row p-3">
            <div className="col-md-3">
              {" "}
              <label
                for="exampleInputEmail1"
                class="form-label pt-1 d-flex   "
              >
                Operating System
              </label>
            </div>
            <div className="col-md-1">
              <div className="text-center pt-2 d-flex text-lg  SSA_fontgrey  justify-content-center ">
                <span class="form-check form-switch">
                  &nbsp;
                  <input
                    class="form-check-input SSAR_Targeting_Toggle_color"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    onChange={handleToggleChangeOS}
                    checked={isOSEnabled}
                    disabled={watch("device")?.length>0?false:true}
                  />
                </span>
              </div>
            </div>
            <div className="col-md-8 pt-1 ps-5">
              <Controller
                control={control}
                name="os"
                render={({ field: { onChange, value } }) => (
                  <Select
                    value={
                      typeof targetings.os == "object"
                        ? targetings.os?.map((v) => ({ value: v, label: v }))
                        : "ALL"
                    } // assuming 'all' is expected as string
                    onChange={(newValue) => {
                      if (!newValue || newValue.length === 0) {
                        // onChange([{ label: 'All', value: 'all' }]);
                        delete targetings.os;
                        handleTargetingData({ ...targetings})
                        setIsOSEnabled(false);
                      } else {
                        onChange(newValue);
                        console.log(newValue);
                        handleInputTaregting({
                          target: {
                            name: "os",
                            value: newValue.map((v) => v.value),
                          },
                        });
                      }
                    }}
                    className="SSAR_Targeting_purple_border  text-sm"
                    aria-label="Default select example"
                    options={osOptions}
                    isMulti={true}
                    theme={customTheme}
                    isDisabled={!isOSEnabled&&!isDeviceEnabled}
                    // {...register("os")}
                  />
                )}
              />
            </div>
          </div>

          <div className=" row  p-3">
            <div className="col-md-3 pt-1">
              <label
                for="exampleInputEmail1"
                class="form-label pt-1  d-flex justify-content-start align-items-center "
              >
                Browser
              </label>
            </div>
            <div className="col-md-1">
              <div className="text-center pt-2 d-flex SSAR_CreateCamp_18px_font SSA_fontgrey  justify-content-center ">
                <span class="form-check form-switch">
                  &nbsp;
                  <input
                    class="form-check-input SSAR_Targeting_Toggle_color"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    onChange={handleToggleChangeBrowser}
                    checked={isBrowserEnabled}
                  />
                </span>
              </div>
            </div>
            <div className="col-md-8 pt-1 ps-5">
              <Controller
                control={control}
                name="browser"
                render={({ field: { onChange, value } }) => (
                  <Select
                    value={
                      typeof targetings.browser == "object"
                        ? targetings.browser?.map((v) => ({
                            value: v,
                            label: v,
                          }))
                        : "ALL"
                    } // assuming 'all' is expected as string
                    onChange={(newValue) => {
                      if (!newValue || newValue.length === 0) {
                        delete targetings.browser;
                        handleTargetingData({ ...targetings})
                        setIsBrowserEnabled(false);
                      } else {
                        onChange(newValue);
                        console.log(newValue);
                        handleInputTaregting({
                          target: {
                            name: "browser",
                            value: newValue.map((v) => v.value),
                          },
                        });
                      }
                    }}
                    className="text-sm"
                    aria-label="Default select example"
                    options={Browser}
                    isMulti={true}
                    theme={customTheme}
                    isDisabled={!isBrowserEnabled}
                    // {...register("browser")}
                  ></Select>
                )}
              />
            </div>
          </div>

          <div className=" row p-3">
            <div className="col-md-3">
              <label
                for="exampleInputEmail1"
                class="form-label pt-1  d-flex  justify-content-start align-items-center "
              >
                Connection Type
              </label>
            </div>
            <div className="col-md-1">
              <div className="text-center pt-2 d-flex SSAR_CreateCamp_18px_font  SSA_fontgrey  justify-content-center ">
                <span class="form-check form-switch">
                  &nbsp;
                  <input
                    class="form-check-input SSAR_Targeting_Toggle_color"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    onChange={handleToggleChangeConnectionType}
                    checked={isConnectionTypeEnabled}
                  />
                </span>
              </div>
            </div>
            <div className="col-md-8 pt-1 ps-5">
              <Controller
                control={control}
                name="connectionType"
                render={({ field: { onChange, value } }) => (
                  <Select
                    value={
                      typeof targetings.connectionType == "object"
                        ? targetings.connectionType?.map((v) => ({
                            value: v,
                            label: v,
                          }))
                        : "ALL"
                    } // assuming 'all' is expected as string
                    onChange={(newValue) => {
                      if (!newValue || newValue.length === 0) {
                     
                        delete targetings.connectionType;
                        handleTargetingData({ ...targetings})
                        setIsConnectionTypeEnabled(false);
                      } else {
                        onChange(newValue);
                        console.log(newValue);
                        handleInputTaregting({
                          target: {
                            name: "connectionType",
                            value: newValue.map((v) => v.value),
                          },
                        });
                      }
                    }}
                    className="SSAR_Targeting_purple_border text-sm"
                    aria-label="Default select example"
                    options={connectiontype}
                    // onChange={onChange}
                    isMulti={true}
                    theme={customTheme}
                    isDisabled={!isConnectionTypeEnabled}
                    // {...register("connectionType")}
                  />
                )}
              />
            </div>
          </div>

          <div className=" row p-3">
            <div className="col-md-3">
              {" "}
              <label
                for="exampleInputEmail1"
                class="form-label pt-1  d-flex  justify-content-start align-items-center "
              >
                Language
              </label>
            </div>
            <div className="col-md-1">
              <div className="text-center pt-2 d-flex SSAR_CreateCamp_18px_font  SSA_fontgrey  justify-content-center ">
                <span class="form-check form-switch">
                  &nbsp;
                  <input
                    class="form-check-input SSAR_Targeting_Toggle_color"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    onChange={handleToggleChangeLanguage}
                    checked={isLanguageEnabled}
                  />
                </span>
              </div>
            </div>
            <div className="col-md-8 pt-1 ps-5">
              <Controller
                control={control}
                name="language"
                render={({ field: { onChange, value } }) => (
                  <Select
                    value={
                      typeof targetings.language == "object"
                        ? targetings.language?.map((v) => ({
                            value: v,
                            label: v,
                          }))
                        : "ALL"
                    } // assuming 'all' is expected as string
                    onChange={(newValue) => {
                      if (!newValue || newValue.length === 0) {
                       
                        delete targetings.language;
                        handleTargetingData({ ...targetings})
                        setIsLanguageEnabled(false);
                      
                      } else {
                        onChange(newValue);
                        console.log(newValue);
                        handleInputTaregting({
                          target: {
                            name: "language",
                            value: newValue.map((v) => v.value),
                          },
                        });
                      }
                    }}
                    className="SSAR_Targeting_purple_border text-sm"
                    aria-label="Default select example"
                    options={language}
                    // onChange={onChange}
                    isMulti={true}
                    isDisabled={!isLanguageEnabled}
                    // {...register("language")}
                    theme={customTheme}
                  />
                )}
              />
            </div>
          </div>

          <div className=" row p-3">
            <div className="col-md-3">
              {" "}
              <label
                for="exampleInputEmail1"
                class="form-label pt-1  d-flex  justify-content-start align-items-center "
              >
                IP Range:
              </label>
            </div>
            <div className="col-md-1">
              <div className="text-center pt-2 d-flex SSAR_CreateCamp_18px_font  SSA_fontgrey  justify-content-center ">
                <span class="form-check form-switch">
                  &nbsp;
                  <input
                    class="form-check-input SSAR_Targeting_Toggle_color"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    onChange={handleToggleChangeIPRange}
                    checked={isIPRangeEnabled}
                  />
                </span>
              </div>
            </div>
            <div className="col-md-8 pt-1 ps-5">
              <div className="SSAR_Targeting_purple_border">
                <textarea
                  className="form-control focus:outline-none border  border-purple "
                  placeholder="Enter IP Range comma separated"
                  id="floatingTextarea2"
                  style={{ height: "140px" }}
                  value={
                     typeof targetings?.ipRange == "object" ?
                     targetings.ipRange?.join(","):""
                      
                  }
                  {...register("ipRange", {
                    onChange:(e)=>handleInputTaregting({target:{name:e.target.name,value:e.target.value.split(",")}})}
                  )}
                  theme={customTheme}
                  disabled={!isIPRangeEnabled}
                ></textarea>
              </div>
            </div>
          </div>
          </section>
          <div className="d-flex text-end justify-content-end mt-3 pb-5">
            <Button
              className={`${
                props.button > 1 && "text-black !bg-gray-200 mr-2 "
              } disabled:bg-gray-200 disabled:text-gray-300 font-semibold text-sm px-4 py-1}`}
              disabled={props.button === 1}
              onClick={handleBack}
            >
              Prev Step
            </Button>

            <Button
              className={`font-semibold text-sm px-4 py-1 mr-5`}
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

export default Targeting;
