let axios = require("axios")

async function getPeople()
{
    const { data } = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json")
    return data
}


async function getPeopleById(id)
{
    peopledata = await getPeople()
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
    return peopledata[id-1].firstName + "  " + peopledata[id-1].lastName
}


module.exports = 
{
    getPeople,
    getPeopleById,
}