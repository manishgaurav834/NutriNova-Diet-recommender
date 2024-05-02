const express= require('express');
const router=express.Router();
const User = require('../models/User')
const Food= require('../models/Food')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET='eathealthybehealthy';

fetchuser= require('../middleware/fetchuser');


router.get('/fetchallfood',fetchuser,async (req,res)=>{

    const food =await Food.find({user:req.user.id});
    res.json(food)

    

})
     
    




router.post('/additem',fetchuser,async (req,res)=>{

    try {
        const{item,calorie,protein,carbs,sugar,fat,img}= req.body;
       
       
      
    
        const food = new Food({
            item , calorie ,protein,carbs,sugar,fat,img , user : req.user.id
    
    
        })
    
        const savedfood = await food.save()
    
        res.json(savedfood)
    
        
        
    } catch(error){
        console.error(error)
        res.status(500).send('Unexpected ERROR ocuured')
    }
    
   
    

    

})

router.delete('/deleteitem/:id',fetchuser,async (req,res)=>{


    try {
        let food = await Food.findById(req.params.id)

        if(!food){return res.status(400).send("not found")}
    
        if(food.user.toString() !== req.user.id){
            return res.status(401).send("not allowed")
        }
    
        food = await Food.findByIdAndDelete(req.params.id)
        res.json({"Success": "Note has been deleted", food:food})
        
    } catch(error){
        console.error(error)
        res.status(500).send('Unexpected ERROR ocuured')
    }
   

})



module.exports=router;