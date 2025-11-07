/**
 * Spread and Rest Operators in JavaScript
 * 
 * The spread (...) operator expands iterables into individual elements.
 * The rest (...) parameter collects remaining elements into an array.
 */

// ============================================
// SPREAD OPERATOR (...)
// ============================================

// ============================================
// Copying Arrays
// ============================================
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1]; // Shallow copy
console.log(arr2); // Output: [1, 2, 3, 4, 5]
console.log(arr1 === arr2); // Output: false (different references)

// Modifying copy doesn't affect original
arr2.push(6);
console.log(arr1); // Output: [1, 2, 3, 4, 5] (unchanged)
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

// ============================================
// Merging Arrays
// ============================================
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [...num1, ...num2];
console.log(num3); // Output: [1, 2, 3, 4, 5, 6]

// Can add elements while merging
const merged = [0, ...num1, 3.5, ...num2, 7];
console.log(merged); // Output: [0, 1, 2, 3, 3.5, 4, 5, 6, 7]

// ============================================
// Spreading in Function Calls
// ============================================
const values = [1, 2, 3, 4, 5];
const max = Math.max(...values); // Equivalent to Math.max(1, 2, 3, 4, 5)
console.log(max); // Output: 5

// Without spread (would need apply in older JS)
const maxOld = Math.max.apply(null, values);
console.log(maxOld); // Output: 5

// Multiple arrays
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const allMax = Math.max(...numbers1, ...numbers2);
console.log(allMax); // Output: 6

// ============================================
// Copying/Merging Objects
// ============================================
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Later properties override earlier ones
const obj4 = { a: 1, b: 2 };
const obj5 = { b: 3, c: 4 };
const mergedObj = { ...obj4, ...obj5 };
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 } (b is overridden)

// ============================================
// Adding Elements to Arrays
// ============================================
const numbers = [2, 3];
const newNumbers = [1, ...numbers, 4];
console.log(newNumbers); // Output: [1, 2, 3, 4]

// ============================================
// Adding Properties to Objects
// ============================================
const person = { name: "John" };
const updatedPerson = { ...person, age: 25 };
console.log(updatedPerson); // Output: { name: "John", age: 25 }

// Updating existing properties
const updatedPerson2 = { ...person, name: "Jane", age: 30 };
console.log(updatedPerson2); // Output: { name: "Jane", age: 30 }

// ============================================
// Combining and Filtering Arrays
// ============================================
const arr3 = [1, 2, 3, 4, 5];
const arr4 = [6, 7, 8, 9, 10];
const combined = [...arr3, ...arr4].filter(num => num % 2 === 0);
console.log(combined); // Output: [2, 4, 6, 8, 10]

// ============================================
// Converting String to Array
// ============================================
const str = "hello";
const charArray = [...str];
console.log(charArray); // Output: ['h', 'e', 'l', 'l', 'o']

// Alternative methods
const charArray2 = Array.from(str);
const charArray3 = str.split('');

// ============================================
// Spreading NodeList/DOM Collections
// ============================================
// Useful for converting NodeList to array
// const nodeList = document.querySelectorAll('div');
// const array = [...nodeList];

// ============================================
// REST PARAMETER (...)
// ============================================

// ============================================
// Function Parameters (Rest)
// ============================================
// Collects remaining arguments into an array
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum()); // Output: 0

// Rest parameter must be last
function greet(greeting, ...names) {
    console.log(`${greeting}, ${names.join(', ')}!`);
}
greet('Hello', 'Alice', 'Bob', 'Charlie');
// Output: Hello, Alice, Bob, Charlie!

// ============================================
// Destructuring Arrays with Rest
// ============================================
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Skipping elements
const [first2, , third, ...rest2] = [1, 2, 3, 4, 5];
console.log(first2); // Output: 1
console.log(third); // Output: 3
console.log(rest2); // Output: [4, 5]

// ============================================
// Destructuring Objects with Rest
// ============================================
const { a, b, ...restObj } = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(restObj); // Output: { c: 3, d: 4, e: 5 }

// ============================================
// Practical Examples
// ============================================

// 1. Cloning objects/arrays
function cloneArray(arr) {
    return [...arr];
}

function cloneObject(obj) {
    return { ...obj };
}

// 2. Removing properties from object
function removeProperty(obj, prop) {
    const { [prop]: removed, ...rest } = obj;
    return rest;
}

const original = { a: 1, b: 2, c: 3 };
const withoutB = removeProperty(original, 'b');
console.log(withoutB); // Output: { a: 1, c: 3 }

// 3. Function with required and optional parameters
function createUser(name, age, ...hobbies) {
    return {
        name,
        age,
        hobbies: hobbies.length > 0 ? hobbies : ['none']
    };
}

const user1 = createUser('Alice', 25, 'reading', 'coding', 'hiking');
const user2 = createUser('Bob', 30);
console.log(user1); // Output: { name: 'Alice', age: 25, hobbies: ['reading', 'coding', 'hiking'] }
console.log(user2); // Output: { name: 'Bob', age: 30, hobbies: ['none'] }

// 4. Merging with defaults
function createConfig(userConfig) {
    const defaults = {
        theme: 'light',
        language: 'en',
        notifications: true
    };
    return { ...defaults, ...userConfig };
}

const config = createConfig({ theme: 'dark', language: 'fr' });
console.log(config);
// Output: { theme: 'dark', language: 'fr', notifications: true }
