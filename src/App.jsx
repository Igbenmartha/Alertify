import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
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
import Reset from './Reset/Reset'
import Description from '../Description/Description'
import UserPrivate from './Components/Route/UserPrivate'

// import AboutUs from './Components/About Us/AboutUs'

const App = () => {
  return (
   <HashRouter>
    <Routes>
      <Route element={<Layout/>} >
      <Route path= "/" element={<HomePage/>}/>
      <Route path= "contact" element={<Holder/>}/>
      <Route path= "emergency" element={<EmergencyHolder/>}/>
      <Route path='about' element= {<AboutUs/>}/>

      </Route>
      <Route element= {<UserPrivate/>}>
      <Route path= "profile/" element={<ProfilePage/>}/>

      </Route>
      <Route path= "signup" element={<SignUp/>}></Route>
      <Route path= "login" element={<Login/>}></Route>
      <Route path= "signupimage" element={<SignUpImage/>}></Route>

    </Routes>
   </HashRouter>
  
  
  
  
    //  <Reset/>


  )
}

export default App