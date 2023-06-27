let printer = {
    test: 90,
    isColored: false,
     // method
    print: function printWord(word){
        console.log(word);
        // spit out a paper with text 
    },
     // method
    say: (word)=>{
        console.log(word);
    } 
}
// inheritance, abstractions, polymorphism
let user = {
    username: "albert",
    password: "kjad",
    login: (name, pass)=>{
        // compare passsed values with what is stored in the db
    },
    settings: {
        setFontSize: (size)=>{
            // change fonrt to the size passed
        },
        colored: false,
        setTheme: function (theme){
            // set  theme, hard ware
        }
    }
}

// console.log(consolle.test);
// printer.print("Hello world 1")
// printer.say("Hello world 2") 


const squareNum = ()=>{
    // function's code block
    console.log("This is an arrow function");
}
// squareNum()

// object constructor
let car = new Object()
car.color = "red"
car.model = "toyota landcruiser"
car.cc = 2000
car.start = function(){
    console.log("Vroooommmmmm!!!!!!")
}
// car.start()
console.log(car)
console.log(printer)
//array constructor
let colors = new Array()
colors[0] = "red"
colors[1] = "blue"
colors[2] = "green"
console.log(colors);
console.log(colors.join());
// string constructor
let email = new String("albert@eldohub.co.ke")
let email2 = "albert@eldohub.co.ke"
console.log(email.toUpperCase());
console.log(email2.toUpperCase());
// constructor function
function Player(name, age, team,salary,number){
    this.name = name
    this.age = age
    this.team = team
    this.mshahara = salary
    this.tag = number
    this.play = function (){
        console.log("playing at 9:80");
    }
    this.minimumAge = 18
    this.nameLength = function (){
        return this.name.length
    }
}
let player1 =new Player("Mane Kiprono",28,"arsenal",90000,7 )
let player2 =new Player("Eric",18,"arsenal",90000,11 )
// prototype chaining
console.log(player1);
console.log(player2.nameLength());


// object methods,
console.log(Object.keys(printer));
console.log(Object.values(printer));

//  arrays methods 
console.log(colors.includes("red")); //true
console.log(colors.includes("yellow")); //false
// string methods
let animal = "tiger"
console.log(animal.length); // 5
console.log(animal.charAt(2)); // i


