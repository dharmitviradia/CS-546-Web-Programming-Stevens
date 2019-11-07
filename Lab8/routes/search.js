const express = require("express")
const router = express.Router()
const peopleData = require("../data/people")

router.post("/", async (req, res) => {
  let error = []
  let data = []
  let name = req.body.personName

  if(!name)
  {
    error.push("Person Name is not given")
  }
  if(typeof(name) != 'string')
  {
    error.push("name is not a type of string")
  }
  if(name.length === 0)
  {
    error.push("name must be not empty")
  }
  try{
    data = await peopleData.getPersonByName(name)
  }
  catch(e)
  {
    error.push(e)
  }


  res.render("extra/search", {
    layout: false,
    people: data,
    name: name
  })
})

module.exports = router