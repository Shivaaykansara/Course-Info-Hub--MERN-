/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState} from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [token,setToken] = useState(localStorage.getItem('token'))
    const [courses,setCourses] = useState([])
    const [user,setUser] = useState([])
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


    const getCourses = async()=>{
        try {
            const response = await fetch('http://localhost:5000/api/info/courses',{
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                }
            })
            if(response.ok){
                const res_data = await response.json()
                setCourses(res_data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const authentication = async()=>{
        try {
          const response = await fetch(`${Api}/auth/user`,{
            method:'GET',
            headers:{
              Authorization:authorizationToken
            }
          })
    
          if(response.ok){
            const data = await response.json()
            setUser(data.userData)
          }
        
        } catch (error) {
          console.log(error)
          
        }
    }

    useEffect(()=>{
        getCourses(),
        authentication()
    },[])

    return <AuthContext.Provider value={{storeTokenInLS,LogOut,isLoggedIn,Api,authorizationToken,user,courses}}>
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