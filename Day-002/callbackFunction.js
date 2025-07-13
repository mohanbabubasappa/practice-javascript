// callbackFunction is a function that is passed as an argument to another function
// It allows for asynchronous operations or custom behavior in functions
// Callback functions can be defined as named functions, anonymous functions, or arrow functions
function f1(){
    console.log("This is a f1 function");
}

f1(function(){
    console.log("This is an anonymous function passed as a callback");
}); // Anonymous function passed as a callback

f1((x) => {
    console.log(x);
    console.log("This is an arrow with parameter function passed as a callback");
}); // Arrow function passed as a callback

const functionExpression=()=>{
    console.log("This is a function expression passed as a callback");
}
f1(functionExpression); // Function expression passed as a callback