import "./General.css";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { Button, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { useFieldArray, useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import InputLabel from "../shared/Form/Label";
import dateFormat from "dateformat";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

const fiveAM = dayjs().set("hour").startOf("hour");
const nineAM = dayjs().set("hour", 9).startOf("hour");


const verificationData = [
  { label: "Start", value: "Start" },
  { label: "Scheduled", value: "Scheduled" },
  { label: "Keep Inactive", value: "Keep Inactive" },
];
const imageSize = [
  { label: "300x250", value: "300x250" },
  { label: "300x100", value: "300x100" },
];


export default function General(props) {
  const { generalData, handleGeneralData, button, func } = props;
  const [openUploadSection, setOpenUploadSection] = useState(true);
  const [file,setFile]=useState()
  const customTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: "#73035b", // sets the border color when focused
      primary25: "#fbe5f6", // sets the background color when focused
      primary50: "#fbe5f6", // sets the border color when not focused
    },
  })
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm({ defaultValues: generalData });
  
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "creatives", // unique name for your Field Array
  });
  //console.log(URL.createObjectURL(`creatives.${0}.image`));
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
  console.log(fields)
  //Handle inputs for general data
  const handleInputGeneral = (e) => {
    const { name, value } = e.target;
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

  const onSubmit = (data) => {
    props.func(props.button + 1);
  };

 

 
  const [activeStep, setActiveStep] = useState(1);
  // const [skippedSteps, setSkippedSteps] = useState([]);

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);

  const dragNdrop = (event) => {
    const files = event.target.files;
    console.log(files)
    if(event.target.files.length>5){
      alert("You can upload maximum 5 files")
    }
    else{
    setFile(event.target.files[0])
    const updatedCreatives =Object.values(files).map((file) => { 
      return { image: file, targetingURL:''};
    });
    append(updatedCreatives)
    handleInputGeneral({target:{name:'creatives',value:updatedCreatives}})
  }
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
    
      <form
        className="bg-white rounded-sm  border pt-2 border-gray-100 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className="flex flex-col px-12 py-3">

          {/* Campaign Name */}
          <div className="flex flex-col gap-1 mb-4">
          <InputLabel label="Campaign Name" required={true} />
          <TextField
            placeholder="Enter Campaign name"
            {...register("campaignName", {
              required: true,
              onChange: handleInputGeneral,
            })}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(115 3 91)",
                },
                "&:hover fieldset": {
                  borderColor: "rgb(115 3 91)",
                },
              },
            }}
            
          />
          <p className="text-[0.7rem] pl-1 m-0 font-extralight text-black">
              We recommend: Product - Feed - Country. For example: Offer - Main
              - www.
            </p>
            {errors.campaignName && (
              <span className="error-message">Campaign Name is required</span>
            )}
          </div>
          {/* Ad Format */}
          <div className="flex flex-col  mb-3 ">
            <InputLabel
              label="Ad Format"
              required={true}
            />
            <div className="radioGroup ">
              <div className="flex gap-4 flex-wrap">
                <RadioInputLabel label="Banner Ad" value="Banner Ad" register={register} handleInputGeneral={handleInputGeneral} imgSrc="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/ce1d8289-46cc-4943-2142-111920948b00/public" />
                <RadioInputLabel label="In Page Push Ad" value="In Page Push Ad" register={register} handleInputGeneral={handleInputGeneral} imgSrc="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/468b88c0-def8-4fa0-0370-f778a03f8900/public" />
                <RadioInputLabel label="Native Ad" value="Native Ad" register={register} handleInputGeneral={handleInputGeneral} imgSrc="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/33f238ec-ea4e-4546-edc8-cb9ccc9f1500/public" />
                <RadioInputLabel label="Popunder Ad" value="Popunder Ad" register={register} handleInputGeneral={handleInputGeneral} imgSrc="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/09379916-612d-4eaf-daf0-adf002da8100/public" />
                <RadioInputLabel label="Interstestial Ad" value="Interstestial Ad" register={register} handleInputGeneral={handleInputGeneral} imgSrc="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/12687a68-c192-41f8-4c43-3267fc34b800/public" />
                <RadioInputLabel label="Direct Link Ad" value="Direct Link Ad" register={register} handleInputGeneral={handleInputGeneral} imgSrc="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/43dc1a88-b0c9-4cb2-8c47-890f45c50f00/public" />
              </div>
            </div>
        
          </div>
          {/* Image Size */}
          {generalData.adFormat === "Interstitial Ad" ||generalData.adFormat === "Direct Link" ? null : (
            
              <div className="flex flex-col gap-1 mb-4">
               <InputLabel label="Image Size" required={true} />

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
                        className="SSAR_Targeting_purple_border w-60 text-sm"
                        
                        theme={customTheme}
                      />
                    )}
                   
                  />
                </div>
              </div>
            
          )}

        
          {/* Traffiv Channels/Feed */}
          <div className="flex flex-col gap-1 mb-4">
            <InputLabel label="Traffic Channels/Feed" required={false} />

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
                  className="SSAR_Targeting_purple_border SSAR_Targeting_Toggle_color text-sm"
                  aria-label="Default select example"
                  options={Feed}
                  isMulti={true}
                  theme={customTheme}
                />
              )}
            />
          </div>

          <div className="flex flex-col gap-1 mb-4">
            <InputLabel label="Destination URL" required={true} />
            <TextField
              placeholder="example.com"
              {...register("destinationURL", {
                required: true,
                onChange: (e) => handleInputGeneral(e),
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">https://</InputAdornment>
                ),
              }}
              sx={{
              
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(115 3 91)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgb(115 3 91)",
                },
              }}}
             
            />
            <p className="text-[0.7rem] pl-1 mb-0 font-extralight text-black">
              Provide the Campaign's URL. It should lead to the offer page.
            </p>
            {errors.destinationURL && (
            <span className="error-message">Destination URL is required</span>
          )}
          </div>
         
            <div className="flex flex-col gap-1 mb-4">
              <InputLabel label="After Verification" required={true} />
              
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
                      className="SSAR_Targeting_purple_border w-60 text-sm"
                     
                      theme={customTheme}
                    />
                  )}
                  // rules={{ required: true }}
                />
              
            </div>

            {generalData?.afterVerification == "Scheduled" && (
              <div className="flex flex-col gap-1 mb-4">
                <InputLabel label="Scheduled Date & Time" required={true} />
                  <div className="d-flex gap-3">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      {/* Add any required DemoContainer, DemoItem, etc., components here */}

                      <DateTimePicker
                        {...register("scheduledDateTime", { required: true })}
                        id="scheduledDate"
                        value={generalData?.scheduledDateTime ?? ""}
                        maxTime={fiveAM}
                        sx={{fontSize: "14px" }}
                        className="SSAR_Targeting_purple_border w-60 "
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
               
              </div>
            )}
        
        </section>

        {/*--------buttons--------*/}
        <hr style={{ marginLeft: "36px", marginRight: "36px" }} />

        {generalData.adFormat === "Interstitial Ad" ||
        generalData.adFormat === "Direct Link" ? null : (
          <section className="px-12 pb-5 pt-3">
            <div>
              <div
                style={{ cursor: "pointer" }}
                className="SSAR_CreateCamp_18px_font d-flex justify-content-between"
                onClick={() => setOpenUploadSection(!openUploadSection)}
              >
                <h2 className="text-xl text-black ">
                  Upload Creatives
                </h2>
               
                {!openUploadSection ? (
                  <div className="d-flex align-items-center text-sm text-[#504e4e]">
                    Show &nbsp; <IoIosArrowDown />
                  </div>
                ) : (
                  <div className="d-flex align-items-center text-sm text-[#504e4e]">
                    Hide &nbsp; <IoIosArrowUp />
                  </div>
                )}
              </div>
              
            </div>
            {openUploadSection && (
              <div>
                <p className="text-base pl-1 mt-0 mb-4 text-[#373636]">
                Select a maximum of 5 files (photo/video/gif)
            </p>
               {fields.length==0&&
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
                </div>
                 }
                  <div id="preview" className="grid grid-cols-2 gap-4">
                    {/* Render uploaded images with delete buttons */}
                    {fields.map((field, index) => (
                      <div className="flex flex-col rounded-sm  border border-solid border-gray-300 py-2.5 px-3" key={field.id}>
                        <h3 className="text-lg  text-black text-left">Creative {index+1}</h3>
                        <input type="file" className="w-[300px]" />  
                      <div
                        key={index}
                        className="position-relative my-2"
                        style={{ position: "relative" }}
                      >
                        {/* Cross delete button */}
                        <button
                        tyep="button"
                          className="btn text-white btn-danger btn-sm absolute top-2 right-2 rounded-md p-1"
                          onClick={() => deleteImage(index)}
                           // Ensure the button is above the image
                        >
                          <MdOutlineDelete size={20}/>
                        </button>
                        <img
                          src={URL.createObjectURL(watch(`creatives.${index}.image`))}
                          alt=""
                          width={300}
                          height={250}
                          
                          
                          style={{ display: "block" }}
                        />
                        </div>
                        <div className="relative w-[300px]">
                      <input type="text" {...register(`creatives.${index}.targetingURL`)} className="text-xs w-full rounded-sm border-gray-400 disabled:bg-[#eaebed]" disabled={true} placeholder="Targeting URL*"/>
                       <EditTargetingURL register={register}/>
                      
                      </div>
                      
                      </div>
                    ))}
                  </div>
                
              </div>
            )}
          </section>
        )}

        {/* {getStepContent(activeStep)} */}
        <div className="flex justify-content-end gap-4 mt-4 mb-5 ">
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
    
  );
}

