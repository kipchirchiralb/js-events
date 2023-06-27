// functions are re-usable blocks of code

// defining a function
let count = 0;
function printName() {
  count = count + 1;
  console.log("resubale code(function scope)");
  console.log("hello, I am Albert");
  console.log("Perfoming some operations");
}

// console.log("global scope");
//call/invoke the function to execute the block of code
// printName(); //1
// printName(); //2
// printName();
// printName();
// printName();
// printName();
// console.log(count); //6

function getAreaOfCircle(radius) {
    let result =  3.142 *radius**2
    console.log("Area is: " + result)
    return result
}

function getAreaOfRectangle(w,h){
    console.log("Area is " + w*h);
    return w*h
}


// getAreaOfCircle(7) //153
// getAreaOfCircle(14) //
// getAreaOfCircle(21) //

getAreaOfRectangle(2,4)  //8
getAreaOfRectangle(4,5) //20
getAreaOfRectangle(465,5882) //2735130

console.log(getAreaOfRectangle(2,4)); // undefined for fuctions that have no return value --- with a return value, we get the returned value
console.log(getAreaOfCircle(9));

// Discus different naming conventions in web programming (css classes and javascript variables)

//camelCaseConvention
//PascalConvention
//kebab-case-convention 
// snake_case_convention

// Discus the variable naming rules in javascript
// can only begin with a letter, underscore_ or a $dolar sign 
// you can not use reserved keyword - const , for, let, function,while, var, return 
// JavaScript is case sensitive


// CONVENTIONS
// use descriptive words
// use camelCase for multiple word variables(js)
// css classes and IDs - kebab case 

// console.log(google);
let Age = 90
let age = 90

Console.log("hello")

// Discus the different types of errors in javascript & when they occur
// -- refererce error, syntax error, type error





// Write a function called reverseString that takes a string as a parameter and returns the reversed version of that string.
