// write a function that returns the average of  elements in an array of numbers
let arr = [98, 34, 23, 2, 4, 6, 35445, 6, 8];
function avg(array) {
  let sum = 0;
  for (let index in array) {
    sum = sum + array[index];
  }
  return sum / array.length;
}
console.log(avg(arr));

function avgReduce() {
  return arr.reduce((elem, nextelem) => elem + nextelem) / arr.length;
}
console.log(avgReduce(arr));
