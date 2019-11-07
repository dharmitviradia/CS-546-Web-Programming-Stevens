const express = require('express')
const router = express.Router()
const data = require('../data')
const bandData = data.bands


router.get('/:id', async (req, res) => {
  try {
    let band = await bandData.getBandById(req.params.id)
    res.json(band)
  } catch (e) {
    res.status(404).json({error: 'Band not found'})
  }
})

router.get('/genre/:genre', async (req, res) => {
  try {
    let bandgenre = await bandData.searchBandByGenre(genre)
    res.json(bandgenre)
  } catch (e) {
    res.status(500).json({error: e})
  }
})

router.get('/', async (req, res) => {
  try {
    let bandList = await bandData.getAllBands()
    res.json(bandList)
  } catch (e) {
    res.status(500).json({error: e})
  }
})

router.post('/search/:bandmember', async (req, res) => {
  try {
    var body = req.body
    if(!body.name)
      bandList = await bandData.searchBandMemberFullName(body.firstName, body.lastName)
    else
      bandList = await bandData.searchBandMember(body.name)
    res.json(bandList)
  } catch (e) {
    res.status(500).json({error: e})
  }
})
router.post('/search/:bandName', async (req, res) => {
  try {
     bandList = await bandData.searchBandByName(bandName)
    res.json(bandList)
  } catch (e) {
    res.status(500).json({error: e})
  }
})
router.post('/search/:year', async (req, res) => {
  try {
    bandList = await bandData.searchBandByName(bandName)
    res.json(bandList)
  } catch (e) {
    res.status(500).json({error: e})
  }
})

router.post('/search/:year', async (req, res) => {
  try {
      let range = req.body.yearRange
      if (range === "exact"){
       bandList = bandData.searchBandByYear(range)
      }else if (range === "after"){
        bandList =  bandData.searchBandFormedAfter(range)
      }  
      else if(range = "OnorAfter")
        bandList = bandData.searchBandFormedOnOrAfter(range)
      else
        bandList = bandData.searchBandFormedBefore(range)
      res.json(bandList)
    } catch (e) {
      res.status(500).json({error: e})
    }
  })

router.post('/search/:bandmembers', async (req, res) => {
    try {
        let body = req.body
        if(!body.name) 
        throw "Enter valid Band Member"
        let bandId = req.params.id
		    let firstName = req.body.firstName
		    let lastName =req.body.lastName
		    bandList = bandData.addBandMember(bandId, firstName, lastName)
        res.json(bandList)
      } catch (e) {
        res.status(500).json({error: e})
      }
    })

router.delete('/:id/bandmembers', async (req, res) => {
   try{
     let bandId = req.params.id
    let firstName = req.body.firstName
    let lastName =req.body.lastName
    bandList = bandData.removeBandMember(bandId, firstName, lastName)
    res.json(bandList)
    } catch (e) {
    res.status(500).json({error: e})
  }
})

router.delete('/:id', async (req, res) => {
  try{
    let id = req.params.id
   bandList = bandData.removeBand(id)
   res.json(bandList)
   } catch (e) {
   res.status(500).json({error: e})
 }
})

module.exports = router
