const express = require("express")
const router = express.Router()
const peopleData = require("../data/people")

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id)
  const person = []
  person.push(await peopleData.getPersonById(id))
  res.render("extra/details", { people: person, layout: false })
})

module.exports = router