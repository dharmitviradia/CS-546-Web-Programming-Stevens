function capitalize(str)
{
    if(!typeof str === 'string' || !str instanceof String)
    {
        throw "Input is not String"
    }
    if(0 === str.length)
    {
        throw "Empty String"
    }
    if(str==null)
    {
        throw "Not a String"
    }
    else
    {
        str = str.toLowerCase(str)
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
}

function repeat(str, no)
{
    if(!typeof str === 'string' || !str instanceof String)
    {
        throw "Input is not String"
    }
    if(0 === str.length)
    {
        throw "Empty String"
    }
    if(str==null)
    {
        throw "Not a String"
    }
    else
    {
        value = str.repeat(no)
        return value
    }
}

function countChars(str)
{
    if(!typeof str === 'string' || !str instanceof String)
    {
        throw "Input is not String"
    }
    if(0 === str.length)
    {
        throw "Empty String"
    }
    if(str==null)
    {
        throw "Not a String"
    }
    else
    {
        var a = str.split("");
        var obj = {};
        a.forEach(function(s)
            {
              obj[s] = (obj[s] || 0) + 1;
            });
        return obj;
    }
}


module.exports = 
    {
        capitalize,
        repeat,
        countChars
    }; 