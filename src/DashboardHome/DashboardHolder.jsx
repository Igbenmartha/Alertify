import React from 'react'
import "./Dashboardholder.css"
// import { DashboardHeader } from '../DashboardHeader/DashboardHeader';
import { DashBoardPages } from '../DashboardPages/DashBoardPages';
import { DashboardHeader } from '../DashboardHeader/DashboardHeader';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const DashboardHolder = () => {
  const userToken = useSelector((state)=> state.user.token)
  const isAdmin=useSelector((state)=>state.user?.isAdmin)
  //  const isAdmin = useSelector(state=> state.user)
  // console.log(isAdmin);
  console.log("hello this is your",userToken)
  return (
    <div classNam="App">
      {isAdmin  ?  (
        <>
          <DashboardHeader />
          <DashBoardPages />
        </>
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  );
}

export default DashboardHolder