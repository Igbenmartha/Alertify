import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const UserPrivate = () => {
    const token = useSelector((state)=> state.user.token)
  return (
    <>
    {
        token ? <Outlet/> : <Navigate to ="/login"/>
    }
    </>
  )
}

export default UserPrivate