import { useState } from "react";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainHomePage from './Components/MainHomePage/MainHomePage';
import BenefitAdv from './Components/BenefitAdv/BenefitAdv';
import CpaNetwork from './Components/CpaNetwork/CpaNetwork';
import CpaGoals from './Components/CpaGoals/CpaGoals';
import SmartCpm from './Components/SmartCpm/SmartCpm';
import NativeAd from './Components/OurAdFormat/NativeAd/NativeAd';
import BannerAd from './Components/OurAdFormat/BannerAd/BannerAd';
import InPagePushAd from './Components/OurAdFormat/InPagePushAd/InPagePushAd';
import DirectLink from './Components/OurAdFormat/DirectLink/DirectLink';
import PopunderAd from './Components/OurAdFormat/PopunderAd/PopunderAd';
import InterstitialAd from './Components/OurAdFormat/InterstitialAd/InterstitialAd';
import ReferralProgram from './Components/ReferralProgram/ReferralProgram';
import RtbTraffic from './Components/RtbTraffic/RtbTraffic';
import PricingBanner from './Components/Pricing_Model_grow/PricingModels/PricingBanner';
import SelfService from './Components/SelfService/SelfService';
import { FaqForAdvertising } from './Components/FaqPages/FaqForAdvertising';
import { FaqGetAdsCodes } from './Components/FaqPages/FaqGetAdsCodes';
import { FaqStatsAndPayouts } from './Components/FaqPages/FaqStatsAndPayouts';
import { FaqStatsAndTracking } from './Components/FaqPages/FaqStatsAndTracking';
import { FaqHowToStart } from './Components/FaqPages/FaqHowToStart';
import { FaqCampaignSettings } from './Components/FaqPages/FaqCampaignSettings';
import { FaqForAffiliate } from './Components/FaqPages/FaqForAffiliate';
import { FaqForPublisher } from './Components/FaqPages/FaqForPublisher';
import Newsletter from './Components/Newsletter/Newsletter';
import AdvRefferals from './Components/AdvRefferals/AdvRefferals';
import GrowXadApi from './Components/PubApi/GrowXadApi';
import SignupAndLogin from './Components/SignupAndLogin/SignupAndLogin';
import { MyContextProvider } from './Context/MyContext';
// import MainDashboard from './GrowXAdminPanel/MainDashboard';
// import DashboardWelcomePage from './GrowXAdminPanel/DashboardWelcomePage';
import { FreeResourcesBlogPage } from './Components/FreeResourcePages/FreeResourcesBlogPage';
import { FreeResourcesCaseStudies } from './Components/FreeResourcePages/FreeResourcesCaseStudies';
import { FreeResourcesHowtoAdvertise } from './Components/FreeResourcePages/FreeResourcesHowtoAdvertise';
import { FreeResourcesTrafficMonitization } from './Components/FreeResourcePages/FreeResourcesTrafficMonitization';
import FreeResourcesNewsLater from './Components/FreeResourcePages/FreeResourcesNewsLater';
import BenefitsForPublishers from './Components/BenefitsForPublishers/BenefitsForPublishers';
import { Settings } from './AdvertiserDashboard/Components/Settings/Settings';
import MainDashboard from './AdvertiserDashboard/MainDashboard';
import DashboardWelcomePage from './AdvertiserDashboard/DashboardWelcomePage';
import { Dashboard } from './AdvertiserDashboard/Components/Dashboard/Dashboard';
import TrackingApi from './AdvertiserDashboard/Components/Tracking/Api/TrackingApi';
import ConversionTracking from './AdvertiserDashboard/Components/Tracking/ConversionTracking/ConversionTracking';
import CPAGoalRules from './AdvertiserDashboard/Components/Campaign/CPAGoalRules/CPAGoalRules';
import CreateCampaign from './AdvertiserDashboard/Components/Campaign/CreateCampaign/CreateCampaign';
import Mycampaign from './AdvertiserDashboard/Components/Campaign/MyCampaign/Mycampaign';
import Freebies from './AdvertiserDashboard/Components/FreebiesAndBonuses/Freebies';
import Finance from './AdvertiserDashboard/Components/Finance/Finance';
import Support from './AdvertiserDashboard/Components/Support/Support';
import { TrafficChart } from './AdvertiserDashboard/Components/TrafficChart/TrafficChart';
import OfferWishlist from './AdvertiserDashboard/Components/OfferWishlist/OfferWishlist';
import Statistics from './AdvertiserDashboard/Components/Statistics/Statistics';
import PublisherDashboard from './PublisherDashboard/PublisherDashboard';
import AffliatePage from './AffliatePage/AffliatePage';

