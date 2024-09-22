
import { Outlet } from "react-router-dom"
import { AdminNav } from "../ui/AdminNav"
import { Footer } from "../ui/Footer"

export const AdminLayout = () => {
  return (
<>
      <AdminNav/>
      <Outlet/>
      <Footer/>
      </>
  )
}

