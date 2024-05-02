const express= require('express');
const router=express.Router();
const User = require('../models/User')
const Prof= require('../models/Prof')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET='eathealthybehealthy';

fetchuser= require('../middleware/fetchuser');


router.get('/getdata',fetchuser,async (req,res)=>{

    const prof =await Prof.find({user:req.user.id});
    res.json(prof)

    

})
     
    




router.post('/adddata',fetchuser,async (req,res)=>{

    try {
        const{weight,height,gender,age,acitvity}= req.body;
       
       
      
    
        const prof = new Prof({
            weight , height , gender , age , acitvity, user : req.user.id
    
    
        })
    
        const savedprof = await prof.save()
    
        res.json(savedprof)
    
        
        
    } catch(error){
        console.error(error)
        res.status(500).send('Unexpected ERROR ocuured')
    }
    
   
    

    

})

router.put('/updateprof/:id',fetchuser,async (req,res)=>{

    try {
        const {weight , height , gender , age ,activity,goal} = req.body;

        const newprof ={};
        if(weight)(newprof.weight=weight);
        if(height)(newprof.height=height);
        if(gender)(newprof.gender=gender);
        if(age)(newprof.age=age);
        if(goal)(newprof.goal=goal);
        if(activity)(newprof.activity=activity);
    
        let prof = await Prof.findById(req.params.id)
    
        if(!prof){return res.status(400).send("not found")}
    
        if(prof.user.toString() !== req.user.id){
            return res.status(401).send("not allowed")
        }
    
        prof = await Prof.findByIdAndUpdate(req.params.id,{$set : newprof}, {new:true})
        res.json(prof)
        
    } catch(error){
        console.error(error)
        res.status(500).send('Unexpected ERROR ocuured')
    }
   

})



module.exports=router;