import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Nav } from "./Nav"

export const AppLayout = () => {
  return (
    <>
        <Nav/>
        <Outlet/>
        <Footer/>
    </>
  )
}
