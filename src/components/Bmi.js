import React from 'react'

const Bmi = () => {
  return (
    <div className='w-full   p-2'>
    <div className="container mx-auto flex items-center justify-center p-4 w-3/5 bg-black/50 rounded-md">
        <form className='flex w-full justify-between items-center'>
           
            
            <input type="text" id="item" placeholder="Enter Last Meal" name="item" className="text-white border-b-2 focus:border-0 focus:text-white border-white bg-black/80 w-4/5 h-10 p-2 mx-2 " ></input>
            
            <input type="submit" value="Submit" className="bg-indigo-700 text-white hover:scale-105 hover:opacity-95 cursor-pointer font-bold sm:text-xl mx-2 border-2  border-white rounded-md w-32 p-1 h-10 "></input>
        </form>
    </div>
    
   
    </div>
  )
}

export default Bmi
