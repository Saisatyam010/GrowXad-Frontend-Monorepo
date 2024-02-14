
import { Link } from 'react-router-dom';
import { IoWalletSharp } from "react-icons/io5";
import { Dropdown } from 'flowbite-react';
import { MdCircleNotifications, MdLogout, MdOutlineSettings, } from "react-icons/md";
import { FaRegUser, FaUser, FaBell } from "react-icons/fa";
// import { getLocalStorageItem } from '../../AllGrowXStorage/AllGrowXStorage';
import { useTheme } from "@mui/material";
import styles from './Layout.module.css';
import { tokens } from "../../../../utils/Theme";   


const Header = () => {


    // useEffect(() => {
    //     const storedUser = localStorage.getItem('user');
    //     if (storedUser) {
    //         setUser(JSON.parse(storedUser));
    //     }
    // }, []);

   
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
     <div style={{marginBottom:"72px"}}>
    <div className='fixed top-0 left-0 z-30 w-full   bg-[#212121] m-0'>
           
               
           <div className="d-flex justify-content-end align-items-center pt-3 pb-3">
               <div className="me-5 " >
                   <Link to="/advertiserdashboard/campaign/createcampaign">
                       <button type='submit' formAction='' className={`${styles.ab_btndh} ${styles.ab_pointer}`}>Create Campaign </button>
                   </Link>
               </div>

               <div className={` ${styles.ab_pointer} ${styles.ab_balance} me-4 d-flex justify-content-center align-items-center`}><IoWalletSharp className={`${styles.ab_greydiv} fs-1 me-2`} /><span className={``}> $0.00</span></div>

               <div className={` ${styles.ab_pointer} ${styles.ab_iconsizedh}  ms-2 me-3 `}><span><FaBell className={`${styles.ab_greydiv} fs-1`} /></span></div>


               <div className="me-2 ">
                   <Dropdown className={`${styles.ab_pointer} ${styles.ab_ditbtn} d-flex justify-content-center align-items-center `} label="" dismissOnClick={false} renderTrigger={() => <span ><FaUser className={`${styles.ab_pointer} ${styles.ab_greydiv} fs-1 me-2 `} /></span>}>

                       <Dropdown.Item className="ps-1 fs-6"><FaRegUser className='me-2' />{ 'guest'}</Dropdown.Item>
                       <Dropdown.Item className="ps-1 fs-6"><MdOutlineSettings className="me-2" />Settings</Dropdown.Item>
                       <Dropdown.Item className={`${styles.ab_color} ps-1 fs-6`}><MdLogout className="me-2" />Logout</Dropdown.Item>
                   </Dropdown>
               </div>

           </div>
      

</div>
        </div>
    
    )
}

export default Header