import React,{useContext,useState,useEffect} from 'react'
import profContext from '../context/profcontext';
import authContext from '../context/authcontext'
import { useNavigate } from 'react-router-dom';

const Pallete2 = () => {
    const context=useContext(profContext)
    const context1 =useContext(authContext)
    const {data,updatedata,getdata}=context
    const {sd3,setSD3,success}=context1;
    const [goal,setGoal]= useState("Maintenence")
    const Navigate = useNavigate()

    const onChange=(e)=>{
        e.preventDefault();
        setGoal(e.target.value);
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        updatedata(data._id,data.weight,data.height,data.gender,data.age,data.activity,goal);

    }

   

    
  return (
    <>
    <div className={`container rounded-md mx-auto left-0 right-0 my-auto top-4 bottom-0 absolute h-max w-2/5 bg-black/90  z-10 ${sd3?'flex flex-col':'hidden'} items-center justify-center p-4 text-white `}>
        <div className={`text-3xl text-white w-full  justify-end ${sd3?'flex':'hidden'}`}><p className="hover:scale-110 cursor-pointer " onClick={()=>{setSD3(false)}}>X</p></div>
        <div className="text-white text-center font-bold text-3xl mb-4">Curent Status</div>
        <div className="text-white text-center font-bold text-xl w-[70%] mb-2 ">BMI: {`${data ? ((data.weight * 10000)/(data.height*data.height)).toFixed(2):''}`}</div>
        <div className="text-white text-center font-bold text-xl w-[70%] mb-2 ">
            {((data.weight * 10000)/(data.height*data.height)).toFixed(2)<=18.5 && 'Under weight'}
            {((data.weight * 10000)/(data.height*data.height)).toFixed(2)>18.5 && ((data.weight * 10000)/(data.height*data.height)).toFixed(2)<=25 && 'Normal weight'}
            {((data.weight * 10000)/(data.height*data.height)).toFixed(2)>25 && ((data.weight * 10000)/(data.height*data.height)).toFixed(2)<=29.5 && 'Over weight'}
            {((data.weight * 10000)/(data.height*data.height)).toFixed(2)>29.5 && 'Obese'}
        </div>
        <div className="text-white flex text-center font-bold text-xl w-full items-center gap-x-2 justify-center "><p className="w-[50%%]">Current Goal:</p>
        <form className="w-[60%] flex items-center justify-center" onSubmit={handleSubmit}>
        <select  id="gender" name="gender" className=" bg-black/20 text-center p-1 h-10 rounded-xl w-full border-2 border-white my-4 text-md font-normal mr-2 "  onChange={onChange} >
              <option value="Maintanence" className="bg-black text-white text-md">Maintenance</option>
              <option value="Gain" className="bg-black text-white text-md">Gain</option>
              <option value="Loose" className="bg-black text-white text-md">Loose</option>
              
          </select>
          <input type="submit" value="Save" className={`bg-black/20 hover:opacity-95 hover:scale-105  text-white text-sm md:text-xl lg:text-2xl font-bold rounded-xl w-full sm:w-3/5 border-2 border-white   h-10 my-4 cursor-pointer`} onClick={()=>{setSD3(false)}}></input>

          </form>
        </div>
      


       </div>
      
      
    </>
  )
}

export default Pallete2
