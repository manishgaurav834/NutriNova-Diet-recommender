import React,{useState,useContext} from 'react'
import DbContext from './dbcontext'
import authContext from './authcontext'

const Dbstate = (props) => {
    const [food,setFood]=useState([])
    const context= useContext(authContext)
    const {token} = context;

    const fetchfood = async ()=>{
        const url ="http://localhost:5000/api/food/fetchallfood"
        const response = await fetch(url, {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            "auth-token" : token
            
          },
  
        });
        const json=await response.json();
        console.log(token)
        console.log(json)
        
  
        setFood(json)
        
  
      }

      const addfood = async (item,calorie,img)=>{
        const url ="http://localhost:5000/api/food/additem"
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token" : token
            
          },
          
          body:JSON.stringify({item,calorie,img})
        });
        const json = await response.json();
        setFood(food.concat(json))
          
        
  
          
  
      }

      const deletefood =async (id)=>{
        const url =`http://localhost:5000/api/food/deleteitem/${id}`
        const response = await fetch(url, {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json",
            "auth-token" : token
            
          },
          
          
        });
       
          
        const newFood = food.filter((food)=>{return food._id!==id})
        setFood(newFood);
  
          
      }

      const deleteall = async ()=>{
        for (var i = 0; i < food.length; i++) {
          const url =`http://localhost:5000/api/food/deleteitem/${food[i]._id}`
          const response = await fetch(url, {
            method: "DELETE", 
            headers: {
              "Content-Type": "application/json",
              "auth-token" : token
              
            },
            
            
          });
        }
        setFood([])
        
      }
  



  return (
    <DbContext.Provider value={{food,fetchfood,addfood,deletefood,deleteall}}>
        {props.children}

    </DbContext.Provider>
    
  )
}

export default Dbstate
