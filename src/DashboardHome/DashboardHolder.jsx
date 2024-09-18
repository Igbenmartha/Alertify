import React from 'react'
import "./Dashboardholder.css"
// import { DashboardHeader } from '../DashboardHeader/DashboardHeader';
import { DashBoardPages } from '../DashboardPages/DashBoardPages';
import { DashboardHeader } from '../DashboardHeader/DashboardHeader';

const DashboardHolder = () => {
  return (
    <div classNam="App">
      <DashboardHeader />
      <DashBoardPages />
    </div>
  );
}

export default DashboardHolder