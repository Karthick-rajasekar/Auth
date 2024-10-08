const express = require('express')
const cors = require('cors')
//const cookieParse = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cors({origin:"http://128.0.0.1:5500",credentials:true}))
//app.use(cookieParse())

const USERS = new Map()
USERS.set("WDS",{id:1,username:"WDS",role:"Admin"})
USERS.set("Kyle",{id:2,username:"Kyle",role:"User"})

const SESSIONS = new Map();

app.get("/",(req,res)=> {
    res.send("helo")
})

app.post("/login",(req,res) => {
    const user = USERS.get(req.body.username)
    if(user == null){
        res.sendStatus(401)
        return
    }
    const sessionId = crypto.randomUUID()
    SESSIONS.set(sessionId,user)
    res
        .cookie("sessionId",sessionId, {
            secure: true,
            httpOnly: true,
            sameSite: "none",
        })
        .send(`Authed as ${req.body.username}`)

})

app.get("/adminData",(req,res) => {
    console.log(req.cookies)
    const user =  SESSIONS.get(req.cookies.sessionId)
    if(user == null){
        res.sendStatus(401)
        return
    }

    if (user.role !== "Admin"){
        res.sendStatus(403)
        return
    }

    res.send("THis is admin stff")


})

app.listen(3000)