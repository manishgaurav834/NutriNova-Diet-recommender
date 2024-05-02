import React,{useState} from 'react'
import SuggContext from './suggContext'

const Suggstate = () => {
  const [dict,Setdict] = useState({'calorie':['banana']});


  return (
    <SuggContext.Provider  value={{dict}}>
        {props.children}
    </SuggContext.Provider>
  )
}

export default Suggstate
