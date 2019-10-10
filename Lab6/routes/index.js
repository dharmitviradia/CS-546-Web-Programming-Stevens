
const aboutRoutes = require("./about.js")
const storyRoutes = require("./story.js")
const educationRoutes = require("./education.js")

const constructorMethod = app => 
{
  app.use("/about", aboutRoutes)
  app.use("/story", storyRoutes)
  app.use("/education", educationRoutes)

  app.use("*", (req, res) => 
  {
    res.status(404).json({ error: "Page Not Found" })
  })
}

module.exports = constructorMethod