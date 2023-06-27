// arithmetic operators - + * / % ++ -- **

console.log(8*8);
console.log(8/8);
console.log(8+8);
console.log(8-8);
console.log(9 % 8); // modulus-- get remainder after division
// ++ increment  -- decrement    (1)  -- pre vs post
let rating = 0
rating++
++rating
console.log(rating);//1
rating-- 
--rating
rating-- 
console.log(rating ** 4); 

// Comparison operators  == === != > < >= <=
console.log("***************");

console.log(2023-2008 > 18); // false
console.log("age" == "Age"); // false
console.log("age" != "Age"); // true
console.log(34 == "34"); // TYPE COERCION -- true // loose equality check
console.log(34 === "34"); // NO TYPE COERCION -- false // strict equality check


// boolean -- true or false

// console.log("Result: "+ 90 ); // TYPE COERCION

// logical operators && (AND) , || (OR), ! (NOT)
let person  = {
    name: "victor",
    age: 17,
    natonality: "ugandan"
}

if(person.age >= 18 || person.natonality == "kenyan" ){
    console.log("Jambo!, Karibu Maasai Mara");

}else{
    console.log("You could be a foreigner or below age 18");
}

// Ternary operator --- control strucures

person.age >= 18 || person.natonality == "kenyan" ?  console.log("Jambo!, Karibu Maasai Mara") :  console.log("You could be a foreigner or below age 18");
