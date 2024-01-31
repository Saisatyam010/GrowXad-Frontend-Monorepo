import React, { useState } from "react";
import './Websites.css'
import { TbOctagonOff } from "react-icons/tb";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdFileDownload } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa";



export const Websites = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const [modalShow, setModalShow] = React.useState(false);
  const [modalForm, setModalForm] = React.useState(false);
  const [modalExport, setModalExport] = React.useState(false);

  const ToggleHandle = () => {
    setVisible(!visible);
  };
  const ToggleHandle2 = () => {
    setVisible2(!visible2);
  };
  return (

    <div className="container sana-directlink-cont">

      {/* --------------------------First-div------------------------ */}

      <div className="row sana-directlink-row">
        <div
          className="col-md-12 toggel-handle-div d-flex"
          onClick={ToggleHandle}
          style={{
            justifyContent: "space-between",
            padding: "10px",
            transition: "opacity 0.5s ease",
            transition: "max-height 0.5s ease",
          }}
        >
          <h5 className="sana-direct-handle-h5 mt-3">
            Monetize any traffic with a link
          </h5>
          <button className="sana-Direct-button-1" onClick={ToggleHandle}>
            {/* <FontAwesomeIcon
              className="sana-show-hide-icons"
              icon={visible ? faEyeSlash : faEye}
            /> */}
            {visible ? "Hide" : "Show"}
          </button>
        </div>

        {visible && (
          <div className="row">
            <div className="col-md-4  sana-directlink-cont">
              <img
                src="https://beta.publishers.adsterra.com/static/images/direct-links-description-1.73d8cef1d1ab42e10f6c.svg"
                alt=""
              />

              <h5 className="mt-4" style={{ fontWeight: "700" }}>
                <span className="sana-span-1 mb-1">1</span>
                Create Direct Link
              </h5>

              <p>
                Click green <b>CREATE DIRECT LINK</b> button below to start. Set
                your link category and, if needed, remove campaigns with
                unwanted ads
              </p>
            </div>
            <div className="col-md-4  sana-directlink-cont">
              <img
                src="https://beta.publishers.adsterra.com/static/images/direct-links-description-1.73d8cef1d1ab42e10f6c.svg"
                alt=""
              />

              <h5 className="mt-4" style={{ fontWeight: "700" }}>
                <span className="sana-span-1 mb-1">2</span>
                Create Direct Link
              </h5>

              <p>
                Click green <b>CREATE DIRECT LINK</b> button below to start. Set
                your link category and, if needed, remove campaigns with
                unwanted ads
              </p>
            </div>
            <div className="col-md-4  sana-directlink-cont">
              <img
                src="https://beta.publishers.adsterra.com/static/images/direct-links-description-1.73d8cef1d1ab42e10f6c.svg"
                alt=""
              />

              <h5 className="mt-4" style={{ fontWeight: "700" }}>
                <span className="sana-span-1 mb-1">3</span>
                Create Direct Link
              </h5>

              <p>
                Click green <b>CREATE DIRECT LINK</b> button below to start. Set
                your link category and, if needed, remove campaigns with
                unwanted ads
              </p>
            </div>
          </div>
        )}
      </div>


      {/* --------------------------Second-div------------------------ */}

      <div className="row mt-5 sana-directlink-row">
        <div
          className="col-md-12 toggel-handle-div d-flex "
          onClick={ToggleHandle2}
          style={{
            justifyContent: "space-between",
            padding: "10px",
            transition: "opacity 0.5s ease",
            transition: "max-height 0.5s ease",
          }}
        >
          <h5 className="sana-direct-handle-h5 mt-3">
            Increase your revenue with Anti-Adblock
          </h5>
          <button className="sana-Direct-button-1" onClick={ToggleHandle2}>
            {/* <FontAwesomeIcon
              className="sana-show-hide-icons"
              icon={visible2 ? faEyeSlash : faEye}
            /> */}
            {visible2 ? "Hide" : "Show"}
          </button>
        </div>

        {visible2 && (
          <div className="row">
            <div
              className="sana-modal-div d-flex mx-auto"
              style={{ justifyContent: "space-between" }}
            >
              <p>
                Monetize traffic from adblock users with our custom domains.{" "}
                <br />
                They work as regular ads, no additional code required. Support
                all formats except video (VAST)
              </p>

              <div className="sana-modal">
                <Button
                  className="sana-modal-button d-flex"
                  variant="success"
                  onClick={() => setModalShow(true)}
                >
                  <TbOctagonOff className="sana-modal-button-icon" /> REQUEST
                  ANTI-ADBLOCK
                </Button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
            <div className="col-md-4  sana-directlink-cont">
              <img
                src="https://beta.publishers.adsterra.com/static/images/direct-links-description-1.73d8cef1d1ab42e10f6c.svg"
                alt=""
              />

              <h5 className="mt-4" style={{ fontWeight: "700" }}>
                <span className="sana-span-1 mb-1">1</span>
                Create Direct Link
              </h5>

              <p>
                Click green <b>CREATE DIRECT LINK</b> button below to start. Set
                your link category and, if needed, remove campaigns with
                unwanted ads
              </p>
            </div>
            <div className="col-md-4  sana-directlink-cont">
              <img
                src="https://beta.publishers.adsterra.com/static/images/direct-links-description-1.73d8cef1d1ab42e10f6c.svg"
                alt=""
              />

              <h5 className="mt-4" style={{ fontWeight: "700" }}>
                <span className="sana-span-1 mb-1">2</span>
                Create Direct Link
              </h5>

              <p>
                Click green <b>CREATE DIRECT LINK</b> button below to start. Set
                your link category and, if needed, remove campaigns with
                unwanted ads
              </p>
            </div>
            <div className="col-md-4  sana-directlink-cont">
              <img
                src="https://beta.publishers.adsterra.com/static/images/direct-links-description-1.73d8cef1d1ab42e10f6c.svg"
                alt=""
              />

              <h5 className="mt-4" style={{ fontWeight: "700" }}>
                <span className="sana-span-1 mb-1">3</span>
                Create Direct Link
              </h5>

              <p>
                Click green <b>CREATE DIRECT LINK</b> button below to start. Set
                your link category and, if needed, remove campaigns with
                unwanted ads
              </p>
            </div>
          </div>
        )}
      </div>


      {/* --------------------------Third-div------------------------ */}

      <div className="row sana-directlink-row-createdirectlink mt-5">
        <div className="col-md-12">
          <div
            className="sana-modal-div d-flex mx-auto"
            style={{ justifyContent: "space-between" }}
          >
            <p className="sana-div3-pera">
              Click CREATE DIRECT LINK button to request your first link
            </p>

            <div className="sana-modal">
              <Button
                className="sana-modal-button d-flex"
                variant="success"
                onClick={() => setModalForm(true)}
              >
                CREATE DIRECT LINK
              </Button>

              <MyModalForm
                show={modalForm}
                onHide={() => setModalForm(false)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------Forth-div------------------------ */}

      <div className="row mt-5 sana-directlink-row-createdirectlink ">
        <div className="col-md-12">
          <div
            className="sana-modal-div d-flex mx-auto justify-content-end"
            style={{ justifyContent: "space-between" }}
          >
            <div className="sana-modal d-flex justify-content-end">
              <Button
                className="sana-modal-button-export d-flex"
                variant=""
                onClick={() => setModalExport(true)}
              >
                <MdFileDownload className="mr-3" style={{ fontSize: "30px" }} />{" "}
                EXPORT CODES
              </Button>

              <ModalExport
                show={modalExport}
                onHide={() => setModalExport(false)}
              />
            </div>
          </div>

          <div
            className="sana-div-table mt-4"
            style={{ color: "rgb(111, 111, 111)" }}
          >
            <p className="sana-list-table">Ad unit</p>
            <p className="sana-list-table"> Placement name</p>
            <p className="sana-list-table" style={{ width: "80px", marginRight: "20px" }}>Placement ID</p>
            <p className="sana-list-table">Status</p>
          </div>
          <hr style={{ width: "100%" }} />
          <div className="sana-div-table">
            <p className="sana-list-table">Direct Link</p>
            <p className="sana-list-table"> DirectLink_1</p>
            <p className="sana-list-table">21843908</p>
            <p className="sana-list-table" style={{ color: "green", display: "flex" }}> <IoPlayCircleOutline style={{ fontSize: "20px", marginRight: "5px" }} />Active</p>
            <p className="sana-list-table " id="sana-statistics" style={{ display: "flex" }}><FaArrowTrendUp style={{ fontSize: "20px", marginRight: "5px" }} />STATISTICS</p>
            <p className="sana-list-table" id="sana-statistics" style={{ display: "flex" }}><FaRegCopy style={{ fontSize: "20px", marginRight: "5px" }} /> COPY</p>
            <p className="sana-list-table" id="sana-statistics" style={{ display: "flex" }}><IoSettingsOutline style={{ fontSize: "20px", marginRight: "5px" }} />EDIT</p>

          </div>
          <hr style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  )
}


