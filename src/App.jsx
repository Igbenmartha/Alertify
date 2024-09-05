import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import HomePage from './Pages/HomePage/HomePage'

const App = () => {
  return (
   <HashRouter>
    <Routes>
      <Route element={<Layout/>} >
      <Route path= "/" element={<HomePage/>}/>

      </Route>
    </Routes>
   </HashRouter>
  )
}

export default App