import React,{useState,useContext} from 'react'
import DbContext from './dbcontext'
import authContext from './authcontext'

const Dbstate = (props) => {
    const [food,setFood]=useState([])
    const [total,setTotal]=useState({calorie:0,protein:0,carbs:0,sugar:0,fat:0})
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
        
        const new_t={calorie:0,protein:0,carbs:0,sugar:0,fat:0}
        setFood(json)
        for(var i=0;i<json.length;i++){
          new_t.calorie+=json[i].calorie
          new_t.protein+=json[i].protein
          new_t.carbs+=json[i].carbs
          new_t.sugar+=json[i].sugar
          new_t.fat+=json[i].fat
        }
        setTotal(new_t)
        console.log(total.calorie)
        
  
      }

      const addfood = async (item,calorie,protein,carbs,sugar,fat,img)=>{
        const url ="http://localhost:5000/api/food/additem"
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token" : token
            
          },
          
          body:JSON.stringify({item,calorie,protein,carbs,sugar,fat,img})
        });
        const json = await response.json();
        const new_t={calorie:total.calorie+json.calorie,protein:total.protein+json.protein,carbs:total.carbs+json.carbs,sugar:total.sugar+json.sugar,fat:total.fat+json.fat}
        setFood(food.concat(json))
        setTotal(new_t)
          
        
  
          
  
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
       
        const json = await response.json();
        const newFood = food.filter((food)=>{return food._id!==id})
        setFood(newFood);
        const new_t={calorie:total.calorie-json.food.calorie,protein:total.protein-json.food.protein,carbs:total.carbs-json.food.carbs,sugar:total.sugar-json.food.sugar,fat:total.fat-json.food.fat}
        setTotal(new_t)
        
  
          
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
        const new_t={calorie:0,protein:0,carbs:0,sugar:0,fat:0}
        setTotal(new_t)
        
      }
  



  return (
    <DbContext.Provider value={{food,fetchfood,addfood,deletefood,deleteall,total}}>
        {props.children}

    </DbContext.Provider>
    
  )
}

export default Dbstate
