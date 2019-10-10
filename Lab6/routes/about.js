const express = require("express")
const router = express.Router()

const myInfo = 
{
    "name": "Dharmit Viradia",
    "cwid": "1045000",
    "biography": "I am currently pursuing Master of Computer Science at Stevens Institute of Technology.\n I am from Mumbai,India and have done my UnderGrad in Computer Engineering at Mumbai University",
    "favoriteShows": ["Chernobyl", "Breaking Bad", "The Office", "The 100"],
    "hobbies": ["Tech Talking", "Hiking", "Learning"]
}


router.get("/", async (req, res) => 
{

res.json(myInfo)
})


module.exports = router