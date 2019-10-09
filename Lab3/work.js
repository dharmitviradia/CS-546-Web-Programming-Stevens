let axios = require("axios")
var net = require("net")

async function getWork()
{
    const { data } = await axios.get("https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json")
    return data
}


async function getPeople()
{
    const { data } = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json")
    return data
}


async function whereDoTheyWork(firstName, lastName)
{
    workdata = await getWork()
    peopledata = await getPeople()
    if(firstName === null || lastName === null )
    {
        throw "Name is Null"
    }    
    if(firstName === undefined || lastName === undefined)
    {
        throw "Name is Undefined"
    }
    if(typeof(firstName) != 'string' || typeof(lastName) != 'string')
    {
        throw "Name Not Found"
    }
    var people = peopledata.find(peopledata => peopledata.firstName === firstName && peopledata.lastName === lastName)
    if(people === null || people === undefined)
    {
        throw "Name Not Found"
    }
    var work = workdata.find(workdata => workdata.ssn === people.ssn)
    if(work.willBeFired === true)
    {
        return firstName + " " + lastName + " - " + work.jobTitle + " at "+ work.company + "." + " They will be fired."
    }
    else
    {
        return firstName + " " + lastName + " - " + work.jobTitle + " at "+ work.company + "." + " They will not be fired."
    }
}


async function findTheHacker(ip)
{
    workdata = await getWork()
    peopledata = await getPeople()
    if(ip === null || ip === undefined)
    {
        throw "IP Not Defined"
    }
    if(!net.isIPv4(ip))
    {
        throw "IP is of Invalid Type"
    }
    var work = workdata.find(workdata => workdata.ip === ip)
    if(work === null || work === undefined)
    {
        throw "Hacker Not Found"
    }
    var people = peopledata.find(peopledata => peopledata.ssn === work.ssn)
    if(people !== null || people !== undefined)
    {
        return people.firstName + " " + people.lastName + " is the hacker!"
    }
}


module.exports = 
{
    getWork,
    getPeople,
    whereDoTheyWork,
    findTheHacker
}