import React from 'react'

import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';



const Nav2= (props) => {
  

 
 
  
 
  

  
  return (
    <>
      <div className="w-full h-20 sm:h-16 p-2  flex items-center fixed top-0 z-10  bg-black/70 overflow-x-hidden text-white">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between">
          <Link to="/"><div className="text-2xl font-bold hover:scale-105">NutriNova</div></Link>
            <div
              className={`${
                 "flex"
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
           
             
              
            </div>
          </div>

         
        </div>

     


      
     
      
     
    </>
  );
}

export default Nav2
