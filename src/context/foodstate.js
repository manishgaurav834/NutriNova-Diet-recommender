import React,{useState,useContext} from 'react'
import FoodContext from './foodcontext'
import dbContext from './dbcontext'

const Foodstate = (props) => {
   
    const context=useContext(dbContext)
    const {addfood}=context

    const getFood=async (query)=>{
        const url ="https://trackapi.nutritionix.com/v2/natural/nutrients"
        
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "x-app-id":"a56f9eb0",
            "x-app-key":"8a3c66cf06c3e4de1a2982ba8ba50f2f"
            
            
          },
          
          body:JSON.stringify({query})
        })

        const json=await response.json()

       if(json.foods){
        addfood(json.foods[0].food_name,json.foods[0].nf_calories,json.foods[0].photo.thumb)
       }
       else{
        alert("Food item not found")

       }




    }

  return (
    <FoodContext.Provider  value={{getFood}}>
        {props.children}
    </FoodContext.Provider>
  )
}

export default Foodstate
