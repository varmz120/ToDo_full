const mongoose = require('mongoose')

const User=new mongoose.Schema({

    username:{type:String,required:true,unique:true},
    email:{type:String,required:true},
    password:{type:String,required:true}

},
{timestamps:true})