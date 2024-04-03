import React,{useContext} from 'react'
import Icon from "react-crud-icons";

import dbContext from '../context/dbcontext';




const Fooditem = (props) => {
    const {item,calorie,img,id}=props;
    const context=useContext(dbContext)
    const {deletefood}=context;

    
  return (
    <>
      <div className="m-2 p-2">
        <div className="flex flex-col container mx-auto gap-2 border-2  border-white p-4  bg-black/70 text-white">
          <div className="flex justify-center">
            <img className="h-28 w-52" src={img} alt="" />
          </div>
          <div className="mx-2">
            <p className="font-bold">Food-Item:{item}</p>
          </div>
          <div className="mx-2 ">
            <p>Calorie:{calorie}</p>
           
            
          </div>
          <div className="bg-white/20 h-8 hover:scale-105 flex items-center justify-center w-full cursor-pointer" onClick={()=>{deletefood(id)}} ><i>Delete</i></div>
        </div>
      </div>
    </>
  );
}

export default Fooditem
