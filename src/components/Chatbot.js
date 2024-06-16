import React, { useState,useContext,useEffect } from "react";
import Nav3 from "./Nav3";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane,faRobot } from '@fortawesome/free-solid-svg-icons'
import authContext from '../context/authcontext'
import { useNavigate } from 'react-router-dom'

const Chatbot = () => {
  const context=useContext(authContext)
  const {success}=context
  const Navigate=useNavigate();
  const [message,SetMessage] = useState("")
  const [res,SetRes] = useState(["i am here","its fine"]);
  const [mymess,setMymess] = useState([]);
  const [curr,setCurr] = useState([])
  const submit=(e)=>{
    e.preventDefault();
    var n=mymess;
    n.push(message);
    setMymess(n);
    SetMessage("");
    var c=curr;
    c.push(mymess.length-1);
    setCurr(c);
    console.log(mymess);

  }
  const handleChange = (e)=>{
    SetMessage(e.target.value)

  }
  useEffect(() => {
      
      
    if(!success){
      Navigate("/login")
    }
    else{
      
      
     
      

    }
    }
    // eslint-disable-next-line
  , [success]);
  return (
    <>
      <div className="top-0 absolute w-full h-full bg-bgd bg-cover bg-right-bottom chatbot-container ">
        <Nav3 />
        <div className="w-[90%]  h-[70%] absolute top-24 mx-auto right-0 left-0 flex flex-col overflow-y-scroll p-3 ">
          <div className="flex justify-start  ">
          <div className="min-w-[20%] mb-5 max-w-[40%]  py-3 px-7 border-2  border-gray-500 rounded-xl  bg-black text-white text-xl">
            <FontAwesomeIcon icon={faRobot} className="mx-2" /> Hi! How may I
            help you?
          </div>
          </div>
          
          {curr.map((element, key) => {
            return (
              <div key={key} className="flex-col   ">
                <div className="flex justify-end  ">
                <div className="min-w-[20%] max-w-[40%] mb-5  py-3 px-7 border-2 break-all border-gray-500 rounded-xl  bg-blue-400 text-white text-xl">
                  {mymess[element]}
                </div>
                </div>
                <div className="flex justify-start">
                <div className="min-w-[20%] max-w-[40%] mb-5  py-3 px-7  break-all border-2  border-gray-500 rounded-xl  bg-black text-white text-xl">
                <FontAwesomeIcon icon={faRobot} className="mx-2" />{res[element]}
                </div>
                </div>
              </div>
            );
          })}
          </div>
       
        <div className="bottom-8 absolute w-full flex items-center justify-center">
          <div className="w-[90%] flex items-center justify-between">
            <textarea
              placeholder="Ask Nutri-BOT"
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
              className=" flex items-center px-10 py-3 w-[93%] bg-black/80 text-white border-2 border-slate-500 rounded-xl"
            />
            <button
              className="bg-black/80 hover:scale-105 h-16 w-20 text-white text-2xl border-white border-2 rounded-2xl"
              onClick={submit}
            >
              <FontAwesomeIcon icon={faPaperPlane} />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
