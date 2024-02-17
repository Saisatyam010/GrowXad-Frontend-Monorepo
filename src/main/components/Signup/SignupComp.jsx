import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import style from "./SignupComp.module.css";
import { useForm } from "react-hook-form";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
// import { useState } from "react";
import gif from "../../../images/gif.gif";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Select } from "@material-ui/core";
import { signup } from "../../../features/AdvertiserDashboard/components/api";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function SignupComp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const [showOptions, setShowOptions] = useState(false);

  const handleOptions = () => {
    setShowOptions(!showOptions);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [hoveredOption, setHoveredOption] = useState(null);
  console.log(hoveredOption);

  const togglePasswordConfirmVisibility = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

 

  const [selectedOption, setSelectedOption] = useState("");
  const optionsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        // Click occurred outside the options container
        setShowOptions(false);
      }
    }

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionsRef]);

  /*-------------------Form Validation-------------------*/
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setValue("messenger", option);
    setShowOptions(false); // Hide options after selecting an option
  };

const password = watch("password", "");

  
  const onSubmit = async (data) => {

    const res = await signup(data)
    console.log(res); 

  }
  return (
    <Container fluid>
      <Row className="align-items-center">
       
        <Col md={8} className="px-5">
          <div className="login-form px-5 py-4">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div  > <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/4c01b7fc-36fd-4c9d-cb34-e325db9a2400/public" alt="logo" width={150} />  </div>
              <div className="text-start text-3xl pt-4 font-semibold">
                Sign up as an Advertiser 🚀
              </div>
              <p className="text-lg text-gray-100">
                Start promoting your brand or offer using high-quality traffic
              </p>
              <Row>
                <Col md={6}>
                  <div className="form-group pt-2">
                    <div
                      className={`${
                        errors.firstName
                          ? style.form_input_red
                          : style.form_input
                      }`}
                    >
                      <input
                        type="text"
                        placeholder="first name"
                        id="fname"
                        className="w-full"
                        style={{
                          "--tw-ring-shadow": "none",
                        }}
                        {...register("firstName", { required: true })}
                      />
                      <label htmlFor="fname">First Name</label>
                    </div>
                    {errors.firstName && (
                      <span
                        className="pt-1"
                        style={{ color: "red", fontSize: "12px" }}
                      >
                        This field is mandatory
                      </span>
                    )}
                  </div>
                </Col>

                <Col md={6}>
                  <div className="form-group pt-2">
                    <div
                      className={`${
                        errors.lastName
                          ? style.form_input_red
                          : style.form_input
                      }`}
                    >
                      <input
                        type="text"
                        placeholder="Last Name"
                        id="lname"
                        className="w-full"
                        style={{
                          "--tw-ring-shadow": "none",
                        }}
                        {...register("lastName", { required: true })}
                      />
                      <label for="lname">Last Name</label>
                    </div>
                    {errors.lastName && (
                      <span
                        className="pt-1"
                        style={{ color: "red", fontSize: "12px" }}
                      >
                        This field is mandatory
                      </span>
                    )}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group pt-2">
                    <div
                      className={`${
                        errors.email ? style.form_input_red : style.form_input
                      }`}
                    >
                      <input
                        type="email"
                        placeholder="Email address"
                        id="email"
                        className="w-full"
                        style={{
                          "--tw-ring-shadow": "none",
                        }}
                        {...register("email", { required: true })}
                      />
                      <label for="email">Email Address</label>
                    </div>
                    {errors.email && (
                      <span
                        className="pt-1"
                        style={{ color: "red", fontSize: "12px" }}
                      >
                        This field is mandatory
                      </span>
                    )}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group pt-2">
                    <div
                      className={`${
                        errors.userName
                          ? style.form_input_red
                          : style.form_input
                      }`}
                    >
                      <input
                        type="text"
                        placeholder="Username"
                        id="Username"
                        className="w-full"
                        style={{
                          "--tw-ring-shadow": "none",
                        }}
                        {...register("userName", { required: true })}
                      />
                      <label for="Username">Username</label>
                    </div>
                    {errors.userName && (
                      <span
                        className="pt-1"
                        style={{ color: "red", fontSize: "12px" }}
                      >
                        This field is mandatory
                      </span>
                    )}
                  </div>
                </Col>

                <Col md={6}>
      <div className="form-group">
        <div className={`${errors.password ? style.form_input_red : style.form_input} mt-2`}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            className="w-full"
            style={{ "--tw-ring-shadow": "none" }}
            {...register("password", { required: "This field is mandatory" })}
          />
          <label htmlFor="password">Password</label>
          <span
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {!showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>
        {errors.password && (
          <span className="pt-1" style={{ color: "red", fontSize: "12px" }}>
            {errors.password.message}
          </span>
        )}
      </div>
    </Col>

    <Col md={6}>
      <div className="form-group">
        <div className={`${errors.confirmPassword ? style.form_input_red : style.form_input} mt-2`}>
          <input
            type={showPasswordConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            id="confirmPassword"
            className="w-full"
            style={{ "--tw-ring-shadow": "none" }}
            {...register("confirmPassword", { 
              required: "This field is mandatory",
              validate: value => value === password || "Passwords do not match" 
            })}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <span
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={togglePasswordConfirmVisibility}
          >
            {!showPasswordConfirm ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>
        {errors.confirmPassword && (
          <span className="pt-1" style={{ color: "red", fontSize: "12px" }}>
            {errors.confirmPassword.message}
          </span>
        )}
      </div>
    </Col>
                <Col md={6} className="pt-2">
                <div
                      className={`${
                        errors.messenger
                          ? style.form_input_red
                          : style.form_input
                      } `}
                    >
                    <input
                      className="w-full"
                      placeholder="messenger"
                      id="messenger"
                      value={selectedOption}
                      // required
                      onClick={() => setShowOptions(!showOptions)}
                      {...register("messangerType", { required: true })}
                    />
                    <label htmlFor="messenger">Messenger</label>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                      {!showOptions ? (
                        <MdKeyboardArrowDown onClick={() => setShowOptions(!showOptions)} />
                      ) : (
                        <MdKeyboardArrowUp onClick={() => setShowOptions(!showOptions)}/>
                      )}
                    </span>
                    {showOptions && (
                      <div
                        ref={optionsRef}
                        className="bg-white w-full mt-1 border border-grey absolute z-10"
                      >
                        <div
                          className={`py-2 pl-2 border-b-2 border-gray hover:bg-[#d8b1d0] hover:text-black ${
                            selectedOption === "option1" ? "bg-purple" : ""
                          }  ${
                            selectedOption === "option1" ? "text-white" : ""
                          }`}
                          onClick={() => handleOptionClick("option1")}
                        >
                          {" "}
                          option1{" "}
                        </div>
                        <div
                          className={`py-2 pl-2 border-b-2 border-gray hover:bg-[#d8b1d0] hover:text-black ${
                            selectedOption === "option2" ? "bg-purple" : ""
                          }  ${
                            selectedOption === "option2" ? "text-white" : ""
                          }`}
                          onClick={() => handleOptionClick("option2")}
                        >
                          {" "}
                          option2{" "}
                        </div>
                        <div
                          className={`py-2 pl-2 border-b-2 border-gray  hover:bg-[#d8b1d0] hover:text-black ${
                            selectedOption === "option3" ? "bg-purple" : ""
                          }  ${
                            selectedOption === "option3" ? "text-white" : ""
                          }`}
                          onClick={() => handleOptionClick("option3")}
                        >
                          {" "}
                          option3{" "}
                        </div>
                      </div>
                    )}
                  </div>
                  {errors.messenger && (
                    <span
                      className="pt-1"
                      style={{ color: "red", fontSize: "12px" }}
                    >
                      This field is mandatory
                    </span>
                  )}
                </Col>
                <Col md={6}>
                  <div className="form-group pt-2">
                    <div
                      className={`${
                        errors.messengerAccount
                          ? style.form_input_red
                          : style.form_input
                      } `}
                    >
                      <input
                        type="text"
                        placeholder="Messenger Account"
                        id="messengerAccount"
                        className="w-full"
                        style={{
                          "--tw-ring-shadow": "none",
                        }}
                        {...register("messangerAccount", { required: true })}
                      />
                      <label for="messengerAccount">Messenger Account</label>
                    </div>
                    {errors.messengerAccount && (
                      <span
                        className="pt-1"
                        style={{ color: "red", fontSize: "12px" }}
                      >
                        This field is mandatory
                      </span>
                    )}
                  </div>
                </Col>

                <Col md={6}>
                  <div className="form-group pt-2">
                    <div className="border border-grey pt-2 pb-3 px-3 rounded-md">
                      captcha
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group pt-2">
                    <div
                      className={`${
                        errors.code ? style.form_input_red : style.form_input
                      } `}
                    >
                      <input
                        type="text"
                        placeholder="Code*"
                        id="code"
                        className="w-full"
                        style={{
                          "--tw-ring-shadow": "none",
                        }}
                        {...register("code", { required: true })}
                      />
                      <label for="code">Code*</label>
                    </div>
                    {errors.code && (
                      <span
                        className="pt-1"
                        style={{ color: "red", fontSize: "12px" }}
                      >
                        This field is mandatory
                      </span>
                    )}
                  </div>
                </Col>
              </Row>

              <div className="clearfix py-3">
                <label className="float-left form-check-label">
                  <Checkbox {...label} style={{ color: "purple" }} />I agree to
                  privacy policy & terms
                </label>
              </div>

              <div className="form-group">
                {/* <button
                  type="submit"
                  className="btn btn-primary my-2 py-2 btn-block"
                >
                  Log in
                </button> */}
                      <Button
  type="submit"
  className="text-white bg-gradient-to-r w-50 from-purple to-darkPurple hover:from-darkPurple hover:to-purple focus:ring-4 px-4 focus:ring-purple-300 text-lg rounded-lg font-semibold py-3 mb-2 dark:bg-gradient-to-r dark:from-purple dark:to-darkPurple dark:hover:from-darkPurple dark:hover:to-purple dark:focus:ring-purple-900 outline-none !important border-transparent"
  style={{
    '--bs-btn-border-color': 'transparent',
    '--bs-btn-focus-box-shadow': 'none'
  }}
                >
                  Signup
                </Button>
              </div>
            </form>
            <p className="text-left text-lg ">
              Already have an account?
              <a href="/login" className="text-purple">
                {" "}
                Sign in instead
              </a>
            </p>
          </div>
        </Col>

        <Col
          md={4}
          style={{ height: "100vh" }}
          className="bg-gray-10 p-5 d-flex justify-content-center align-items-center"
        >
          <img
            src={gif}
            style={{ transform: "scale(1.23)" }}
            alt=""
            width="100%"
            height="100%"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SignupComp;
