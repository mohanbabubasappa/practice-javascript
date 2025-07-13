var user={
    name: "Kalyan",
    age: 20,
    city: "Vijayawada",
}
console.log(user);
user.city = "Visakhapatnam"; // Updating the city property
user["age"] = 21; // Updating the age property using bracket notation
console.log("----------------");
console.log(user);