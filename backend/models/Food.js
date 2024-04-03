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
        type:String,
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