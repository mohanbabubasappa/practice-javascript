//var – Function Scoped
function exampleVar() {
    if (true) {
        var x = 10;
        console.log(x); // 10
        x = 100; // Reassigning is allowed
    }
    console.log(x); // 10 – still accessible
}
exampleVar();

// let – Block Scoped and can be reassigned
function exampleLet() {
    if (true) {
        let y = 20;
        console.log(y); // 20
        y=200; // Reassigning is allowed
    }
    // console.log(y); // ❌ Error: y is not defined
}
exampleLet();

// const – Block Scoped and Constant and cannot be reassigned
function exampleConst() {
    if (true) {
        const z = 30;
        console.log(z); // 30
        // z=10; // ❌ Error: Assignment to constant variable
    }
    // console.log(z); // ❌ Error: z is not defined
}
exampleConst();
