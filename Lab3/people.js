let axios = require("axios")

async function getPeople()
{
    const { data } = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json")
    return data
}


async function getPersonById(id)
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
    return peopledata[id-1].firstName + " " + peopledata[id-1].lastName
}



async function lexIndex(id)
{
    peopledata = await getPeople()
    if(id === null)
    {
        throw "ID is Empty"
    }
    if(!Number.isInteger(id))
    {
        throw "ID is not Number"
    }
    if(id === undefined)
    {
        throw "ID is Undefined"
    }
    if(id<=0 || id>peopledata.length)
    {
        throw "ID is Out of Bound"
    }
    else
    peopledata.sort(function(felement, lelement)
    {
        var a = felement.lastName.toLowerCase()
        var b = lelement.lastName.toLowerCase()
        return a.localeCompare(b)
    })
    return peopledata[id].firstName + " " + peopledata[id].lastName
}


async function firstNameMetrics()
{
    peopledata = await getPeople()
    var Letters = 0
    var Vowels = 0
    var Consonants =  0
    var vow = "aeiouAEIOU"
    var longestName = ""
    var shortestName = peopledata[0].firstName
    var list = {}
    for(let i=0; i<peopledata.length; i++)
    {
        var fname = peopledata[i].firstName.split(' ').join('')
        Letters += fname.length
        if(fname.length >= longestName.length)
            longestName = fname
        if(fname.length < shortestName.length)
            shortestName = fname
        for(let j=0; j<fname.length; j++)
        {
        if(vow.indexOf(fname[j])!==-1)
            Vowels +=1
        else
            Consonants +=1
        }
    }
    list['totalLetters'] = Letters
    list['totalVowels'] = Vowels
    list['totalConsonants'] = Consonants
    list['longestName'] = longestName
    list['shortestName'] = shortestName
    return list
}


module.exports = 
{
    getPeople,
    getPersonById,
    lexIndex,
    firstNameMetrics
}