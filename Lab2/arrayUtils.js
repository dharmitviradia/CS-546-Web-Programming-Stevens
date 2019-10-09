function head(arr)
{
  if (typeof arr == 'undefined')
  {
    throw "Array does not exist"
  }
  if (!Array.isArray(arr))
  {
    throw "Not an array"
  }
  if (!arr.length)
  {
    throw "Array is empty"
  }
  else
  {
    return (arr[0])
  }
}


function last(arr)
{
  if(typeof arr == 'undefined')
  {
    throw "Array does not exist"
  }
  if(!Array.isArray(arr))
  {
    throw "Not an array"
  }
  if(!arr.length)
  {
    throw "Array is empty"
  }
  else
  {
    return arr[arr.length - 1]
  }
}


function remove(arr, id)
{
    if(id==null)
    {
    throw "ID not Defines"
    }
    if(id<0 || id>=arr.length )
    {
      throw "Index out of bound"
    }
    if(typeof arr == 'undefined')
    {
      throw "Array does not exist"
    }
    if(!Array.isArray(arr))
    {
      throw "Not an array"
    }
    if(!arr.length)
    {
      throw "Array is empty"
    }
    else 
    {
      arr.splice(id, 1)
      return arr
    }
}


function range(no, val)
{
   arr=[]
    if(typeof no == 'undefined')
    {
      throw "End doesn't exist"
    }
    if(!Number.isInteger(no))
    {
      throw "Not a number"
    }
    if(no < 0)
    {
      throw "Not positive"
    }
    else if (val==null)
    {
      for (var i=0; i<no; i++)
      arr.push(i)
      {
        return arr
      }
    }
    else if(val!=null)
    {
      for (var i=0; i<no; i++)
      arr.push(val)
      {
        return arr
      }
    }
  }


function countElements(arr)
{
  if(typeof arr == 'undefined')
  {
    throw "Array does not exist"
  }
  if(!Array.isArray(arr))
  {
    throw "Not an array"
  }
  if(!arr.length)
  {
    throw "Array is empty"
  }
    var i = 0
    const count = new Object()
    while(i<arr.length)
    {
      if(count.hasOwnProperty(arr[i]))
      {
        count[arr[i]]++
      }
      else
      {
        count[arr[i]]=1
      }
    i++
    }
  return count
  }


function isEqual(arr1, arr2)
{
  if(typeof arr1 == 'undefined' || typeof arr2 == 'undefined')
  {
    throw "Array does not exist"
  }
  if(!Array.isArray(arr1) || !Array.isArray(arr2))
  {
    throw "Not an array"
  }
  if(!arr1.length || !arr2.length)
  {
    throw "Array is empty"
  }
  if (arr1==null && arr2==null)
  {
    throw "true"
  }
  else
  {
    if(arr1.length!=arr2.length) 
    {
      return "False"
    }
      for (let i=0; i<arr1.length; i++ )
      { if (arr1[i]!=arr2[i])
        {
          return "False"
        }
    }
    return "True"
  }
}





module.exports = 
    {
        head,
        last,
        remove,
        range,
        countElements,
        isEqual,
    }; 