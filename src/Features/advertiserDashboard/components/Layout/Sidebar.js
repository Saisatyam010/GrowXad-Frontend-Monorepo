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
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CampaignIcon from '@mui/icons-material/Campaign';
import FlagIcon from '@mui/icons-material/Flag';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ApiIcon from '@mui/icons-material/Api';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import { useState } from "react";

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
            background: `${colors.primary[400]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#73035b !important",
            fontWeight: "bold !important",
          },
          "& .pro-menu-item.active": {
            color: "#73035b !important",
            fontWeight: "800 !important",
          },
          position: "sticky",
          zIndex: 1,
        }}
      >
        <ProSidebar collapsed={isCollapsed}>
          <Menu iconShape="square">

            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h5" color={colors.grey[100]}>
                    GROWXADS
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!isCollapsed && (
              <Box mb="25px">
              </Box>
            )}

            <Box paddingLeft={isCollapsed ? undefined : "0%"}>
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
                display={isCollapsed ? "none" : "block"}
              >
                Dashboard
              </Typography>
              <Item
                title="Overview"
                to="/advertiserdashboard/welcome"
                icon={<PlayCircleFilledIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Get Started"
                to="dashboard"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{
                  m: "15px 0 5px 20px",
                }}
                display={isCollapsed ? "none" : "block"}
              >
                Campaign

              </Typography>
              <Item
                title="Create Campaign"
                to="campaign/createcampaign2"
                icon={<AppRegistrationIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="My Campaigns"
                to="campaign/mycampaign"
                icon={<CampaignIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="CPA Golas Rules"
                to="campaign/cpagoalrules"
                icon={<FlagIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
                display={isCollapsed ? "none" : "block"}
              >
                Tracking
              </Typography>

              <Item
                title="API"
                to="tracking/api"
                icon={<ApiIcon />}
                selected={selected}
                setSelected={setSelected}
                
              />
              <Item
                title="Conversion Tracking"
                to="tracking/conversiontracking"
                icon={<TrendingUpIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
                display={isCollapsed ? "none" : "block"}
              >
                Tracking
              </Typography>
              <Item
                title="Statistics"
                to="statistics"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Traffic Chart"
                to="trafficchart"
                icon={<BarChartOutlinedIcon />}
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
                title="Support"
                to="support"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Settings"
                to="settings"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                style={{ marginTop: 59 }}
                setSelected={setSelected}

              />
              <hr />

              <Box pl={2}
                sx={{ display: 'flex' }}>
                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Box px={1}>
                  <Typography variant="h4" sx={{ color: colors.grey[100] }}
                    display={isCollapsed ? "none" : "block"}>
                    {JSON.parse(localStorage.getItem("user"))?.data?.fullName}
                  </Typography>
                  <Typography sx={{ textAlign: "center" }}
                    display={isCollapsed ? "none" : "block"}>
                    {JSON.parse(localStorage.getItem("user"))?.data?.email}
                  </Typography>
                </Box>
                <MoreVertIcon />
              </Box>

              <Box pl={2}
                sx={{ display: 'flex', textAlign: "center", cursor: "pointer", backgroundColor: "lightblue", padding: "10px" }} >
                <Box px={1}>
                  <Typography variant="h4" sx={{ color: colors.grey[100] }}
                    display={isCollapsed ? "none" : "block"}>
                    Logout
                  </Typography>
                </Box>
                <ExitToAppIcon />
              </Box>
            </Box>
          </Menu>
        </ProSidebar>
      </Box >
    </>
  );
};
export default Sidebar;