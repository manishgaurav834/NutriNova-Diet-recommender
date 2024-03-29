import React, { useState } from "react";
import AuthContext from './authcontext';

const AuthState = (props) => {

    const [token,setToken]=useState("")

    const [success,setsuccess]=useState(false)

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
        

    }

    


    return (
        <AuthContext.Provider value={{token,setToken,success,login,signin}}>
            {props.children}
        </AuthContext.Provider>
        
      )


}

export default AuthState