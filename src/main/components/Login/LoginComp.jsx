import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function LoginComp() {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col
          md={8}
          className="bg-gray-10 p-5 d-flex justify-content-center align-items-center"
        >
          <img
            src="https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/illustrations/auth/v2-login-light.png"
            alt=""
            width="80%"
          />
        </Col>

        <Col md={4}>
          <div className="login-form p-5">
            <form>
              <div className="text-start text-3xl  font-semibold">
                Welcome to Materio!👋🏻
              </div>
              <p className="text-lg text-gray-100">
                Please sign-in to your account and start the adventure
              </p>

              <div className="p-3 bg-gray-10 rounded-md bg-[#efcae8] text-purple">
                Email: admin@materio.com / Pass: admin
              </div>

              <div className="form-group pt-4">
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  type="text"
                  className="form-control pb-2"
                  // placeholder="Username"
                  required="required"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required="required"
                />
              </div>

              <div className="clearfix py-3">
                <label className="float-left form-check-label">
                  <Checkbox {...label} color="secondary" />
                  Remember me
                </label>

                <a href="#" className="float-right text-purple">
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
                  className=" text-white bg-gradient-to-r w-full from-purple to-darkPurple hover:from-darkPurple hover:to-purple focus:ring-4 px-4 focus:ring-purple-300 text-lg rounded-lg font-semibold py-2.9 mb-2 dark:bg-gradient-to-r dark:from-purple dark:to-darkPurple dark:hover:from-darkPurple dark:hover:to-purple dark:focus:ring-purple-900"
                >
                  Log in
                </Button>
              </div>
            </form>
            <p className="text-center">
              New on our platform?
              <a href="#" className="text-purple">
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
