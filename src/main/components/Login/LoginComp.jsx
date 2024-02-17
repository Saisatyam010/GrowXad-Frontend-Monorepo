import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import style from "./LoginComp.module.css";
import gif from '../../../images/Comp 1_5.gif'
import { useForm } from "react-hook-form"
import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';



const label = { inputProps: { "aria-label": "Checkbox demo" } };

function LoginComp() {
  const [showPassword, setShowPassword] = useState(false);

const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};


const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm()


const onSubmit = (data) => console.log(data)

  return (
    <Container fluid>
      <Row className="align-items-center" >
        <Col
          style={{ height: "100vh" }}
          md={8}
          className="bg-gray-10 p-5 d-flex justify-content-center align-items-center"
        >
          <img
            src={gif}
            alt=""
            width="120%"
            height="100%"
          />
        </Col>

        <Col md={4}>
          <div className="login-form p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div  > <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/4c01b7fc-36fd-4c9d-cb34-e325db9a2400/public" alt="logo" width={150} />  </div>
       
              <div className="text-start text-3xl pt-4  font-semibold">
              Log in as an Advertiser👋🏻
              </div>
              <p className="text-lg text-gray-100">
                Please sign-in to your account and start the adventure
              </p>

              {/* <div className="p-3 bg-gray-10 rounded-md bg-[#efcae8] text-purple">
                Email: admin@materio.com / Pass: admin
              </div> */}

              {/* <div className="form-group pt-4">
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  type="text"
                  className="form-control pb-2"
                  // placeholder="Username"
                  required="required"
                />
              </div> */}

              <div className="form-group pt-4">
              <div className={`${errors.email ? style.form_input_red : style.form_input}`}>
                  <input
                    type="email"
                    placeholder="Email address"
                    id="email"
                    className="w-full"
                    style={{
                      '--tw-ring-shadow':'none'
                    }}
                    {...register("email", { required: true })} 
                  />
                  <label for="email">Email Address</label>
                </div>
                {errors.email && <span  className="pt-1" style={{color:'red',fontSize:'12px'}}>This field is mandatory</span>}
              </div>

              <div className="form-group">

  <div className={`${errors.password ? style.form_input_red : style.form_input}  mt-4 relative`}>
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      id="password"
      className="w-full pr-10"
      style={{
        '--tw-ring-shadow':'none'
      }}
      {...register("password", { required: true })}
    />
    <label htmlFor="password">Password</label>
    <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
      {!showPassword ? <FiEyeOff /> : <FiEye />}
    </span>
  </div>
  {errors.password && <span  className="pt-1" style={{color:'red',fontSize:'12px'}}>This field is mandatory</span>}
</div>

              <div className="clearfix py-3">
                <label className="float-left form-check-label">
                  <Checkbox {...label} style={{ color: "purple" }} />
                  Remember me
                </label>

                <a href="#" className="float-right text-purple pt-2">
                  Forgot Password?
                </a>
              </div>

              <div className="form-grop">
              <Button
  type="submit"
  className="text-white bg-gradient-to-r w-full from-purple to-darkPurple hover:from-darkPurple hover:to-purple focus:ring-4 px-4 focus:ring-purple-300 text-lg rounded-lg font-semibold py-3 mb-2 dark:bg-gradient-to-r dark:from-purple dark:to-darkPurple dark:hover:from-darkPurple dark:hover:to-purple dark:focus:ring-purple-900 outline-none !important border-transparent"
  style={{
    '--bs-btn-border-color': 'transparent',
    '--bs-btn-focus-box-shadow': 'none'
  }}
>
  Log in
</Button>

</div>

            </form>
            <p className="text-center text-lg ">
              New on our platform?
              <a href="/signup" className="text-purple">
                {" "}
                Create an Account
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginComp;
