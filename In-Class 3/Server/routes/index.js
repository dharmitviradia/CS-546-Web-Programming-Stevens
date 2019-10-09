const peopleRoutes = require("./people.js")
const myinfoRoutes = require("./myinfo.js")

const constructorMethod = app => {
  app.use("/people", peopleRoutes)
  app.use("/myinfo", myinfoRoutes)

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" })
  })
}

module.exports = constructorMethod