let day = new Date(1793958395939); //numbers of seconds since epoch time

console.log(day.toLocaleDateString());
console.log(day.toLocaleTimeString());
console.log(day.getHours()); // 10
console.log(day.setHours(12));
console.log(day.getHours()); //12
