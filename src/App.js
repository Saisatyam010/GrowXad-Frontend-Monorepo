import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";

// import { ColorModeContext, useMode } from './AdvertiserDashboard/DashboardHeader/Theme';
import MainRouter from "./routes/MainRouter";
import HomePage from './main/pages/HomePage';
import AdvertiserDashboardRouter from './routes/AdvertiserDashboaradRouter';
 

// import SignupAndLogin from './Components/SignupAndLogin/UserLogin';

function App() {
 
  
  return (
    <>
    

      {/* <ColorModeContext.Provider value={colorMode}> */}
          {/* <ThemeProvider > */}
             {/* <CssBaseline /> */}
             <Router>
                 {/* Main Routes */}
                  {/* <MainRouter/> */}
                   {/* Adertiser Dashboard Routes */}
                   <AdvertiserDashboardRouter/>

             </Router>
        {/* </ThemeProvider> */}
        {/* </ColorModeContext.Provider> */}
    
    </>
  );
}

export default App;
