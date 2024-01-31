import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./AdvSidebar.css";

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};
const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

const AdvSidebarMenu = ({ route, showAnimation, isOpen, setIsOpen }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      setIsOpen(true);
    };
  
    useEffect(() => {
      if (!isOpen) {
        setIsMenuOpen(false);
      }
    }, [isOpen]);
    return (
      <>
        <div className="ab-menu" onClick={toggleMenu}>
          <div className="ab-menu_item">
            <div className="ab-icon">{route.icon}</div>
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
          </div>
          {isOpen && (
            <motion.div
              animate={
                isMenuOpen
                  ? {
                    rotate: -90,
                  }
                  : { rotate: 0 }
              }
            >
              <FaAngleDown />
            </motion.div>
          )}
        </div>{" "}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="ab-menu_container"
            >
              {route.subRoutes.map((subRoute, i) => (
                <motion.div variants={menuItemAnimation} key={i} custom={i}>
                  <Link to={subRoute.path} className="ab-link no-underline hover:no-underline">
                    <div className="ab-icon">{subRoute.icon}</div>
                    <motion.div className="ab-link_text">{subRoute.name}</motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}{" "}
        </AnimatePresence>
      </>
    );
}

export default AdvSidebarMenu