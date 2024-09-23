
import { Navigate, Outlet } from "react-router-dom"
import { AdminNav } from "../ui/AdminNav"
import { Footer } from "../ui/Footer"
import { useAuth } from "../../store/auth"

export const AdminLayout = () => {
  const {user,isLoading} = useAuth()

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  
  if(!user.isAdmin){
    return <Navigate to='/'/>
  }
  return (
<>
      <AdminNav/>
      <Outlet/>
      <Footer/>
      </>
  )
}

