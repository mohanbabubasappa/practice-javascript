//higherOrderFunction is a function that takes another function as an argument or returns a function as its result
// It allows for more abstract and flexible code design
// Higher-order functions can be used to create reusable code patterns and manage complexity
function f1(callback){
    console.log("This is a f1 function");
    callback();
}

function f2(){
    console.log("This is a f2 function");
}

f1(f2); // Passing f1 is higher-order function and f2 is a callback function