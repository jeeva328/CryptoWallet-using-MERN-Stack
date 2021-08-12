const express = require("express")
const rout = express.Router()
const buy = require("./Schbuy")

rout.get("/",async(req,res)=>{
   var buyid = await buy.find()
    res.status(200).json(buyid)
})

rout.post("/",async(req,res)=>{
    console.log("value",req.body)
    var buyid = await buy.create({
        email:req.body.email,
        coin_name:req.body.coin_name,
        coin_quan:req.body.coin_quan
    })
    res.status(200).json(buyid)
})


rout.put("/",async(req,res)=>{
    console.log("it is in put")
    console.log(req.body)  
    const updatebuy = await buy.updateOne({ _id: req.body.id }, { $set: {  coin_quan: req.body.coin_quan} })
    res.status(200).json(updatebuy)
})

rout.delete("/",async(req,res)=>{
    console.log("it is in delete")
    console.log(req.body)
    const delet = await buy.deleteOne({ coin_name: req.body.coin_name })
    res.status(200).json(delet)
})

module.exports = rout