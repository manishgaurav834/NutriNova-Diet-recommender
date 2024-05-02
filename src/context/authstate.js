import React, { useState } from "react";
import AuthContext from './authcontext';

const AuthState = (props) => {

    const [token,setToken]=useState("")
    const [sd,setSD]=useState(false)
    const [sd2,setSD2]=useState(false)
    const [sd3,setSD3]=useState(false)
    const [sd4,setSD4]=useState(false)
    const [sd5,setSD5]=useState(false)

    const [success,setsuccess]=useState(false)
    const [tap,settap]=useState(false)
    const [name,setName]=useState("")

    const login = async (email,password)=>{
        const url ="http://localhost:5000/api/auth/login"
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
           
            
          },
          
          body:JSON.stringify({email,password})
        })

        const json = await response.json();
        
        
        
        setToken(json.authtoken)
        setsuccess(json.success)
        settap(true)
        
        
        
        



    }

    const signin= async (name,email,password)=>{
     
        const url ="http://localhost:5000/api/auth/createuser"
        const response = await fetch(url, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            
            
          },
          
          body:JSON.stringify({name,email,password})
        })

        const json=await response.json()
        setToken(json.authtoken)
        setsuccess(json.success)
        setSD(true)
        settap(true)
        

    }

    const logout=()=>{
      setsuccess(false)
      setToken("")
      settap(false)
    }

    const getuser= async ()=>{
      const url ="http://localhost:5000/api/auth/getuser"
    
      const response = await fetch(url, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token" :token
          
          
        },
        
        
      })

      const json=await response.json()
      
      setName(json.name)
     
      
    }

    


    return (
        <AuthContext.Provider value={{token,setToken,success,login,signin,logout,tap,settap,name,getuser,sd,setSD,sd2,setSD2,sd3,setSD3,sd4,setSD4,sd5,setSD5}}>
            {props.children}
        </AuthContext.Provider>
        
      )


}

export default AuthState