import { useNavigate, Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { IconButton, Typography, useTheme } from "@mui/material";
import Box from '@mui/material/Box';
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../../../utils/Theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CampaignIcon from '@mui/icons-material/Campaign';
import ApiIcon from '@mui/icons-material/Api';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
import { FaTelegram, FaSkype, FaRegUser } from "react-icons/fa";
import { HiLogout, HiLogin } from "react-icons/hi";
import { MdHelpOutline } from "react-icons/md";
import { PiChartLineUpBold } from "react-icons/pi";


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};


const Sidebar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  //   const logoutAdvertiserUser = () => {

  //     localStorage.removeItem("user");
  //     const storedUser = getToken("user");
  //     if (!storedUser) {
  //       navigate("/adveriserauthLogin");
  //     } else {
  //       navigate("/adveriserauthLogin");
  //     }
  //     window.location.reload();
  //     localStorage.removeItem("user");
  //     navigate("/advertiserAuthLogin");
  //   };

  //   const handleClick = () => {
  //     localStorage.removeItem("user");
  //     const storedUser = getToken("user");
  //     if (!storedUser) {
  //       navigate("/adveriserauthLogin");
  //     } else {
  //       navigate("/adveriserauthLogin");
  //     }
  //     window.location.reload();
  //     localStorage.removeItem("user");
  //     navigate("/advertiserAuthLogin");
  //   };

  return (
    <>
      <Box
        className="sideBar"
        sx={{
          "& .pro-sidebar-inner": {
            background: `${colors.grey[100]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 20px 5px 20px !important",
            color: `${colors.primary[800]}`,
            fontWeight: "medium !important",
            fontFamily:"Nunito Sans', sans-serif",
            fontSize: "16px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#fff !important",
            fontWeight: "medium !important",
          },
          "& .pro-menu-item.active": {
            color: "#fff !important",
            fontWeight: "800 !important",
          },

          position: "sticky",
          zIndex: 1,
        }}
      >
        <ProSidebar collapsed={isCollapsed}>
          <Menu iconShape="square">
           <div className={`sticky top-[14px] z-[100]`} style={{background:`${colors.grey}`}}>
            <Box
              display="flex"
              justifyContent={!isCollapsed?"space-between":"center"}
              alignItems="center"
              padding={isCollapsed ? "0px 0px 0px 0px" : "0px 10px 0px 20px"}
                          
              position="sticky"
              top="0"
              zIndex={100}
              style={{
                fontSize: "20px",
                
                color: colors.grey[100],
              }}
            >
              
              {!isCollapsed ?
               
                <img src="/images/growxad.png" style={{width: "auto", height: "43px", }} alt="brand-logo" />
            : 
              <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/828fe15d-cf76-4bd6-186d-36920186df00/public" style={{width: "auto", height: "43px", }}  alt="brand-short-logo"
              />
           }
            {isCollapsed ?
               <button onClick={() => setIsCollapsed(!isCollapsed)} className="absolute top-4 -right-0  z-50 rounded-full text-white"><HiLogout size={16}   /></button> :
               <button onClick={() => setIsCollapsed(!isCollapsed)} className="absolute top-4 -right-0  z-50 text-white" > <HiLogin size={16}/></button>}
            </Box>

            <hr className="relative top-0" />
            </div>
            <Box paddingLeft={isCollapsed ? undefined : "0%"}>
              <Typography
                variant="h6"
                color={colors.primary[400]}
                sx={{ m: "5px 0 5px 20px" }}
                display={isCollapsed ? "none" : "block"}
              >
                Dashboard
              </Typography>
              <Item
                title="Get Started"
                to="get-started"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Overview"
                to="overview"
                icon={<PlayCircleFilledIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Statistics"
                to="/advertiser-dashboard/statistics"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Finance"
                to="finance"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Add Funds"
                to="add-funds"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Traffic Inventory"
                to="traffic-inventory"
                icon={<PiChartLineUpBold size={'20px'} />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.primary[400]}
                sx={{
                  m: "15px 0 5px 20px",
                }}
                display={isCollapsed ? "none" : "block"}
              >
                Campaign

              </Typography>
              <Item
                title="Create Campaign"
                to="campaign/add"
                icon={<AppRegistrationIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="My Campaigns"
                to="campaigns"
                icon={<CampaignIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              {/* <Item
                title="CPA Golas Rules"
                to="campaign/cpagoalrules"
                icon={<FlagIcon />}
                selected={selected}
                setSelected={setSelected}
              /> */}

              <Typography
                variant="h6"
                color={colors.primary[400]}
                sx={{ m: "15px 0 5px 20px" }}
                display={isCollapsed ? "none" : "block"}

              >
                Tracking
              </Typography>

              <Item
                title="Postback URL"
                to="tracking/postback-url"
                icon={<ApiIcon />}
                selected={selected}
                setSelected={setSelected}

              />
              <Item
                title="Real Time Traffic"
                to="tracking/real-time-traffic"
                icon={<TrendingUpIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              {/* <Typography
                variant="h6"
                color={colors.primary[900]}
                sx={{ m: "15px 0 5px 20px" }}
                display={isCollapsed ? "none" : "block"}
              >
                Tracking
              </Typography> */}

              <hr />
              <Item
                title="Profile"
                to="profile"
                icon={<FaRegUser size={20} />}
                selected={selected}
                setSelected={setSelected}

              />
              <Item
                title="Help Center"
                to="help-center"
                icon={<MdHelpOutline size={20} />}
                selected={selected}
                setSelected={setSelected}
              />

              <Box pl={2}
                sx={{ display: 'flex' }}>
                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                <Box px={1} paddingLeft={isCollapsed ? undefined : "0%"} marginBottom={1}>
                  <Typography variant="p" sx={{ color: colors.primary[400], textAlign: "start" }} style={{ fontSize: "13px", display: 'flex', alignItems:'center',paddingLeft: "15px" }}
                    display={isCollapsed ? "none" : "block"}>
                     Allen Meshavkina 
                    {/* {JSON.parse(localStorage.getItem("user"))?.data?.fullName} */}
                  </Typography>
                  <Typography variant="p" sx={{  color: colors.primary[400],textAlign: "center" }} style={{ fontSize: "11px", display: 'flex', paddingLeft: "15px" }}
                    display={isCollapsed ? "none" : "block"}>
                    {/* {JSON.parse(localStorage.getItem("user"))?.data?.email} */}
                    Personal Manager
                  </Typography>
                </Box>
              </Box>

              <Box px={2}>
                <Typography variant="p" sx={{ color: colors.primary[400] }} style={{ fontSize: "15px" }}
                  display={isCollapsed ? "none" : "block"}>
                  Contact Your Manager
                </Typography>
                <Typography sx={{ textAlign: "start", color:colors.blueAccent[400] }} style={{ fontSize: "13px", cursor: "pointer" }}
                  display={isCollapsed ? "none" : "block"}>
                  alen.meshavkina@growxad.com
                </Typography>
                <Typography sx={{ display: 'flex', textAlign: "start", gap:'4px' }} style={{ fontSize: "20px" }}
                  display={isCollapsed ? "none" : "block"}>
                  <FaTelegram />
                  <FaSkype />
                </Typography>
              </Box>

              {/* <Box pl={2}
                sx={{ display: 'flex', textAlign: "center", cursor: "pointer", backgroundColor: "lightblue", padding: "10px" }} >
                <Box px={1}>
                  <Typography variant="h4" sx={{ color: colors.grey[100] }}
                    display={isCollapsed ? "none" : "block"}>
                    Logout
                  </Typography>
                </Box>
                <ExitToAppIcon />
              </Box> */}
            </Box>
          </Menu>
        </ProSidebar>
      </Box >
    </>
  );
};
export default Sidebar;