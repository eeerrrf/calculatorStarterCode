// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber


// 1. divide
//    write a function named "divide" that takes in two parameters and returns their quotient
function divide(x,y) {
var a=(x/y);
return a;
}

console.log(divide(5,5));
// 2. multiply
// write a function named
// "multiply" that takes in two
// parameters and returns
// their product
function multiply(m,u){
    var b=(m*u);
    return b;
    }

console.log(multiply(5,5));
// 3. subtract 
//    write a function named
//    "subtract" that takes in two
// parameters and returns
// their difference

function subtract(d,e){
    var c=(d-e);
    return c;
    }

console.log(subtract(5,5));

// 4. add
//    write a function named "add" that takes in two parameters and returns their sum

function add(d,e){
    var f=(d+e);
    return f;
    }

console.log(add(5,5));


// 5. power
//    write a function named "power" that takes in two parameters and returns their result

function power(g,h){
    var i=Math.pow (g,h);
    return i;
    }

console.log(power(5,5));

// 6. square_root
//    write a function named "square_root" that takes in one parameter and returns their result

function square_root(j,k){
    var l=Math.sqrt(j,k);
    return l;
    }

console.log(square_root(100,90));


// 7. logBase10
//    write a function named "logBase10" that takes in one parameter and returns their result

function logBase10(m,n){
    var o=Math.log10(m,n);
    return o;
    }

console.log(logBase10(10,10));

// 8. generateRandomNumber
//    write a function named "generateRandomNumber" that takes in no parameters and returns a random number

function generateRandomnumber(){
    return Math.random();
    }

console.log(generateRandomnumber(10));

console.assert(add(7));

// BONUS: write assertions to test whether your functions work!
// Here are some examples for divide(x,y), can you write more for the other functions?
//
// console.assert(divide(1,1) === 1, "1/1 should equal 1");
// console.assert(divide(1,2) === 0.5, "1/2 should equal 0.5");
