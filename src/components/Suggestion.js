import React,{useContext,useState,useEffect} from 'react'
import authContext from '../context/authcontext'
import profContext from '../context/profcontext'
import FoodContext from '../context/foodcontext'
import DbContext from '../context/dbcontext'
import Fooditem from './Fooditem'

const Suggestion = () => {
    const cc=['roti','rice','avocado','dark chocolate','coconut','banana','sweet potato','peanut butter','almonds','olive oil','honey','granola']
    const pp=['egg','meat','chicken breast','salmon','greek yogurt','pumpkin seeds','sardines','tofu','quinoa','cottage cheese','edamame','cod fish']
    const cb=['whole grain bread','mangoes','brown rice','whole grain pasta','peas','bananas','pumpkin','apples','berries','barley','oats']
    const ff=['butter','red meat','walnuts','cashews','avocado','swiss cheese','sunflower seeds','coconut oil','peanut butter','sausage','feta cheese']
    const [sh,setSh]=useState(false)
    const [sh1,setSh1]=useState(false)
    const [sh2,setSh2]=useState(false)
    const [sh3,setSh3]=useState(false)
    const context = useContext(authContext)
    const {sd5,setSD5}= context
    const context1= useContext(DbContext)
    const{total}=context1;
    const context2=useContext(profContext)
    const {req}=context2
    const context3=useContext(FoodContext)
    const {cal,setCal,suggFood,suggFood1,suggFood2,suggFood3,pro,setPro,carbs,setCarbs,fat,setFat}=context3
    
    
    const handleClick1=(e)=>{
      e.preventDefault();
        if(!sh){
        for(var i=0;i<cc.length;i++){
         suggFood(cc[i])
        }
         
          
       
     
    }
    else{
        setCal([])
    }
        setSh(!sh);
        setSh1(false)
        setSh2(false)
        setSh3(false)


    }

    const handleClick2=(e)=>{
      e.preventDefault();
        if(!sh1){
          for(var i=0;i<pp.length;i++){
            suggFood1(pp[i])
             }
         
       
     
    }
    else{
        setPro([])
    }
        setSh1(!sh1);
        setSh(false)
        setSh2(false)
        setSh3(false)


    }

    const handleClick3=(e)=>{
      e.preventDefault();
        if(!sh2){
          for(var i=0;i<cb.length;i++){
            suggFood2(cb[i])
             }
         
       
     
    }
    else{
        setCarbs([])
    }
        setSh2(!sh2);
        setSh(false)
        setSh1(false)
        setSh3(false)


    }

    const handleClick4=(e)=>{
      e.preventDefault();
        if(!sh3){
          for(var i=0;i<ff.length;i++){
            suggFood3(ff[i])
             }
         
       
     
    }
    else{
        setFat([])
    }
        setSh3(!sh3);
        setSh(false)
        setSh1(false)
        setSh2(false)


    }

    const handleclose=()=>{
      setSD5(false);
      setCal([]);
      setPro([]);
      setFat([]);
      setCarbs([]);
      setSh(false);
      setSh1(false);
      setSh2(false);
      setSh3(false);
    }

    useEffect(() => {
      
        console.log(cal)
        
        }
       
      , []);
  return (
    <>
    <div className={`container rounded-md mx-auto left-0 right-0 my-auto top-0  absolute h-max w-4/5 bg-black/90  z-10 ${sd5?'flex flex-col':'hidden'} items-center justify-center p-4 text-white  `}>
        <div className={`text-3xl text-white w-full flex  justify-end `}><p className="hover:scale-110 cursor-pointer " onClick={handleclose}>X</p></div>
        <div className="text-white text-center font-bold text-3xl mb-8 border-b-2 w-[75%] pb-3">Suggestions</div>
        <div className={` ${total.calorie<req.calorie?"flex flex-col":"hidden"}  w-[75%] mb-4`}>
        <div className="flex items-center justify-between">
        <div className="text-white text-center font-bold text-xl mb-4">{total.calorie<req.calorie && ` You need ${(req.calorie.toFixed(2)-total.calorie.toFixed(2)).toFixed(2)} calories more`}</div>
        
        <button className="text-xl text-white font-bold border-2 hover:scale-105 border-white rounded-md w-44 h-12" onClick={handleClick1}>{sh?"Hide suggestion":"Show suggestion"}</button>
        </div>
        <div className={`overflow-x-scroll ${sh?'block':'hidden'}`}>
        <div className={`${sh?'block':'hidden'} grid grid-cols-12 w-max`}>
            {cal.map((element,key)=>{
                return <div key={key}>
                    <Fooditem item={element.item} calorie={element.calorie} protein={element.protein} carbs={element.carbs} sugar={element.sugar} fat={element.fat} img={element.img} id="abc"/>

                </div>


            })

            }

        </div>

        </div>
        
        </div >
        <div className={` ${total.protein<req.protein?"flex flex-col":"hidden"}  w-[75%] mb-4`}>
        <div className="flex items-center justify-between">
        <div className="text-white text-center font-bold text-xl mb-4">{total.protein<req.protein && ` You need ${(req.protein.toFixed(2)-total.protein.toFixed(2)).toFixed(2)} g protein more`}</div>
        
        <button className="text-xl text-white font-bold border-2 hover:scale-105 border-white rounded-md w-44 h-12" onClick={handleClick2}>{sh1?"Hide suggestion":"Show suggestion"}</button>
        </div>
        <div className={`overflow-x-scroll ${sh1?'block':'hidden'}`}>
        <div className={`${sh1?'block':'hidden'} grid grid-cols-12 w-max`}>
            {pro.map((element,key)=>{
                return <div key={key}>
                    <Fooditem item={element.item} calorie={element.calorie} protein={element.protein} carbs={element.carbs} sugar={element.sugar} fat={element.fat} img={element.img} id="abc"/>

                </div>


            })

            }

        </div>

        </div>
        
        </div>
        <div className={` ${total.carbs<req.carbs?"flex flex-col":"hidden"}  w-[75%] mb-4`}>
        <div className="flex items-center justify-between">
        <div className="text-white text-center font-bold text-xl mb-4">{total.carbs<req.carbs && ` You need ${(req.carbs.toFixed(2)-total.carbs.toFixed(2)).toFixed(2)} g carbs more`}</div>
        
        <button className="text-xl text-white font-bold border-2 hover:scale-105 border-white rounded-md w-44 h-12" onClick={handleClick3}>{sh2?"Hide suggestion":"Show suggestion"}</button>
        </div>
        <div className={`overflow-x-scroll ${sh2?'block':'hidden'}`}>
        <div className={`${sh2?'block':'hidden'} grid grid-cols-12 w-max`}>
            {carbs.map((element,key)=>{
                return <div key={key}>
                    <Fooditem item={element.item} calorie={element.calorie} protein={element.protein} carbs={element.carbs} sugar={element.sugar} fat={element.fat} img={element.img} id="abc"/>

                </div>


            })

            }

        </div>

        </div>
        
        </div>
        <div className={` ${total.fat<req.fat?"flex flex-col":"hidden"}  w-[75%] mb-4`}>
        <div className="flex items-center justify-between">
        <div className="text-white text-center font-bold text-xl mb-4">{total.fat<req.fat && ` You need ${(req.fat.toFixed(2)-total.fat.toFixed(2)).toFixed(2)} g fats more`}</div>
        
        <button className="text-xl text-white font-bold border-2 hover:scale-105 border-white rounded-md w-44 h-12" onClick={handleClick4}>{sh3?"Hide suggestion":"Show suggestion"}</button>
        </div>
        <div className={`overflow-x-scroll ${sh3?'block':'hidden'}`}>
        <div className={`${sh3?'block':'hidden'} grid grid-cols-12 w-max`}>
            {fat.map((element,key)=>{
                return <div key={key}>
                    <Fooditem item={element.item} calorie={element.calorie} protein={element.protein} carbs={element.carbs} sugar={element.sugar} fat={element.fat} img={element.img} id="abc"/>

                </div>


            })

            }

        </div>

        </div>
        
        </div>


       </div>
      
      
    </>
  )
}

export default Suggestion
