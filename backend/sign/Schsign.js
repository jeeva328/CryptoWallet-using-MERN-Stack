const express = require("express")
const mongoose = require("mongoose")

var sign = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("sign",sign)