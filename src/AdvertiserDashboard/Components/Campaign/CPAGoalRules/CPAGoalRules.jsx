import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import "./CPAGoalRules.css"

const CPAGoalRules = () => {
  const [inputData1, setInputData1] = useState('');
  const [inputData2, setInputData2] = useState('');
  const [inputData3, setInputData3] = useState('');
  const [optionValue, setOptionValue] = useState('');
  const [option2Value, setOption2Value] = useState('');
  const [savedData, setSavedData] = useState([]);

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case 'inputData1':
        setInputData1(e.target.value);
        break;
      case 'inputData2':
        setInputData2(e.target.value);
        break;
      case 'inputData3':
        setInputData3(e.target.value);
        break;
      case 'optionValue':
        setOptionValue(e.target.value);
        break;
      case 'option2Value':
        setOption2Value(e.target.value);
        break;
      default:
        break;
    }
  };

  const saveData = () => {
    // Check if all required fields are filled before saving
    if (inputData1.trim() === '' || inputData2.trim() === '' || inputData3.trim() === '' || option2Value.trim() === '' || optionValue.trim() === '') {
      alert('Please fill in all required fields.');
      return;
    }

    // Update the state with the saved data
    setSavedData((prevSavedData) => [
      ...prevSavedData,
      { inputData1, inputData2, inputData3, optionValue, option2Value }
    ]);

    // Reset the input fields
    setInputData1('');
    setInputData2('');
    setInputData3('');
    setOptionValue('');
    setOption2Value('');
  };
  const parameter = [
    {
      value: 'eCPA',
      label: 'eCPA',
    },
    {
      value: 'conversions',
      label: 'conversions',
    },
  ];
  const condition = [
    {
      value: '>',
      label: '>',
    },
    {
      value: ' ≥',
      label: ' ≥',
    },
  ];

  //  for edit button ------>>

  
  const handleEdit = (index) => {
    // Handle the edit action based on the index or data
    console.log(`Edit button clicked for item at index ${index}`);
  };

  return (
    <>
    <div><img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/5cb06b50-b524-4921-f3c2-386a12cff900/public' /></div>
    <div className='container-fluid p-1 bg-[#f0f0f0]'>
      <div className='container bg-white  rk_cpagoal_txt-cont-main' >
        <div className='py-1'>
          
        <h2>CPA Goal(<em>Cost Per Acquisition</em>)</h2>
        <p>The CPA Goal feature empowers advertisers or campaign managers to establish rules <br/> governing the automatic unlinking of placements based on their conversion or effective <br/> Cost Per Acquisition (eCPA) performance. <br/>
        <b>- eeCPA Performance:</b> eCPA, or effective Cost Per Acquisition, is a metric used in digital <br/> &nbsp; &nbsp;advertising to assess the cost efficiency of acquiring a customer. <br/>
        <b>- or the rule conditions are met:</b> Customize rule conditions based on specific campaign <br/> &nbsp; objectives, such as target conversion rates or desired eCPA values.
        </p>
        </div>
      </div>

    
    <div className='container bg-white p-4 '>
      <div><h2>CPA Goal</h2></div>
      <Box
      className='d-flex align-items-center'
      component="form"
      sx={{
        '& > :not(style)': { m:1, width: '20ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="inputData1" label="Rule name" name="inputData1" onChange={handleInputChange} value={inputData1} variant="outlined" />
      <TextField id="inputData2" label="Spent" name="inputData2" onChange={handleInputChange} value={inputData2} variant="outlined" />
      <TextField
          id="optionValue"
          name="optionValue"
          value={optionValue}
          onChange={handleInputChange}
          select
          label="Optimization parameter"
          defaultValue="eCPA"
          InputLabelProps={{
            style: { fontSize: '0.8rem' } // Adjust the font size as needed
          }}
          
          
        >
          {parameter.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      <TextField
          id="option2Value"
          name="option2Value"
          value={option2Value}
          onChange={handleInputChange}
          select
          label="condition"
          defaultValue=">"
          style={{ width: '15ch' }}
        >
          {condition.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField id="inputData3" label="Value" name="inputData3" onChange={handleInputChange} value={inputData3} variant="outlined" />
        <button className='bg-neutral-400 py-2 rounded-sm' type="button" onClick={saveData}>
        ADD RULE
      </button>
    </Box>
    </div>

      {savedData.length > 0 && (
        <div className='container bg-white mt-4 p-4'>
          <div className='container'><h2>Current Rules</h2></div>
          <div className='container'><div className='w-100 row rk_cpagoal_rule-main '>
            <div className='col-md-3 '>Rule Name</div>
            <div className='col-md-2 '>Spent</div>
            <div className='col-md-2 '>Optimization Parameter</div>
            <div className='col-md-3 '><div className='row'><div className='col-md-6 '></div><div className='col-md-6'>Value</div></div></div>
            <div className='col-md-2 '>edit</div>
          </div></div>
          <div className='container ' style={{ display: '' }}>
            {savedData.map((data, index) => (
              <div key={index} style={{display: "flex" }}>
                <div className=' w-100  row rk_cpagoal_rule-main'>
                  <div className='col-md-3'>{data.inputData1}</div>
                  <div className='col-md-2'>{data.inputData2}</div>
                  <div className='col-md-2'>{data.optionValue}</div>
                  <div className='col-md-3 rk_cpagoal_opt2'><div className='row'><div className='col-md-6 d-flex justify-content-center'>{data.option2Value}</div><div className='col-md-6'>{data.inputData3}</div></div></div>
                  <div className='col-md-2'> {/* Edit button */}
              <button onClick={() => handleEdit(index)}>Edit</button></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    
    </div>
    </>
  );
};

export default CPAGoalRules;
