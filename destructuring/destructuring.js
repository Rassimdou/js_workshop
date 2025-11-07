/**
 * Destructuring in JavaScript
 * 
 * Destructuring allows you to extract values from arrays and objects
 * into distinct variables in a concise way.
 */

// ============================================
// Array Destructuring - Introduction
// ============================================
// Traditional way (without destructuring)
const hobbies1 = ["Reading", "Coding", "Hiking"];
const firstHobby1 = hobbies1[0];
const secondHobby1 = hobbies1[1];
const thirdHobby1 = hobbies1[2];
console.log(firstHobby1, secondHobby1, thirdHobby1);
// Output: Reading Coding Hiking

// With destructuring (more concise)
const hobbies2 = ["Reading", "Coding", "Hiking"];
const [firstHobby2, secondHobby2, thirdHobby2] = hobbies2;
console.log(firstHobby2, secondHobby2, thirdHobby2);
// Output: Reading Coding Hiking

// ============================================
// Skipping Elements
// ============================================
const hobbies3 = ["Reading", "Coding", "Hiking"];
const [firstHobby3, , thirdHobby3] = hobbies3; // Skip second element
console.log(firstHobby3); // Output: Reading
console.log(thirdHobby3); // Output: Hiking

// ============================================
// Swapping Variables
// ============================================
let a = 1;
let b = 2;
[a, b] = [b, a]; // Swap values
console.log(a); // Output: 2
console.log(b); // Output: 1

// ============================================
// Default Values
// ============================================
const hobbies4 = ["Reading", "Coding"];
const [firstHobby4, secondHobby4, thirdHobby4 = "Hiking"] = hobbies4;
console.log(firstHobby4); // Output: Reading
console.log(secondHobby4); // Output: Coding
console.log(thirdHobby4); // Output: Hiking (default value)

// ============================================
// Rest Operator with Destructuring
// ============================================
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// ============================================
// Object Destructuring - Basic Syntax
// ============================================
const person = { name: "John", age: 25 };
const { name, age } = person;
console.log(name); // Output: John
console.log(age); // Output: 25

// ============================================
// Renaming Variables
// ============================================
const user = { username: "johndoe", age: 25 };
const { username: newUserName, age: userAge } = user;
console.log(newUserName); // Output: johndoe
console.log(userAge); // Output: 25
// console.log(username); // ReferenceError: username is not defined

// ============================================
// Default Values in Object Destructuring
// ============================================
const settings = { theme: "dark" };
const { theme = "light", fontSize = 16 } = settings;
console.log(theme); // Output: dark (from object)
console.log(fontSize); // Output: 16 (default value)

// ============================================
// Nested Object Destructuring
// ============================================
const employee = {
    id: 6661,
    details: {
        name: "John",
        age: 30,
        address: {
            city: "New York",
            country: "USA"
        }
    }
};

// Extracting nested properties
const {
    id: employeeId,
    details: {
        name: employeeName,
        age: employeeAge,
        address: { city, country }
    }
} = employee;

console.log(employeeId); // Output: 6661
console.log(employeeName); // Output: John
console.log(employeeAge); // Output: 30
console.log(city); // Output: New York
console.log(country); // Output: USA

// ============================================
// Destructuring Function Parameters
// ============================================
// Traditional way
function greetUser1(user) {
    console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}

// With destructuring
function greetUser2({ name, age }) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

const userObj = { name: "Alice", age: 28 };
greetUser1(userObj); // Output: Hello, Alice! You are 28 years old.
greetUser2(userObj); // Output: Hello, Alice! You are 28 years old.

// With default values
function greetUser3({ name = "Guest", age = 0 }) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetUser3({}); // Output: Hello, Guest! You are 0 years old.

// ============================================
// Destructuring Return Values
// ============================================
function getCoordinates() {
    return { x: 10, y: 20 };
}

const { x, y } = getCoordinates();
console.log(x, y); // Output: 10 20

// ============================================
// Destructuring in Loops
// ============================================
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

for (const { name, age } of users) {
    console.log(`${name} is ${age} years old`);
}
// Output:
// Alice is 25 years old
// Bob is 30 years old
// Charlie is 35 years old

// ============================================
// Mixed Destructuring
// ============================================
const data = [
    { name: "John", scores: [85, 90, 95] },
    { name: "Jane", scores: [92, 88, 94] }
];

for (const { name, scores: [firstScore, ...otherScores] } of data) {
    console.log(`${name}'s first score: ${firstScore}`);
    console.log(`Other scores: ${otherScores.join(", ")}`);
}

