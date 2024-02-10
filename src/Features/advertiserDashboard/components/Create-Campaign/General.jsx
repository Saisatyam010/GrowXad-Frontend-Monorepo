import "./Targetings.css";
import "./FormExample.css";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import InputLabel from "./InputLabel";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

import { Controller } from "react-hook-form";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
// import img from "../../../—Pngtree—image upload icon photo upload_5279796.png";
import dateFormat, { masks } from "dateformat";
const fiveAM = dayjs().set("hour").startOf("hour");
const nineAM = dayjs().set("hour", 9).startOf("hour");

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const verificationData = [
  { label: "Start", value: "Start" },
  { label: "Scheduled", value: "Scheduled" },
  { label: "Keep Inactive", value: "Keep Inactive" },
];
const imageSize = [
  { label: "300x250", value: "300x250" },
  { label: "300x100", value: "300x100" },
];
// const countries = [
//   "All Countries",
//   "Afghanistan",
//   "Aland Islands",
//   "Albania",
//   "Algeria",
//   "American Samoa",
//   "Andorra",
//   "Angola",
//   "Anguilla",
//   "Antarctica",
//   "Antigua and Barbuda",
//   "Argentina",
//   "Armenia",
//   "Aruba",
//   "Australia",
//   "Austria",
//   "Azerbaijan",
//   "Bahamas",
//   "Bahrain",
//   "Bangladesh",
//   "Barbados",
//   "Belarus",
//   "Belgium",
//   "Belize",
//   "Benin",
//   "Yemen",
//   "Zambia",
// ];

const stylesFor = {
  color: "black", // Set text color
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "black", // Set border color
    color: "black", // Set text color
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "black", // Set hover border color
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "black", // Set focused border color
  },
  "&.Mui-focused": {
    color: "black", // Set focused text color
  },
};



