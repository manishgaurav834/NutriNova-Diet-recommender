import React,{useState,useEffect,useContext} from 'react'
import authContext from '../context/authcontext'
import Typewriter from 'typewriter-effect';



const Nav = () => {
  
  const context= useContext(authContext)
  const {logout,success}=context
 
  const Logout=(e)=>{
    e.preventDefault()
    logout()
  }
  return (
    <>
      <div className="w-full h-16 p-2  flex items-center fixed top-0 z-10 backdrop-blur-sm bg-black/70 sm:bg-black/30 overflow-x-hidden text-white">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">NutriNova</div>
            <div
              className={`${
                success ? "hidden" : "flex"
              } text-2xl  font-bold ">`}
            >
              <Typewriter
                options={{
                  strings: ["Eat", "Live"],
                  autoStart: true,
                  loop: true,
                }}
              /> <p className='mx-2'>Healthy</p>
            </div>
            <div className={`${success ? "block" : "hidden"}`}>
              <button
                className={`text-xl font-bold h-10 w-28 border-2 border-white text-white rounded-md hover:opacity-95 hover:scale-105 bg-red-700 ${
                  success ? "block" : "hidden"
                }`}
                onClick={Logout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav
