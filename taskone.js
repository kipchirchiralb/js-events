// write a function that logs the square of a number passed as an argument, have a conditional statement in the function to check if the argument passed is a number


function logSquare(n)
{
    if(isNaN(n))
    {
        console.log("Value passed is not a number");
        return
    }
    let square = n **2
    console.log(square);
    return square
}
logSquare(7)
logSquare("seven")
// console.log(isNaN(7)); //false
// console.log(isNaN("7")); // false
// console.log(isNaN("seven"));// true