const mongoose = require('mongoose')
const customerSchema= new mongoose.Schema({
       name:{
        type:String,
        require:true
       },
       email:{
        type:String,
       },
       phone:{
        type:Number
       },
       dob:{
        type:Date,
       },
       address:{
        type:String
       },
},{timestamps:true})

module.exports = new mongoose.model('customer',customerSchema)