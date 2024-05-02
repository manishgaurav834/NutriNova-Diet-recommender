import React,{useState,useContext} from 'react'
import FoodContext from './foodcontext'
import dbContext from './dbcontext'

const Foodstate = (props) => {
   
    const context=useContext(dbContext)
    const [cal,setCal]=useState([])
    const [pro,setPro]=useState([])
    const [fat,setFat]=useState([])
    const [carbs,setCarbs]=useState([])
    const {addfood}=context
    

    const getFood=async (query)=>{
        const url ="https://trackapi.nutritionix.com/v2/natural/nutrients"
        
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "x-app-id":"9092de84",
            "x-app-key":"8fa003c52035a86516846cf2cf0d3af1"
            
            
          },
          
          body:JSON.stringify({query})
        })

        const json=await response.json()

       if(json.foods){
        addfood(json.foods[0].food_name,json.foods[0].nf_calories,json.foods[0].nf_protein,json.foods[0].nf_total_carbohydrate,json.foods[0].nf_sugars,json.foods[0].nf_total_fat,json.foods[0].photo.thumb)
       }
       else{
        alert("Food item not found")

       }




    }

    

    const suggFood=async (query)=>{
   
        const url ="https://trackapi.nutritionix.com/v2/natural/nutrients"
        
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "x-app-id":"9092de84",
            "x-app-key":"8fa003c52035a86516846cf2cf0d3af1"
            
            
          },
          
          body:JSON.stringify({query})
        })
  
        const json=await response.json()
  
        if (json.foods) {
          const new_c = {
              item: json.foods[0].food_name,
              calorie: json.foods[0].nf_calories,
              protein: json.foods[0].nf_protein,
              carbs: json.foods[0].nf_total_carbohydrate,
              sugar: json.foods[0].nf_sugars,
              fat: json.foods[0].nf_total_fat,
              img: json.foods[0].photo.thumb
          };

          // Update state using setCal
          setCal(prevCal => [...prevCal, new_c]);
        }
       else{
        alert("Food item not found")
  
       }
      
  
  
  
  
    }

    const suggFood1=async (query)=>{
   
      const url ="https://trackapi.nutritionix.com/v2/natural/nutrients"
      
      const response = await fetch(url, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "x-app-id":"9092de84",
          "x-app-key":"8fa003c52035a86516846cf2cf0d3af1"
          
          
        },
        
        body:JSON.stringify({query})
      })

      const json=await response.json()

      if (json.foods) {
        const new_c = {
            item: json.foods[0].food_name,
            calorie: json.foods[0].nf_calories,
            protein: json.foods[0].nf_protein,
            carbs: json.foods[0].nf_total_carbohydrate,
            sugar: json.foods[0].nf_sugars,
            fat: json.foods[0].nf_total_fat,
            img: json.foods[0].photo.thumb
        };

        // Update state using setCal
        setPro(prevPro => [...prevPro, new_c]);
      }
     else{
      alert("Food item not found")

     }
    




  }

  const suggFood2=async (query)=>{
   
    const url ="https://trackapi.nutritionix.com/v2/natural/nutrients"
    
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "x-app-id":"9092de84",
        "x-app-key":"8fa003c52035a86516846cf2cf0d3af1"
        
        
      },
      
      body:JSON.stringify({query})
    })

    const json=await response.json()

    if (json.foods) {
      const new_c = {
          item: json.foods[0].food_name,
          calorie: json.foods[0].nf_calories,
          protein: json.foods[0].nf_protein,
          carbs: json.foods[0].nf_total_carbohydrate,
          sugar: json.foods[0].nf_sugars,
          fat: json.foods[0].nf_total_fat,
          img: json.foods[0].photo.thumb
      };

      // Update state using setCal
      setCarbs(prevCarbs => [...prevCarbs, new_c]);
    }
   else{
    alert("Food item not found")

   }
  




}

const suggFood3=async (query)=>{
   
  const url ="https://trackapi.nutritionix.com/v2/natural/nutrients"
  
  const response = await fetch(url, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      "x-app-id":"9092de84",
      "x-app-key":"8fa003c52035a86516846cf2cf0d3af1"
      
      
    },
    
    body:JSON.stringify({query})
  })

  const json=await response.json()

  if (json.foods) {
    const new_c = {
        item: json.foods[0].food_name,
        calorie: json.foods[0].nf_calories,
        protein: json.foods[0].nf_protein,
        carbs: json.foods[0].nf_total_carbohydrate,
        sugar: json.foods[0].nf_sugars,
        fat: json.foods[0].nf_total_fat,
        img: json.foods[0].photo.thumb
    };

    // Update state using setCal
    setFat(prevFat => [...prevFat, new_c]);
  }
 else{
  alert("Food item not found")

 }





}

    

  return (
    <FoodContext.Provider  value={{getFood,suggFood,suggFood1,suggFood2,suggFood3,cal,setCal,pro,carbs,fat,setPro,setCarbs,setFat}}>
        {props.children}
    </FoodContext.Provider>
  )
}

export default Foodstate
