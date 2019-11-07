const mongoCollections = require("./collections")
const animals = mongoCollections.animals
const post = mongoCollections.posts
const ObjectID = require("mongodb").ObjectID

let exportedMethods =
{
    async getAllAnimals()
    {
        const animalCollection = await animals()
        const animal = await animalCollection.find({}).toArray()
        return animal
    },

    async getAnimalsById(id)
    {
        if(!id)
            throw "You must Insert Valid ID"
        const animalCollection = await animals()
        const animal = await animalCollection.findOne({ _id: ObjectID(id) })
        if (animal === null) 
            throw "No animal exists with such ID"

        return animal
    },


    async addAnimals(name, animalType)
    {
        if(name === null || name === undefined)
            throw "Name not Valid"
        if(animalType === null || animalType === undefined)
            throw "AnimalType not Valid"
        if(typeof(name) != 'string')
            throw "Name is not String"
        if(typeof(animalType) != 'string')
            throw "AnimalType is not String"
        if(Array.isArray(name))
            throw "Name is Array"
        if(Array.isArray(animalType))
            throw "AnimalType is Array"
        
        const animalCollection = await animals()    
        var newanimal = 
        {
            name: name,
            animalType: animalType,
            likes: [],
            posts: []
        }
        const newInsertInformation = await animalCollection.insertOne(newanimal)
        if (newInsertInformation.insertedCount === 0) throw 'Insert failed!'
        return await this.getAnimalsById(newInsertInformation.insertedId)
    },


    async removeAnimals(id)
    {
    const obj = {} 
    const animalCollection = await animals()
    const animal = await this.getAnimalsById(id) 

    const postcollection = await post()
    await postcollection.deleteOne({ author: ObjectID(id)})


    const deletionInfo = await animalCollection.deleteOne({ _id: ObjectID(id)})

    if (deletionInfo.deletedCount === 0) 
        throw `Could not delete Animal with ID of ${id}`
    obj.deleted = true
    obj.data = animal
    return obj
    },

    async updateAnimal(id, animalInfo) 
    {
    const animalCollection = await animals()
    const updatedAnimalData = {}
    
    
    if (animalInfo.newname) {
      updatedAnimalData.name = animalInfo.newname
    }
    
    if (animalInfo.newanimalType) {
    updatedAnimalData.animalType = animalInfo.newanimalType
    }
    
    await animalCollection.updateOne({_id: ObjectID(id)}, {$set: updatedAnimalData})
    
    return await this.getAnimalsById(id)
    },


    async addPostToAnimals(id, postId, postTitle) 
    {
        await this.getAnimalsById(id)
    
        const animalCollection = await animals()
        const updateInfo = await animalCollection.updateOne(
          {_id: ObjectID(id)},
          {$addToSet: {posts: {id: postId, title: postTitle}}}
        )
    
        if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed'

        return await this.getAnimalsById(id)
    },


    async removePostFromAnimals(id, postId) 
    {
        await this.getAnimalsById(id)
    
        const animalCollection = await animals()
        const updateInfo = await animalCollection.updateOne({_id: ObjectID(id)}, {$pull: {posts: {id: ObjectID(postId)}}})
        if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed'
    
        return await this.getAnimalsById(id)
    }
}


module.exports = exportedMethods