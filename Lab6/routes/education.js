const express = require("express")
const router = express.Router()

const education = 
[
    {
        "schoolName": "Stevens Institute of Technology",
        "degree": "Masters in Computer Science",
        "favoriteClass": "CS 546 - Web Programming",
        "favoriteMemory": "Memoral Day was Orientation Day"
    },
    {
        "schoolName": "Atharva College of Engineering",
        "degree": "Bachelors in Computer Engineering",
        "favoriteClass": "Operating Systems and Networking Lab",
        "favoriteMemory": "Memoral Day was Convocation Day"
    },
    {
        "schoolName": "The B.S.G.D's Junior College of Science",
        "degree": "Higher Secondary School Certificate",
        "favoriteClass": "Electronics and Electrical",
        "favoriteMemory": "Memoral Day was First Day to College"
    },
    {
        "schoolName": "St Xavier's High School",
        "degree": "Secondary School Certificate",
        "favoriteClass": "Mathematics",
        "favoriteMemory": "A memorable memory from your time in that school"
    }
]

router.get("/", async (req, res) => 
{

res.json(education)
})


module.exports = router