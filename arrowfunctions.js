/**
 * Arrow Functions in JavaScript
 * 
 * Arrow functions provide a concise syntax for writing functions.
 * They have lexical 'this' binding and cannot be used as constructors.
 */

// ============================================
// Basic Syntax
// ============================================
// Single parameter (parentheses optional)
const greet = name => `Hello, ${name}!`;
console.log(greet("World")); // Output: Hello, World!

// Multiple parameters (parentheses required)
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

// No parameters (parentheses required)
const sayHello = () => console.log("Hello!");
sayHello(); // Output: Hello!

// ============================================
// Comparison: Regular Function vs Arrow Function
// ============================================
// Regular function
function addRegular(a, b) {
    return a + b;
}

// Arrow function (equivalent)
const addArrow = (a, b) => a + b;

console.log(addRegular(5, 3)); // Output: 8
console.log(addArrow(5, 3)); // Output: 8

// ============================================
// Multiline Arrow Functions
// ============================================
// When function body has multiple statements, use curly braces
const calculate = (a, b) => {
    const sum = a + b;
    const product = a * b;
    console.log(`Sum: ${sum}, Product: ${product}`);
    return { sum, product };
};
calculate(5, 10);
// Output: Sum: 15, Product: 50

// ============================================
// 'this' Binding - Key Difference
// ============================================
// Arrow functions have lexical 'this' (inherited from surrounding scope)
// Regular functions have their own 'this' context

const person = {
    name: 'John',
    
    // Arrow function - 'this' refers to global/window object
    greetArrow: () => {
        console.log(`Hello, ${this.name}`); // Output: Hello, undefined
    },
    
    // Regular function - 'this' refers to the object
    greetRegular: function() {
        console.log(`Hello, ${this.name}`); // Output: Hello, John
    },
    
    // Method shorthand (ES6) - same as regular function
    greetMethod() {
        console.log(`Hello, ${this.name}`); // Output: Hello, John
    }
};

person.greetArrow(); // Output: Hello, undefined
person.greetRegular(); // Output: Hello, John
person.greetMethod(); // Output: Hello, John

// ============================================
// Arrow Functions in Array Methods
// ============================================
const numbers = [1, 2, 3, 4, 5];

// Using arrow functions with map
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Using arrow functions with filter
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// Using arrow functions with reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

// ============================================
// When NOT to Use Arrow Functions
// ============================================
// 1. Object methods (if you need 'this')
const calculator = {
    value: 0,
    
    // ❌ Bad - 'this' won't work
    addArrow: (num) => {
        this.value += num; // 'this' is not calculator
    },
    
    // ✅ Good - regular function
    addRegular: function(num) {
        this.value += num;
    }
};

calculator.addRegular(5);
console.log(calculator.value); // Output: 5

// 2. Event handlers (if you need 'this')
// 3. Constructors (arrow functions cannot be constructors)
// 4. Methods that need their own 'this' context

// ============================================
// Returning Objects
// ============================================
// To return an object literal, wrap in parentheses
const createUser = (name, age) => ({ name, age });
const user = createUser("Alice", 30);
console.log(user); // Output: { name: 'Alice', age: 30 }

// ============================================
// Default Parameters
// ============================================
const greetWithDefault = (name = "Guest") => `Hello, ${name}!`;
console.log(greetWithDefault()); // Output: Hello, Guest!
console.log(greetWithDefault("Bob")); // Output: Hello, Bob!
