import React,{useContext,useEffect} from 'react'
import Nav from './Nav'
import authContext from '../context/authcontext'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const context = useContext(authContext)
  const {token}=context;
  const Navigate=useNavigate()

  useEffect(() => {
      
      
    if(token===""){
      Navigate("/login")
    }
    else{
   
    }
    }
    // eslint-disable-next-line
  , []);

  return (
    <>
    <Nav/>
   
    </>
  )
}

export default Home
