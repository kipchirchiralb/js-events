// Higher-order functions in JavaScript are functions that can take other functions as arguments or return functions as their results.

let numbers = [23, 2, 233, 4, 54, 9];

// currency -- 2dp, KSH.

function formatCurrencyKsh(n) {
  let numberIn2dp = n.toFixed(2);
  return "KSH. " + numberIn2dp;
}

function formatCurrencyDollars(n) {
  let numberIn2dp = n.toFixed(2);
  return "$ " + numberIn2dp;
}

// hof
function createCurrencyArray(numbersArray, currencyFormatter) {
  let newArray = [];
  for (let i = 0; i <= numbersArray.length - 1; i++) {
    newArray.push(currencyFormatter(numbersArray[i]));
  }
  return newArray;
}

// console.log(createCurrencyArray(numbers, formatCurrencyKsh));

// console.log(createCurrencyArray(numbers, formatCurrencyDollars));

function query(statement, cb) {
  // go to the db excecute the sql statement
  // once there are results from db
  // call cb with results as arguments
}

// forEach() an array method that executes a function for every element in the array
numbers.forEach(function (numEl) {
  console.log(formatCurrencyDollars(numEl));
});

// console.log(Number.EPSILON);
// console.log(Math.abs(-98));
// console.log(Math.ceil(4.3)); // floor (round down), ceil(round up), round (normal rounding off)

// console.log((89.3).toFixed(5));
// console.log((0.3142352893).toFixed(3));

// console.log(formatCurrency(101.892311));
// console.log(formatCurrency(42));
