import React,{useContext,useState} from 'react'
import authContext from '../context/authcontext'
import profContext from '../context/profcontext'

const Pallete = () => {
    const context= useContext(authContext);
    const {sd,setSD,sd2,setSD2}=context;
    const [cred,setCred]=useState({weight:"",height:"",gender:"male",age:"",activity:"Light to No"})
    const context1= useContext(profContext)
    const {adddata,updatedata,data}=context1;

    const onChange=(e)=>{
      e.preventDefault()
      setCred({...cred,[e.target.name]:e.target.value})
  
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(sd){
      adddata(cred.weight,cred.height,cred.gender,cred.age,cred.activity);
      }
      else{
        updatedata(data._id,cred.weight,cred.height,cred.gender,cred.age,cred.activity)
      }
      setSD(false)
      setSD2(false)

      
      
  
    }

  return (
    <>
       <div className={`container rounded-md mx-auto left-0 right-0 my-auto top-4 bottom-0 absolute h-max w-2/5 bg-black/90  z-10 ${sd | sd2?'flex flex-col':'hidden'} items-center justify-center p-4 text-white `}>
        <div className={`text-3xl text-white w-full   justify-end ${sd2?'flex':'hidden'}`}><p className="hover:scale-110 cursor-pointer " onClick={()=>{setSD2(false)}}>X</p></div>
        <div className="text-white text-center font-bold text-3xl mb-4">Enter Info</div>
       <form onSubmit={handleSubmit} className={`w-full my-1 `}>
          <div className="flex items-center justify-end">
          <label className="font-bold text-lg sm:text-xl my-1 p-3 w-[40%]" htmlFor="weight">Weight(Kg)</label>
          <input type="number" min="0" max="200"  step="any" id="weight" name="weight" className=" bg-black/20 p-2 h-10 rounded-xl w-full border-2 border-white my-4 " onChange={onChange} value={cred.weight} />
          </div>
          <div className="flex items-center ">
          <label className="font-bold text-lg md:text-xl my-1 p-3 w-[40%]" htmlFor="height">Height(cm)</label>
          <input type="number" min="0" max="250"  step="any" id="height" name="height" className=" bg-black/20 p-2 h-10 rounded-xl w-full border-2 border-white my-4 " onChange={onChange} value={cred.height}   />
          </div>
          <div className="flex items-center ">
          <label className="font-bold text-lg md:text-xl my-1 p-3 w-[40%]" htmlFor="gender">Gender</label>
          {/* <input type="text" id="gender" name="gender" className=" bg-black/20 p-2 h-10 rounded-xl w-full border-2 border-white my-4 " onChange={onChange} value={cred.gender}   /> */}
          <select  id="gender" name="gender" className=" bg-black/20 p-2 h-10 rounded-xl w-full border-2 border-white my-4 " onChange={onChange} value={cred.gender} >
              <option value="Male" className="bg-black text-white">Male</option>
              <option value="Female" className="bg-black text-white">Female</option>
              
          </select>
          </div>
          <div className="flex items-center ">
          <label className="font-bold text-lg md:text-xl p-3 my-1 w-[40%]" htmlFor="age">Age(years)</label>
          <input type="number" min="0" max="150" id="age" name="age" className=" bg-black/20 p-2 h-10 rounded-xl w-full border-2 border-white my-4 " onChange={onChange} value={cred.age}   />
          </div>
         
          <div className="flex items-center ">
          <label className="font-bold text-lg md:text-xl my-1 p-3 w-[40%]" htmlFor="activity">Activity</label>
          {/* <input type="text" id="gender" name="gender" className=" bg-black/20 p-2 h-10 rounded-xl w-full border-2 border-white my-4 " onChange={onChange} value={cred.gender}   /> */}
          <select  id="activity" name="activity" className=" bg-black/20 p-2 h-10 rounded-xl w-full border-2 border-white my-4 " onChange={onChange} value={cred.activity} >
              <option value="Little to No" className="bg-black text-white">Little to No</option>
              <option value="Lightly Active" className="bg-black text-white">1-3 days/week</option>
              <option value="Moderately Active" className="bg-black text-white">3-5 days/week</option>
              <option value="Very Active" className="bg-black text-white">6-7 days/week</option>
              <option value="Extremely Active" className="bg-black text-white">2X/day</option>
              
          </select>
          </div>
          <div className='flex '>
         <div className="flex w-full justify-center">
         <input type="submit" value="Update" className={`bg-green-600 hover:opacity-95  text-white text-sm md:text-xl lg:text-2xl font-bold rounded-xl w-full sm:w-3/5 border-2 border-white   h-12 my-4 cursor-pointer`}></input>
         </div>
          </div>

        
        </form>


       </div>
      
    </>
  )
}

export default Pallete