function MyVerticallyCenteredModal(props) {
  return (

    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Body>
        <h4 className="m-2">Request Anti-Adblock?</h4>
        <p>It will be applied to all your ad formats except video (VAST)</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          style={{
            backgroundColor: "white",
            color: "black",
            border: "none",
          }}
        >
          Close
        </Button>
        <Button
          style={{ backgroundColor: "green", border: "none" }}
          onClick={props.onHide}
        >
          Request
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const MyModalForm = (props) => {
  return (
    <div className="modal" style={{ display: props.show ? "block" : "none" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h4 className="m-2 mb-4">Add new direct link</h4>
            <div className="mb-3" style={{ lineHeight: "1.5em" }}>
              <label className="form-label mb-3"> Direct Link Category</label>
              <div>
                <input type="radio" id="adultRadio" name="linkCategory" />
                <label htmlFor="adultRadio" className="ml-3">
                  Adult
                </label>
              </div>
              <div>
                <input type="radio" id="nonAdultRadio" name="linkCategory" />
                <label htmlFor="nonAdultRadio " className="ml-3">
                  Non-adult
                </label>
              </div>
            </div>
            <p className="mb-3">
              <span style={{ color: "red" }}>Remove </span>campaigns with
            </p>
            <div className="d-flex mb-3">
              <div>
                <div>
                  <input
                    type="checkbox"
                    id="checkbox1"
                    style={{ fontSize: "20px", transform: "scale(1.5)" }}
                  />
                  <label style={{ marginLeft: "10px" }} htmlFor="checkbox1">
                    Option 1
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="checkbox2"
                    style={{ fontSize: "20px", transform: "scale(1.5)" }}
                  />
                  <label style={{ marginLeft: "10px" }} htmlFor="checkbox2">
                    Option 2
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="checkbox3"
                    style={{ fontSize: "20px", transform: "scale(1.5)" }}
                  />
                  <label style={{ marginLeft: "10px" }} htmlFor="checkbox3">
                    Option 3
                  </label>
                </div>
              </div>

              <div className="ml-5">
                <div>
                  <input
                    type="checkbox"
                    id="checkbox4"
                    style={{ fontSize: "20px", transform: "scale(1.5)" }}
                  />
                  <label style={{ marginLeft: "10px" }} htmlFor="checkbox4">
                    Option 4
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="checkbox5"
                    style={{ fontSize: "20px", transform: "scale(1.5)" }}
                  />
                  <label style={{ marginLeft: "10px" }} htmlFor="checkbox5">
                    Option 5
                  </label>
                </div>
              </div>
            </div>
            <div>
              <a href="" className="sana-modal-form-link">
                How it works
              </a>
              <p>
                Please be aware that the more ads you allow the higher CPM you
                can expect.
              </p>
            </div>
          </div>

          <Modal.Footer>
            <Button
              onClick={props.onHide}
              style={{
                backgroundColor: "white",
                color: "black",
                border: "none",
              }}
            >
              Close
            </Button>
            <Button
              style={{ backgroundColor: "green", border: "none" }}
              onClick={props.onHide}
            >
              Request
            </Button>
          </Modal.Footer>
        </div>
      </div>
    </div>
  );
};

const ModalExport = (props) => {
  <>
    <h4 className="m-2 mb-4">Add new direct link</h4>
    <div className="mb-3" style={{ lineHeight: "1.5em" }}>
      <label className="form-label mb-3"> Direct Link Category</label>
      <div>
        <input type="radio" id="adultRadio" name="linkCategory" />
        <label htmlFor="adultRadio" className="ml-3">
          Adult
        </label>
      </div>
      <div>
        <input type="radio" id="nonAdultRadio" name="linkCategory" />
        <label htmlFor="nonAdultRadio " className="ml-3">
          Non-adult
        </label>
      </div>
    </div>
  </>;
};