import React,{useState,useContext} from 'react'
import ProfContext from './profcontext'
import authContext from './authcontext'

const ProfState = (props) => {
    const [data,setData]=useState(false)
   
    const context= useContext(authContext)
    const {token} = context;
    
    const [req,setReq]= useState({calorie:0,protein:0,carbs:0,sugar:0,fat:0})

    const getdata= async ()=>{
        const url ="http://localhost:5000/api/prof/getdata"
        const response = await fetch(url, {
          method: "GET", 
          headers: {
            "Content-Type": "application/json",
            "auth-token" : token
            
          },
  
        });
        const json=await response.json();
        console.log(json)
        if(json.length>0){
        setData(json[0])
        
        const new_r ={calorie:0,protein:0,carbs:0,sugar:0,fat:0}
        
          new_r.protein=1.2*json[0].weight
          new_r.fat=1.2*json[0].weight
          var mult=1;
          switch(json[0].activity){
            case "Light to No":
              mult=1.2;
              break;
            case "Lightly Active":
              mult=1.375;
              break;
            case "Moderately Active":
              mult=1.55;
              break;
            case "Very Active":
              mult=1.725;
              break;
            case "Extremely Active":
              mult=1.9;
              break;
          }
        var BMR=0;
        if(json[0].gender==="male"){
          BMR=(mult*(10*json[0].weight+6.25*json[0].height-5*json[0].age+5))
        }
        else{
          BMR=(mult*(10*json[0].weight+6.25*json[0].height-5*json[0].age+5-161))
        }
        switch(json[0].goal){
          case "Maintanence":
            BMR+=0;
            break;
          case "Gain":
            BMR+=750;
            break;
          case "Loose":
            BMR-=750;
            break;
        }
        new_r.calorie=BMR
        new_r.carbs=(BMR*0.65)/4
        
        setReq(new_r)
        console.log("asgdhags")
      }

        
        
  
      }

      const adddata = async (weight,height,gender,age,activity)=>{
        const url ="http://localhost:5000/api/prof/adddata"
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token" : token
            
          },
          
          body:JSON.stringify({weight,height,gender,age,activity})
        });
        const json = await response.json();
        console.log(json)
        console.log(json._id)
        
        setData(json)
        const new_r ={calorie:0,protein:0,carbs:0,sugar:0,fat:0}
       
          new_r.protein=1.2*json.weight
          new_r.fat=1.2*json.weight
          var mult=1;
          switch(json.activity){
            
            case "Light to No":
              mult=(1.2);
              break;
            case "Lightly Active":
              mult=(1.375);
              break;
            case "Moderately Active":
              mult=(1.55);
              break;
            case "Very Active":
              mult=(1.725);
              break;
            case "Extremely Active":
              mult=(1.9);
              break;
          }
        var BMR=0;
        if(json.gender==="male"){
          BMR=(mult*(10*json.weight+6.25*json.height-5*json.age+5))
        }
        else{
          BMR=(mult*(10*json.weight+6.25*json.height-5*json.age+5-161))
        }
        switch(json.goal){
          case "Maintanence":
            BMR+=0;
            break;
          case "Gain":
            BMR+=750;
            break;
          case "Loose":
            BMR-=750;
            break;
        }
        new_r.calorie=BMR
        new_r.carbs=(BMR*0.65)/4
          
        setReq(new_r)

        
          
        
  
          
  
      }

      const updatedata =async (id,weight,height,gender,age,activity,goal)=>{
        const url =`http://localhost:5000/api/prof/updateprof/${id}`
        const response = await fetch(url, {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
            "auth-token" : token
            
          },
          body:JSON.stringify({weight,height,gender,age,activity,goal})
          
        });
        const json = await response.json();
        console.log(json)
        setData(json)
        console.log(data);
        const new_r ={calorie:0,protein:0,carbs:0,sugar:0,fat:0}
          var mult=1;
          new_r.protein=1.2*data.weight
          new_r.fat=1.2*data.weight
          switch(json.activity){
            case "Light to No":
              mult=(1.2);
              break;
            case "Lightly Active":
              mult=(1.375);
              break;
            case "Moderately Active":
              mult=(1.55);
              break;
            case "Very Active":
              mult=(1.725);
              break;
            case "Extremely Active":
              mult=(1.9);
              break;
          }
        var BMR=0;
        if(json.gender==="male"){
          BMR=(mult*(10*json.weight+6.25*json.height-5*json.age+5))
        }
        else{
          BMR=(mult*(10*json.weight+6.25*json.height-5*json.age+5-161))
        }
        switch(json.goal){
          case "Maintanence":
            BMR+=0;
            break;
          case "Gain":
            BMR+=750;
            break;
          case "Loose":
            BMR-=750;
            break;
        }
        new_r.calorie=BMR
        new_r.carbs=(BMR*0.65)/4
          
          setReq(new_r)
       
          
        
  
          
      }

     
  



  return (
    <ProfContext.Provider value={{data,getdata,adddata,updatedata,req}}>
        {props.children}

    </ProfContext.Provider>
    
  )
}

export default ProfState
