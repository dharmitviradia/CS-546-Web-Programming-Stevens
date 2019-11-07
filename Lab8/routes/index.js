const detailsRoute = require("./details")
const searchRoute = require("./search");
const path = require("path");

const constructorMethod = app => {
  app.use("/search", searchRoute);
  app.use("/details", detailsRoute);

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("./static/people.html"));
  });

};

module.exports = constructorMethod;