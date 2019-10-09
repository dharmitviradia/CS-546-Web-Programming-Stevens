const express = require("express")
const router = express.Router()

const myInfo = { name: 'Dharmit Viradia', dateOfBirth: '12/12', hometown: 'India'}

router.get("/", async (req, res) => {

res.json(myInfo)
})


module.exports = router