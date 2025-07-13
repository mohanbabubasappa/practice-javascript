var user={
    name: "Venky",
    age: 25,
    city: "Tirupati",
    mobile: 9876543210,
}

console.log(user);
delete user.age; // Deleting the age property
delete user["mobile"]; // Deleting the mobile property using bracket notation
console.log("----------------");
console.log(user);