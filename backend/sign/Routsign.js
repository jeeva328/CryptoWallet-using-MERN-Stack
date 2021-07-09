const express = require("express")
const rout = express.Router()
const sign = require("./Schsign")


rout.get("/",(req,res)=>{
    res.send("it is sign")
})


rout.post('/',async(req,res)=>{
    console.log(req.body);
   var sig = await sign.create({
       name:req.body.name,
       dob: req.body.birthday,
       number:req.body.phone,
       email:req.body.email,
       pass:req.body.pass
   })
   res.status(200).json(sig)
})

module.exports = rout