/* eslint-disable react/prop-types */
import { createContext, useContext, useState} from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [token,setToken] = useState(localStorage.getItem('token'))
    const authorizationToken = token
    let isLoggedIn = !!token
    const Api = `http://localhost:5000/api`

    const storeTokenInLS = (serverToken)=>{
        setToken(serverToken)
        return localStorage.setItem('token',serverToken)
    }

    const LogOut = ()=>{
        setToken("")
        return localStorage.removeItem('token')
    }

    return <AuthContext.Provider value={{storeTokenInLS,LogOut,isLoggedIn,Api,authorizationToken}}>
        {children}
        </AuthContext.Provider>
}

export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside the Provider")
    }
    return authContextValue
}