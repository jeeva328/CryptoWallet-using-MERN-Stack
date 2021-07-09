const express =  require("express")
const mongoose  = require("mongoose")

const buy = mongoose.Schema({
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