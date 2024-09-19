import './App.css'
import { AppLayout } from './components/layout/AppLayout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import { Logout } from './pages/Logout';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {path:'/courses',
          element:<Courses/>
        },
        {
          path:'/logout',
          element:<Logout/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {path:'/login',
          element:<Login/>
        },
        {path:'/register',
          element:<Register/>
        },
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
