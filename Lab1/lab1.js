const questionOne = function questionOne(arr) 
{
    var sqrsum = 0;
    for (var i = 0; i < arr.length; i++)
    sqrsum += arr[i] * arr[i];
    return sqrsum;
}

const questionTwo = function questionTwo(num)
{ 
    if (num <= 0)
    return 0;
    else
    if (num == 1 )
    return 1;
    else
    return questionTwo(num - 1) + questionTwo(num - 2);
}

const questionThree = function questionThree(text) 
{
    var count = 0;
    for (var i = 0; i < text.length; i++)
    count += ((text[i] == "a") || (text[i] == "e") || (text[i] == "i") || (text[i] == "o") || (text[i] == "u") || (text[i] == "A") || (text[i] == "E") || (text[i] == "I") || (text[i] == "O") || (text[i] == "U"))
    return count;
}

const questionFour = function questionFour(num) 
{
    if (num < 0)
    return "NaN";
    else
    if (num == 0 || num == 1)
    return 1;
    else
    return questionFour(num-1) * num;
}

module.exports = {
	firstName: "Dharmit", 
	lastName: "Viradia", 
	studentId: "10450000",
	questionOne,
	questionTwo,
	questionThree,
	questionFour
};