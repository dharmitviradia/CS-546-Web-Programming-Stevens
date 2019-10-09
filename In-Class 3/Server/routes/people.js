const express = require("express")
const router = express.Router()
const data = require("../data/people.js")
const peopleData = data

router.get("/:id", async (req, res) => {
    try {
      const ParseID = parseInt(req.params.id)
      const user = await peopleData.getPeopleById(ParseID) 
      res.json(user) 
    } catch (e) {
      res.status(404).json({ message: e })
    }
  }) 
  
router.get("/", async (req, res) => {
    try {
      const userList = await peopleData.getPeople() 
      res.json(userList) 
    } catch (e) {
      // Something went wrong with the server!
      res.status(500).send() 
    }
  }) 
  
router.post("/", async (req, res) => {
    // Not implemented
    res.status(501).send() 
  }) 
  
  module.exports = router 