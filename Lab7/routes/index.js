const animalsRoutes = require("./animals.js")
const postsRoutes = require("./posts.js")
const likesRoutes = require("./likes.js")

const constructorMethod = app => 
{
  app.use("/animals", animalsRoutes)
  app.use("/posts", postsRoutes)
  // app.use("/likes", likesRoutes)

  app.use("*", (req, res) => 
  {
    res.status(404).json({ error: "Page Not Found" })
  })
}

module.exports = constructorMethod