const RadioInputLabel=({label,value,register,imgSrc,handleInputGeneral})=>{
  return (
    <label
    
    className="radio-card  "
  >
    <input
      type="radio"
      name="radio-card"
     
      className="hidden"
      value={value}
      
      {...register("adFormat",{required:true,onChange:handleInputGeneral})}
    />
    <div className="card-content-wrapper">
      <span className="check-icon" />
      <div className="card-content flex flex-col items-center">
        <div className="w-28 mt-4"></div>
        
          <img src={imgSrc} alt="" height= "100" width= "100"/>
       
        </div>
        <span className="text-center pt-2">{label}</span>
    
    </div>
  </label>
  )

}

const EditTargetingURL=({register})=>{
  const [isShowModal,setIsShowModal]=useState(false)
  return(
    
      <div className="absolute top-1 right-2">
     <button className="bg-gray-500 rounded-md px-2 py-1 text-xs text-white" type="button" onClick={()=>setIsShowModal(true)}><MdOutlineEdit size={16}/></button>
    {isShowModal&&
    <div className="fixed  z-50 flex items-center justify-center top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)] ">
       <div className="max-w-lg bg-white mx-auto rounded-md px-10 py-6 space-y-2 ">
       <h2 className="text-xl text-black  ">Select Target Url</h2>
        <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="pl-2  "
            defaultValue={"Add to one creative"}
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
              value="Add to one creative"
              control={
                <Radio
                {...register("targetingCreativeType", { required: true })}
                />
              }
              label="Add to one creative"
            />
            <FormControlLabel
              className="text-sm"
              value="SmartCPM"
              control={
                <Radio {...register("targetingCreativeType", { required: true })} />
              }
              label="Add to all creatives"
            />
          
        </RadioGroup>
          <TextField
            placeholder="Target Url *"
            {...register("Targeting URl", {
              required: true,
             
            })}
            sx={{
              width:'100%',
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(115 3 91)",
                },
                "&:hover fieldset": {
                  borderColor: "rgb(115 3 91)",
                },
              },
            }}
            
          /> 
          <p className="text-xs font-light mb-1">{`Example: http://www.domain.com/in.php?sourceid={zoneid}Allowed placeholders: {zoneid}, SUBID, {campaignid} . More information`}</p>
          <div className="flex justify-end gap-3 mt-3">
          <Button
            className={`font-semibold text-sm px-4 py-1 `}
            style={{
              background: '#000011',
              padding: "8px 25px 8px 25px",
            }}
            variant="contained"
            color="primary"
            onClick={()=>setIsShowModal(false)}
            type="button"
          >
            Cancel
          </Button>
          <Button
            className={`font-semibold text-sm px-4 py-1 `}
            style={{
              background: "linear-gradient(180deg, #73035B 0%, #46133B 100%",
              padding: "8px 25px 8px 25px",
            }}
            variant="contained"
            color="primary"
           
            type="submit"
          >
            Add
          </Button>
          </div>
       </div>
    </div>
    }
    </div>
  )
}