let age = 50; // Number -- the cleaaneer // normal /easier way
let count = new Number(78.77); // directly creating an instance of the Number object using Number concstructor

// console.log(age.toFixed(7));
// console.log(count.toFixed(7));
let firstArr = ["jane", "victor"]; // normal/easy way  -- fp way
let secondArr = new Array(); // oop way
secondArr[0] = "albert";
secondArr[1] = "george";
secondArr[2] = "zack";

console.log(firstArr.find((elem) => elem == "jane")); // 0

console.log(
  secondArr.find(function (elem) {
    return elem == "zack";
  })
); //2

// something()
console.log(Date.now());
