import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import "./PublisherSidebar.css";
import { FaHome } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { PublisherSidebarMenu } from './PublisherSidebarMenu';
import { RiLoginBoxLine, RiMenuUnfoldFill } from "react-icons/ri";
import { MdDashboardCustomize, MdOutlineScreenSearchDesktop, MdPayment, MdOutlineSupportAgent  } from "react-icons/md";
import { FaChartColumn } from "react-icons/fa6";
import { FaStaylinked, FaSlideshare, FaFileCode, FaUser } from "react-icons/fa";
import { TfiGift } from "react-icons/tfi";








const routes = [
    {
        path: "/publisherdashboard",
        icon: (
            <div className="iconadv-container">
              <MdDashboardCustomize  className="iconadv" />
              <p className="advtext">Dashboard</p>
            </div>
          ),
    },
    {
        path: "/publisherdashboard/statistics",
        icon: (
            <div className="iconadv-container">
              <FaChartColumn  className="iconadv" />
              <p className="advtext">Statistics</p>
            </div>
          ),
    },
    {
        path: "/publisherdashboard/directlinks",
        icon: (
            <div className="iconadv-container">
              <FaStaylinked   className="iconadv" />
              <p className="advtext">Direct Links</p>
            </div>
          ),
    },
    {
        path: "/publisherdashboard/websites",
        icon: (
            <div className="iconadv-container">
              <MdOutlineScreenSearchDesktop   className="iconadv" />
              <p className="advtext">Websites</p>
            </div>
          ),
    },
    {
        path: "/publisherdashboard/referrals",
        icon: (
            <div className="iconadv-container">
              <FaSlideshare className="iconadv" />
              <p className="advtext">Referrals</p>
            </div>
          ),
    },
    {
        path: "/publisherdashboard/api",
        icon: (
            <div className="iconadv-container">
              <FaFileCode className="iconadv" />
              <p className="advtext">API</p>
            </div>
          ),
    },
    {
        path: "/publisherdashboard/profile",
        // name: "profile",
        // icon: <FaHome />,
        icon: (
            <div className="iconadv-container">
              <FaUser className="iconadv" />
              <p className="advtext">profile</p>
            </div>
          ),
    },
    {
        path: "/publisherdashboard/payments",
        icon: (
            <div className="iconadv-container">
              <MdPayment  className="iconadv" />
              <p className="advtext">Payments</p>
            </div>
          ),
    },
    {
        path: "/publisherdashboard/support",
        icon: (
            <div className="iconadv-container">
              <MdOutlineSupportAgent className="iconadv" />
              <p className="advtext">Support</p>
            </div>
          ),
    },
    {
        path: "/publisherdashboard/freebies",
        icon: (
            <div className="iconadv-container">
              <TfiGift className="iconadv" />
              <p className="advtext">Freebies & bonuses</p>
            </div>
          ),
    },
]

export const PublisherSidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);
  
  
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
    return (
        <div className="ab-main-container "  >
            <motion.div
                animate={{
                    width: "100%",

                    transition: {
                        duration: 0.5,
                        type: "spring",
                        damping: 10,
                    },
                }}
                className={`ab-sidebar `}
            >
                <div className="ab-top_section1 d-flex align-items-center">
                    <AnimatePresence className=''>
                        {isOpen && (
                            <motion.h1
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="ab-logo text-center h-100"
                            >
                            </motion.h1>
                        )}
                    </AnimatePresence>
                </div>

                <section className="ab-routes1">
                    {routes.map((route, index) => {
                        if (route.subRoutes) {
                            return (
                                <PublisherSidebarMenu
                                    setIsOpen={setIsOpen}
                                    route={route}
                                    showAnimation={showAnimation}
                                    isOpen={isOpen}
                                    className="no-underline"
                                />
                            );
                        }

                        return (
                            <NavLink
                                to={route.path}
                                key={index}
                                className="ab-link no-underline hover:no-underline "
                                activeClassName="ab-active"
                            >
                                <div className="ab-icon pt-1">{route.icon}</div>
                                
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            variants={showAnimation}
                                            initial="hidden"
                                            animate="show"
                                            exit="hidden"
                                            className="ab-link_text no-underline"
                                        >
                                            {route.name}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </NavLink>
                        );
                    })}
                </section>

                <section className="ab-routes">
                    <p className="text-[14px] text-center">GrowXad Network</p>
                    <p className="text-[14px] text-center">All Right reserved @ 2023-2024</p>
                    <p className="text-[14px] text-center"><NavLink to='/publisherdashboard/termsandconditions' className='no-underline text-white fs-6'>Terms For Publishers</NavLink> </p>
                </section>
            </motion.div>

            <main>{children}</main>
        </div>
    )
}
