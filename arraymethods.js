const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
// we have access to array methods because any array is an instance of the global Array object 
// concat() - - an array method to combine two arrays 
const combinedArray = array1.concat(array2) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(combinedArray);

// includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(combinedArray.includes("e")); //true
console.log(combinedArray.includes("k")); //false

// slice() method returns a shallow copy of a portion of an array into a new array object selected from start(index) to end(index) (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const animals = ['ant', 'bison','kangaroo', 'camel', 'duck', 'elephant', 'cow', 'chimpanzee',"dog"];
let fisrtTwoAnimals = animals.slice(0, 2)
// console.log(fisrtTwoAnimals);
let lastThreeAnimals = animals.slice(-3)
console.log(lastThreeAnimals);

// hof --- functions that take in other functions(callbackss) as arguments
// filter  method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// get a list/array animals with names that are more than five characters long
let newList = animals.filter(function(element){
    // console.log(element.length > 5);
    return element.length > 5
})
console.log(newList);
// forEach -- execute a function for each element in the array // noremally used in place of a for loop
