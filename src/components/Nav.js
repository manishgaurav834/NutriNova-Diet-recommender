import React,{useState,useEffect} from 'react'

const Nav = () => {
  const [head,setHead]=useState("Eat Healthy")
  useEffect(()=>{
    setTimeout(() => {
      if(head==="Eat Healthy"){
        setHead("Live Healthy")
      }
      else{
        setHead("Eat Healthy")

      }
      
    }, 3000);
  })
  return (
    
   
    <>
    <div className='w-full h-16 p-2  flex items-center fixed top-0 z-10 backdrop-blur-sm bg-black/30 overflow-x-hidden text-white'>
        <div className='container mx-auto overflow-x-hidden'>
            <div className='flex items-center justify-between'>
                <div className="text-2xl font-bold">NutriNova</div>
                <div className="text-2xl  font-bold "><p className="transform transition-all duration-1000 ease-linear">{head}</p></div>


            </div>
        </div>
    </div>
      
    </>
  )
}

export default Nav
