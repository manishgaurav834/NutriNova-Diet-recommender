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

    


    return (
        <AuthContext.Provider value={{token,setToken,success,login}}>
            {props.children}
        </AuthContext.Provider>
        
      )


}

export default AuthState