import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import HomePage from './Pages/HomePage/HomePage'
import Holder from './Components/Contact/Holder'
import EmergencyHolder from './Components/EmergencyLine/EmergencyHolder'
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import AboutUs from './Components/About Us/AboutUs'
// import AboutUs from './Components/About Us/AboutUs'

const App = () => {
  return (
   <HashRouter>
    <Routes>
      <Route element={<Layout/>} >
      <Route path= "/" element={<HomePage/>}/>
      <Route path= "contact" element={<Holder/>}/>
      <Route path= "emergecny" element={<EmergencyHolder/>}/>
    

      </Route>
      {/* <Route path=""></Route> */}
      {/* <Route path='AboutUs' element= {<AboutUs/>}/> */}
      <Route path='About' element= {<AboutUs/>}/>
      </Route>
      <Route path= "profile" element={<ProfilePage/>}></Route>
    </Routes>
   </HashRouter>
  )
}

export default App