const mongoose = require('mongoose');

const { Schema } = mongoose;

const Prof = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'

    },

    weight:{
        type:Number,
        required:true,
        
    },

    height:{
        type:Number,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    goal:{
        type:String,
        default:"Maintenence"
    },

    activity:{
        type:String,
        default:"Little to No"
    },
    
    date:{
        type:String,
        default:Date.now
    }



 
});

module.exports=mongoose.model('prof',Prof);