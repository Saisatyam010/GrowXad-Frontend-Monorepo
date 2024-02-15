import React,{useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "react-select";  
import Table from "./Table";
import styles from './TrafficInventory.module.css';

const options = [
    { value: 'windows', label: 'Windows' },
    { value: 'mac', label: 'Mac' },
    { value: 'linux', label: 'Linux' }
  ];
  const desktopOs = [
    {
      value: "Windows",
      label: "Windows",
    },
    {
      value: "MacOS",
      label:"MacOS"
    },
    {
      value: "Linux",
      label: "Linux",
    }
  ];
  const mobileOs = [
    {
      value: "Andriod",
      label: "Andriod",
    },
    {
      value: "Blackberry",
      label: "Blackberry",
    },
    {
      value: "IOS",
      label: "IOS",
    },
    {
      value: "IPadOs",
      label: "IPadOs",
    },
    {
      value: "Symbian",
      label: "Symbian",
    },
    {
      value: "Window Phone",
      label: "Window Phone",
    },
  ];
  const otherOs = [
    {
      value: "ChromeOS",
      label: "ChromeOS",
    },
    {
      value: "ChromeCast",
      label: "ChromeCast",
    },
    {
      value: "Nintendo",
      label: "Nintendo",
    },
    {
      value: "WebOS",
      label: "WebOs",
    },
    {
      value: "XboxOS",
      label: "XboxOS",
    },
    {
      value: "Window Phone",
      label: "Window Phone",
    },
  ];
  const countires = [
    { value: 'AU', label: 'Autralia' },
    { value: 'CA', label: 'Canada' },
    { value: 'GE', label: 'Germany' },
    { value: 'IN', label: 'India' },
    { value: 'DK', label: 'Denmark' },
    { value: 'FR', label: 'France' },
    { value: 'US', label: 'United States' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'JP', label: 'Japan' },
    { value: 'NO', label: 'Norway'},
    { value: 'NL', label: 'Netherlands' },
    { value: 'SE', label: 'Sweden' },
  ];
  const sortedCountries = countires.sort((a, b) => (a.label > b.label) ? 1 : -1);


  const customTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: "#73035b", // sets the border color when focused
      primary25: "#fbe5f6", // sets the background color when focused
      primary50: "#fbe5f6", // sets the border color when not focused
    },
  });

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? 'purple' : provided.borderColor,
    }),
  };
