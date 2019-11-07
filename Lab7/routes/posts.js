const express = require('express')
const router = express.Router()
const data = require('../data')
const postData = data.posts

router.get('/:id', async (req, res) => {
  try {
    const post = await postData.getPostById(req.params.id)
    res.status(200).json(post)
  } catch (e) {
    res.status(404).json({error: 'Post not found'})
  }
})

router.get('/', async (req, res) => {
  try {
    const postList = await postData.getAllPosts()
    res.json(postList)
  } catch (e) {
    res.status(404).json({error: e})
  }
})

router.post('/', async (req, res) => {
  let blogPostData = req.body
  try {
    const {title, author, content} = blogPostData
    const newPost = await postData.addPost(title, author, content)
    res.status(200).json(newPost)
  } catch (e) {
    res.status(400).json({error: e})
  }
})

router.put('/:id', async (req, res) => {
  let updatedData = req.body
  try {
    await postData.getPostById(req.params.id)
  } catch (e) {
    res.status(404).json({error: 'Post not found'})
    return
  }

  try {
    const updatedPost = await postData.updatePost(req.params.id, updatedData)
    res.json(updatedPost)
  } catch (e) {
    res.status(400).json({error: e})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await postData.getPostById(req.params.id)
  } catch (e) {
    res.status(404).json({error: 'Post not found'})
    return
  }

  try {
    const deletepost = await postData.removePost(req.params.id)
    res.status(200).json(deletepost)
  } catch (e) {
    res.status(404).json({error: e })
  }
})

module.exports = router