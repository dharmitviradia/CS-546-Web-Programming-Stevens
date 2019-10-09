const mongoCollections = require("../mongoCollections")
const animals = mongoCollections.animals

async function create(name, animalType)
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
        throw "Name is not Array"
    if(Array.isArray(animalType))
        throw "AnimalType is not Array"
    
    const animalCollection = await animals()    
    var newanimal = 
    {
        name: name,
        animalType: animalType
    }
    const insertInfo = await animalCollection.insertOne(newanimal)
    if (insertInfo.insertedCount === 0) 
        throw "Could not add Animal"
    const _id = insertInfo.insertedId
    const animal = await this.get(_id)
    return animal
}

async function getAll()
{
    const animalCollection = await animals()
    const animal = await animalCollection.find({}).toArray()
    return animal
}

async function get(id)
{
    ObjId = require('mongodb').ObjectID
    if(!id)
        throw "You must Insert Valid ID"
    const animalCollection = await animals()
    const animal = await animalCollection.findOne({ _id: ObjId(id) })
    if (animal === null) 
        throw "No animal exists with such ID"

    return animal
}

async function remove(id)
{
    const obj = {}
    if(!id)
        throw "You should provide Valid ID, Entered ID not Found"
    
    const animal = await get(id)
    const animalCollection = await animals()
    const deletionInfo = await animalCollection.removeOne({ _id: animal._id})
    if (deletionInfo.deletedCount === 0) 
      throw `Could not delete Animal with ID of ${id}`
    obj.deleted = true
    obj.data = animal
    return obj
}

async function rename(id, newName)
{
    if(!id)
        throw "You must provide an id to search for"
    if(newName === null || newName === undefined  || typeof(newName) !== 'string')
        throw "rename failed"

    const animalCollection = await animals()
    const animal = await this.get(id)
    ObjectId = require('mongodb').ObjectID
    let update_data = 
    { $set : 
        { 
        name: newName,
        animalType: animal.animalType
        }
    }

    const updateInfo = await animalCollection.updateOne({ _id: ObjectId(id) }, update_data)
    if (updateInfo.modifiedCount === 0) {
      throw "could not update animal successfully"
    }
    return await this.get(id)
}

 

module.exports=
{
        create,
        get,
        getAll,
        remove,
        rename,
}