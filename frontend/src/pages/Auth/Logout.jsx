import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authAction'
import { Navigate } from 'react-router-dom'

function Logout() {
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(logout())
    },[])
    return (
    <Navigate to={'/login'} />
  )
}

export default Logout