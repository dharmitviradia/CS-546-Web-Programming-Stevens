const dic = require ("./dictionary")
try {
    console.log (dic.lookupDefination("programming"))
  
}catch (error){
    console.log(error)
}

try{
    console.log(dic.getWord("to make an official decision about who is right in (a dispute) : to settle judicially"))
}catch (error){
    console.log(error)
}