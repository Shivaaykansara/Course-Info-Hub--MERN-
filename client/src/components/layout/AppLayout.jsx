import { Outlet } from "react-router-dom"
import { Footer } from "../ui/Footer"
import { Nav } from "../ui/Nav"

export const AppLayout = () => {
  return (
    <>
        <Nav/>
        <Outlet/>
        <Footer/>
    </>
  )
}
