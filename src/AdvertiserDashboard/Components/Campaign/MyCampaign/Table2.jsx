import React, { useState, useMemo, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Mycampaign.css";
import DataTable from "react-data-table-component";
import { deleteCampaignAPI, getCampaignAPI, updateCampain } from "../../../../AllApi/AllAuthApi";
import { NavLink } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import { Main_URL } from "../../../../MainUrl/MainUrl";

const Table2 = () => {
  const initialRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = rowsPerPage;
  const [separateCampaign, setSeparateCampaign] = useState([{}]);
  const [existingData, setExistingData] = useState({});

  // update modal data start -------->>> //

  const [selectedRowData, setSelectedRowData] = useState(null);

  const [updateIdSet, setUpdateIdSet] = useState(null);
  const [updateDataCampain, setUpdateDataCampain] = useState({});

  // update button disable until erros are fixed // 

  const [inputValidity, setInputValidity] = useState({
    totalBudget: true,
    dailyBudget: true,
    // Add more fields as needed
  });



  // update button disable until erros are fixed // 

  const handleCampainChange = (e) => {
    const { name, value } = e.target;

    if (name === 'dailyBudget' && parseInt(value, 10) > parseInt(updateDataCampain.totalBudget, 10)) {
      // Set an appropriate message or handle it as needed
      setError('Daily budget cannot be higher than total budget');
      setInputValidity((prevValidity) => ({ ...prevValidity, [name]: false }));
      return;
    }

    // ... (your other validations)

    // Clear error if validation passes
    setError('');
    setInputValidity((prevValidity) => ({ ...prevValidity, [name]: true }));


    const updatedValue = name === 'landingUrl' && !value.startsWith('https://')
      ? `https://${value}`
      : value;

    setUpdateDataCampain((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));

  };
  const isUpdateButtonDisabled =
    !Object.values(inputValidity).every((isValid) => isValid) ||
    Object.keys(updateDataCampain).some(
      (key) =>
        (key === 'totalBudget' || key === 'dailyBudget') &&
        (isNaN(updateDataCampain[key]) || updateDataCampain[key] <= 0)
    ) ||
    parseInt(updateDataCampain.dailyBudget, 10) > parseInt(updateDataCampain.totalBudget, 10);

  const [tableData, setTableData] = useState([]);


  const handleIdUpdate = async () => {
    const res = await updateCampain(updateIdSet, updateDataCampain)

    if (res.status == "success") {
      // alert("updatedCamp")

      toast.success("Campaign Updated Successfully", {
        autoClose: 2000
      });
      setUpdateModalOpen(false);
      AllSeparateCampaign();
    }

    else {
      toast.error("some error occurs", {
        autoClose: 2000
      });
    }
  }

  const handleRowClick = (row) => {
    setUpdateIdSet(row._id);
    console.log(row, "row")
    // Set existing data for pre-filling the form
    setUpdateDataCampain(row)
    setSelectedRowData(row);
    openUpdateModal();
  };

  const [UpdateModalOpen, setUpdateModalOpen] = useState(false)

  const openUpdateModal = (row) => {
    setUpdateModalOpen(true)

    console.log("open modal")

  }

  const [connectiontype, setConnectiontype] = React.useState('');
  const [pricingtype, setPricingtype] = React.useState('');
  const [adunitcategory, setAdunitcategory] = React.useState('');
  const [traffictype, setTraffictype] = React.useState('');
  const [devicetype, setDevicetype] = React.useState('');
  const [verificationtype, setVerificationtype] = React.useState('');
  const [countryname, setCountryname] = React.useState('');

  const [dailybudget, setDailybudget] = useState('');
  const [totalbudget, setTotalbudget] = useState('');
  const [error, setError] = useState('');

  const pricingChange = (event) => {
    setPricingtype(event.target.value);
  };


  const deviceChange = (event) => {
    setDevicetype(event.target.value);
  };
  const countryChange = (event) => {
    setCountryname(event.target.value);
  };
  const verificationChange = (event) => {
    setVerificationtype(event.target.value);
  };

  const handleUpdateClick = () => {

    setUpdateModalOpen(false);
  };



  const closeUpdateModal = () => {
    setUpdateModalOpen(false)

  }


  // <<<<<<----------------------- update modal data end --------------------->>>>> //


  // <<<<<<----------------------- Delete modal data START --------------------->>>>> //
  const [DeleteModalOpen, setDeleteModalOpen] = useState(false)
  const [DeleteModalId, setDeleteModalId] = useState(null)


  const openDeleteModal = (id) => {
    setDeleteModalOpen(true)
    setDeleteModalId(id)
    console.log("open modal")

  }
  const closeDeleteModal = () => {
    setDeleteModalOpen(false)

  }







  // <<<<<<----------------------- Delete modal data END --------------------->>>>> //

  const handleDelete = async (id) => {


    try {
      console.log("!deleted")

      const res = await deleteCampaignAPI(id);

      if (res.status === "success") {

        toast.success("Campaign Deleted Successfully", {
          autoClose: 2000
        })
        AllSeparateCampaign();
        setDeleteModalOpen(false);
        console.log(`Successfully deleted campaign with ID: ${id}`);
      } else {
        toast.error("some error occurs to delete campaign", {
          autoClose: 2000
        })
        console.error(`Failed to delete campaign with ID: ${id}`);
      }
    } catch (error) {
      console.error(`Error deleting campaign: ${error.message}`);
    }
  };

  const AllSeparateCampaign = async () => {
    const res = await getCampaignAPI();
    console.log(res);
    console.log(`image is ${res.createcampaign_images}`);

    if (res.status == "success") {
      setSeparateCampaign(res?.data.campaigns)
    }


  }
  useEffect(() => {
    AllSeparateCampaign()
  }, [])



  const columns = [
    {
      name: "Campaign name ",
      selector: "campaignName",
      sortable: true,
      width: "170px",
    },
    {
      name: "Connection type",
      selector: "connectionType",
      sortable: true,
      width: "170px",
    },
    {
      name: "Pricing type",
      selector: "pricingType",
      sortable: true,
      width: "170px",

    },
    {
      name: "AdUnit category",
      selector: "adUnitCategory",
      sortable: true,
      width: "170px",
    },

    {
      name: "Landing URL",
      selector: "landingUrl",
      sortable: true,
      width: "150px",
    },
    {
      name: "Device format",
      selector: "deviceFormat",
      sortable: true,
      width: "170px",
    },
    {
      name: "countries",
      selector: "countries",
      sortable: true,
    },
    {
      name: "Total budget",
      selector: "tBudget",
      sortable: true,
      width: "150px",
    },
    {
      name: "Daily budget",
      selector: "dBudget",
      sortable: true,
      width: "150px",
    },
    {
      name: "Campaign Status",
      selector: "campaignStatus",
      sortable: true,
      width: "180px",
    },
    // {
    //   name: "image",
    //   selector: "createcampaign_images",

    //   sortable: true,
    //   width: "300px",
    // },

    { 
      name: "image",
      cell: (row) => (
        <div className="d-flex gap-3 p-3">
          {row.createcampaign_images?.map((img, index) => (
            <img
              key={index}
              src={`${Main_URL}/image/${img}`} // Concatenate base URL with image filename
              alt={`Campaign Image ${index}`}
              style={{ width: "100px", height: "auto", margin: "5px" }}
            />
          ))}
        </div>
      ),
      width: "500px",
    },


    {
      name: "Actions",
      color: "#0000",
      width: "180px",
      cell: (row) => (
        <div className="d-flex gap-3 p-3">
          <button
            className="btn btn-warning"
            onClick={() => handleRowClick(row)}
          >
            Update
          </button>
          <button
            className="btn btn-danger"
            onClick={() => openDeleteModal(row._id)}
          >
            Delete
          </button>

        </div>
      ),
      width: "170px",
    },


  ];

  const data = separateCampaign;


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsPerPageChange = (e) => {
    const selectedValue = parseInt(e.target.value);
    setRowsPerPage(selectedValue);
  };
  const filteredData = useMemo(() => {
    if (!searchText) {
      return data;
    }
    return data.filter((item) => {
      return Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchText.toLowerCase())
      );
    });

  }, [data, searchText]);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = filteredData?.slice(startIndex, endIndex);

  const customStyles = {
    headCells: {
      style: {
        fontSize: "16px", // Adjust the font size as needed
      },
    },
  };
  // const displayedData = filteredData.slice(0, rowsPerPage);
  return (






    <div className="container-fluid  mt-3">
      <ToastContainer />
      <div className="row d-flex   justify-content-between">
        <div className="col-md-2">
          <div className="d-flex content-items-center">
            {" "}
            <div className="pt-2"> Show </div> &nbsp;
            <select
              className="form-select SSA-Table-MyCampaign-Select"
              aria-label="Default select example"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>{" "}
            &nbsp; <div className="pt-2"> Entries </div>
          </div>
        </div>

        <div className="col-4 ">
          <div>
            <input
              className="form-control SSA-Table-MyCampaign-Select"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div></div>
        </div>

        <div
          className="col-xs-12 pt-3 mt-4 p-0"
          style={{ border: "1px solid #ddd" }}
        >
          <DataTable
            columns={columns}
            data={displayedData}
            customStyles={customStyles}
            value={existingData.campaignName || ''}
            responsive
          />
        </div>

        <div className="col-12 d-flex justify-content-end pt-3">
          <nav aria-label="...">
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <a
                  className="page-link SSA-Table-MyCampaign-Select px-3 py-2"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </a>
              </li>
              <li className={`page-item ${currentPage === 1 ? "active" : ""}`}>
                <a
                  className="page-link pb-2"
                  href="#"
                  onClick={() => handlePageChange(1)}
                >
                  1
                </a>
              </li>
              <li className={`page-item  ${currentPage === 2 ? "active" : ""}`}>
                <a
                  className="page-link pb-2 text-black "
                  href="#"
                  onClick={() => handlePageChange(2)}
                >
                  2
                </a>
              </li>
              <li
                className={`page-item ${currentPage === Math.ceil(filteredData?.length / itemsPerPage)
                  ? "disabled"
                  : ""
                  }`}
              >
                <a
                  className="page-link SSA-Table-MyCampaign-Select px-3 py-2"
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>


        <Modal show={UpdateModalOpen} size="md" onClose={() => closeUpdateModal(false)} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <div className="row " >

                <div className="col-12 d-flex justify-content-center " >
                  {(
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: 'auto' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div className="row" >
                        <div className="col-6 mb-2" >
                          <TextField
                            value={updateDataCampain?.campaignName}
                            id="outlined-basic" name="campaignName" onChange={handleCampainChange} label="Campaign name" variant="outlined" /></div>
                        <div className="col-6 mb-2" >

                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Connection type</InputLabel>
                            <Select
                              name="connectionType"
                              labelId="demo-simple-select-label"
                              value={updateDataCampain?.connectionType}
                              id="demo-simple-select"
                              // value={connectiontype}
                              label="connection type"
                              onChange={handleCampainChange}
                            >
                              <MenuItem value="All-traffic">All-traffic</MenuItem>
                              <MenuItem value="3G">3G</MenuItem>
                              <MenuItem value="WI-FI">WI-FI</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                      <div className="row" >
                        <div className="col-6 mb-2" >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Pricing type</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={updateDataCampain?.pricingType}
                              name="pricingType"
                              label="connection type"
                              onChange={handleCampainChange}
                            >
                              <MenuItem value="CPM">CPM</MenuItem>
                              <MenuItem value="CPC">CPA</MenuItem>
                              <MenuItem value="CPC">CPC</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                        <div className="col-6 mb-2" >

                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Ad-Unit category</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="adUnitCategory"
                              label="Ad UNit Category type"
                              value={updateDataCampain?.adUnitCategory}
                              onChange={handleCampainChange}
                            >
                              <MenuItem value="Popunder">Popunder</MenuItem>
                              <MenuItem value="Native">Native</MenuItem>
                              <MenuItem value="Social ba">Social bar</MenuItem>
                              <MenuItem value="In-Page Push">In-Page Push</MenuItem>
                              <MenuItem value="Interstitial">Interstitial</MenuItem>
                            </Select>
                          </FormControl>


                        </div>
                      </div>
                      <div className="row" >
                        <div className="col-6 mb-2" >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Traffic type </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="trafficType"
                              value={updateDataCampain?.trafficType}

                              label="Traffic type"
                              onChange={handleCampainChange}
                            >
                              <MenuItem value="Mainstream + Adult (All)">Mainstream + Adult (All)</MenuItem>
                              <MenuItem value="Mainstream">Mainstream</MenuItem>
                              <MenuItem value="Adult">Adult</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                        <div className="col-6 mb-2" >
                          <TextField
                            onChange={handleCampainChange}
                            value={updateDataCampain?.landingUrl}

                            name="landingUrl"



                            id="outlined-basic" label="Landing URL" variant="outlined" />
                        </div>
                      </div>
                      <div className="row" >
                        <div className="col-6 mb-2" >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Device Format</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="deviceFormat"
                              value={updateDataCampain?.deviceFormat}

                              label="Device Format "
                              onChange={handleCampainChange}
                            >
                              <MenuItem value="Mobile">Mobile</MenuItem>
                              <MenuItem value="Desktop">Desktop</MenuItem>
                              <MenuItem value="Tab">Tab</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                        <div className="col-6 mb-2" >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Countries</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="countries"
                              value={updateDataCampain?.countries}

                              label="connection type"
                              onChange={handleCampainChange}

                            >
                              <MenuItem value="Afghanistan">Afghanistan</MenuItem>
                              <MenuItem value="Aland Islands">Aland Islands</MenuItem>
                              <MenuItem value="Albania">Albania</MenuItem>
                              <MenuItem value="Algeria">Algeria</MenuItem>
                              <MenuItem value="American Samoa">American Samoa</MenuItem>
                              <MenuItem value="Andorra">Andorra</MenuItem>
                              <MenuItem value="Angola">Angola</MenuItem>
                              <MenuItem value="Anguilla">Anguilla</MenuItem>
                              <MenuItem value="Antarctica">Antarctica</MenuItem>
                              <MenuItem value="Antigua and Barbuda">Antigua and Barbuda</MenuItem>
                              <MenuItem value="Argentina">Argentina</MenuItem>
                              <MenuItem value="Armenia">Armenia</MenuItem>
                              <MenuItem value="Aruba">Aruba</MenuItem>
                              <MenuItem value="Australia">Australia</MenuItem>
                              <MenuItem value="Austria">Austria</MenuItem>
                              <MenuItem value="Azerbaijan">Azerbaijan</MenuItem>
                              <MenuItem value="Bahamas">Bahamas</MenuItem>
                              <MenuItem value="Bahrain">Bahrain</MenuItem>
                              <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                              <MenuItem value="Barbados">Barbados</MenuItem>
                              <MenuItem value="Belarus">Belarus</MenuItem>
                              <MenuItem value="Belgium">Belgium</MenuItem>
                              <MenuItem value="Belize">Belize</MenuItem>
                              <MenuItem value="Benin">Benin</MenuItem>
                              <MenuItem value="Yemen">Yemen</MenuItem>
                              <MenuItem value="Zambia">Zambia</MenuItem>
                              <MenuItem value="Zimbabwe">Zimbabwe</MenuItem>
                            </Select>
                          </FormControl>
                        </div>

                      </div>
                      <div className="row" >
                        <div className="col-6 mb-2" >

                          <FormControl fullWidth>
                            <TextField
                              type="number"
                              name="totalBudget"
                              value={updateDataCampain?.totalBudget}

                              onChange={handleCampainChange}
                              inputProps={{
                                pattern: '[0-9]*',
                                inputMode: 'numeric',
                              }}
                              id="outlined-basic"
                              label="Total Budget"
                              variant="outlined"
                              error={error !== ''}
                              helperText={error}
                            />
                          </FormControl>
                        </div>
                        <div className="col-6 mb-2" >

                          <FormControl fullWidth>
                            <TextField
                              type="number"
                              name="dailyBudget"
                              value={updateDataCampain?.dailyBudget}

                              onChange={handleCampainChange}
                              inputProps={{
                                pattern: '[0-9]*',
                                inputMode: 'numeric',
                              }}
                              id="outlined-basic" label="Daily Budget" variant="outlined"
                              error={error !== ''}  // Display error styling
                              helperText={error}    // Display error message
                            />
                          </FormControl>
                        </div>
                      </div>
                      <div className="row" >
                        <div className="col-6" >
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">After Verification</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="verificationtype"
                              value={updateDataCampain?.verificationtype}

                              label="connection type"
                              onChange={verificationChange}
                            >
                              <MenuItem value={10}>Start</MenuItem>
                              <MenuItem value={20}>Scheduled</MenuItem>
                              <MenuItem value={30}>Keep inactive</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </Box>
                  )}
                </div>
              </div>
              <div className="flex justify-center m-2 gap-4">
                <Button className="bg-danger border-0 outline-0 px-3"
                  disabled={isUpdateButtonDisabled}
                  onClick={handleIdUpdate}>
                  Update
                </Button>
                <Button className="bg-danger border-0 outline-0" onClick={() => setUpdateModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        {/*<<--------- delete modal-------->> */}


        <Modal show={DeleteModalOpen} size="md" onClose={() => closeDeleteModal(false)} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200 text-danger" />
              <h3 className="mb-5 text-lg font-normal text-black dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <div className="flex justify-center gap-4">
                <Button className="bg-danger border-0 outline-0"
                  // onClick={() => handleDelete(row._id)}
                  onClick={() => handleDelete(DeleteModalId)}>
                  {"Yes, I'm sure"}
                </Button>
                <Button className="bg-danger border-0 outline-0" onClick={() => setDeleteModalOpen(false)}>
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

      </div>
    </div>
  );
};
export default Table2;
