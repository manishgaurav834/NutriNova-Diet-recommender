import React,{useState,useEffect,useContext} from 'react'
import authContext from '../context/authcontext'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';



const Nav = (props) => {
  
  const context= useContext(authContext)
  const {logout,success}=context
  const {name}=props
  const [show,setShow]=useState(false)
 
  const Logout=(e)=>{
    e.preventDefault()
    setShow(false)
    logout()
  }

  const handleClick=()=>{
    setShow(!show);

  }
  return (
    <>
      <div className="w-full h-16 p-2  flex items-center fixed top-0 z-10  bg-black/30 overflow-x-hidden text-white">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between">
            <Link to="/"><div className="text-2xl font-bold hover:scale-105">NutriNova</div></Link>
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
            <div className={`${success ? "block" : "hidden"} flex   flex-col justify-center items-center fixed right-2 sm:right-10 `}>
              <div className="flex items-center cursor-pointer hover:scale-105 " onClick={handleClick}>  
              <div className="bg-black rounded-full h-5 w-5 sm:h-10 sm:w-10 mx-2 "></div>
              <div className="font-bold text-lg sm:text-xl"><p className=" cursor-pointer">{name}</p></div>
              </div>
             
              
            </div>
          </div>

         
        </div>
      </div>
      <div className={`fixed top-20 right-2 sm:right-4 cursor-pointer flex-col items-center justify-center p-2 bg-black/40 w-40 z-40 text-lg text-white ${show?'flex':'hidden'}`}>
        <div className="border-b-2 p-2 border-white w-3/5 text-center"><Link to="/profile"><p className="hover:scale-105">Profile</p></Link></div>
        <div className="p-2" onClick={Logout}><p className="hover:scale-105">Logout</p></div>


      
      </div>
      
     
    </>
  );
}

export default Nav
