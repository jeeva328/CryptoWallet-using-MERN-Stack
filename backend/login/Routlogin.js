const express = require("express")
const route = express.Router()
const sing = require("../sign/Schsign")


route.post("/",async(req,res)=>{
    const sig = await sing.findOne({ email: req.body.email })
    if(sig){
        if(await req.body.pass == sig.pass)
        {
            console.log("is success")
            console.log("email",sig.email);
            res.status(200).json({err:null,id:sig.email})
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