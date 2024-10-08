
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import HomePage from './Pages/HomePage/HomePage'
import Holder from './Components/Contact/Holder'
import EmergencyHolder from './Components/EmergencyLine/EmergencyHolder'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
// import AboutUs from './Components/About Us/AboutUs'
import AboutUs from './AboutUs/AboutUs'
import SignUp from './Components/Forms/SignUp'
import Login from './Components/Forms/Login'
import SignUpImage from './Components/Forms/SignUpImage'
import DashboardHolder from './DashboardHome/DashboardHolder'
import Description from '../Description/Description'
import UserPrivate from './Components/Route/UserPrivate'
import SettingLayout from './Pages/ProfilePage/SettingLayout'
import Profile from './Components/profiler/Profile'
import ProfileContact from './Components/contactProfile/ProfileContact'
import ModalProfile from './Components/ModalProfile/ModalProfile'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
import ResetPassword from './Pages/ForgotPassword/ResetPassword'
import EmailVerified from './Pages/Verify/EmailVerified'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop/>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="contact" element={<Holder />} />
          <Route path="emergency" element={<EmergencyHolder />} />
          <Route path='about' element={<AboutUs />} />

        </Route>
        <Route element={<UserPrivate />}>
        <Route element={<SettingLayout />}>
        
          <Route path="profile-setting/" element={<Profile />} />
          <Route path="contact-setting/" element={<ProfileContact  />} />
          <Route path="add-emergency-contact/" element={<ModalProfile />} />
          

        </Route>

        </Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="forgot-password" element={<ForgotPassword />}></Route>
        <Route path="signupimage" element={<SignUpImage />}></Route>
        <Route path="reset-password" element={<ResetPassword />}></Route>
        <Route path="verify" element={<EmailVerified />}></Route>
        <Route path="dashboard" element={<DashboardHolder />}></Route>
      </Routes>
    </HashRouter>




    //  <Reset/>


  )
}

export default App