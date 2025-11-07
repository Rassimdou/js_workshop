/**
 * JavaScript Arrays - Comprehensive Guide
 * 
 * Arrays are ordered collections of values. This file demonstrates
 * various array methods and operations in JavaScript.
 */

// ============================================
// Array.toString() - Convert array to string
// ============================================
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString()); // Output: "1,2,3,4,5"
console.log(numbers); // Output: [1, 2, 3, 4, 5] (original array unchanged)

// ============================================
// Array.splice() - Modify array by removing/replacing elements
// ============================================
// Syntax: array.splice(start, deleteCount, item1, item2, ...)

// Remove elements
const fruits1 = ["apple", "banana", "cherry", "date"];
const deleted = fruits1.splice(1, 2); // Removes 2 elements starting from index 1
console.log(deleted); // Output: ["banana", "cherry"]
console.log(fruits1); // Output: ["apple", "date"]

// Add elements (deleteCount = 0)
const fruits2 = ["apple", "banana", "cherry"];
fruits2.splice(1, 0, "orange", "kiwi"); // Adds "orange" and "kiwi" at index 1
console.log(fruits2); // Output: ["apple", "orange", "kiwi", "banana", "cherry"]

// Replace elements
const fruits3 = ["apple", "banana", "cherry"];
fruits3.splice(1, 1, "orange"); // Replaces 1 element at index 1
console.log(fruits3); // Output: ["apple", "orange", "cherry"]

// ============================================
// Array.sort() - Sort array elements
// ============================================
const fruits4 = ["banana", "apple", "cherry"];
fruits4.sort(); // Sorts alphabetically (modifies original array)
console.log(fruits4); // Output: ["apple", "banana", "cherry"]

// Sort numbers (requires compare function)
const numbers2 = [14, 24, 31, 422, 5];
numbers2.sort((a, b) => a - b); // Ascending order
console.log(numbers2); // Output: [5, 14, 24, 31, 422]

numbers2.sort((a, b) => b - a); // Descending order
console.log(numbers2); // Output: [422, 31, 24, 14, 5]

// ============================================
// Array.map() - Transform array elements
// ============================================
// Creates a new array by applying a function to each element
const numbers3 = [14, 24, 31, 422, 5];
const doubled = numbers3.map(num => num * 2);
console.log(numbers3); // Output: [14, 24, 31, 422, 5] (original unchanged)
console.log(doubled); // Output: [28, 48, 62, 844, 10]

// Map with index
const indexed = numbers3.map((num, index) => `${index}: ${num}`);
console.log(indexed); // Output: ["0: 14", "1: 24", "2: 31", "3: 422", "4: 5"]

// ============================================
// Array.filter() - Filter array elements
// ============================================
// Creates a new array with elements that pass a test
const numbers4 = [14, 24, 31, 422, 5];
const filteredNumbers = numbers4.filter(num => num > 20);
console.log(numbers4); // Output: [14, 24, 31, 422, 5] (original unchanged)
console.log(filteredNumbers); // Output: [24, 31, 422]

// Using a separate function
function isGreaterThan20(num) {
    return num > 20;
}
const filteredNumbers2 = numbers4.filter(isGreaterThan20);
console.log(filteredNumbers2); // Output: [24, 31, 422]

// ============================================
// Additional Useful Array Methods
// ============================================

// Array.reduce() - Reduce array to a single value
const numbers5 = [1, 2, 3, 4, 5];
const sum = numbers5.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

// Array.find() - Find first element that matches condition
const numbers6 = [14, 24, 31, 422, 5];
const found = numbers6.find(num => num > 20);
console.log(found); // Output: 24

// Array.forEach() - Execute function for each element
const numbers7 = [1, 2, 3];
numbers7.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});
// Output:
// Index 0: 1
// Index 1: 2
// Index 2: 3

// Array.includes() - Check if array contains element
const fruits5 = ["apple", "banana", "cherry"];
console.log(fruits5.includes("banana")); // Output: true
console.log(fruits5.includes("orange")); // Output: false

// Array.slice() - Extract portion of array (non-mutating)
const numbers8 = [1, 2, 3, 4, 5];
const sliced = numbers8.slice(1, 4); // Extract from index 1 to 3
console.log(sliced); // Output: [2, 3, 4]
console.log(numbers8); // Output: [1, 2, 3, 4, 5] (original unchanged)
