const express = require("express")
const mongoose = require("mongoose")

var money = mongoose.Schema({
    cus_id: {
        type: String,
        required: true
    },
    cus_money: {
        type: Number,
        require: true
    }

})

module.exports = mongoose.model("money", money)