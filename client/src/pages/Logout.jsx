import { useEffect } from "react"
import { useAuth } from "../store/auth"
import { Navigate } from "react-router-dom"
import { toast } from "react-toastify" 

export const Logout = () => {
    const {LogOut} = useAuth()

    useEffect(()=>{
        LogOut()
    },[LogOut])
    toast("Logout Successfull")
  return <Navigate to='/login'/>
}
