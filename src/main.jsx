import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import MainRoot from './components/MainRoot/MainRoot.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/Errorpage/ErrorPage.jsx';
import OurServices from './components/OurServices/OurServices.jsx';
import EammuImmigrationServices from './components/EammuGroupWebsites/EammuImmigrationServices/EammuImmigrationServices.jsx';
import EammuFashion from './components/EammuGroupWebsites/EammuFashion/EammuFashion.jsx';
import TargetUsaInterview from './components/EammuGroupWebsites/EammuImmigrationServices/TargetUsaInterview/TargetUsaInterview.jsx';
import EammuNewsfeeds from './components/EammuUsefulLinks/EammuNewsfeeds/EammuNewsfeeds.jsx';
import EammuCareers from './components/EammuUsefulLinks/EammuCareers/EammuCareers.jsx';
import SignUp from './components/SignupLogin/SignUp/SignUp.jsx';
import LogIn from './components/SignupLogin/LogIn/LogIn.jsx';
import Details_More from './components/Home/Services_Card_Section/Student_visa/Details_More.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/ourServices',
        element:<OurServices></OurServices>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/eammuimmigrationservices',
        element:<EammuImmigrationServices></EammuImmigrationServices>
      },
      {
        path:'/university_details/:id',
        element:<Details_More></Details_More>,
      },
      // Sub Organization of Eammu Immigration Services
      {
        path:'/targetusavisainterview',
        element:<TargetUsaInterview></TargetUsaInterview>
      },
      {
        path:'/eammufashion',
        element:<EammuFashion></EammuFashion>
      },
   
      // Eammu Use Full Links
      {
        path:'/eammunewsfeeds',
        element:<EammuNewsfeeds></EammuNewsfeeds>
      },
      {
        path:'/eammucareers',
        element:<EammuCareers></EammuCareers>
      },
      // SignUp And LogIn
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
