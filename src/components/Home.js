import React,{useContext,useEffect} from 'react'
import Nav from './Nav'
import authContext from '../context/authcontext'
import { useNavigate } from 'react-router-dom'
import Typewriter from 'typewriter-effect';
import Searchfood from './Searchfood';
import Bmi from './Bmi';
import Pallete from './Pallete';
import profContext from '../context/profcontext';
import { Link } from 'react-router-dom';
import DbContext from '../context/dbcontext';
import Pallete2 from './Pallete2';
import Suggestion from './Suggestion';

const Home = () => {

  const context = useContext(authContext)
  const {success,getuser,name,sd,sd2,setSD2,sd3,setSD3,sd5,setSD5}=context;
  const Navigate=useNavigate()
  const context1=useContext(profContext)
  const {data,getdata,req}=context1
  const context2= useContext(DbContext)
  const{fetchfood,total}=context2;
  

  useEffect(() => {
      
      
    if(!success){
      Navigate("/login")
    }
    else{
      getuser()
      console.log("hdghjdsg")
      
     
      

    }
    }
    // eslint-disable-next-line
  , );

  useEffect(() => {
      
      
    if(!success){
      Navigate("/login")
    }
    else{
      getdata();
    }
    }
    // eslint-disable-next-line
  , []);

  useEffect(() => {
      
      
    if(!success){
      Navigate("/login")
    }
    else{
      fetchfood();
    }
    }
    // eslint-disable-next-line
  , []);


  


  

  return (
    <> 
      <Suggestion/>
      <Pallete/>
      <Pallete2/>
      <div className={`flex flex-col h-full min-h-screen bg-bgp bg-center bg-cover ${sd | sd2 | sd3 | sd5?'pointer-events-none opacity-60':''}`}>
      
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
    
      {/* <Searchfood/> */}
      <div className="flex flex-col gap-y-8 relative left-5 lg:left-36 md:left-16 w-[70%]  ">
        <div className="flex w-full items-center justify-start gap-x-8">
        <button className="h-16 w-80 text-2xl hover:scale-105 hover:opacity-95 rounded-full  bg-black/50 text-white font-bold border-2 border-white" onClick={()=>{setSD2(true)}}>Update Information</button>
        <button className="h-16 w-80 text-2xl hover:scale-105 hover:opacity-95 rounded-full  bg-black/50 text-white font-bold border-2 border-white" onClick={()=>{setSD5(true)}}>Get Suggestion</button>
        </div>
        <div className="flex w-full items-center justify-start gap-x-8">
        <Link to="diet"><button className="h-16 w-80 text-2xl hover:scale-105 hover:opacity-95 rounded-full  bg-black/50 text-white font-bold border-2 border-white" >See Today's Diet</button></Link>
        <button className="h-16 w-80 text-2xl hover:scale-105 hover:opacity-95 rounded-full  bg-black/50 text-white font-bold border-2 border-white" >About Us</button>
        </div>
        <div className="flex w-full items-center justify-start gap-x-8">
        <button className="h-16 w-80 text-2xl hover:scale-105 hover:opacity-95 rounded-full  bg-black/50 text-white font-bold border-2 border-white" onClick={()=>{setSD3(true)}} >Check BMI/Goals</button>
        <Link to="/chat"><button className="h-16 w-80 text-2xl hover:scale-105 hover:opacity-95 rounded-full  bg-black/50 text-white font-bold border-2 border-white" >Ask From AI</button></Link>
        </div>
     
      </div>
      </div>
      
    </>
  );
}

export default Home
