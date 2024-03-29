import React,{useContext,useEffect, useState} from 'react'
import Nav from './Nav'
import authContext from '../context/authcontext'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const context = useContext(authContext)
  const {token}=context;
  const Navigate=useNavigate()
  const [img,setImg]=useState("bgd")

  useEffect(() => {
      
      
    if(token===""){
      Navigate("/login")
    }
    else{
      setTimeout(() => {
        if(img==="bgd"){
        setImg("bgp")
        }
        else{
          setImg("bgd")
        }
        
      }, 20000);
   
    }
    }
    // eslint-disable-next-line
  , );

  return (
    <>
    <Nav/>
    <div className={`w-full transform transition-all duration-1000 ease-linear h-screen bg-${img} bg-cover bg-center text-white text-3xl`}></div>
   
    </>
  )
}

export default Home
