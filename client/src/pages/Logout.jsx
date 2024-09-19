import { useEffect } from "react"
import { useAuth } from "../store/auth"
import { Navigate } from "react-router-dom"

export const Logout = () => {
    const {LogOut} = useAuth()

    useEffect(()=>{
        LogOut()
    },[LogOut])
  return <Navigate to='/login'/>
}
