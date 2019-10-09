function extend(...args)
{
    for(i=0; i<args.length; i++)
    {
    if(typeof args[i]!="object")
    {
        throw "Input is not Object"
    }
    if(Array.isArray(args[i])==true)
    {
        throw "It is an Array not 0bject"
    }
    }
    for(i=0; i<args.length; i++)
    {
        if(args[i]===undefined)
        {
            throw "Object not Defined"
        }
    }
    var x={}
    var l=args.length
    if (l==0)
    {
        throw "Args is Empty"
    }
    if (l==1)
    {
        throw "One more Args is Required"
    }
    for(let i=l-1; i>=0; i--)
    {
        Object.assign(x,args[i])
    }
    return x
}

function smush(...args)
{
    for(i=0; i<args.length; i++)
    {
    if(typeof args[i]!="object")
    {
        throw "Input is not Object"
    }
    if(Array.isArray(args[i])==true)
    {
        throw "It is an Array"
    }
    }
    for(i=0; i<args.length; i++)
    {
        if(args[i]===undefined)
        {
            throw "Object not Defined"
        }
    }
    var x={}
    var l=args.length
    if (l==0)
    {
        throw "Args is Empty"
    }
    if (l==1)
    {
        throw "One more Args is Required"
    }
    for(let i=0; i<l; i++)
    {
        Object.assign(x,args[i])
    }
    return x
}

function mapValues(obj, func)
{
    if(typeof obj!="object")
    {
        throw "Input is not Object"
    }
    if(obj==null)
    {
        throw "Object is Empty"
    }
    if(func==null)
    {
        throw "Function is Empty"
    }
    for(a in obj)
    obj[a]=func(obj[a])
    return obj
}



module.exports = 
    {
        extend,
        smush,
        mapValues
    }; 