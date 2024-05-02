import React,{useContext,useEffect} from 'react'
import authContext from '../context/authcontext'
import profContext from '../context/profcontext'
import Nav2 from './Nav2'
import Man from '../images/man.jpg'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
    const context=useContext(authContext)
    const {success,name}=context;
    const Navigate=useNavigate();
    const context1= useContext(profContext);
    const {data,getdata}=context1;

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
  return (
    <>
    <div className="flex flex-col h-screen bg-bgp1 bg-center bg-cover">
    <Nav2/>
    <div className='w-2/5 bg-black/70 container mx-auto left-0 right-0 top-44 sm:top-28 text-white font-bold text-3xl flex items-center justify-center absolute my-auto h-20'>Profile</div>
    <div className='bg-black/70 container mx-auto left-0 right-0 absolute my-auto top-20 sm:top-44 bottom-0 h-1/2 sm:h-[65%] flex w-[95%] sm:w-3/5 '>
        <div className='bg-gray-500 w-32 sm:w-64  sm:ml-16 h-full  '><img src={Man}  className='object-cover w-32 sm:w-full h-full ' /></div>
        <div className='w-3/4 mx-2 sm:mx-10'>
        <div className='flex flex-col gap-y-2 sm:gap-y-3 text-white font-bold text-lg sm:text-xl relative h-max top-24 sm:top-16 border-2   mx-auto right-0 left-0 border-white'>
            <p className="p-1">Name:   {name}</p>
            <p className="p-1 ">Weight:   {`${data  ? data.weight:''}`} Kg</p>
            <p className="p-1 ">Height:   {`${data ? data.height:''}`} cm</p>
            <p className="p-1">Age:   {`${data ? data.age : ''}`} years</p>
            <p className="p-1">Gender:   {`${data ? data.gender:''}`}</p>
            <p className="p-1">Activity:   {`${data ? data.activity:''}`}</p>
            <p className="p-1">Goal:   {`${data ? data.goal:''}`}</p>
            <p className="p-1">BMI:   {`${data ? ((data.weight * 10000)/(data.height*data.height)).toFixed(2):''}`}</p>
        </div>
        </div>

    </div>
    </div>

      
    </>
  )
}

export default Profile
