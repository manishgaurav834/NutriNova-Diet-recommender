import React,{useContext,useEffect,useState} from 'react'
import authContext from '../context/authcontext'
import profContext from '../context/profcontext'
import FoodContext from '../context/foodcontext'
import DbContext from '../context/dbcontext'

const Progress = () => {
    const context=useContext(authContext)
    const {sd4,setSD4}=context
    const context1= useContext(DbContext)
    const{total}=context1;
    const context2=useContext(profContext)
    const {req}=context2
  return (
    <>
    <div className={`container rounded-md mx-auto left-0 right-0 my-auto top-4 bottom-0 absolute h-max w-2/5 bg-black/90  z-10 ${sd4?'flex flex-col':'hidden'} items-center justify-center p-4 text-white `}>
        <div className={`text-3xl text-white w-full flex  justify-end`}><p className="hover:scale-110 cursor-pointer " onClick={()=>{setSD4(false)}}>X</p></div>
        <div className="text-white text-center font-bold text-3xl mb-4">Today's Progress</div>
        <div className="text-white text-center font-bold text-xl w-[70%] mb-2 ">Calorie: {total.calorie.toFixed(2)}/{req.calorie.toFixed(2)}</div>
        <div className="text-white text-center font-bold text-xl w-[70%] mb-2 ">Protein: {total.protein.toFixed(2)}/{req.protein.toFixed(2)}g</div>
        <div className="text-white text-center font-bold text-xl w-[70%] mb-2 ">Carbs: {total.carbs.toFixed(2)}/{req.carbs.toFixed(2)}g</div>
        <div className="text-white text-center font-bold text-xl w-[70%] mb-2 ">Fat: {total.fat.toFixed(2)}/{req.fat.toFixed(2)}g</div>
        <div className="text-white text-center font-bold text-xl w-[70%] mb-2 ">Sugar: {total.sugar.toFixed(2)}/{req.sugar.toFixed(2)}g</div>
        
      


       </div>
      
      
    </>
  )
}

export default Progress
