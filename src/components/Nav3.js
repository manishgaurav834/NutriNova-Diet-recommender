import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const Nav3= (props) => {
  

 
 
  
 
  

  
  return (
    <>
      <div className="w-full h-20 sm:h-16 p-2  flex items-center fixed top-0 z-10  bg-black/70 overflow-x-hidden text-white">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between">
          <Link to="/"><div className="text-2xl font-bold hover:scale-105">NutriNova</div></Link>
            <div
              className={`${
                 "flex items-center justify-center"
              } text-2xl  font-bold ">`}
            > <FontAwesomeIcon icon={faRobot} className='mx-2' />
              Nutri-BOT
            </div>
           
             
              
            </div>
          </div>

         
        </div>

     


      
     
      
     
    </>
  );
}

export default Nav3
