import React,{useContext,useEffect,useState} from 'react'
import FoodContext from '../context/foodcontext'
import DbContext from '../context/dbcontext'
import Fooditem from './Fooditem'
import authContext from '../context/authcontext'
import { useNavigate } from 'react-router-dom'
import profContext from '../context/profcontext';
import Nav from './Nav'
import Progress from './Progress'


const Searchfood = () => {
    const context= useContext(FoodContext)
    const context1= useContext(DbContext)
    const context2=useContext(profContext)
    const {getFood}=context;
    const{food,fetchfood,deleteall,total}=context1;
    const context3=useContext(authContext)
    const {success,name,sd4,setSD4}=context3
    const [item, setItem]=useState("")
    const {req,getdata}=context2
    const Navigate=useNavigate()

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
       getdata()
       console.log(food)
       }
       else{
        Navigate('/login')
       }


    },[])

  return (
    <>
    <Progress/>
    <div className={`flex flex-col min-h-screen h-full bg-bgp bg-center bg-cover ${sd4?'pointer-events-none opacity-60':''}`}>
      
      <div
        className={`w-full flex items-center transform transition-all duration-1000 ease-linear h-48  text-white text-3xl`}
      >
        <Nav name={name}/>
      </div>
    <div className='w-full   p-2'>
    <div className="container mx-auto flex items-center justify-center p-4 w-4/5 sm:w-3/5 bg-black/50 rounded-md">
        <form onSubmit={handleSubmit} className='flex w-full justify-between items-center'>
           
            
            <input type="text" id="item" placeholder="Search Food Item" name="item" className="text-white border-b-2 focus:border-0 focus:text-white border-white bg-black/80 w-4/5 h-10 p-2 mx-2 " onChange={handleChange} value={item}></input>
            
            <input type="submit" value="Add" className="bg-black/50 text-white hover:scale-105 hover:opacity-95 cursor-pointer font-bold sm:text-xl mx-2 border-2  border-white rounded-md w-32 p-1 h-10 "></input>
        </form>
    </div>
    <div className="container mx-auto p-4 my-6 bg-black/50 rounded-md flex flex-col items-center justify-center ">
        <div className="text-white flex   justify-between w-full p-4 container mx-auto ">
          <div>
            <button className="bg-black/20 border-2 border-white text-white w-40 hover:scale-105 rounded-md h-10 text-xl font-bold" onClick={()=>{setSD4(true)}}> See Progress</button>
          </div>
        
          <div className="min-w-20">
          <p className="border-b-2 text-center border-white hover:scale-105 cursor-pointer" onClick={dele}>Remove All</p>
          </div>
          </div>

        <div className=' grid md:grid-cols-3  lg:grid-cols-4  grid-cols-1 sm:grid-cols-2'>
            {food.map((element,key)=>{
                return <div key={key}>
                    <Fooditem item={element.item} calorie={element.calorie} protein={element.protein} carbs={element.carbs} sugar={element.sugar} fat={element.fat} img={element.img} id={element._id}/>

                </div>


            })

            }

        </div>

    </div>
    </div>
    </div>
    
      
    </>
  )
}

export default Searchfood
