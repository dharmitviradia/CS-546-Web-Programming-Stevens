const express = require('express')
const router = express.Router()
const data = require('../data')
const animalsData = data.animals
const postsData =data.posts

router.get('/:id', async (req, res) => {
  try {
    let animals = await animalsData.getAnimalsById(req.params.id)
    res.json(animals)
  } catch (e) {
    res.status(404).json({error: e })
  }
})

router.get('/', async (req, res) => {
  try {
    let animalsList = await animalsData.getAllAnimals()
    res.json(animalsList)
  } catch (e) {
    res.status(404).json({error: e })
  }
})

router.post('/', async (req, res) => {
  let animalsInfo = req.body

  if (!animalsInfo) {
    res.status(400).json({error: 'You must provide data to create a Animal'})
    return
  }

  if (!animalsInfo.name) {
    res.status(400).json({error: 'You must provide a name'})
    return
  }

  if (!animalsInfo.animalType) {
    res.status(400).json({error: 'You must provide a animalType'})
    return
  }

  try {
    const newanimal = await animalsData.addAnimals(animalsInfo.name, animalsInfo.animalType)
    res.status(200).json(newanimal)
  } catch (e) {
    res.status(404).json({error: e })
  }
})

router.put('/:id', async (req, res) => {
  let animalsInfo = req.body
  try {
    await animalsData.getAnimalsById(req.params.id)
  } catch (e) {
    res.status(404).json({error: 'Animal not found'})
    return
  }

  try {
    const updatedData = await animalsData.updateAnimal(req.params.id, animalsInfo)
    res.json(updatedData)
  } catch (e) {
    res.status(400).json({error: e})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await animalsData.getAnimalsById(req.params.id)
  } catch (e) {
    res.status(404).json({error: 'Animal not found'})
    return
  }

  try {
    const deleteanimal = await animalsData.removeAnimals(req.params.id)
    res.json(deleteanimal)
  } catch (e) {
    res.status(404).json({error: e })
  }
})

module.exports = router