function TrafficInventoryComp() {

    const [selectedOS, setSelectedOS] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [showIn, setShowIn] = useState(null);
  const [platform, setPlatform] = useState(null);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  const handleShowInClick = (buttonName) => {
    setShowIn(buttonName === showIn ? null : buttonName);
  };

  const handlePlatformClick = (buttonName) => {
    setPlatform(buttonName === platform ? null : buttonName);
  };


    const handleSelectChange = (selectedOption) => {
      setSelectedOS(selectedOption);
      
    };

    const handleSelectChange2 = (selectedOption) => {
      setSelectedCountries(selectedOption);
    }
    const [data] = useState([
      { id: 1, name: 'John', age: 30, email: 'john@example.com', country: 'USA' },
      { id: 2, name: 'Jane', age: 25, email: 'jane@example.com', country: 'Canada' },
      { id: 3, name: 'Doe', age: 40, email: 'doe@example.com', country: 'UK' },
      { id: 4, name: 'Smith', age: 35, email: 'smith@example.com', country: 'Australia' },
    ]);
  return (
    <div>
      <Row>
        <Col md={9}>
            <div>

           
          <div className="text-2xl pb-1">Traffic Inventory</div>
          <p className="text-gray-100">
            This tool calculates the daily traffic amount available according to
            the campaign settings, and selected targeting options. The data is
            based on yesterday's traffic performance.
          </p>
          <div className="pt-3">
      <h6>Ad Format</h6>
      <button
        className={`adButton ${activeButton === 'bannerAd' ? 'active' : ''}`}
        onClick={() => handleClick('bannerAd')}
      >
        Banner Ad
      </button>
      <button
        className={`adButton ${activeButton === 'inPagePushAd' ? 'active' : ''}`}
        onClick={() => handleClick('inPagePushAd')}
      >
        In Page Push Ad
      </button>
      <button
        className={`adButton ${activeButton === 'nativeAd' ? 'active' : ''}`}
        onClick={() => handleClick('nativeAd')}
      >
        Native Ad
      </button>
      <button
        className={`adButton ${activeButton === 'popunderAd' ? 'active' : ''}`}
        onClick={() => handleClick('popunderAd')}
      >
        Popunder Ad
      </button>
      <button
        className={`adButton ${activeButton === 'interstitialAd' ? 'active' : ''}`}
        onClick={() => handleClick('interstitialAd')}
      >
        Interstitial Ad
      </button>
      <button
        className={`adButton ${activeButton === 'directLinkAd' ? 'active' : ''}`}
        onClick={() => handleClick('directLinkAd')}
      >
        Direct Link Ad
      </button>
      <style jsx>{`
        .adButton {
          background-color: #d8b1d0;
          padding: 0.5rem 1rem;
          text-align: center;
          
          border: none;
          cursor: pointer;
        }
        .adButton:hover {
          background-color: #71065d;
          color: white;
        }
        .active {
          background-color: #71065d;
          color: white;
        }
      `}</style>
    </div>

    <div className="pt-4">
              <h6>Platform</h6>
              {/* Platform buttons */}
              <button className={`platformButton ${platform === 'all' ? 'active' : ''}`} onClick={() => handlePlatformClick('all')}>All</button>
              <button className={`platformButton ${platform === 'desktop' ? 'active' : ''}`} onClick={() => handlePlatformClick('desktop')}>Desktop</button>
              <button className={`platformButton ${platform === 'mobile' ? 'active' : ''}`} onClick={() => handlePlatformClick('mobile')}>Mobile</button>
              &nbsp; &nbsp;
              <button className={`platformButton ${platform === 'reset' ? 'active' : ''} `} onClick={() => handlePlatformClick('rest')}>Rest</button>
              <style jsx>{`
        .platformButton {
          background-color: #d8b1d0;
          padding: 0.5rem 1rem;
          text-align: center;
          
          border: none;
          cursor: pointer;
        }
        .platformButton:hover {
          background-color: #71065d;
          color: white;
        }
        .active {
          background-color: #71065d;
          color: white;
        }
      `}</style>
            </div>


   <div className="pt-4">
  
    <Row>
        <Col md={3}>
        <h6>OS's</h6>
        {platform === 'mobile' && (
  <Select
    className={`${styles.SSA_TrafficInventry_Select} ${styles.SSAR_Targeting_Toggle_color}`}
    value={selectedOS}
    onChange={handleSelectChange}
    options={mobileOs}
    theme={customTheme}
    styles={customStyles}
  />
)}

{platform === 'desktop' && (
  <Select
    className={`${styles.SSA_TrafficInventry_Select} ${styles.SSAR_Targeting_Toggle_color}`}
    value={selectedOS}
    onChange={handleSelectChange}
    options={desktopOs}
    theme={customTheme}
    styles={customStyles}
  />
)}
{platform === 'all' && (
  <Select
    className={`${styles.SSA_TrafficInventry_Select} ${styles.SSAR_Targeting_Toggle_color}`}
    value={selectedOS}
    onChange={handleSelectChange}
    options={otherOs}
    theme={customTheme}
    styles={customStyles}
  />
)}
        </Col>
        <Col md={3}>
        <h6>Countries</h6>
        <Select
        value={selectedCountries}
        isMulti={true}
        onChange={handleSelectChange2}
        options={sortedCountries}
        theme={customTheme}
        styles={customStyles}
      />
        </Col>
    </Row>
  
   

    </div>

    <div className="pt-4">
              <h6>Show in</h6>
              {/* Show in buttons */}
              <button className={`showInButton ${showIn === 'impressions' ? 'active' : ''}`} onClick={() => handleShowInClick('impressions')}>Impressions</button>
              <button className={`showInButton ${showIn === 'click' ? 'active' : ''}`} onClick={() => handleShowInClick('click')}>Click</button>
              <style jsx>{`
        .showInButton {
          background-color: #d8b1d0;
          padding: 0.5rem 1rem;
          text-align: center;
          
          border: none;
          cursor: pointer;
        }
        .showInButton:hover {
          background-color: #71065d;
          color: white;
        }
        .active {
          background-color: #71065d;
          color: white;
        }
      `}</style>
          
            </div>

<Table/>
      
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TrafficInventoryComp;
