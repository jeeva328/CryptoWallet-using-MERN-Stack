const express =  require("express")
const mongoose  = require("mongoose")

const buy = mongoose.Schema({
    email:{
      type:String,
      required:true 
    },
    coin_name:{
        type:String,
        required:true
    },
    coin_quan:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("buy",buy)