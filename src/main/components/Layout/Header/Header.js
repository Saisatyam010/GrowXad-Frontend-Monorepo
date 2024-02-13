import React, { useEffect, useRef, useState } from "react";
import SignUpButton from "./SignUpButton";
import './Header.css';
import { Link } from "react-router-dom";
const Header = () => {
  const headerRef = useRef(null)
  const [hH, setHH] = React.useState(0);
  useEffect(() => {
    window.onload = () => setHH(headerRef.current?.clientHeight);
    window.onresize = () => {
      setHH(headerRef.current?.scrollHeight);
    };
  }, []);
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
    if (showSubMenu1 == true) {
      setShowSubMenu1(false);
    }

    setShowSubMenu2(false);
    setShowSubMenu3(false);
    setShowSubMenu4(false);
    setShowSubMenu5(false);
  };

  const toggleSubMenu2 = () => {
    setShowSubMenu2(!showSubMenu2);
    setShowSubMenu1(false);
    setShowSubMenu3(false);
    setShowSubMenu4(false);
    setShowSubMenu5(false);
  };

  const toggleSubMenu3 = () => {
    setShowSubMenu3(!showSubMenu3);
    setShowSubMenu1(false);
    setShowSubMenu2(false);
    setShowSubMenu4(false);
    setShowSubMenu5(false);
  };
  const toggleSubMenu4 = () => {
    setShowSubMenu4(!showSubMenu4);
    setShowSubMenu1(false);
    setShowSubMenu2(false);
    setShowSubMenu3(false);
    setShowSubMenu5(false);
  };

  const toggleSubMenu5 = () => {
    setShowSubMenu5(!showSubMenu5);
    setShowSubMenu1(false);
    setShowSubMenu2(false);
    setShowSubMenu3(false);
    setShowSubMenu4(false);
  };

  const toggleSubMenu6 = () => {
    setShowSubMenu6(!showSubMenu6);
    setShowSubMenu1(false);
    setShowSubMenu2(false);
    setShowSubMenu3(false);
    setShowSubMenu4(false);
    setShowSubMenu5(false);
  };
  return (
    <div ref={headerRef} className="bg-black" style={{ borderBottom: "1px solid black" }}>
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
              <Link className="text-white" style={{textDecoration:"none",fontSize:"15px"}}>Advertisers</Link>
                <i className={`bx bxs-chevron-down htmlcss-arrow arrow ${showSubMenu1 ? 'arrow-rotate' : ''}`} onClick={toggleSubMenu1}></i>
                <ul className={`htmlCss-sub-menu leftBorderHover sub-menu ${showSubMenu1 ? 'show-sub-menu1' : ''}`}>
                  <li><Link to="/bannerad" className="hoverDropdown" style={{ textDecoration: "none" }}>BenefitsForAdvertisers</Link></li>
                  <li><Link to="/pricingbanner" className="hoverDropdown" style={{ textDecoration: 'none' }}>Pricing Models</Link></li>
                  <li><Link to="/selfserve" className="hoverDropdown" style={{ textDecoration: 'none' }}>Self-Server Platform</Link></li>
                  <li><Link to="/rtbtraffic" className="hoverDropdown" style={{ textDecoration: "none" }}>RTB traffic for advertisers</Link></li>
                  <li><Link to="/smartcpm" className="hoverDropdown" style={{ textDecoration: "none" }}>Smart CPM</Link></li>
                  <li><Link to="/cpagoals" className="hoverDropdown" style={{ textDecoration: "none" }}>CPA Goal</Link></li>
                </ul>
              </li>

              <li>
              <Link className="text-white" style={{textDecoration:"none",fontSize:"15px"}}>Publishers</Link>
                <i className={`bx bxs-chevron-down htmlcss-arrow arrow ${showSubMenu2 ? 'arrow-rotate' : ''}`} onClick={toggleSubMenu2}></i>
                <ul className={`htmlCss-sub-menu leftBorderHover sub-menu ${showSubMenu2 ? 'show-sub-menu2' : ''}`}>
                  <li><Link to="/benefitsforpublishers" className="hoverDropdown" style={{ textDecoration: "none" }}>BenefitsForPublishers</Link></li>
                  <li><Link to="/advrefferals" className="hoverDropdown" style={{ textDecoration: "none" }}>Referral Program</Link></li>
                  <li><Link to="/growxadapi" className="hoverDropdown" style={{ textDecoration: "none" }}>GrowXad API</Link></li>
                </ul>
              </li>

              <li><Link to="/cpanetwork" className="hoverDropdown" style={{ textDecoration: "none" }}>CPA Network</Link></li>
              <li>
              <Link className="text-white" style={{textDecoration:"none",fontSize:"15px"}}>Ads Format</Link>
                <i className={`bx bxs-chevron-down htmlcss-arrow arrow ${showSubMenu3 ? 'arrow-rotate' : ''}`} onClick={toggleSubMenu3}></i>
                <ul className={`htmlCss-sub-menu leftBorderHover sub-menu ${showSubMenu3 ? 'show-sub-menu3' : ''}`}>
                  <li><Link to="/popunderad" className="hoverDropdown" style={{ textDecoration: "none" }}>Popunder Ads</Link></li>
                  <li ><Link to="/bannerad" className="hoverDropdown" style={{ textDecoration: "none" }}>Banner Ads</Link></li>
                  <li><Link to="/directlinkad" className="hoverDropdown" style={{ textDecoration: "none" }}>Direct Link</Link></li>
                  <li><Link to="/inpagepushad" className="hoverDropdown" style={{ textDecoration: "none" }}>In- Page Push Ads</Link></li>
                  <li><Link to="/nativead" className="hoverDropdown" style={{ textDecoration: "none" }}>Native Ads</Link></li>
                  <li> <Link to="/interstitialad" className="hoverDropdown" style={{ textDecoration: "none" }}>Interstial Ads</Link></li>
                </ul>
              </li>

              <li>
              <Link className="text-white" style={{textDecoration:"none",fontSize:"15px"}}>Free Resources</Link>
                <i className={`bx bxs-chevron-down htmlcss-arrow arrow ${showSubMenu4 ? 'arrow-rotate' : ''}`} onClick={toggleSubMenu4}></i>
                <ul className={`htmlCss-sub-menu leftBorderHover sub-menu ${showSubMenu4 ? 'show-sub-menu4' : ''}`}>
                  <li><Link to="/freeresourcesblogpage" className="hoverDropdown" style={{ textDecoration: "none" }}>Blog</Link></li>
                  <li><Link to="/freeresourcestrafficmonitization" className="hoverDropdown" style={{ textDecoration: "none" }}>How To Profit From Traffic</Link></li>
                  <li><Link to="/freeresourceshowtoadvertise" className="hoverDropdown" style={{ textDecoration: "none" }}>How To Advertise Offers</Link></li>
                  <li><Link to="/freeresourcescasestudies" className="hoverDropdown" style={{textDecoration:"none"}}>Case Studies</Link></li>
                  <li><Link to="/newsletter" className="hoverDropdown" style={{textDecoration:"none"}}>GrowXad Newsletter</Link></li>
                  <li><Link to="/glossary" className="hoverDropdown" style={{textDecoration:"none"}}>Glossary</Link></li>
                </ul>
              </li>
              <li>

              <Link className="text-white" style={{textDecoration:"none",fontSize:"15px"}}>FAQ</Link>
                <i className={`bx bxs-chevron-down htmlcss-arrow arrow ${showSubMenu5 ? 'arrow-rotate' : ''}`} onClick={toggleSubMenu5}></i>
                <ul className={`htmlCss-sub-menu leftBorderHover sub-menu ${showSubMenu5 ? 'show-sub-menu5' : ''}`}>
                  <li><Link to="/faqforadvertiser" className="hoverDropdown" style={{textDecoration:"none"}}>FAQ for Advertisers</Link></li>
                  <li><Link to="/faqforpublisher" className="hoverDropdown" style={{textDecoration:"none"}}>FAQ for Publishers</Link></li>
                  <li><Link to="/affiliates" className="hoverDropdown" style={{textDecoration:"none"}}>FAQ for Affiliaties</Link></li>
                  <li><Link to="/campaignsettings" className="hoverDropdown" style={{textDecoration:"none"}}>Campaign Settings</Link></li>
                  <li><Link to="/howtostart" className="hoverDropdown" style={{textDecoration:"none"}}>How To Start</Link></li>
                  <li><Link to="/statsandtracking" className="hoverDropdown" style={{textDecoration:"none"}}>Stats And Tracking </Link></li>
                  <li><Link to="/statisticsandpayouts" className="hoverDropdown" style={{textDecoration:"none"}}>Stats And Payouts </Link></li>
                  <li><Link to="/adunits" className="hoverDropdown" style={{textDecoration:"none"}}>Get AdsCodes </Link></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='mr-0 d-flex nav-links'>
            <div>
             <SignUpButton/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header