let axios = require("axios")

async function getWeather()
{
    const { data } = await axios.get("https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json")
    return data
}

async function getPeople()
{
    const { data } = await axios.get("https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json")
    return data
}



async function shouldTheyGoOutside(firstName, lastName)
{
    weatherdata = await getWeather()
    peopledata = await getPeople()
    if(firstName === null || lastName === null)
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
    var weather = weatherdata.find(weatherdata => weatherdata.zip === people.zip)
    if(weather.temp >= 34)
    {
        return "Yes, " + people.firstName + " should go outside"
    }
    else    
    {
        return "No, " + people.firstName + " should not go outside."
    }
}

module.exports = 
{
    getWeather,
    getPeople,
    shouldTheyGoOutside
}