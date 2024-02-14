import React from 'react'
import { Button, Modal } from "react-bootstrap";
import {modelData} from '../data'
import {Link} from 'react-router-dom'
import { useState } from 'react';
const SignUpButton = () => {
    const [showModal, setShowModal] = useState(false)
    const handleClose=()=>setShowModal(false);
    const handleShow=()=>setShowModal(true);
    
    
  return (
    <>
    <Button onClick={handleShow} className="btn SSA_Header_BTN text-lg !px-8 ms-1 py-2.5 !border-none focus:!outline-none !shadow-none webbackground_theme border-emerald-950 SSA_Header_BTN" style={{
    }}>
      SIGN UP
    </Button>

    <Modal className='modal-lg SSA_Modal_dialog modal-dialog-centered' show={showModal} onHide={handleClose} centered >
      <Modal.Header className="ab-modalborder" >

        <Modal.Title className="flex justify-center w-[100%]">

          <div className="flex flex-col items-end col-md-7 gap-2">
            <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/4c01b7fc-36fd-4c9d-cb34-e325db9a2400/public" alt="GrowXads" loading="lazy" style={{ width: "150px" }} />

            <span className="text-2xl font-medium" style={{ padding: "0px 24px" }}>Sign up</span>
          </div>

          <div className="ab-closediv col-md-5">
            <div className="ab-closediv1" onClick={handleClose} >
              <span>X</span>
            </div>
          </div>

        </Modal.Title>

      </Modal.Header>

      {/* <div style={{ border: "1px dashed black" }}></div> */}
      <div className="p-4" style={{ height: "375px" }}>
        <div className="container">
          <div className="row">
            <div>
              <div className="ab-options">
                {
                  modelData.map((ele, index) => {
                    return <div className="ab-option">
                      <img src={`${ele.img}`} alt="CPA" width={84} height={82} />
                      <h3>{ele.name}</h3>
                      <p>{ele.paragraph}</p>

                      <Link to={`${ele.link}`} className="ab-link">
                        Get Started
                      </Link>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
    </>
  )
}

export default SignUpButton