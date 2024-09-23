import "./App.css";
import { AppLayout } from "./components/layout/AppLayout";
import { AdminLayout } from "./components/layout/AdminLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Logout } from "./pages/Logout";
import AdminHome from "./pages/AdminHome";
import AdminUsers from "./pages/AdminUsers";
import AdminCourses from "./pages/AdminCourses";
import AdminContacts from "./pages/AdminContacts";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth } from "./store/auth";

function App() {
  const{user} = useAuth()

  const isAuthenticated = user.isAdmin;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        { path: "/courses", element: <Courses /> },
        {
          path: "/logout",
          element: <Logout />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "/admin", element: (
          <PrivateRoute element={<AdminHome />} isAuthenticated={isAuthenticated} />
        ), },
        {
          path: "/admin/users",
          element: (
            <PrivateRoute element={<AdminUsers />} isAuthenticated={isAuthenticated} />
          ),
        },
        {
          path: "/admin/coursesInfo",
          element: (
            <PrivateRoute element={<AdminCourses />} isAuthenticated={isAuthenticated} />
          ),
        },
        {
          path: "/admin/contacts",
          element: (
            <PrivateRoute element={<AdminContacts />} isAuthenticated={isAuthenticated} />
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
