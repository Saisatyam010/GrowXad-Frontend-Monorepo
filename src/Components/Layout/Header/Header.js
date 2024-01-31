import React, { useEffect, useRef, useState } from "react";


import { Container, Navbar, Nav, NavDropdown, Button, Modal, Row, Col } from "react-bootstrap";
import './Header.css';
import { Link } from "react-router-dom";
// import './Login.css';
const Header = () => {
  const headerRef=useRef(null)
  const [hH, setHH] = React.useState(0);
  useEffect(() => {
    
    window.onload=()=>setHH(headerRef.current?.clientHeight);
    console.log(headerRef.current.scrollHeightY+"headerHEight");
    window.onresize = () => {
      setHH(headerRef.current?.scrollHeight);
    };
  },[]);
  const [showInput, setShowInput] = useState(false);
  const [showModal, setShowModal] = useState(false);        
  
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [navLinksLeft, setNavLinksLeft] = useState('-100%');
  const [showSubMenu1, setShowSubMenu1] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [showSubMenu3, setShowSubMenu3] = useState(false);
  const [showSubMenu4, setShowSubMenu4] = useState(false);
  const [showSubMenu5, setShowSubMenu5] = useState(false);
  const [showSubMenu6, setShowSubMenu6] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const toggleNavLinks = () => {
    setNavLinksLeft(navLinksLeft === '0' ? '-100%' : '0');
  };

  const toggleSubMenu1 = () => {
    if(showSubMenu1==true){
      setShowSubMenu1(false);
    }
 
    setShowSubMenu2(false); // Close other submenus if needed
    setShowSubMenu3(false);
    setShowSubMenu4(false);
    setShowSubMenu5(false);
  };

  const toggleSubMenu2 = () => {
    setShowSubMenu2(!showSubMenu2);
    setShowSubMenu1(false); // Close other submenus if needed
    setShowSubMenu3(false);
    setShowSubMenu4(false);
    setShowSubMenu5(false);
  };

  const toggleSubMenu3 = () => {
    setShowSubMenu3(!showSubMenu3);
    setShowSubMenu1(false); // Close other submenus if needed
    setShowSubMenu2(false);
    setShowSubMenu4(false);
    setShowSubMenu5(false);
  };
  const toggleSubMenu4 = () => {
    setShowSubMenu4(!showSubMenu4);
    setShowSubMenu1(false); // Close other submenus if needed
    setShowSubMenu2(false);
    setShowSubMenu3(false);
    setShowSubMenu5(false);
  };

  const toggleSubMenu5 = () => {
    setShowSubMenu5(!showSubMenu5);
    setShowSubMenu1(false); // Close other submenus if needed
    setShowSubMenu2(false);
    setShowSubMenu3(false);
    setShowSubMenu4(false);
  };

  const toggleSubMenu6 = () => {
    setShowSubMenu6(!showSubMenu6);
    setShowSubMenu1(false); // Close other submenus if needed
    setShowSubMenu2(false);
    setShowSubMenu3(false);
    setShowSubMenu4(false);
    setShowSubMenu5(false);
  };
  console.log(showSubMenu1 + "showSubMenu1")
  return (
    <div  ref={headerRef} className="bg-black"style={{borderBottom:"1px solid black"}}>
      <nav className='NavigationHome bg-black'>
        <div className="navbar ">
          <i className='bx bx-menu' onClick={toggleNavLinks}></i>
          <div className="logo"><Link to="/"><img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/ab447981-3b6d-4f3a-3739-e75b2032e900/public" alt="" width={120} /></Link></div>
          <div className={`nav-links`} style={{ left: navLinksLeft }}>
            <div className="sidebar-logo">
              <span className="logo-name">Logo</span>
              <i className='bx bx-x' onClick={toggleNavLinks}></i>
            </div>
            <ul className="links">
              <li>
                <a href="#" className="hovertext" onClick={toggleSubMenu1}>Advertisers</a>
                <i className={`bx bxs-chevron-down htmlcss-arrow arrow ${showSubMenu1 ? 'arrow-rotate' : ''}`} onClick={toggleSubMenu1}></i>
                <ul className={`htmlCss-sub-menu leftBorderHover sub-menu ${showSubMenu1 ? 'show-sub-menu1' : ''}`}>
                  <li className=""><a href="/benefitadv" className="hoverDropdown">Benefits for Advertisers</a></li>
                  <li ><a href="/pricingbanner" className="hoverDropdown">Pricing Models</a></li>
                  <li><a href="/selfserve" className="hoverDropdown">Self-Serve Platform</a></li>
                  <li><a href="/rtbtraffic" className="hoverDropdown">RTB traffic for advertisers</a></li>
                  <li ><a href="/smartcpm" className="hoverDropdown">Smart CPM</a></li>
                  <li ><a href="/cpagoals" className="hoverDropdown">CPA Goal</a></li>
                </ul>
              </li>

              <li>
                <a href="#" className="hovertext" onClick={toggleSubMenu2}>Publishers</a>
                <i className={`bx bxs-chevron-down htmlcss-arrow arrow ${showSubMenu2 ? 'arrow-rotate' : ''}`} onClick={toggleSubMenu2}></i>
                <ul className={`htmlCss-sub-menu leftBorderHover sub-menu ${showSubMenu2 ? 'show-sub-menu2' : ''}`}>
                  <li ><a href="/benefitsforpublishers" className="hoverDropdown">   Benefits for Publishers</a></li>
                  <li ><a href="/advrefferals" className="hoverDropdown">Referral Program</a></li>
                  <li><a href="/growxadapi" className="hoverDropdown">GrowXad API</a></li>
                </ul>
              </li>

              <li><a href="/cpanetwork" className="hovertext">CPA Network</a></li>

              <li>
                <a href="#" className="hovertext" onClick={toggleSubMenu3}>Ads Format</a>
                <i className={`bx bxs-chevron-down htmlcss-arrow arrow ${showSubMenu3 ? 'arrow-rotate' : ''}`} onClick={toggleSubMenu3}></i>
                <ul className={`htmlCss-sub-menu leftBorderHover sub-menu ${showSubMenu3 ? 'show-sub-menu3' : ''}`}>

                  <li ><a href="/popunderad" className="hoverDropdown" >Popunder Ads</a></li>
                  <li ><a href="/bannerad" className="hoverDropdown">Banner Ads</a></li>
                  <li ><a href="/directlinkad" className="hoverDropdown">Direct Link</a></li>

                  <li ><a href="/inpagepushad" className="hoverDropdown">In-Page Push Ads</a></li>
                  <li ><a href="/nativead" className="hoverDropdown">
                    Native Ads</a></li>
                    <li ><a href="/interstitialad" className="hoverDropdown">
                    Interstitial Ads</a></li>
                </ul>
              </li>

              <li>
                <a href="#" className="hovertext" onClick={toggleSubMenu4}>Free Resource</a>
                <i className={`bx bxs-chevron-down htmlcss-arrow arrow ${showSubMenu4 ? 'arrow-rotate' : ''}`} onClick={toggleSubMenu4}></i>
                <ul className={`htmlCss-sub-menu leftBorderHover sub-menu ${showSubMenu4 ? 'show-sub-menu4' : ''}`}>
                  
                  <li><a href="/freeresourcesblogpage" className="hoverDropdown">Blog</a></li>
                  <li><a href="/freeresourcestrafficmonitization" className="hoverDropdown">How to Profit From Traffic</a></li>
                  <li ><a href="/freeresourceshowtoadvertise" className="hoverDropdown">How to Advertise Offers</a></li>
                  <li><a href="/freeresourcescasestudies" className="hoverDropdown">Case Studies</a></li>
                  <li><a href="newsletter" className="hoverDropdown">GrowXad Newsletter</a></li>
                  <li><a href="glossary" className="hoverDropdown">Glossary</a></li>
                  <li><a href="/freeresourcesnewslater" className="hoverDropdown">GrowXad Newsletter</a></li>
                </ul>
              </li>
              <li>
                <a href="#" className="hovertext" onClick={toggleSubMenu5}>FAQ</a>
                <i className={`bx bxs-chevron-down htmlcss-arrow arrow ${showSubMenu5 ? 'arrow-rotate' : ''}`} onClick={toggleSubMenu5}></i>
                <ul className={`htmlCss-sub-menu leftBorderHover sub-menu ${showSubMenu5 ? 'show-sub-menu5' : ''}`}>
                  {/* <li><a href="faq" className="hoverDropdown">FAQ</a></li> */}
                  <li><a href="/faqforadvertiser" className="hoverDropdown">FAQ for Advertisers</a></li>
                  <li><a href="faqforpublisher" className="hoverDropdown">FAQ for Publishers</a></li>
                  <li><a href="affiliates" className="hoverDropdown">FAQ for Affiliates</a></li>
                  <li><a href="campaignsettings" className="hoverDropdown">Campaign Settings</a></li>
                  <li><a href="howtostart" className="hoverDropdown">How to Start</a></li>

                  <li><a href="/statsandtracking" className="hoverDropdown">Stats and Tracking</a></li>
                  <li><a href="statisticsandpayouts" className="hoverDropdown">Stats and Payouts</a></li>
                  <li><a href="adunits" className="hoverDropdown">How to Get Ad Codes</a></li>
                </ul>
              </li>
              {/* Similarly handle other list items */}
            </ul>
          </div>
          <div className='mr-0 d-flex nav-links'>
            {/* <div>
              <ul className="links">
                <li>
                  <Link to="/login" className="hovertext" >Login</Link>
                  <i className={`bx bxs-chevron-down htmlcss-arrow arrow ${showSubMenu5 ? 'arrow-rotate' : ''}`} onClick={toggleSubMenu5}></i>
                
                </li>
              </ul>
            </div> */}
            <div>
            <Button onClick={handleShow} className="btn SSA_Header_BTN  ssa_font-17px px-4 ms-1 py-2 webbackground_theme border-emerald-950 SSA_Header_BTN" style={{
              }}>
                Login/Signup
              </Button>

                 <Modal className='modal-lg SSA_Modal_dialog modal-dialog-centered' show={showModal} onHide={handleClose} centered style={{borderBottom:"1px solid red"}}>

<Modal.Header closeButton>
  <Modal.Title className="text-center fs-2">Authentication</Modal.Title>
</Modal.Header>
<div style={{border:"1px dashed black"}}></div>

<div className="p-4" style={{height:"365px"}}>
  <div className="container">

    {/* <div className='row'>
      <div className='col-md-12'>
        <h1 className='text-center text-black font
        '>Authentication</h1>
       
      </div>
    </div> */}
  

    <div className="row">

    <div className="col-md-4 text-center col-12">
        <div className='border-solid border-2 border-black  py-4 px-2' style={{borderRadius:"20px"}}>
        <div>
            <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/ab168248-e66b-449d-6d5d-06c26aa56d00/public"></img>

          </div>
         
          <p>Monetize your website or other traffic</p>
          <button className="dp_modal_getstarted_btn">
            <Link to="/adveriserauthLogin" className="hover:no-underline">
              Get Started
            </Link>
          </button>
        </div>
      </div>

      <div className="col-md-4 text-center col-12">
        <div className='border-solid border-2 border-black  py-4 px-2' style={{borderRadius:"20px"}}>
        <div>
            <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/544252aa-3ba1-44cd-2d49-129b26608500/public"></img>

          </div>
         
          <p>Monetize your website or other traffic</p>
          <button className="dp_modal_getstarted_btn">
            <Link to="/publisherauthLogin" className="hover:no-underline">
              Get Started
            </Link>
          </button>
        </div>
      </div>

      <div className="col-md-4 text-center col-12">
        <div className='border-solid border-2 border-black  py-4 px-2' style={{borderRadius:"20px"}}>
        <div>
            <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/6b2ef7d2-9910-42c6-5615-93a88ec04200/public"></img>

          </div>

         
          <p>Get access to
            profitable CPA offers</p>

          <button className="dp_modal_getstarted_btn">
            <Link to="/affiliateauthLogin" className="hover:no-underline">
              Get Started 
            </Link>
          </button>

        </div>
      </div>

    </div>
  </div>
</div>
</Modal>

            </div>
           
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Header