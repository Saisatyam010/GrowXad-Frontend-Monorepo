import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import style from "./SignupComp.module.css";
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';


const label = { inputProps: { "aria-label": "Checkbox demo" } };

function SignupComp() {


const [showPassword, setShowPassword] = useState(false);
const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);

};

const togglePasswordConfirmVisibility = () => {
  setShowPasswordConfirm(!showPasswordConfirm);
}

  return (
    <Container fluid>
      <Row className="align-items-center">
      
        <Col md={8} className="px-5">
          <div className="login-form p-5">
            <form>
              <div className="text-start text-3xl  font-semibold">
              Adventure starts here 🚀
              </div>
              <p className="text-lg text-gray-100">
              Make your app management easy and fun!
              </p>
              <Row>
                <Col md={6}>
                  <div className="form-group pt-3">
                    <div class={style.form_input}>
                      <input
                        type="text"
                        placeholder="first name"
                        id="fname"
                        className="w-full"
                      />
                      <label for="fname">FirstName</label>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group pt-3">
                    <div class={style.form_input}>
                      <input
                        type="text"
                        placeholder="Last Name"
                        id="lname"
                        className="w-full"
                      />
                      <label for="lname">Last Name</label>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group pt-3">
                    <div class={style.form_input}>
                      <input
                        type="email"
                        placeholder="Email address"
                        id="email"
                        className="w-full"
                      />
                      <label for="email">Email Address</label>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group pt-3">
                    <div class={style.form_input}>
                      <input
                        type="text"
                        placeholder="Username"
                        id="Username"
                        className="w-full"
                      />
                      <label for="Username">Username</label>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="form-group">
                    {/* <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required="required"
                /> */}
                    <div class={`${style.form_input} mt-3`}>
                      <input
                       type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        id="password"
                        className="w-full"
                      />
                      <label for="password">Password</label>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
      {!showPassword ? <FiEyeOff /> : <FiEye />}
    </span>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="form-group">
                    {/* <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required="required"
                /> */}
                    <div class={`${style.form_input} mt-3`}>
                      <input
                        type={showPasswordConfirm ? "text" : "password"}
                        placeholder="Confirm Password"
                        id="confirmPassword"
                        className="w-full"
                      />
                      <label for="confirmPassword">Confirm Password</label>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordConfirmVisibility}>
      {!showPasswordConfirm ? <FiEyeOff /> : <FiEye />}
    </span>
                    </div>
                  </div>
                </Col>

                <Col md={6} className="pt-3">
                <div class={style.select}>
					<select class={style.select_text} required >
						<option value="" disabled selected ></option>
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
						<option value="3">Option 3</option>
					</select>
					<span class={style.select_highlight}></span>
					<span class={style.select_bar}></span>
					<label class={style.select_label}>Messenger</label>
				</div>
                </Col>
                <Col md={6}>
                  <div className="form-group pt-3">
                    <div class={style.form_input}>
                      <input
                        type="text"
                        placeholder="Messenger Account"
                        id="messengerAccount"
                        className="w-full"
                      />
                      <label for="messengerAccount">Messenger Account</label>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="p-4 bg-secondary">Captcha</div>
                </Col>
              </Row>

              <div className="clearfix py-3">
                <label className="float-left form-check-label">
                  <Checkbox {...label} style={{ color: "purple" }} />
                  I agree to privacy policy & terms
                </label>

                <a href=" " className="float-right text-purple pt-2">
                  Forgot Password?
                </a>
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
                  className=" text-white bg-gradient-to-r w-full from-purple to-darkPurple hover:from-darkPurple hover:to-purple focus:ring-4 px-4 focus:ring-purple-300 text-lg rounded-lg font-semibold py-3 mb-2 dark:bg-gradient-to-r dark:from-purple dark:to-darkPurple dark:hover:from-darkPurple dark:hover:to-purple dark:focus:ring-purple-900"
                >
                 Signup
                </Button>
              </div>
            </form>
            <p className="text-center text-lg ">
            Already have an account?
              <a href=" " className="text-purple">
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
            src="https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/illustrations/auth/v2-register-light.png"
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
