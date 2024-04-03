import React,{useContext,useEffect,useState} from 'react'
import FoodContext from '../context/foodcontext'
import DbContext from '../context/dbcontext'
import Fooditem from './Fooditem'
import authContext from '../context/authcontext'


const Searchfood = () => {
    const context= useContext(FoodContext)
    const context1= useContext(DbContext)
    const {getFood}=context;
    const{food,fetchfood,deleteall}=context1;
    const context3=useContext(authContext)
    const {success}=context3
    const [item, setItem]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        getFood(item);
        setItem("")
    }

    const handleChange=(e)=>{
        e.preventDefault();
        setItem(e.target.value)
    }

    const dele = ()=>{
        deleteall();

    }

    useEffect(()=>{
       if(success){ 
       fetchfood()
       }

    },[])

  return (
    <>
    <div className='w-full  bg-left-bottom  p-2'>
    <div className="container mx-auto flex items-center justify-center p-4 w-3/5 bg-black/50 rounded-md">
        <form onSubmit={handleSubmit} className='flex w-full justify-between items-center'>
           
            
            <input type="text" id="item" placeholder="Enter Last Meal" name="item" className="text-white border-b-2 focus:border-0 focus:text-white border-white bg-black/80 w-4/5 h-10 p-2 mx-2 " onChange={handleChange} value={item}></input>
            
            <input type="submit" value="Submit" className="bg-indigo-700 text-white hover:scale-105 hover:opacity-95 cursor-pointer font-bold sm:text-xl mx-2 border-2  border-white rounded-md w-32 p-1 h-10 "></input>
        </form>
    </div>
    <div className="container mx-auto p-4 my-6 bg-black/50 rounded-md flex flex-col items-center justify-center ">
        <div className="text-white flex justify-end w-full p-4 "><p className="border-b-2 border-white hover:scale-105 cursor-pointer" onClick={dele}>Remove All</p></div>

        <div className=' grid md:grid-cols-4  grid-cols-1 sm:grid-cols-2'>
            {food.map((element,key)=>{
                return <div key={key}>
                    <Fooditem item={element.item} calorie={element.calorie} img={element.img} id={element._id} />

                </div>


            })

            }

        </div>

    </div>
    </div>
    
      
    </>
  )
}

export default Searchfood
