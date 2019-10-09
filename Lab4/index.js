const animals = require("./data/animals.js")
const connection = require("./mongoConnection")

const main = async () => 
{

    const Sasha = await animals.create("Sasha", "Dog")
    console.log(Sasha)

    const Lucy = await animals.create("Lucy", "Dog")

    const allanimal = await animals.getAll()
    allanimal.forEach(element => console.log(element))

    const Duke = await animals.create("Duke", "Walrus")
    console.log(Duke)

    const updateOne = await animals.rename(Sasha._id, "Sashita")
    console.log(updateOne)

    const remove = await animals.remove(Lucy._id)
    console.log("Removed " + remove)

    const logall = await animals.getAll()
    console.log(logall)


    const db = await connection()
    await db.serverConfig.close()
    
}

main().catch(error => 
{
    console.log(error)
})