const express = require("express")
const router = express.Router()
const userData = require("../data/users")
const bcrypt = require("bcryptjs")

let cookie
let username

const logger = function (req, res, next) {
    console.log("[%s]: %s %s (%s)",
    new Date().toUTCString(),
    req.method,
    req.originalUrl,
    `${cookie==(req.session.id) ? "Authenticated User" :"Non-Authenticated User"}`
    )
    next()
}

router.use(logger)

router.get("/", async(req, res) => {
    if (cookie) {
        res.redirect("/private")
    } else {
        res.render("login")
        return
    }
})

router.post("/login", async(req, res) => {
    username = (req.body.username)
    user = await userData.getUserData(req.body.username)
    if (!user) {
        res.status(401).render("login",{error:"Username not valid or Incorrect"})
        return;
    } 
    else 
    {
    const pwmatch = await bcrypt.compare(req.body.password, user.hashedPassword)
    if (pwmatch) 
    {
        cookie = req.session.id
        res.redirect("/private")
        return
    } 
    res.status(401).render("login",{error:"Password is Incorrect"})
    return
    }
    
    
});


router.get("/private", async(req, res) => {
    user = await userData.getUserData(username)
    if (cookie)
    {
        res.render("details",
        {
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            profession: user.profession,
            bio: user.bio
        })
    } else {
        res.status(403).render("login")
        return;
    }
})

router.get("/logout", async(req, res) => {
    if (cookie != null)
    {
        req.session.destroy()
        req.session = null
        cookie = null
        res.render("logout")
    } else {
        res.status(403).render("login")
        return;
    }

})


const constructorMethod = app => {
    app.use("/", router)
    app.use("*", (req, res) => {
        res.status(404).send("Invalid Page")
    })
}

module.exports = constructorMethod