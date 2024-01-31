import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SecondModal.css";
import { Link, useNavigate } from "react-router-dom";

function SecondModal(props) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  console.log(props);
  const handleconsole = () => {
    console.log("hello");
  };

  const sonaFun = () => {
    console.log("hello");
  };
  return (
    <div className="">
      <div className="ab-notaffiliate" onClick={handleShow}>
        I'm not an {props.role}
      </div>

      <Modal
        className="modal-lg SSA_Modal_dialog modal-dialog-centered"
        show={showModal}
        onHide={handleClose}
        centered
      >
        <Modal.Header style={{ border: "none" }} closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class=" ">
            <div className="container px-md-5 px-3 ">
              <h4 className="text-center pb-2 text-black">Choose Your Role</h4>
              <div className="row px-md-5">
                <div className="col-md-6 text-center col-12">
                  <div className="SSA_SecondModal-Border py-md-4 py-4 px-md-5 px-1">
                    <div className="text-center d-flex pb-1 justify-content-center">
                      <img src={props.message.image} alt="" width="100%" />
                    </div>

                    {/* <h6 className="SSA_SecondModal_font-18px">
                      {props.message.title}
                    </h6> */}
                    <p className="SSA_SecondModal_font-16px">
                      {" "}
                      {props.message.subtitle}      </p>
                      <div className="row justify-content-center">
  <div className="col-6 mx-0">
    <Link to={props.message.loginLink} style={{color:'white'}}> 
      <button className="btn btn-dark px-3 my-2 SSA_SecondModal_font-14px  mx-0 text-white my-3">
        LOGIN
      </button>
    </Link>
  </div>
  <div className="col-6 mx-0">
   
      <Link to={props.message.signup}><button className="btn btn-dark px-3 mx-0  my-2 SSA_SecondModal_font-14px text-white my-3">
      Sign up
      </button></Link>
  
  </div>
</div>

                      
                    
                    
                  </div>
                </div>
                <div className="col-md-6 pt-md-0 pt-4 text-center col-12">
                  <div className="SSA_SecondModal-Border py-md-4 py-4 px-md-5 px-1">
                    <div className="text-center pb-1 d-flex justify-content-center">
                      <img src={props.message2.image} alt="" width="100%" />
                    </div>

                    {/* <h6 className="SSA_SecondModal_font-18px">
                      {props.message2.title}
                    </h6> */}
                    <p className="SSA_SecondModal_font-16px">
                      {" "}
                      {props.message2.subtitle}
                    </p>

                    <div className="row justify-content-center">
  <div className="col-6">
    <Link to={props.message2.loginLink} style={{color:'white'}}> 
      <button className="btn btn-dark px-3 my-2 SSA_SecondModal_font-14px text-white my-3">
        LOGIN
      </button>
    </Link>
  </div>
  <div className="col-6">

      <Link to={props.message2.signup}><button className="btn btn-dark px-3 my-2 SSA_SecondModal_font-14px text-white my-3">
      Sign up
      </button></Link>
   
  </div>
</div>
                   
                  </div>
                </div>
              </div>
              <div className="row   d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <div className="text-center py-md-5 py-4 SSA_SecondModal_font-14px">
                    Use a separate email address for each role. <br />
                    You cannot create multiple accounts for the same role.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SecondModal;
