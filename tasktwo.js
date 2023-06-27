// Given an array of strings, write a function that removes duplicates and returns a new array containing only the unique strings.

let strings = ["one", "one", "o", "pp", "ktn", "ntv", "ktn", "one"];
// expected outcome ["one","0", "pp", "ktn","ntv"]
console.log(strings.length);
// create a new blank array
// go through each elements in the strings array, and add the element to the new array if  it doesn't already exits in the new array

function getUniqueElements(arr) {
  let newArr = [];
  let index = 0;

  while (index < arr.length) {
    if (!newArr.includes(arr[index])) {
      newArr.push(arr[index]);
    }
    index++;
  }
  return newArr;
}

console.log(getUniqueElements(strings));

// data structures
// console.log(new Set(strings));