export default function General(props) {
  const { generalData, handleGeneralData, button, func } = props;
  const [openUploadSection, setOpenUploadSection] = useState(false);
  const [destinationUrl, setDestinationUrl] = useState("");
  const handleChange = (event) => {
    // Remove "https://" from the entered value before setting it
    const newValue = event.target.value.replace(/^https:\/\/ /, "");
    setDestinationUrl(`https://${newValue}`);
  };

  const [verification, setVerification] = useState({
    value: "Start",
    label: "Start",
  });

  // const [selectedDate, setSelectedDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(false);
  const customTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: "#73035b", // sets the border color when focused
      primary25: "#fbe5f6", // sets the background color when focused
      primary50: "#fbe5f6", // sets the border color when not focused
    },
  });
  const {
    register,
    handleSubmit,
    watch,
    // setValue,
    // getValues,
    reset,
    control,
    formState: { errors },
  } = useForm({ defaultValues: generalData });

  useEffect(() => {
    reset(generalData);
  }, []);
  const Feed = [
    {
      value: "Non-Mainstream High Activity",
      label: "Non-Mainstream High Activity",
    },
    {
      value: "Non-Mainstream Medium Activity",
      label: "Non-Mainstream Medium Activity",
    },
    {
      value: "Non-Mainstream Low Activity",
      label: "Non-Mainstream Low Activity",
    },
    { value: "Mainstream High Activity", label: "Mainstream High Activity" },
    {
      value: "Mainstream Medium Activity",
      label: "Mainstream Medium Activity",
    },
    { value: "Mainstream Low Activity", label: "Mainstream Low Activity" },
  ];

  const handleInputGeneral = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.value, "e.target.value");
    //setSelectedValue(e.target.value);
    let newGeneralData = { ...generalData, [name]: value };

    if (name == "afterVerification" && value != "Scheduled") {
      delete newGeneralData.scheduledDate;
    }
    if (
      name == "adFormat" &&
      (value === "Interstitial Ad" || value === "Direct Link")
    ) {
      delete newGeneralData.imageSize;
    } else if (
      name == "adFormat" &&
      !(value === "Interstitial Ad" || value === "Direct Link")
    ) {
      newGeneralData.imageSize = "300x250";  
    }

    // handleGeneralData({ ...generalData, [name]: value }); 
    handleGeneralData(newGeneralData);
  };

  // const handleInputGeneral = (e) => {
  //   const { name, value } = e.target;
  //   console.log(value, "e.target.value");
  //   handleGeneralData(prevState => ({ ...prevState, [name]: Array.isArray(value) ? value : [value] }));
  // }
  useEffect(() => {
    reset(generalData);
    console.log("comonent Mounted");
    return () => {
      console.log("unmounted");
    };
  }, []);
  const onSubmit = (data) => {
    props.func(props.button + 1);
  };

  const handleVerification = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : null;
    setVerification({ value: selectedValue, label: selectedValue });

    const selectedDateSelected = selectedValue === "Schelduled";
    setSelectedDate(selectedDateSelected);
  };

 
  const [activeStep, setActiveStep] = useState(1);
  // const [skippedSteps, setSkippedSteps] = useState([]);

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const handleNext = () => {
  //   // props.func.setActiveStep(props.button.activeStep + 1);
  //   props.func(props.button.activeStep + 1);
  // }
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);

  const dragNdrop = (event) => {
    const files = event.target.files;
    const updatedImages = [];

    for (let i = 0; i < files.length; i++) {
      const fileName = URL.createObjectURL(files[i]);
      updatedImages.push({ url: fileName });
    }

    setUploadedImages((prevImages) => [...prevImages, ...updatedImages]);
  };

  const drag = () => {
    setIsDragging(true);
  };

  const drop = () => {
    setIsDragging(false);
  };

  const deleteImage = (index) => {
    const updatedImages = [...uploadedImages];
    updatedImages.splice(index, 1);
    setUploadedImages(updatedImages);
  };

  return (
    <>
      <form
        className="bg-white rounded-sm  border pt-4 border-gray-100 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className="flex flex-col px-12 py-3">
          {/* Campaing Name */}
          <div className="flex flex-col gap-1 mb-4">
            <label
              htmlFor="campaignName" // Use a unique ID here
              className="block SSAR_CreateCamp_18px_font text-gray-900"
            >
              Campaign Name*
            </label>
            <TextField
              id="campaignName" // Use the same unique ID as in the label
              placeholder="Enter Campaign name"
              {...register("campaignName", {
                required: true,
                onChange: handleInputGeneral,
              })}
              sx={{
                width: "90%",
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(115 3 91)",
                  },
                },
              }}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
            />
            <p className="text-xs font-light text-black">
              We recommend: Product - Feed - Country. For example: Offer - Main
              - www.
            </p>
            {errors.campaignName && (
              <span style={{ color: "red" }}>Campaign Name is required</span>
            )}
          </div>
          {/* Ad Format */}
          <div className="flex flex-col gap-2 pt-3 mb-1 SSAR_CreateCamp_18px_font ">
            <InputLabel
              label="Ad Format*"
              className="SSAR_CreateCamp_18px_font"
            />
            <div className="radioGroup">
              <div className="flex gap-4 flex-wrap">
                <label
                  htmlFor="radio-card-1"
                  className="radio-card SSAR_CreateCamp_18px_font"
                >
                  <input
                    type="radio"
                    name="radio-card"
                    id="radio-card-1"
                    defaultChecked
                    value="In Page Push Ad"
                    {...register("adFormat", { onChange: handleInputGeneral })}
                  />
                  <div className="card-content-wrapper">
                    <span className="check-icon" />
                    <div className="card-content">
                      <div className="w-28"></div>
                      <div
                        style={{ position: "relative", paddingTop: "56.25%" }}
                      >
                        <iframe
                          src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/0de5bd83fea70a1b8b1f087511321be5/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2F0de5bd83fea70a1b8b1f087511321be5%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
                          style={{
                            border: "none",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%",
                          }}
                          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                          allowFullScreen="true"
                        />
                      </div>
                      <h4 className="text-center">In Page Push Ad</h4>
                    </div>
                  </div>
                </label>
                {/* /.radio-card */}
                <label htmlFor="radio-card-2" className="radio-card">
                  <input
                    type="radio"
                    name="radio-card"
                    id="radio-card-2"
                    value="Native Ad"
                    {...register("adFormat", { onChange: handleInputGeneral })}
                  />
                  <div className="card-content-wrapper">
                    <span className="check-icon" />
                    <div className="card-content">
                      <div className="w-28"></div>
                      <div
                        style={{ position: "relative", paddingTop: "56.25%" }}
                      >
                        <iframe
                          style={{
                            border: "none",
                            outline: "none",
                            borderWidth: "0px",
                          }}
                          src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/e3c7c38f9e109e4782a0049b1f0703d6/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fe3c7c38f9e109e4782a0049b1f0703d6%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
                          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                          allowFullScreen="true"
                        />
                      </div>
                      <h4 className="text-center">Native Ad</h4>
                    </div>
                  </div>
                </label>
                {/* /.radio-card */}
                {/* /.radio-card */}
                <label htmlFor="radio-card-3" className="radio-card">
                  <input
                    type="radio"
                    name="radio-card"
                    id="radio-card-3"
                    value="Banner Ad"
                    {...register("adFormat", { onChange: handleInputGeneral })}
                  />
                  <div className="card-content-wrapper">
                    <span className="check-icon" />
                    <div className="card-content">
                      <div className="w-28"></div>
                      <div className="video-container">
                        <iframe
                          src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/5ffcdd4471ab8a95f5d8e0cc83e4cfa6/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2F5ffcdd4471ab8a95f5d8e0cc83e4cfa6%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
                          style={{
                            border: "none",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%",
                          }}
                          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                          allowFullScreen="true"
                        />
                      </div>
                      <h4 className="text-center">Banner Ad</h4>
                    </div>
                  </div>
                </label>
                {/* /.radio-card */}

                {/* /.radio-card */}
                <label htmlFor="radio-card-4" className="radio-card">
                  <input
                    type="radio"
                    name="radio-card"
                    id="radio-card-4"
                    value="Interstitial Ad"
                    {...register("adFormat", { onChange: handleInputGeneral })}
                  />
                  <div className="card-content-wrapper">
                    <span className="check-icon" />
                    <div className="card-content">
                      <div className="w-28"></div>
                      <div
                        style={{ position: "relative", paddingTop: "56.25%" }}
                      >
                        <iframe
                          src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/a48ffc895c18a3ca112ba112252bfd27/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fa48ffc895c18a3ca112ba112252bfd27%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
                          style={{
                            border: "none",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%",
                          }}
                          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                          allowFullScreen="true"
                        />
                      </div>
                      <h4 className="text-center">Interstitial Ad</h4>
                    </div>
                  </div>
                </label>
                {/* /.radio-card */}
                {/* /.radio-card */}
                <label htmlFor="radio-card-5" className="radio-card">
                  <input
                    type="radio"
                    name="radio-card"
                    id="radio-card-5"
                    value="PopUnder Ad"
                    {...register("adFormat", { onChange: handleInputGeneral })}
                  />
                  <div className="card-content-wrapper">
                    <span className="check-icon" />
                    <div className="card-content">
                      <div className="w-28"></div>
                      <div
                        style={{ position: "relative", paddingTop: "56.25%" }}
                      >
                        <iframe
                          src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/ae8b7534f4833b00397c37881063689f/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fae8b7534f4833b00397c37881063689f%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
                          style={{
                            border: "none",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%",
                          }}
                          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                          allowFullScreen="true"
                        />
                      </div>
                      <h4 className="text-center">Popunder Ad</h4>
                    </div>
                  </div>
                </label>
                {/* /.radio-card */}
                {/* /.radio-card */}
                <label htmlFor="radio-card-6" className="radio-card">
                  <input
                    type="radio"
                    name="radio-card"
                    id="radio-card-6"
                    value="Direct Link"
                    {...register("adFormat", { onChange: handleInputGeneral })}
                  />
                  <div className="card-content-wrapper">
                    <span className="check-icon" />
                    <div className="card-content">
                      <div className="w-28"></div>
                      <div
                        style={{ position: "relative", paddingTop: "56.25%" }}
                      >
                        <iframe
                          src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/b6e76847ac0cc17448ccec18911f7eb0/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2Fb6e76847ac0cc17448ccec18911f7eb0%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
                          style={{
                            border: "none",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%",
                          }}
                          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                          allowFullScreen="true"
                        />
                      </div>
                      <h4 className="text-center">Direct Link</h4>
                    </div>
                  </div>
                </label>
                {/* /.radio-card */}
              </div>
              {/* /.grid-wrapper */}
            </div>
            <div></div>
          </div>

          {generalData.adFormat === "Interstitial Ad" ||
          generalData.adFormat === "Direct Link" ? null : (
            <>
              <div className="py-4">
                <label
                  htmlFor="exampleInputEmail1"
                  class="form-label pt-1 pb-2 text-right SSAR_CreateCamp_18px_font d-flex justify-content-start align-items-center "
                >
                  Image Size* :
                </label>

                <div>
                  <Controller
                    name="imageSize"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        defaultValue={imageSize.find(
                          (v) => v.value === generalData.imageSize
                        )}
                        options={imageSize}
                        value={imageSize.find((v) => v.value === value)}
                        onChange={(value) => {
                          onChange(value);
                          handleInputGeneral({
                            target: {
                              name: "imageSize",
                              value: value.value,
                            },
                          });
                        }}
                        className="SSAR_Targeting_purple_border w-75"
                        // {...register("afterVerification", { required: true ,onChange:handleInputGeneral})}
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            width: "300px",
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                          }),
                        }}
                        theme={customTheme}
                      />
                    )}
                    // rules={{ required: true }}
                  />
                </div>
              </div>
            </>
          )}

          {/* feed */}

          <div className="py-4">
            <label
              htmlFor="exampleInputEmail1"
              class="form-label pt-1 pb-2 text-right SSAR_CreateCamp_18px_font d-flex justify-content-start align-items-center "
            >
              Feed* :
            </label>

            <Controller
              control={control}
              name="feed"
              render={({ field: { onChange, value } }) => (
                <Select
                  value={
                    typeof generalData.feed == "object"
                      ? generalData.feed?.map((v) => ({ value: v, label: v }))
                      : "ALL"
                  } // assuming 'all' is expected as string
                  onChange={(newValue) => {
                    // If newValue is null or empty array, set value to 'all'
                    if (!newValue || newValue.length === 0) {
                      // onChange([{ label: 'All', value: 'all' }]);
                      console.log("All selected");
                      handleInputGeneral({
                        target: { name: "feed", value: "all" }, // assuming 'all' is expected as string
                      });
                    } else {
                      onChange(newValue);
                      console.log(newValue);
                      handleInputGeneral({
                        target: {
                          name: "feed",
                          value: newValue.map((v) => v.value),
                        },
                      });
                    }
                  }}
                  className="SSAR_Targeting_purple_border SSAR_Targeting_Toggle_color w-75"
                  aria-label="Default select example"
                  options={Feed}
                  isMulti={true}
                  theme={customTheme}
                />
              )}
            />
          </div>

          {/* ---------------------------->> Upload Creatives <<--------------------------  */}

          {/* <section className="flex flex-col  pt-4">
            <h2 className="font-semibold mb-2 SSAR_CreateCamp_18px_font  ">
              Upload Creative
            </h2>

            <FileUpload />
          </section> */}

          <section>
            <div className="flex flex-col mt-1 pt-5 gap-1 mb-4 SSAR_CreateCamp_18px_font">
              <InputLabel label="Destination URL*" />
              <TextField
                placeholder="example.com"
                // value={DestinationURL.replace("https://", "")} // Display without "https://"
                {...register("destinationURL", {
                  required: true,
                  onChange: (e) => handleInputGeneral(e),
                })}
                // {...register("DestinationURL", { required: true ,onChange:handleInputGeneral})}

                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">https://</InputAdornment>
                  ),
                }}
                sx={{
                  width: "90%",
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "rgb(115 3 91)",
                    },
                  },
                }}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
              />
              <p className="text-xs font-light text-black">
                Provide the Campaign's URL. It should lead to the offer page.
              </p>
            </div>
            {errors.DestinationURL && (
              <span style={{ color: "red" }}>Destination URL is required</span>
            )}
          </section>

          <section>
            <div className="d-flex mb-2  pt-4 justify-content-start align-items-center mx-auto">
              <label
                htmlFor="Connection Type"
                className="block   SSAR_CreateCamp_18px_font 6  mr-5 w-1/5 "
                style={{ fontWeight: "600" }}
              >
                After verification
              </label>
              <div>
                <Controller
                  name="afterVerification"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      defaultValue={verificationData.find(
                        (v) => v.value === generalData.afterVerification
                      )}
                      options={verificationData}
                      value={verificationData.find((v) => v.value === value)}
                      onChange={(value) => {
                        onChange(value);
                        handleInputGeneral({
                          target: {
                            name: "afterVerification",
                            value: value.value,
                          },
                        });
                      }}
                      className="SSAR_Targeting_purple_border w-75"
                      // {...register("afterVerification", { required: true ,onChange:handleInputGeneral})}
                      styles={{
                        control: (provided, state) => ({
                          ...provided,
                          width: "300px",
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                        }),
                      }}
                      theme={customTheme}
                    />
                  )}
                  // rules={{ required: true }}
                />
              </div>
            </div>

            {generalData?.afterVerification == "Scheduled" && (
              <div className="d-flex justify-content-start  pt-4 SSAR_CreateCamp_18px_font  align-items-center mx-auto">
                <label
                  htmlFor="scheduledTime"
                  className="block pr-4 d-flex justify-content-start mr-5 align-items-center SSAR_CreateCamp_18px_font  text-start "
                >
                  Scheduled Time
                </label>

                <Box>
                  <div className="d-flex gap-3">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      {/* Add any required DemoContainer, DemoItem, etc., components here */}

                      <DateTimePicker
                        {...register("scheduledDateTime", { required: true })}
                        id="scheduledDate"
                        value={generalData.scheduledDateTime || ""}
                        maxTime={fiveAM}
                        sx={stylesFor}
                        onChange={(e) =>
                          handleInputGeneral({
                            target: {
                              name: "scheduledDateTime",
                              value: dateFormat(e.$d, "dd/mm/yyyy, h:MM:ss TT"),
                            },
                          })
                        }
                      />
                      {errors.scheduledDateTime && (
                        <span style={{ color: "red" }}>
                          Scheduled DateTime is required
                        </span>
                      )}
                    </LocalizationProvider>
                  </div>
                </Box>
              </div>
            )}
          </section>
        </section>

        {/*--------buttons--------*/}
        <hr style={{ marginLeft: "36px", marginRight: "36px" }} />

        {generalData.adFormat === "Interstitial Ad" ||
        generalData.adFormat === "Direct Link" ? null : (
          <section className="pb-5 pt-3">
            <div>
              <p
                style={{ cursor: "pointer" }}
                className="pr-5 SSAR_CreateCamp_18px_font d-flex justify-content-between"
                onClick={() => setOpenUploadSection(!openUploadSection)}
              >
                <span className="SSAR_CreateCamp_18px_font pl-5">
                  Upload Image
                </span>
                {!openUploadSection ? (
                  <div className="d-flex align-items-center">
                    Show &nbsp; <IoIosArrowDown />
                  </div>
                ) : (
                  <div className="d-flex align-items-center">
                    Hide &nbsp; <IoIosArrowUp />
                  </div>
                )}
              </p>
            </div>
            {openUploadSection && (
              <div>
                <div
                  className={`SSAR_FORM_uploadOuter ${
                    isDragging ? "dragging" : ""
                  }`}
                >
                  <span
                    className="SSAR_FORM_dragBox text-center"
                    onDragOver={drag}
                    onDrop={drop}
                  >
                    <img
                      // src={img}
                      alt=""
                      width={100}
                      style={{ display: "block", margin: "auto" }}
                    />
                    <p
                      style={{ fontWeight: "bold", fontSize: "20px" }}
                      className="pt-4 pb-2"
                    >
                      Drag and Drop or <a href="#">Browse</a>
                    </p>
                    <small style={{ fontWeight: "400" }} className="pt-5">
                      Supports JPEG, JPG, PNG
                    </small>
                    <input
                      type="file"
                      // onChange={(event) => dragNdrop(event)}
                      id="uploadFile"
                      {...register("image", {
                        // required: true,
                        onChange: (event) => {
                          handleInputGeneral(event);
                          dragNdrop(event);
                        },
                      })}
                      multiple
                    />
                  </span>
                  <div id="preview" className="d-flex flex-wrap">
                    {/* Render uploaded images with delete buttons */}
                    {uploadedImages.map((image, index) => (
                      <div
                        key={index}
                        className="position-relative m-2"
                        style={{ position: "relative" }}
                      >
                        {/* Cross delete button */}
                        <button
                          className="btn text-white btn-danger btn-sm position-absolute top-0 end-0"
                          onClick={() => deleteImage(index)}
                          style={{ zIndex: 1 }} // Ensure the button is above the image
                        >
                          x
                        </button>
                        <img
                          src={image.url}
                          alt=""
                          width={300}
                         
                          height={
                            generalData.imageSize === "300x250" ? 250 : 100
                          }
                          className="img-thumbnail "
                          style={{ display: "block" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* {getStepContent(activeStep)} */}
        <div className="d-flex justify-content-end mt-4 mb-5 ">
          <Button
            className={`${
              props.button > 1 && "text-black !bg-gray-200 mr-3"
            }  disabled:bg-gray-200 disabled:text-gray-300 font-semibold text-sm px-4 py-1 
            
            `}
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
    </>
  );
}
