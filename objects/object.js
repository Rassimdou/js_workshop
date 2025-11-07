/**
 * Object Methods in JavaScript
 * 
 * JavaScript provides many built-in Object methods for working with objects.
 * This file demonstrates commonly used Object methods.
 */

// ============================================
// Object.assign() - Copy/Merge Objects
// ============================================
// Merges properties from source objects into target object
const person1 = { name: "John", age: 30 };
const person2 = { age: 25, city: "NYC" };
Object.assign(person1, person2); // Merges person2 into person1
console.log(person1); // Output: { name: "John", age: 25, city: "NYC" }
console.log(person2); // Output: { age: 25, city: "NYC" } (unchanged)

// Create a new object (without mutating original)
const merged = Object.assign({}, person1, person2);
console.log(merged); // Output: { name: "John", age: 25, city: "NYC" }

// Multiple sources
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const combined = Object.assign({}, obj1, obj2, obj3);
console.log(combined); // Output: { a: 1, b: 2, c: 3 }

// ============================================
// Object.create() - Create Object with Prototype
// ============================================
// Creates a new object with specified prototype
const messi = { status: "GOAT", age: 36, sport: "Football" };
const ronaldo = Object.create(messi); // ronaldo inherits from messi
console.log(ronaldo.status); // Output: GOAT (inherited)
console.log(ronaldo.hasOwnProperty('status')); // Output: false (inherited, not own)

// Add own properties
ronaldo.name = "Ronaldo";
ronaldo.age = 39;
console.log(ronaldo); // Output: { name: "Ronaldo", age: 39 }
console.log(ronaldo.sport); // Output: Football (inherited)

// ============================================
// Object.entries() - Convert to Key-Value Pairs
// ============================================
// Returns array of [key, value] pairs
const person = { name: "John", age: 30, city: "NYC" };
const entries = Object.entries(person);
console.log(entries);
// Output: [ ['name', 'John'], ['age', 30], ['city', 'NYC'] ]

// Useful for iteration
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}
// Output:
// name: John
// age: 30
// city: NYC

// Convert back to object
const entriesArray = [['a', 1], ['b', 2], ['c', 3]];
const newObj = Object.fromEntries(entriesArray);
console.log(newObj); // Output: { a: 1, b: 2, c: 3 }

// ============================================
// Object.keys() - Get Object Keys
// ============================================
// Returns array of object's own property names
const person3 = { name: "John", age: 30, city: "NYC" };
const keys = Object.keys(person3);
console.log(keys); // Output: ['name', 'age', 'city']

// Iterate over keys
Object.keys(person3).forEach(key => {
    console.log(`${key}: ${person3[key]}`);
});

// ============================================
// Object.values() - Get Object Values
// ============================================
// Returns array of object's own property values
const person4 = { name: "John", age: 30, city: "NYC" };
const values = Object.values(person4);
console.log(values); // Output: ['John', 30, 'NYC']

// ============================================
// Object.groupBy() - Group Array Elements
// ============================================
// Groups array elements by a callback function's return value
// Note: Object.groupBy is a relatively new feature (ES2024)
const data = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 10, city: "Los Angeles" },
    { name: "Charlie", age: 35, city: "New York" },
    { name: "David", age: 30, city: "Chicago" }
];

// Group by city
function groupByCity(item) {
    return item.city;
}
const resultByCity = Object.groupBy(data, groupByCity);
console.log(resultByCity);
// Output: Object with city names as keys

// Group by age category
function groupByAge(item) {
    return item.age > 20 ? "adult" : "young";
}
const resultByAge = Object.groupBy(data, groupByAge);
console.log(resultByAge);
// Output: Object with "adult" and "young" as keys

// ============================================
// Object.freeze() - Prevent Modifications
// ============================================
// Prevents adding, removing, or modifying properties
const frozen = Object.freeze({ name: "John", age: 30 });
// frozen.age = 31; // Silently fails (or throws in strict mode)
// frozen.city = "NYC"; // Silently fails
// delete frozen.name; // Silently fails
console.log(frozen); // Output: { name: "John", age: 30 }

// Check if object is frozen
console.log(Object.isFrozen(frozen)); // Output: true

// ============================================
// Object.seal() - Prevent Adding/Removing Properties
// ============================================
// Prevents adding or removing properties, but allows modifying existing ones
const sealed = Object.seal({ name: "John", age: 30 });
sealed.age = 31; // ✅ Allowed
// sealed.city = "NYC"; // ❌ Not allowed
// delete sealed.name; // ❌ Not allowed
console.log(sealed); // Output: { name: "John", age: 31 }

console.log(Object.isSealed(sealed)); // Output: true

// ============================================
// Object.hasOwn() - Check Own Property
// ============================================
// Checks if object has own property (not inherited)
const obj = { name: "John" };
const proto = { inherited: true };
Object.setPrototypeOf(obj, proto);

console.log(Object.hasOwn(obj, 'name')); // Output: true
console.log(Object.hasOwn(obj, 'inherited')); // Output: false

// ============================================
// Object.defineProperty() - Define Property Descriptors
// ============================================
const obj2 = {};
Object.defineProperty(obj2, 'name', {
    value: 'John',
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(obj2.name); // Output: John
// obj2.name = 'Jane'; // Fails silently (writable: false)

// ============================================
// Object.getOwnPropertyDescriptors()
// ============================================
const descriptors = Object.getOwnPropertyDescriptors(obj2);
console.log(descriptors);
// Output: Object with property descriptors

// ============================================
// Object.is() - Compare Values
// ============================================
// Similar to === but handles special cases
console.log(Object.is(NaN, NaN)); // Output: true (unlike ===)
console.log(NaN === NaN); // Output: false

console.log(Object.is(-0, +0)); // Output: false (unlike ===)
console.log(-0 === +0); // Output: true

// ============================================
// Practical Example: Combining Methods
// ============================================
function mergeObjects(...objects) {
    return Object.assign({}, ...objects);
}

function getObjectInfo(obj) {
    return {
        keys: Object.keys(obj),
        values: Object.values(obj),
        entries: Object.entries(obj),
        size: Object.keys(obj).length
    };
}

const info = getObjectInfo({ name: "John", age: 30 });
console.log(info);
// Output: { keys: ['name', 'age'], values: ['John', 30], entries: [...], size: 2 }

