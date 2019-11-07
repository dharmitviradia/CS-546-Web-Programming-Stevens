const mongoCollections = require('../config/mongoCollections')
const bands = mongoCollections.bands
ObjId = require('mongodb').ObjectID

let exportedMethods = 
{
  async getAllBands() 
  {
		const bandCollection = await bands()
		return await bandCollection.find({}).toArray()
  },
  async getBandById(id) 
  {
		if (id === undefined) throw 'You must provide an ID'
		const bandCollection = await bands()
		const band = await bandCollection.findOne({ _id: ObjId(id) })

		if (!band)  throw 'Could not find band with id of ' + id
		return band
  },
  async addBand(bandName, bandMembers, yearFormed, genres, recordLabel) 
  {
    if (typeof bandName !='string' || bandName == "" || !bandName)
    throw "Enter Proper Band Name"
    if (Array.isArray(bandMembers) || bandMembers.length < 1 || !bandMembers)
    throw "Band Member is not Entered or Is not of proper Type"
    if (yearFormed < 1900 || yearFormed > 2019 || yearFormed == "" || !yearFormed)
    throw "Year Formed Entered is not Proper or Valid"
    if (!Array.isArray(genres) || genres == "" || genres.length < 1 || !genres)
    throw "Genres is not of Proper Type"
    if (typeof recordLabel != 'string' || recordLabel == "" || !recordLabel)
    throw "recordLabel is not of Proper Type"
    
    const bandCollection = await bands()

    let newBand = {
      bandName: bandName,
      BandMembers: BandMembers,
      yearFormed : yearFormed,
      genres : genres,
      recordLabel : recordLabel,
      bandposted: {
        id: bandId,
        name: `${bandname.firstName} ${bandName.lastName}`
      },
    }

    const newInsertInformation = await bandCollection.insertOne(newBand)
    if (newInsertInformation.insertedCount === 0) throw 'Insert failed!'
    const newId = newInsertInformation.insertedId
    return await this.getBandById(newId)
  },

  async removeBand(id)
  {
    ObjId = require('mongodb').ObjectID
    if(!id || id == "")
      throw "You must Insert Valid ID"
    const bandCollection = await bands()
    const deletionInfo = await bandCollection.removeOne({ _id: ObjId(id) })
    if (deletionInfo.deletedCount === 0) 
    {
      throw `Could not delete band with id of ${id}`
    }
  },
  async searchBandByName(bandName) 
  {
    if (typeof bandName !='string' || bandName == "" || !bandName)
    throw "Enter Proper Band Name"
    const bandCollection = await bands()
    let regex = new RegExp([".*", bandName, ".*"].join(""), "i")
		return await bandCollection.find({"bandName": regex}).toArray()
  },
  async searchBandMemberFullName(firstName, lastName) 
  {
    if (typeof firstName !='string' || firstName == "" || !firstName)
    throw "Enter Proper First Name"
    if (typeof lastName !='string' || lastName == "" || !lastName)
    throw "Enter Proper Last Name"

		const bandCollection = await bands()

		return await bandCollection
			.find({$and: [{ 'info.firstName': firstName }, { 'info.lastName': lastName }]}).toArray()
  },
  async searchBandMember(name) 
  {
    if (typeof name !='string' || name == "" || !name)
    throw " Enter Proper Name"
    let regex = new RegExp([".*", name, ".*"].join(""), "i")
    return await bandCollection.find({  $or: [{ "firstName": regex },{ "lastName": regex }]}).toArray()
  },
  async searchBandByGenre(genre) 
  {
    if (!genre) throw 'You must provide an array of genre'
    return await bandCollection.find({ genres: { $in: genre } }).toArray()
  },
  async searchBandByYear(year) {
    if (year === undefined) throw 'You must give a starting year'
    return await bandCollection.find({ yearFormed: year }).toArray()
  },
  async searchBandFormedBefore(year) {
    if (year === undefined) throw 'You must give a starting year'
    return await bandCollection.find({ yearFormed: { $lt: year } }).toArray()
  },
  async searchBandFormedOnOrBefore(year) {
    if (year === undefined) throw 'You must give a starting year'
    return await bandCollection.find({ yearFormed: { $lte: year } }).toArray()
  },
  async searchBandFormedAfter(year) {
    if (year === undefined) throw 'You must give a starting year'
    return await bandCollection.find({ yearFormed: { $gt: year } }).toArray()
  },
  async searchBandFormedOnOrAfter(year) {
    if (year === undefined) throw 'You must give a starting year'
		return bandCollection.find({ yearFormed : { $gte: year } }).toArray()
  },
  async addBandMember(bandId, firstName, lastName) {
    if (bandId === undefined) throw "No id"
    if (!firstName || !lastName) throw "No name"
    if(typeof(firstName) != "string" || typeof(lastName) != "string") throw "type mismatch"
    var bandMember = {
      firstName : firstName,
      lastName : lastName
    } 
		return bandCollection.update({ _id: bandId }, { $addToSet: { bandMembers: bandMember } }).then(function() {
			return this.getBandById(bandId)
		})
  },
  async removeBandMember(bandId, firstName, lastName) {
    if (bandId === undefined) throw "No id"
    if (!firstName || !lastName) throw "No name"
    if(typeof(firstName) != "string" || typeof(lastName) != "string") throw "type mismatch"

		return bandCollection.update({ _id: bandId }, { $pullAll: { $and : { "bandMembers.firstName": firstName , "bandMembers.lastName":lastName} }}).then(function() {
			return this.getBandById(bandId)
		})
  }
}

module.exports = exportedMethods
