const mongoose = require('mongoose');

const { Schema } = mongoose;

const Food = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'

    },

    item:{
        type:String,
        required:true
    },

    calorie:{
        type:Number,
        required:true
    },
    protein:{
        type:Number,
        required:true
    },
    carbs:{
        type:Number,
        required:true
    },

    sugar:{
        type:Number,
        required:true
    },
    fat:{
        type:Number,
        required:true
    },

    img:{
        type:String,
        required:true
    },
    
    date:{
        type:String,
        default:Date.now
    }



 
});

module.exports=mongoose.model('food',Food);