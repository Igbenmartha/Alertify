import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import HomePage from './Pages/HomePage/HomePage'
import Holder from './Components/Contact/Holder'

const App = () => {
  return (
   <HashRouter>
    <Routes>
      <Route element={<Layout/>} >
      <Route path= "/" element={<HomePage/>}/>
      <Route path= "contact" element={<Holder/>}/>

      </Route>
    </Routes>
   </HashRouter>
  )
}

export default App