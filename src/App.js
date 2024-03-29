import React from 'react';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import AuthState from './context/authstate';
import Login from './components/Login';



function App() {
  const router= createBrowserRouter([
    {path:"/",element:<><Home/></>},
    {path:"/login",element:<><Login/></>}
  ])
  return (
   <>
   <AuthState>
   <RouterProvider router={router}/>
   </AuthState>
   
   </>
  );
}

export default App;
