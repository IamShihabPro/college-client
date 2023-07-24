import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Signup from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Colleges from "../pages/Colleges/Colleges";
import Home from "../pages/Home/Home";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";
import AddCollege from "../pages/AddCollege/AddCollege";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
            
        },
        {
            path: '/login',
            element: <Login></Login>
            
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/addcollege',
          element: <AddCollege></AddCollege>
        },
        {
          path: '/college',
          element: <Colleges></Colleges>
        },
        {
          path: '/collegedetails/:id',
          element: <PrivateRoutes> <CollegeDetails></CollegeDetails> </PrivateRoutes> ,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/colleges/${params.id}`)
        },
    ]
  },
]);