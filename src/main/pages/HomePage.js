import React from 'react'
import Layout from '../components/Layout'
// import UpperFooterComponent from '../ComponentsOfHomePage/UpperFooterComponent/UpperFooterComponent'
// import AdTypes from '../ComponentsOfHomePage/AdTypes/AdTypes'
import { Link } from 'react-router-dom'
import styles from '../components/Home/Home.module.css'
import '../components/Home/HomePage.css'
const HomePage = () => {
  return (
    <Layout>
      <section class="SSA_HOME_section-background SSA_HOME_parallax d-flex justify-content-center align-items-center pt-5 text-center" style={{ overflowX: "hidden" }}>
        <div>
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-md-7 p-4">
              <h1 className={styles.heading} > GROWXAD</h1>
              <p className="SSA_HOME_21pxFont py-1 p-3"> Unlock the full potential of your advertising campaigns with our cutting-edge platform. We are on a mission to empower your brand and extend your influence through revolutionary advertising solutions. Our goal is to provide you with the tools and technology needed to elevate your marketing efforts and achieve unparalleled success.</p>
            </div>
          </div>
          <div class="d-flex justify-content-center p-4">
            <Link to="/adveriserauthLogin" className='text-black no-underline hover:no-underline'> <button type="button" className=" SSA_Btn_HOME_buytraffic py-3 px-5 mr-2 p-3">BUY TRAFFIC</button></Link>
            <Link to="/adveriserauthLogin" className='text-white no-underline hover:no-underline'><button type="button" className=" SSA_Btn_HOME_selltraffic py-3 px-5 p-3">SELL TRAFFIC</button></Link>
          </div>
        </div>
      </section>
     
    </Layout>

  )
}

export default HomePage;