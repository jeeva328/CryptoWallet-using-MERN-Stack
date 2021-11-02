const express = require("express")
const rout = express.Router()
const money = require("./Schmoney")


rout.get("/", async(req, res) => {
    var mon = await money.find()
    console.log(mon)
    res.status(200).json(mon)
})


rout.post('/', async(req, res) => {
    console.log(req.body);
    var sig = await money.create({
        cus_id: req.body.cus_id,
        cus_money: req.body.cus_money
    })
    res.status(200).json(sig)
})

rout.put("/", async(req, res) => {
    console.log("it is in put")
    console.log(req.body)
    const updatebuy = await money.updateOne({ cus_id: req.body.cus_id }, { $set: { cus_money: req.body.cus_money } })
    res.status(200).json(updatebuy)
})

module.exports = rout