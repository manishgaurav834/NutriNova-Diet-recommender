import React,{useContext,useEffect} from 'react'
import Nav from './Nav'
import authContext from '../context/authcontext'
import { useNavigate } from 'react-router-dom'
import Typewriter from 'typewriter-effect';
import Searchfood from './Searchfood';


const Home = () => {

  const context = useContext(authContext)
  const {success,getuser,name}=context;
  const Navigate=useNavigate()
  

  useEffect(() => {
      
      
    if(!success){
      Navigate("/login")
    }
    else{
      getuser()
    }
    }
    // eslint-disable-next-line
  , );

  return (
    <> 
      <div className="flex flex-col h-full bg-bgp bg-center bg-cover">
      <div
        className={`w-full flex items-center transform transition-all duration-1000 ease-linear h-96   text-white text-3xl`}
      >
        <Nav name={name}/>
        <div className="flex flex-col items-center  font-bold text-4xl sm:text-6xl md:text-7xl absolute left-5 lg:left-40 md:left-16">
          <div className="my-4">
            <Typewriter
              options={{
                strings: ["Eat", "Live"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p>Healthy</p>
        </div>
      </div>
      <Searchfood/>
      </div>
    </>
  );
}

export default Home
