import React, { useState, useEffect, useContext } from "react";
import "./publishetrAuth.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Link,
  useNavigate,
  BrowserRouter as useRouteMatch,
} from "react-router-dom";
// import { UserLogin, UserSignup } from "../../AllApi/AllAuthApi";

import SecondModal from "../SecondModal/SecondModal";
import { MyContext } from "../../../Context/MyContext";
import ModalData from "../SecondModal/ModalData";
import {
  AdvertiserUserLogin,
  PublisherUserLogin,
  PublisherUserSignup,
} from "../../../AllApi/AllAuthApi";

const PublishersAuth = (props) => {
  const [isSignIn, setIsSignIn] = useState(props.isSign);
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [userLogin, setUserLogin] = useState("");
  const [messenger, setMessenger] = useState("");
  const [messengerDetails, setMessengerDetails] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [country, setCountry] = useState("");
  const [showModal, setShowModal] = useState();
  const { updateSharedState } = useContext(MyContext);
  const navigate = useNavigate();
  const match = useRouteMatch("/login");
  console.warn(match.props.location.pathname);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    fullName: "",
    userLogin: "",
    messengerDetails: "",
    messenger: "",
    paymentMethod: "",
    country: "",
  });
  const role = "Publisher";
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const toggle = () => {
    setIsSignIn((prevIsSignIn) => !prevIsSignIn);
  };

  
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  // useEffect(() => {

  //     if(match.props.location.pathname=="/login"){
  //     setIsSignIn(true);
  //     }
  //     else{
  //         setIsSignIn(false);
  //     }

  // }, [match.props.location.pathname]);

  // Assuming this is your handleSubmit function
  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Done");
      try {
        const data = {
          email,
          password,
          fullName,
          userLogin,
          country,
          messenger,
          messengerDetails,
          paymentMethod,
        };

        const res = await PublisherUserSignup(data);
        console.log(res);
      } catch (error) {
        console.error("API Request Error:", error);
      }
    }
  };
  function handleLogin(flag) {
    if (flag == 1) {
      setIsSignIn(true);
    } else {
      setIsSignIn(false);
    }
  }

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const data = {
          email,
          password,
        };

        // Assuming UserLogin returns user data upon successful login
        const user = await PublisherUserLogin(data);

        updateSharedState({ user, isAuthenticated: true });

        // Store user information in localStorage
        localStorage.setItem("user", JSON.stringify(user));
        if (localStorage.getItem("user")) {
          navigate("/publisherdashboard");
        }

        // Optionally, you can perform actions based on the response (user) here

        alert("Login successful");

        // You can redirect the user to another page or perform other actions here
        // For example: history.push('/dashboard');
      } catch (error) {
        console.error("API Request Error:", error);
        // Handle the error as needed, for example, you can update state with an error message
        // setErrorState(error.message);
      }
    }
  };

  const validate = () => {
    const validationErrors = {};

    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters";
    }

    if (!isSignIn) {
      if (!fullName) {
        validationErrors.fullName = "Full Name is required";
      }

      if (!userLogin) {
        validationErrors.userLogin = "User Login is required";
      } else if (!/^[a-zA-Z0-9]+$/.test(userLogin)) {
        validationErrors.userLogin =
          "User Login should only contain alphanumeric characters";
      }

      if (!messenger) {
        validationErrors.messenger = "Messenger is required";
      }

      if (!messengerDetails) {
        validationErrors.messengerDetails = "Messenger Details is required";
      }

      if (!paymentMethod) {
        validationErrors.paymentMethod = "payment Method is required";
      }
    }

    return validationErrors;
  };

  return (
    <div
      id="ab-log-container"
      className={`ab-log-container ${
        isSignIn ? " ab-sign-in " : "ab-log-sign-up"
      }`}
    >
      <div className="ab-log-row ab-lg-bgimg">
        {/* SIGN UP */}
        <div className="ab-log-col ab-log-align-items-center ab-log-flex-col ab-log-sign-up ">
          <div className="form-wrapper ab-log-align-items-center">
            <div className="form ab-log-sign-up">
              <div className=" d-flex ">
                <div
                  className="ab-w70 d-flex justify-content-start "
                  style={{ borderRadius: "10px" }}
                >
                  <Link to="/">
                    <img
                      src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/544252aa-3ba1-44cd-2d49-129b26608500/public"
                      alt=""
                      width={150}
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <SecondModal
                    className="ab-notaffiliate "
                    message={ModalData[0]}
                    message2={ModalData[2]}
                    image={ModalData[2]}
                    role={role}
                    handleShow={handleShow}
                    handleLogin={handleLogin}
                  />
                </div>
              </div>
              {/* <h2>Sign Up <span className="webcl_theme">Form</span></h2> */}
              {/* <div className='mt-3 text-end'>
                                <a href='#' className='ab-notpublisher' >I'm not a Publisher</a>
                            </div> */}

              <div className="ab-log-dflex ab-log-mt20">
                <div className="ab-log-mtmb10 abc-form">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="abc-input"
                    required
                  />
                  {fullName == "" ? (
                    <label htmlFor="" className="abc-label">
                      Full Name*
                    </label>
                  ) : (
                    <label htmlFor="" className="abc-label abc-labelabc">
                      Full Name
                    </label>
                  )}
                  {errors.fullName && (
                    <div className="ab-log-error">{errors.fullName}</div>
                  )}
                </div>

                <div className="ab-log-mtmb10 abc-form">
                  <input
                    type="text"
                    value={userLogin}
                    onChange={(e) => setUserLogin(e.target.value)}
                    className="abc-input"
                    required
                  />
                  {userLogin == "" ? (
                    <label htmlFor="" className="abc-label">
                      User Login*
                    </label>
                  ) : (
                    <label htmlFor="" className="abc-label abc-labelabc ">
                      UserLogin
                    </label>
                  )}
                  {errors.userLogin && (
                    <div className="ab-log-error">{errors.userLogin}</div>
                  )}
                </div>
              </div>

              <div className="ab-log-dflex">
                <div className="ab-log-mtmb10 abc-form">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="abc-input"
                    required
                  />
                  {email == "" ? (
                    <label htmlFor="" className="abc-label">
                      Email*
                    </label>
                  ) : (
                    <label htmlFor="" className="abc-label abc-labelabc">
                      Email
                    </label>
                  )}
                  {errors.email && (
                    <div className="ab-log-error">{errors.email}</div>
                  )}
                </div>
                <div className="ab-log-mtmb10 abc-form">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="abc-input"
                    required
                  />
                  {password == "" ? (
                    <label htmlFor="password" className="abc-label">
                      Password*
                    </label>
                  ) : (
                    <label
                      htmlFor="password"
                      className="abc-label abc-labelabc"
                    >
                      Password
                    </label>
                  )}
                  {errors.password && (
                    <div className="ab-log-error">{errors.password}</div>
                  )}
                </div>
              </div>

              <div className="ab-log-dflex">
                <div className="ab-log-mtmb10 abc-form">
                  <select
                    value={messenger}
                    onChange={(e) => setMessenger(e.target.value)}
                    className="abc-input"
                    required
                  >
                    <option className="ab-log-fs10 " value="" disabled hidden>
                      Messenger*
                    </option>
                    <option className="ab-log-fs15 " value="Skype">
                      Skype
                    </option>
                    <option className="ab-log-fs15 " value="Telegram">
                      Telegram
                    </option>
                    <option className="ab-log-fs15 " value="Whatsapp">
                      Whatsapp
                    </option>
                    <option className="ab-log-fs15 " value="Facebook">
                      Facebook
                    </option>
                    <option className="ab-log-fs15 " value="Instagram">
                      Instagram
                    </option>
                    <option className="ab-log-fs15 " value="Twitter">
                      Twitter
                    </option>
                    {/* Add more options as needed */}
                  </select>
                  {messenger == "" ? (
                    <label htmlFor="" className="abc-label abc-labelopc">
                      Messenger*
                    </label>
                  ) : (
                    <label
                      htmlFor=""
                      className="abc-label abc-labelopc abc-labelabc"
                    >
                      Messenger*
                    </label>
                  )}
                  {errors.messenger && (
                    <div className="ab-log-error">{errors.messenger}</div>
                  )}
                </div>
                <div className="ab-log-mtmb10 abc-form">
                  <input
                    type="text"
                    value={messengerDetails}
                    onChange={(e) => setMessengerDetails(e.target.value)}
                    className="abc-input"
                    // setPaymentOption
                    required
                  />
                  {messengerDetails == "" ? (
                    <label htmlFor="" className="abc-label">
                      Messenger Details*
                    </label>
                  ) : (
                    <label
                      htmlFor=""
                      className="abc-label abc-labelabc abc-labelopc"
                    >
                      Messenger Details*
                    </label>
                  )}
                  {errors.messengerDetails && (
                    <div className="ab-log-error">
                      {errors.messengerDetails}
                    </div>
                  )}
                </div>
              </div>

              <div className="ab-log-dflex ab-log-dflex-js">
                {/*<div className="ab-log-mtmb10 abc-form">
                                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="abc-input" />
                                    {company == "" ? <label htmlFor="" className="abc-label">Company*</label> : <label htmlFor="" className="abc-label abc-labelabc">Company*</label>}
                                    {errors.company && <div className="ab-log-error">{errors.company}</div>}
                                </div>*/}
                <div className="ab-log-mtmb10 abc-form w-50 ">
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="abc-input"
                    required
                  >
                    <option className="ab-log-fs15 " value="" disabled hidden>
                      Payment method*
                    </option>
                    <option className="ab-log-fs15 " value="" disabled>
                      Please Select...
                    </option>
                    <option className="ab-log-fs15 " value="India">
                      PayPal
                    </option>
                    <option className="ab-log-fs15 " value="Paxum">
                      Paxum
                    </option>
                    <option className="ab-log-fs15 " value="Webmoney_WMZ">
                      Webmoney WMZ
                    </option>
                    <option className="ab-log-fs15 " value="Bitcoin">
                      Bitcoin
                    </option>
                    <option className="ab-log-fs15 " value="Webmoney_WMT">
                      Webmoney WMT
                    </option>
                    <option className="ab-log-fs15 " value="Bank_Transfer">
                      Bank Transfer
                    </option>
                    <option className="ab-log-fs15 " value="Bank_Transfer">
                      Tether ERC20 (Ethereum)
                    </option>
                  </select>
                  {paymentMethod == "" ? (
                    <label htmlFor="" className="abc-label abc-labelopc">
                      Payment method*
                    </label>
                  ) : (
                    <label
                      htmlFor=""
                      className="abc-label abc-labelopc abc-labelabc"
                    >
                      Payment method*
                    </label>
                  )}
                  {errors.paymentOption && (
                    <div className="ab-log-error">{errors.paymentOption}</div>
                  )}
                </div>
              </div>
              <div className="form-check text-left">
              <input
    className="form-check-input"
    type="checkbox"
    value=""
    id="flexCheckDefault"
    checked={checkBoxChecked}
    onChange={(e) => setCheckBoxChecked(e.target.checked)}
    disabled={
      fullName === '' ||
      userLogin === '' ||
      email === '' ||
      password === '' ||
      messenger === '' ||
      messengerDetails === '' ||
      paymentMethod === ''
    } // Disable checkbox if any field is empty
  />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          I have read and agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
        </label>
      </div>

              {/* <div className='ab-log-dflex'>
                                <p className='ab-log-fs15 ab-log-fw'><input type="radio" name="usertype" value="Advertiser" checked={userType === 'Advertiser'} onChange={() => setUserType('Advertiser')} /><span>  Advertiser</span></p>
                                <p className='ab-log-fs15 ab-log-fw'><input type="radio" name="usertype" value="Publisher" checked={userType === 'Publisher'} onChange={() => setUserType('Publisher')} /><span>  Publisher</span></p>
                                <p className='ab-log-fs15 ab-log-fw'><input type="radio" name="usertype" value="Affiliate" checked={userType === 'Affiliate'} onChange={() => setUserType('Affiliate')} /><span>  Affiliate</span></p>
                            </div> */}
              
              <button
        type="button"
        
      onClick={showToastMessage}
        // onClick={handleSignupSubmit}
        className="ab-log-mt10"
        disabled={!checkBoxChecked} 
      >
       Sign up
      </button>
              <p className="ab-log-fs15">
                <span>Already have an account?</span>
                <b onClick={toggle} className="ab-log-pointer">
                  Sign in
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* END SIGN UP */}

        {/* SIGN IN */}
        <div className="ab-log-col ab-log-align-items-center ab-log-flex-col ab-sign-in">
          <div className="form-wrapper ab-log-align-items-center">
            <div className="form ab-sign-in">
              <div className=" d-flex ">
                <div
                  className="ab-w70 d-flex justify-content-start"
                  style={{ borderRadius: "10px" }}
                >
                  <Link to="/">
                    <img
                      src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/544252aa-3ba1-44cd-2d49-129b26608500/public"
                      alt=""
                      width={150}
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <SecondModal
                    className="ab-notaffiliate"
                    message={ModalData[0]}
                    message2={ModalData[2]}
                    role={role}
                    handleShow={handleShow}
                    handleLogin={handleLogin}
                  />
                </div>
              </div>
              {/* <h2 className="ab-log-mb20">Login</h2> */}
              <div className="ab-log-mtmb20 abc-form ">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="abc-input"
                  required
                />
                {email == "" ? (
                  <label htmlFor="email" className="abc-label">
                    Email*
                  </label>
                ) : (
                  <label htmlFor="email" className="abc-label abc-labelabc">
                    Email*
                  </label>
                )}
                {errors.email && (
                  <div className="ab-log-error">{errors.email}</div>
                )}
              </div>

              <div className="ab-log-mtmb20 abc-form">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="abc-input"
                  required
                />
                {password == "" ? (
                  <label htmlFor="password" className="abc-label">
                    Password*
                  </label>
                ) : (
                  <label htmlFor="password" className="abc-label abc-labelabc">
                    Password*
                  </label>
                )}
                {errors.password && (
                  <div className="ab-log-error">{errors.password}</div>
                )}
              </div>

              <div className="form-check text-left">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked={checkBoxChecked}
          onChange={(e) => setCheckBoxChecked(e.target.checked)}
          disabled={email === '' || password === ''} // Disable checkbox if email or password is empty
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          I have read and agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
        </label>
      </div>
      


      <button
      onClick={showToastMessage}
        type="button"
        // onClick={handleLoginSubmit}
        className="ab-log-mt10"
        disabled={!checkBoxChecked} // Disable button if checkbox is unchecked
      >
        Sign in
      </button>
              <p className="ab-log-fs15">
                <b>Forgot password?</b>
              </p>
              <p className="ab-log-fs15">
                <span>Don't have an account?</span>
                <b onClick={toggle} className="ab-log-pointer">
                  Sign up
                </b>
              </p>
            </div>
          </div>
          <div className="form-wrapper"></div>
        </div>
        {/* END SIGN IN */}
      </div>
      {/* END FORM SECTION */}
      {/* CONTENT SECTION */}
      <div className="ab-log-row ab-log-content-row">
        {/* SIGN IN CONTENT */}
        <div className="ab-log-col ab-log-align-items-center ab-log-flex-col">
          <div className="ab-log-text ab-sign-in">
            <h2>Welcome</h2>
          </div>
          <div className="img ab-sign-in"></div>
        </div>
        {/* END SIGN IN CONTENT */}
        {/* SIGN UP CONTENT */}
        <div className="ab-log-col ab-log-align-items-center ab-log-flex-col">
          <div className="img ab-log-sign-up"></div>
          <div className="ab-log-text ab-log-sign-up">
            <h2>Join with us</h2>
          </div>
        </div>
        {/* END SIGN UP CONTENT */}
      </div>
      {/* END CONTENT SECTION */}
      <ToastContainer />
    </div>
  );
};

export default PublishersAuth;
