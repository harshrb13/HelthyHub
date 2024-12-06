import React from 'react'
import { Navigate } from 'react-router-dom'
import Loader from '../components/Loader/Loader'

function authProtection({children,isAuthenticated,loading}) {
    if (loading) {
        return <Loader/>
      }else{
        
        if (isAuthenticated) {
            return <Navigate to={"/"}/>
        }else{
            return children
        }
      }
}

export default authProtection