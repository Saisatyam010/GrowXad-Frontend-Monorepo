import React, { useState } from 'react';

import { Accordion, Container, Modal, Button } from 'react-bootstrap';
import { BiTargetLock } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineRight } from "react-icons/ai";
import { GoQuestion } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import TimezoneSelect from "react-timezone-select";
import "@wojtekmaj/react-datetimerange-picker/dist/DateTimeRangePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoSettingsOutline } from 'react-icons/io5';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import TextField from '@mui/material/TextField';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { FaCheckCircle, FaRegCircle, FaQuestionCircle } from "react-icons/fa";


const GrowXAdsFaq = () => {
    return (
        <div>
    
          <h1 className='text-center m-0  pb-3' style={{ fontSize: "50px", color: "rgb(115,3,91)" }}>FAQ</h1>
    
          <Accordion className='mb-2'>
            <Accordion.Item eventKey="1">
    
              <Accordion.Header>
                <div className='row'>
                  <div className='col-md-12'>
                    {/* <h5 className=' p-0 m-0' style={{color:"rgb(115,3,91)"}}>How do I access the platform?<h5/> */}
                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>How do I access the platform?</h5>
                  </div>
                </div>
              </Accordion.Header>
    
              <Accordion.Body>
    
                <div className="container ">
                  <div className="row ">
                    <div className="col-md-12 ">
                      <p className='p-0 m-0'>You can register on the platform by choosing SIGN UP and filling out a simple form. After filling out the form, you will only have to confirm your email.You can register on the platform by choosing SIGN UP and filling out a simple form. After filling out the form, you will only have to confirm your email</p>
                    </div>
    
                  </div>
    
                </div>
              </Accordion.Body>
    
            </Accordion.Item>
    
          </Accordion>
    
          <Accordion className='mb-2'>
            <Accordion.Item eventKey="2">
    
              <Accordion.Header>
                <div className='row'>
                  <div className='col-md-12 '>
                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>I already have an advertiser's account on Adsterra Ad Network. Do I need to create a new one to access the CPA Network?</h5>
                  </div>
                </div>
              </Accordion.Header>
    
              <Accordion.Body>
    
                <div className="container ">
                  <div className="row ">
                    <div className="col-md-12 ">
                      <p className='p-0 m-0'>You can register on the platform by choosing SIGN UP and filling out a simple form. After filling out the form, you will only have to confirm your email.You can register on the platform by choosing SIGN UP and filling out a simple form. After filling out the form, you will only have to confirm your email</p>
                    </div>
    
                  </div>
    
                </div>
              </Accordion.Body>
    
            </Accordion.Item>
    
          </Accordion>
    
          <Accordion className='mb-2'>
            <Accordion.Item eventKey="1">
    
              <Accordion.Header>
                <div className='row'>
                  <div className='col-md-12'>
                    {/* <h5 className=' p-0 m-0' style={{color:"rgb(115,3,91)"}}>How do I access the platform?<h5/> */}
                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>How do I access the platform?</h5>
                  </div>
                </div>
              </Accordion.Header>
    
              <Accordion.Body>
    
                <div className="container ">
                  <div className="row ">
                    <div className="col-md-12 ">
                      <p className='p-0 m-0'>You can register on the platform by choosing SIGN UP and filling out a simple form. After filling out the form, you will only have to confirm your email.You can register on the platform by choosing SIGN UP and filling out a simple form. After filling out the form, you will only have to confirm your email</p>
                    </div>
    
                  </div>
    
                </div>
              </Accordion.Body>
    
            </Accordion.Item>
    
          </Accordion>
    
          <Accordion className='mb-2'>
            <Accordion.Item eventKey="2">
    
              <Accordion.Header>
                <div className='row'>
                  <div className='col-md-12 '>
                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>I already have an advertiser's account on Adsterra Ad Network. Do I need to create a new one to access the CPA Network?</h5>
                  </div>
                </div>
              </Accordion.Header>
    
              <Accordion.Body>
    
                <div className="container ">
                  <div className="row ">
                    <div className="col-md-12 ">
                      <p className='p-0 m-0'>You can register on the platform by choosing SIGN UP and filling out a simple form. After filling out the form, you will only have to confirm your email.You can register on the platform by choosing SIGN UP and filling out a simple form. After filling out the form, you will only have to confirm your email</p>
                    </div>
    
                  </div>
    
                </div>
              </Accordion.Body>
    
            </Accordion.Item>
    
          </Accordion>
    
          <Accordion className='mb-2'>
            <Accordion.Item eventKey="1">
    
              <Accordion.Header>
                <div className='row'>
                  <div className='col-md-12'>
                    {/* <h5 className=' p-0 m-0' style={{color:"rgb(115,3,91)"}}>How do I access the platform?<h5/> */}
                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>How do I access the platform?</h5>
                  </div>
                </div>
              </Accordion.Header>
    
              <Accordion.Body>
    
                <div className="container ">
                  <div className="row ">
                    <div className="col-md-12 ">
                      <p className='p-0 m-0'>You can register on the platform by choosing SIGN UP and filling out a simple form. After filling out the form, you will only have to confirm your email.You can register on the platform by choosing SIGN UP and filling out a simple form. After filling out the form, you will only have to confirm your email</p>
                    </div>
    
                  </div>
    
                </div>
              </Accordion.Body>
    
            </Accordion.Item>
    
          </Accordion>
    
          <Accordion className='mb-2'>
            <Accordion.Item eventKey="2">
    
              <Accordion.Header>
                <div className='row'>
                  <div className='col-md-12 '>
                    <h5 className=' p-0 m-0' style={{ color: "rgb(115,3,91)" }}>I already have an advertiser's account on Adsterra Ad Network. Do I need to create a new one to access the CPA Network?</h5>
                  </div>
                </div>
              </Accordion.Header>
    
              <Accordion.Body>
    
                <div className="container ">
                  <div className="row ">
                    <div className="col-md-12 ">
                      <p className='p-0 m-0'>You can register on the platform by choosing SIGN UP and filling out a simple form. After filling out the form, you will only have to confirm your email.You can register on the platform by choosing SIGN UP and filling out a simple form. After filling out the form, you will only have to confirm your email</p>
                    </div>
    
                  </div>
    
                </div>
              </Accordion.Body>
    
            </Accordion.Item>
    
          </Accordion>
    
        </div>
      )
}

export default GrowXAdsFaq