import { PublisherMainDashboard } from './PublisherDashboard/PublisherMainDashboard';
import Referrals from './PublisherDashboard/Components/Refferals/Referrals';
import ApiPublisher from './PublisherDashboard/Components/PublisherApi/ApiPublisher';
import PublisherProfile from './PublisherDashboard/Components/Profile/PublisherProfile';
import PublisherFreebies from './PublisherDashboard/Components/FreebiesAndBonuses/PublisherFreebies';
import { Directlinks } from './PublisherDashboard/Components/Directlinks/Directlinks';
import { Websites } from './PublisherDashboard/Components/Websites/Websites';
import { Payments } from './PublisherDashboard/Components/Payments/Payments';
import StatisticsPublisher from './PublisherDashboard/Components/Statistics/StatisticsPublisher';
import PrivacyPolicy from './PublisherDashboard/Components/PrivacyPolicy/PrivacyPolicy';
import ModalExample from './ModalExample/ModalExample';
import AffiliatesAuth from './Components/SignupAndLogin/AffiliatesAuth/AffiliatesAuth';
import PublishersAuth from './Components/SignupAndLogin/PublishersAuth/PublishersAuth';
import MyTable from './Components/MyTable/MyTable';
import Charnot from './404not/Charnot';
import { GrowXadsDemo } from './Components/GrowXadsDemo/GrowXadsDemo';
import Glossary from './Components/FreeResourcePages/Glossary/Glossary';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { getToken } from './AllGrowXStorage/AllGrowXStorage';
import CreateCampaign2 from './AdvertiserDashboard/Components/Campaign/CreateCampaign2/CreateCampaign2';
import Sidebar from './AdvertiserDashboard/global/Sidebar'
import Topbar from './AdvertiserDashboard/global/Topbar'

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from './AdvertiserDashboard/DashboardHeader/Theme';


