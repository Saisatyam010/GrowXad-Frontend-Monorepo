import React, { useEffect, useRef } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {

  return (
    <>
      <div>
        <Header />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '8vh' }}></div>
        {children}
        <Footer />

      </div>
    </>
  )
}

export default Layout