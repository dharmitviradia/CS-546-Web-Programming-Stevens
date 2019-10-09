const people = require("./people")
const weather = require("./weather")
const work = require("./work")


async function main()
{
    try
    {
        const w = await people.getPersonById(333)
        console.log (w)
    }
    catch (error)
    {
        console.log(error)
    }

    try
    {
        const w = await people.getPersonById(-1)
        console.log (w)
    }
    catch (error)
    {
        console.log(error)
    }

    try
    {
        const w = await people.lexIndex(2)
        console.log (w)
    }
    catch (error)
    {
        console.log(error)
    }

    try
    {
        const w = await people.lexIndex(1000)
        console.log (w)
    }
    catch (error)
    {
        console.log(error)
    }

    try
    {
        const w = await people.firstNameMetrics()
        console.log (w)
    }
    catch (error)
    {
        console.log(error)
    }
    
    try
    {
        const w = await weather.shouldTheyGoOutside("Scotty", "Barajaz")
        console.log (w)
    }
    catch (error)
    {
        console.log(error)
    }

    try
    {
        const w = await weather.shouldTheyGoOutside("Bob", "Smith")
        console.log (w)
    }
    catch (error)
    {
        console.log(error)
    }
    
    try
    {
        const w = await work.whereDoTheyWork("Demetra", "Durrand")
        console.log (w)
    }
    catch (error)
    {
        console.log(error)
    }

    try
    {
        const w = await work.whereDoTheyWork()
        console.log (w)
    }
    catch (error)
    {
        console.log(error)
    }

    try
    {
        const w = await work.findTheHacker("79.222.167.180")
        console.log (w)
    }
    catch (error)
    {
        console.log(error)
    }

    try
    {
        const w = await work.findTheHacker("1.999.1.1")
        console.log (w)
    }
    catch (error)
    {
        console.log(error)
    }
}
main()