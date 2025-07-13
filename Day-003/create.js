var user={
    name: "Ram",
    age: 40,
    city: "Chennai",
    mobile: 92875875643,
}
console.log(user);
user.email = "ram@gmail.com"; // Adding a new property
user["isActive"] = true; // Adding another property using bracket notation
user.hobbies = ["reading", "traveling"]; // Adding an array property
user.address = { // Adding a nested object
    street: "456 Elm St",
    zip: "600001",
    state: "Tamil Nadu"
};
console.log("----------------");
console.log(user);