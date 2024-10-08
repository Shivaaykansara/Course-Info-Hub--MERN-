
import { Outlet } from "react-router-dom"
import { AdminNav } from "../ui/AdminNav"
import { Footer } from "../ui/Footer"
import { useAuth } from "../../store/auth"

export const AdminLayout = () => {
  const {isLoading} = useAuth()

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (<div>
      <AdminNav/>
      <Outlet/>
      <Footer/>
      </div>
  )
}

