const express = require("express")
const route = express.Router()
const sing = require("../sign/Schsign")


route.post("/",async(req,res)=>{
    const sig = await sing.findOne({ email: req.body.email })
    if(sig){
        if(await req.body.pass == sig.pass)
        {
            console.log("is success")
            res.status(200).json({err:null})
        }
        else{
            console.log("pass incorecct")
            res.status(200).json({err:"pass is worng"})
        }
    }
    else{
        console,log("email incorecct")
        res.status(200).json({err:"email is wrong"})
    }
})

module.exports = route