function logsquare(num){
    //isNaN()
    if(typeof num == 'number'){
        console.log(num**2);
    }else{
        console.log("value passed is not a number");
    }
}

// reduce method -- a function attached to an object
logsquare(9)
logsquare(5)
logsquare(545)
logsquare("georg")