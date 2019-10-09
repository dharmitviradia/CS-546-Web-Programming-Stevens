const array= require ("./arrayUtils")
const string= require ("./stringUtils.js")
const obj= require ("./objUtils.js")



try 
    {
        array.head([1, 2, 3])
        console.log('Head test case passed successfully')
    }
catch (error)
    {
        console.log('Head test case failed')
    }

try 
    {
        array.head('banana')
        console.log('Head test case passed successfully')
    }
catch (error)
    {
        console.log('Head test case failed')
    }


try 
    {
        array.countElements([13, '13', 13, 'hello', true, true])
        console.log('Array Count test case passed successfully')
    }
catch (error)
    {
        console.log('Array Count test case failed')
    }

try 
    {
        array.countElements([])
        console.log('Array Count test case passed successfully')
    }
catch (error)
    {
        console.log('Array Count test case failed')
    }


try 
    {
        string.repeat('abc', 3)
        console.log('String Repeat test case passed successfully')
    }
catch (error)
    {
        console.log('String Repeat test case failed')
    }
    
try 
    {
        string.repeat()
        console.log('String Repeat test case passed successfully')
    }
catch (error)
    {
        console.log('String Repeat test case failed')
    }


try 
    {
        obj.mapValues({ a: 1, b: 2, c: 3 }, n => n + 1)
        console.log('MapObject test case passed successfully')
    }
catch (error)
    {
        console.log('MapObject test case failed')
    }

try 
    {
        obj.mapValues()
        console.log('MapObject test case passed successfully')
    }
catch (error)
    {
        console.log('MapObject test case failed')
    }