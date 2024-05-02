import React from 'react';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import AuthState from './context/authstate';
import Login from './components/Login';
import Signin from './components/Signin';
import FoodState from './context/foodstate';
import DbState from './context/dbstate';
import Profile from './components/Profile';
import ProfState from './context/profstate'
import Searchfood from './components/Searchfood';



function App() {
  const router= createBrowserRouter([
    {path:"/",element:<><Home/></>},
    {path:"/login",element:<><Login/></>},
    {path:"/signup",element:<><Signin/></>},
    {path:"/profile",element:<><Profile/></>},
    {path:"/diet",element:<><Searchfood/></>}
  ])
  return (
   <>
   
   <AuthState>
   <ProfState>
   <DbState>
   <FoodState>
   <RouterProvider router={router}/>
   </FoodState>
   </DbState>
   </ProfState>
   </AuthState>
  
   
   </>
  );
}

export default App;