// import SignupAndLogin from './Components/SignupAndLogin/UserLogin';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  return (
    <>
      <MyContextProvider>

      <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />


        <Router>
          <Routes>
            {/* Pages Routes */}
            <Route path='/' element={<MainHomePage/>}></Route>
            <Route path='/benefitadv' element={<BenefitAdv />}></Route>
            <Route path='/cpaNetwork' element={<CpaNetwork />}></Route>
            <Route path='/cpagoals' element={< CpaGoals />}></Route>
            <Route path='/smartcpm' element={<SmartCpm />}></Route>
            <Route path='/nativead' element={<NativeAd />}></Route>
            <Route path='/bannerad' element={<BannerAd />}></Route>
            <Route path='/inpagepushad' element={<InPagePushAd />}></Route>
            <Route path='/directlinkad' element={<DirectLink />}></Route>
            <Route path='/popunderad' element={<PopunderAd />}></Route>
            <Route path='/interstitialad' element={<InterstitialAd />}></Route>
            <Route path='/referralprogram' element={<ReferralProgram />}></Route>
            <Route path='/rtbtraffic' element={<RtbTraffic />}></Route>
            <Route path='/pricingbanner' element={<PricingBanner />}></Route>
            <Route path='/selfserve' element={<SelfService />}></Route>
            <Route path='/faqforadvertiser' element={<FaqForAdvertising />}></Route>
            <Route path='/adunits' element={<FaqGetAdsCodes />}></Route>
            <Route path='/statisticsandpayouts' element={<FaqStatsAndPayouts />}></Route>
            <Route path='/statsandtracking' element={<FaqStatsAndTracking />}></Route>
            <Route path='/howtostart' element={<FaqHowToStart />}></Route>
            <Route path='/campaignsettings' element={<FaqCampaignSettings />}></Route>
            <Route path='/affiliates' element={<FaqForAffiliate />}></Route>
            <Route path='/faqforpublisher' element={<FaqForPublisher />}></Route>
            <Route path='/newsletter' element={<Newsletter />}></Route>
            <Route path='/advrefferals' element={<AdvRefferals />}></Route>
            <Route path='/advrefferals' element={<AdvRefferals />}></Route>
            <Route path='/growxadapi' element={<GrowXadApi />}></Route>
            <Route path='/freeresourcesblogpage' element={<FreeResourcesBlogPage />}></Route>
            <Route path='/freeresourcescasestudies' element={<FreeResourcesCaseStudies />}></Route>
            <Route path='/freeresourceshowtoadvertise' element={<FreeResourcesHowtoAdvertise />}></Route>
            <Route path='/freeresourcestrafficmonitization' element={<FreeResourcesTrafficMonitization />}></Route>
            <Route path='/freeresourcesnewslater' element={<FreeResourcesNewsLater />}></Route>
            <Route path='/benefitsforpublishers' element={<BenefitsForPublishers />}></Route>
            <Route path='/publisherpage' element={<PublisherDashboard />}></Route>
            <Route path='/affliatepage' element={<AffliatePage />}></Route>
            <Route path='/mytable' element={<MyTable />}></Route>
            <Route path='/glossary' element={<Glossary />}></Route>
            <Route path='*' element={<Charnot />}></Route>
          

            {/* User Login And Signup Routes  */}
            <Route path='/modalexample' element={<ModalExample />}></Route>

            <Route
              path="/adveriserauthLogin"
              element={<SignupAndLogin isSign={true} />}
            />
            <Route
              path="/adveriserauthSignup"
              element={<SignupAndLogin isSign={false} />}
            />
            <Route
              path="/publisherauthLogin"
              element={<PublishersAuth isSign={true} />}
            />
            <Route
              path="/publisherauthSignup"
              element={<PublishersAuth isSign={false} />}
            />

            <Route
              path="/affiliateauthLogin"
              element={<AffiliatesAuth isSign={true} />}
            />
            <Route
              path="/affiliateauthSignup"
              element={<AffiliatesAuth isSign={false} />}
            />
            
            {/* AffiliatesAuth */}


            {/* User Login And Signup Routes  */}


            {/* Admin Panel Routes */}

            {/* <Route path="/advertiserdashboard" element={<MainDashboard />}>
              <Route path='setting' element={<Settings />}></Route>
            </Route> */}
           
            <Route exact path="/"
         element={ getToken('user') ? <Navigate to="/advertiserdashboard" /> : <Navigate to="/advertiserauthLogin" />}/>
            <Route path='/growxadsdemo' element={<GrowXadsDemo/>}></Route>
       
            <Route className="content" path="advertiserdashboard" element={<PrivateRoute><MainDashboard /></PrivateRoute>} >
            {/* <Sidebar isSidebar={isSidebar} />
            <main className="content" >
            <Topbar setIsSidebar={setIsSidebar} /> */}
            
              <Route path='' element={<DashboardWelcomePage />}></Route>
              <Route path='welcome' element={<DashboardWelcomePage />}></Route>
              <Route path='dashboard' element={<Dashboard />}></Route>
              <Route path='statistics' element={<Statistics />}></Route>
              <Route path='offerswishlist' element={<OfferWishlist />}></Route>
              <Route path='trafficchart' element={<TrafficChart />}></Route>
              <Route path='support' element={<Support />}></Route>
              <Route path='finance' element={<Finance />}></Route>
              <Route path='freebiesandbonuses' element={<Freebies />}></Route>
              <Route path='settings' element={<Settings />}></Route>

              <Route path='campaign/createcampaign2' element={<CreateCampaign2 />}></Route>


              <Route path='campaign/createcampaign' element={<CreateCampaign />}></Route>
              <Route path='campaign/mycampaign' element={<Mycampaign />}></Route>
              <Route path='campaign/cpagoalrules' element={<CPAGoalRules />}></Route>

              <Route path='tracking/api' element={<TrackingApi />}></Route>
              <Route path='tracking/conversiontracking' element={<ConversionTracking />}></Route>
            
            </Route>
           
        
            {/* Publisher Dashboard Routes */}

            <Route path="publisherdashboard" element={<PublisherMainDashboard />}>
              <Route path='' element={<PublisherDashboard />}></Route>
              <Route path='dashboard' element={<PublisherDashboard />}></Route>
              <Route path='statistics' element={<StatisticsPublisher />}></Route>
              <Route path='directlinks' element={<Directlinks />}></Route>
              <Route path='websites' element={<Websites />}></Route>
              <Route path='referrals' element={<Referrals />}></Route>
              <Route path='api' element={<ApiPublisher />}></Route>
              <Route path='profile' element={<PublisherProfile />}></Route>
              <Route path='payments' element={<Payments />}></Route>
              <Route path='support' element={<Support />}></Route>
              <Route path='freebies' element={<PublisherFreebies />}></Route>
              <Route path='termsandconditions' element={<PrivacyPolicy />}></Route>
            </Route>

            {/* <Route path="/maindashboard" element={<MainDashboard />}>
              <Route path='' element={<DashboardWelcomePage />}></Route>
              <Route path='dashhomepage' element={<DashboardWelcomePage />}></Route>

            </Route> */}
            {/* <Route path='/mainadminPanel' element={<MainAdminPanel/>}></Route> */}

            {/* Admin Panel Routes */}


          </Routes>

        </Router>



        </ThemeProvider>
        </ColorModeContext.Provider>
      </MyContextProvider>
    </>
  );
}

export default App;
