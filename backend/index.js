const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const buyy = require("./Routbuy")
const signn = require("./sign/Routsign")
const log = require('./login/Routlogin')
const money = require('./money/Routsmoney')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// app.use(express.json())
app.get('/', (req, res) => { res.send('welcome') })
app.use(cors())
app.use("/sign", signn)
app.use("/buy", buyy)
app.use("/login", log)
app.use("/money", money)
mongoose.set("useNewUrlParser", true)
mongoose.set("useUnifiedTopology", true)
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost:27017/project", (err) => {
    if (err) { console.log("error") } else { console.log("connect") }
})


app.listen(2000, () => console.log('2000'))