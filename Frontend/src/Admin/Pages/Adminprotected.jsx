import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Adminprotected({children}) {
    const navigate=useNavigate();
    const token =localStorage.getItem("token")
    if(!token){
         return <Navigate to={"/admin/login"} replace/>
    }
 return children
}

export default Adminprotected
