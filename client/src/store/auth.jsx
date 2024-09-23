/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState} from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [token,setToken] = useState(localStorage.getItem('token'))
    const [courses,setCourses] = useState([])
    const [user,setUser] = useState("")
    const [isLoading,setIsLoading] = useState(true)
    const authorizationToken = token
    let isLoggedIn = !!token
    const Api = `https://course-info-hub-mern.onrender.com`

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
            const response = await fetch(`${Api}/api/info/courses`,{
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
            setIsLoading(true)
          const response = await fetch(`${Api}/api/auth/user`,{
            method:'GET',
            headers:{
              Authorization:authorizationToken
            }
          })
    
          if(response.ok){
            const data = await response.json()
            setUser(data.userData)
            setIsLoading(false)
          }
          else{
            setIsLoading(false)
          }
        
        } catch (error) {
          console.log(error)
          
        }
    }

    useEffect(()=>{
        getCourses(),
        authentication()
    },[])

    return <AuthContext.Provider value={{storeTokenInLS,LogOut,user,isLoggedIn,Api,authorizationToken,isLoading,courses}}>
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