import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { GrCircleQuestion } from "react-icons/gr";
import "./Capping_limit.css";
import { FormControlLabel, withStyles } from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// const sampleData = [
//     {
//         day: "2023-01-01",
//         activity: 5
//     },
//     {
//         day: "2023-01-02",
//         activity: 1
//     }
// ]

// const colorCustomization = {
//     activity0: '#dadada',
//     activity1: '#0e4429',
//     activity2: '#006d32',
//     activity3: '#26a641',
//     activity4: '#39d353',
// }

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const CPArule = ["Allow", "Blocked"];

export default function CappingLimit() {

    const [cpaconnection, setCpaconnection] = React.useState([CPArule[0]]);

    const handleRule = (event) => {
        const {
            target: { value },
        } = event;
        setCpaconnection(typeof value === "string" ? value.split(",") : value);
    };


    const CheckboxColor = withStyles({
        root: {
            color: 'gray', // Green color
            '&$checked': {
                color: '#71065d', // Green color when checked
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);

    const linkRef = React.useRef(null);

    const handleCopyLink = () => {
        if (linkRef.current) {
            linkRef.current.select();
            document.execCommand('copy');
            // Optionally, you can provide feedback to the user that the link has been copied.
            alert('Link copied to clipboard!');
        }
    };

    return (
        <>
            <div className="container-fluid ">
                <div className="row ">
                    <div className="col-11 ">
                        <form className="bg-white w-100 p-3">

                            <section className="flex flex-col ">

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="pb-3">


                                            <h5 className="fw-bold pb-3">Frequency/Cappings</h5>

                                            <p className="pb-2">
                                                <span>
                                                    'User-based frequency' determines how often the ad will be displayed on a publisher's website per individual user at a given period of time and based on a cookie matching.
                                                </span>

                                                <span className="text-info">
                                                    More information
                                                </span>
                                            </p>

                                            <p>Example: If your Frequency Capping (Device) is set to 3:24, then the ad will be displayed 3 times a day per every individual user.</p>
                                        </div>

                                    </div>
                                </div>


                                <div className="row">

                                    <div className="col">
                                        <div className="pb-3">
                                            <label className="fw-bolder">Frequency (Impression)*</label>

                                            <TextField
                                                placeholder="54541"
                                                type="number"
                                                sx={{
                                                    width: '100%',
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'rgb(115 3 91)', // Set your desired focus color here
                                                        },
                                                    },
                                                }}
                                                style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="pb-3">
                                            <label className="fw-bolder">Capping (Impression)*</label>

                                            <TextField
                                                placeholder="24 h"
                                                type="number"

                                                sx={{
                                                    width: '100%',
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'rgb(115 3 91)', // Set your desired focus color here
                                                        },
                                                    },
                                                }}
                                                style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col d-flex align-items-center pt-3">

                                        <FormControlLabel
                                            required
                                            control={<CheckboxColor />}
                                            label={
                                                <>
                                                    <span style={{ display: "inline-flex", alignItems: "center" }}>
                                                        <span>No Cappings</span>
                                                        <span style={{ marginLeft: "5px" }}><GrCircleQuestion /></span>
                                                    </span>
                                                </>
                                            }
                                        />

                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col">
                                        <div className="pb-3">
                                            <label className="fw-bolder">Frequency (Click)*</label>

                                            <TextField
                                                placeholder="5454"
                                                type="number"
                                                sx={{
                                                    width: '100%',
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'rgb(115 3 91)', // Set your desired focus color here
                                                        },
                                                    },
                                                }}
                                                style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="pb-3">
                                            <label className="fw-bolder">Capping (Click)*</label>

                                            <TextField
                                                placeholder="24 h"
                                                type="number"
                                                sx={{
                                                    width: '100%',
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'rgb(115 3 91)', // Set your desired focus color here
                                                        },
                                                    },
                                                }}
                                                style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col d-flex align-items-center pt-3">

                                        <FormControlLabel
                                            required
                                            control={<CheckboxColor />}
                                            label={
                                                <>
                                                    <span style={{ display: "inline-flex", alignItems: "center" }}>
                                                        <span>No Cappings</span>
                                                        <span style={{ marginLeft: "5px" }}><GrCircleQuestion /></span>
                                                    </span>
                                                </>
                                            }
                                        />

                                    </div>

                                </div>
                            </section>

                            <hr className="h-[1px] bg-gray-700 my-4 " />

                            {/* Advertising Budgets (USD) */}

                            {/* <section className="flex flex-col ">

                                <h5 className="fw-bold pb-3">Advertising Budgets (USD)</h5>

                                <div className="row">

                                    <div className="col">
                                        <div className="pb-3">
                                            <label className="fw-bolder">Daily Campaign Budget</label>

                                            <TextField
                                                placeholder="$ 2244"
                                                type="number"

                                                sx={{
                                                    width: '100%',
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'rgb(115 3 91)', // Set your desired focus color here
                                                        },
                                                    },
                                                    '& .MuiOutlinedInput-input::placeholder': {
                                                        color: 'black', // Set the placeholder color to black
                                                    },
                                                }}
                                                style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="pb-3">
                                            <label className="fw-bolder">Total Campaign Budget</label>

                                            <TextField
                                                placeholder="$ 2244"
                                                type="number"

                                                sx={{
                                                    width: '100%',
                                                    '& .MuiOutlinedInput-root': {
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'rgb(115 3 91)',
                                                        },
                                                    },
                                                }}
                                                style={{
                                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                                                }}
                                            />

                                        </div>
                                    </div>

                                    <div className="col">
                                    </div>

                                </div>
                            </section> */}

                            {/* Campaign Filters */}

                            <section className="flex flex-col ">

                                <h5 className="fw-bold pb-3">Campaign Filters</h5>

                                <div className="row">

                                    <div className="col">
                                        <div className="pb-3">
                                            <label className="fw-bolder">Proxy Filter</label>

                                            <FormControl sx={{ width: "100%" }}>
                                                <Select
                                                    labelId="demo-multiple-checkbox-label"
                                                    id="demo-multiple-checkbox"
                                                    // multiple
                                                    value={cpaconnection}
                                                    onChange={handleRule}
                                                    input={<OutlinedInput />}
                                                    renderValue={(selected) => selected.join(", ")}
                                                    MenuProps={MenuProps}
                                                    style={{
                                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',

                                                    }}
                                                >
                                                    {CPArule.map((name) => (
                                                        <MenuItem key={name} value={name}>
                                                            <Checkbox checked={cpaconnection.indexOf(name) > -1} />
                                                            <ListItemText primary={name} />
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>

                                    <div className="col"></div>
                                    <div className="col"></div>

                                </div>
                            </section>

                            <hr className="h-[1px] bg-gray-700 my-4 " />

                            {/* Campaign Scheldule */}

                            <section className="flex flex-col ">

                                <h5 className="fw-bold pb-3">Campaign Scheldule</h5>

                                <div className="row">

                                    <div className="col">
                                        <div className="pb-3">

                                            <span className="fw-bolder">Day/hour</span>

                                            <span class="form-check form-switch">

                                                <input
                                                    class="form-check-input SSAR_Targeting_Toggle_color"
                                                    type="checkbox"
                                                    id="flexSwitchCheckChecked"
                                                    defaultChecked
                                                />
                                            </span>

                                        </div>
                                    </div>

                                </div>
                            </section>

                            <hr className="h-[1px] bg-gray-700 my-4 " />

                            {/* Tracking */}

                            <section className="flex flex-col ">

                                <h5 className="fw-bold pb-3">Tracking</h5>

                                <div className="row">

                                    <div className="col">
                                        <div className="pb-2">
                                            <label className="fw-bolder">Postback Url</label>
                                            <span>
                                                Are you using a tracker? Set Tracking solution for the tracking solution for the entire account in
                                            </span>
                                            <span>My Account</span>
                                        </div>
                                        <div className="pb-3">
                                            <span>
                                                Paste the postback URL in your tracking solution to track your campaign's performance. Remember to add tracking tokens: cid and payout. The "payout" parameter is not obligatory if you select manual conversion payout.
                                            </span>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center w-100">
                                        <TextField
                                            inputRef={linkRef}
                                            placeholder="$ 2244"
                                            defaultValue="http://localhost:3000/advertiserdashboard/campaign/createcampaign"
                                            sx={{
                                                width: '100%',
                                                '& .MuiOutlinedInput-root': {
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: 'rgb(115 3 91)', // Set your desired focus color here
                                                    },
                                                },
                                                '& .MuiOutlinedInput-input::placeholder': {
                                                    color: 'black', // Set the placeholder color to black
                                                },
                                            }}
                                            style={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                                                // Adding padding for the copy icon
                                            }}
                                            InputProps={{
                                                endAdornment: (
                                                    <ContentCopyIcon onClick={handleCopyLink} style={{ cursor: 'pointer' }} />
                                                ),
                                            }}
                                        />
                                    </div>

                                </div>
                            </section>

                            <hr className="h-[1px] bg-gray-700 my-4 " />

                            {/* Buying Type */}

                            <section className="flex flex-col ">

                                <h5 className="fw-bold pb-3">Buying Type</h5>

                                <div className="row">

                                    <div className="col">
                                        <div className="pb-3">
                                            <FormControl>

                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                >
                                                    <FormControlLabel
                                                        value="smoothly"
                                                        control={<Radio />}
                                                        label="Smoothly"
                                                    />
                                                    <FormControlLabel
                                                        value="custom"
                                                        control={<Radio />}
                                                        label="Custom"
                                                    />

                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                    </div>

                                </div>
                            </section>

                        </form>
                    </div>
                </div>
            </div>












        </>
    );
}
