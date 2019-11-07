const mongoCollections = require('./collections')
const posts = mongoCollections.posts
const animals = require('./animals')
const ObjectID = require("mongodb").ObjectID

const exportedMethods = {
  async getAllPosts() {
    const postCollection = await posts()
    return await postCollection.find({}).toArray()
  },

  async getPostById(id) {
    if(!id)
    throw "You must insert id"
    const postCollection = await posts()
    const post = await postCollection.findOne({_id: ObjectID(id)})

    if (!post)
    throw 'Post not found'
    return post
  },

  async addPost(title, author, content) {
    if (typeof title !== 'string') throw 'No title provided'
    if (typeof content !== 'string') throw 'I aint got no content!'

    const postCollection = await posts()

    const animalthatposted = await animals.getAnimalsById(author)

    const newPost = {
      title: title,
      content: content,
      author: 
      {_id: ObjectID(author),
      name: animalthatposted.name}
    }

    const newInsertInformation = await postCollection.insertOne(newPost)
    const newId = newInsertInformation.insertedId

    await animals.addPostToAnimals(author, newId, title)
    return await this.getPostById(newId)
  },
  async removePost(id) 
  {
    const obj = {} 
    const post = await this.getPostById(id) 
    const postCollection = await posts()

    const deletionInfo = await postCollection.deleteOne({ _id: ObjectID(id)})

    if (deletionInfo.deletedCount === 0) 
        throw `Could not delete Post with ID of ${id}`
    obj.deleted = true
    obj.data = post
    await animals.removePostFromAnimals(post.author._id, id)
    return obj
  },
  async updatePost(id, updatedPost) 
  {
    const postCollection = await posts()
    const updatedPostData = {}

    if (updatedPost.newtitle) {
      updatedPostData.title = updatedPost.newtitle
    }

    if (updatedPost.newcontent) {
      updatedPostData.content = updatedPost.newcontent
    }

    await postCollection.updateOne({_id: ObjectID(id)}, {$set: updatedPostData})

    return await this.getPostById(id)
  },

}

module.exports = exportedMethods