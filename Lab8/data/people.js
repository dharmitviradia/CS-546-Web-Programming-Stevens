let axios = require("axios")

async function getPeopleData()
{
    const { data } = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json")
    return data
}


async function getPersonById(id)
{
    peopledata = await getPeopleData()
    if(id === null)
    {
        throw "ID is Empty"
    }
    if(!Number.isInteger(id))
    {
        throw "Invalid ID"
    }
    if(id === undefined)
    {
        throw "ID is Undefined"
    }
    if(id<=0 || id>peopledata.length)
    {
        throw "ID is Out of Bound"
    }
    return peopledata.find(peopledata => peopledata.id === id)
}
async function getPersonByName(name)
{
    peopledata = await getPeopleData()
    let obj = []
    let regex = new RegExp([".*", name, ".*"].join(""), "i")
    let people = peopledata.find(function(element) 
    { 
        if(regex.test(element.firstName.toLowerCase()) || regex.test(element.lastName.toLowerCase()))
           {
            if(obj.length > 19)
            {
                return obj
            }
            obj.push(element)
           } 
    })
    return obj
}

module.exports = 
{
    getPeopleData,
    getPersonById,
    getPersonByName
}