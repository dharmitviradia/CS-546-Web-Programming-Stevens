const express = require("express")
const app = express()
const configRoutes = require("./routes")
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars")
const session = require("express-session")
const cookieParser = require("cookie-parser")
var nofavicon = require("express-no-favicons")
const static = express.static(__dirname + "/public")

app.use("/public", static)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cookieParser())
app.use(nofavicon())
app.use(session({
    name: 'AuthCookie',
    secret: 'some secret string!',
    resave: false,
    saveUninitialized: true
}))


app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")


configRoutes(app)

app.listen(3000, () => {
  console.log("We've now got a server!")
  console.log("Your routes will be running on http://localhost:3000")
})