import React,{useContext, useEffect, useState} from 'react'
import authContext from '../context/authcontext'
import { useNavigate,Link } from 'react-router-dom'
import Nav from './Nav'

const Login = () => {
  const context = useContext(authContext)
  const {login,token}=context
  const Navigate =useNavigate()
  const [cred,setCred]=useState({email:"",password:""})

  const handleSubmit=(e)=>{
    e.preventDefault()
    login(cred.email,cred.password)

  }

  useEffect(()=>{
    if(token!==""){
      Navigate('/')
    }


  })

  const onChange=(e)=>{
    e.preventDefault()
    setCred({...cred,[e.target.name]:e.target.value})

  }
  return (
    <>
      <Nav/>
      <div className="top-28 flex flex-col items-center absolute w-full  h-screen overflow-x-hidden px-3">
        <div className="font-bold text-xl sm:text-2xl my-2">Login with valid Credentials</div>
        <div className="container mx-auto p-4 flex flex-col sm:w-2/5 items-center border-2 border-black rounded-lg overflow-x-hidden ">
       
        <form onSubmit={handleSubmit} className={`w-full my-3 `}>
          <label className="font-bold text-lg sm:text-xl my-4" htmlFor="email">E-mail</label><br/>
          <input type="email" id="email" name="email" className="active:bg-slate-400 p-2 h-10 rounded-xl w-full border-2 border-black my-4" onChange={onChange} value={cred.email} /><br/>
          <label className="font-bold text-lg md:text-xl my-4" htmlFor="password">Password</label><br/>
          <input type="text" id="password" name="password" className="active:bg-slate-400 p-2 h-10 rounded-xl w-full border-2 border-black my-4" onChange={onChange} value={cred.password}  required minLength={5} /><br/>
          <div className='flex gap-x-6'>
         <div className="flex w-full justify-center">
         <input type="submit" value="Login" className="bg-green-600 hover:opacity-95 hover:scale-105 text-white text-sm md:text-xl lg:text-2xl font-bold rounded-xl w-full sm:w-2/5 border-2 border-black   h-12 my-4 cursor-pointer"></input>
         </div>
          </div>
        
        </form>




        </div>
        <div className="text-2xl my-3 overflow-x-hidden">or</div>
        <div className="container mx-auto p-4 flex flex-col items-center justify-between w-4/5 overflow-x-hidden ">
          
          <div className="font-bold text-2xl  hidden sm:flex justify-center w-full">Don't have an account?....create one now</div>
          <div className="font-bold text-xl flex sm:hidden justify-center"><p>Don't have an account?</p></div>
          
          <Link to="/signup" className="hover:opacity-95 hover:scale-105 my-3 h-12  w-full sm:w-1/3 sm:mx-2 flex items-center md:text-xl lg:text-2xl justify-center font-bold bg-indigo-500 border-black border-2 text-white rounded-xl">Sign-up</Link>

        </div>


    </div>
      
    

    </>
  )
}

export default Login
