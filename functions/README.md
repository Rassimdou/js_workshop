# Arrow Functions in JavaScript

Arrow functions provide a concise syntax for writing functions and have important differences from regular functions, especially regarding `this` binding.

## 📚 Table of Contents

- [Introduction](#introduction)
- [Basic Syntax](#basic-syntax)
- [Key Differences](#key-differences)
- [When to Use](#when-to-use)
- [When NOT to Use](#when-not-to-use)
- [Best Practices](#best-practices)
- [Running the Examples](#running-the-examples)

## Introduction

Arrow functions were introduced in ES6 and provide a shorter syntax for writing functions. They are particularly useful for callbacks and functional programming patterns.

```javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

## Basic Syntax

### Single Parameter
```javascript
const greet = name => `Hello, ${name}!`;
```

### Multiple Parameters
```javascript
const add = (a, b) => a + b;
```

### No Parameters
```javascript
const sayHello = () => console.log('Hello!');
```

### Multiline Body
```javascript
const calculate = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};
```

### Returning Objects
```javascript
// Wrap in parentheses to return object literal
const createUser = (name, age) => ({ name, age });
```

## Key Differences

### 1. `this` Binding

Arrow functions have **lexical `this`** - they inherit `this` from the surrounding scope:

```javascript
const person = {
  name: 'John',
  
  // Arrow function - 'this' is NOT the object
  greetArrow: () => {
    console.log(this.name); // undefined
  },
  
  // Regular function - 'this' IS the object
  greetRegular: function() {
    console.log(this.name); // 'John'
  }
};
```

### 2. Cannot Be Constructors

```javascript
// ❌ Error
const User = (name) => {
  this.name = name;
};
// new User('John'); // TypeError

// ✅ Works
function User(name) {
  this.name = name;
}
new User('John');
```

### 3. No `arguments` Object

```javascript
// Regular function - has arguments
function regular() {
  console.log(arguments);
}

// Arrow function - no arguments
const arrow = () => {
  // console.log(arguments); // ReferenceError
};
```

## When to Use

### 1. Array Methods
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
```

### 2. Callbacks
```javascript
setTimeout(() => {
  console.log('Hello after 1 second');
}, 1000);
```

### 3. Functional Programming
```javascript
const compose = (f, g) => x => f(g(x));
```

### 4. When You Need Lexical `this`
```javascript
class Counter {
  constructor() {
    this.count = 0;
  }
  
  start() {
    setInterval(() => {
      this.count++; // 'this' refers to Counter instance
      console.log(this.count);
    }, 1000);
  }
}
```

## When NOT to Use

### 1. Object Methods
```javascript
// ❌ Bad
const calculator = {
  value: 0,
  add: (n) => {
    this.value += n; // 'this' is not calculator
  }
};

// ✅ Good
const calculator = {
  value: 0,
  add(n) {
    this.value += n;
  }
};
```

### 2. Event Handlers (if you need `this`)
```javascript
// ❌ Bad
button.addEventListener('click', () => {
  this.classList.toggle('active'); // 'this' is not the button
});

// ✅ Good
button.addEventListener('click', function() {
  this.classList.toggle('active'); // 'this' is the button
});
```

### 3. Constructors
Arrow functions cannot be used with `new`.

### 4. Methods That Need `arguments`
Use regular functions if you need the `arguments` object.

## Best Practices

### 1. Use for Conciseness
```javascript
// ✅ Good
const double = n => n * 2;

// ❌ Unnecessary
const double = (n) => {
  return n * 2;
};
```

### 2. Use for Preserving `this`
```javascript
class Timer {
  start() {
    // ✅ Good - arrow function preserves 'this'
    setInterval(() => {
      this.tick();
    }, 1000);
  }
}
```

### 3. Parentheses for Clarity
```javascript
// When in doubt, use parentheses
const greet = (name) => `Hello, ${name}!`;
```

### 4. Explicit Returns for Complex Logic
```javascript
// ✅ Good - explicit return for clarity
const calculate = (a, b) => {
  if (a > b) return a - b;
  return b - a;
};
```

## Common Patterns

### Higher-Order Functions
```javascript
const multiply = factor => number => number * factor;
const double = multiply(2);
const triple = multiply(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### Chaining Array Methods
```javascript
const result = numbers
  .filter(n => n > 0)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0);
```

## Running the Examples

To run the examples in this folder:

```bash
node arrowfunctions.js
```

## Exercises

1. Convert regular functions to arrow functions
2. Identify when NOT to use arrow functions
3. Use arrow functions with array methods
4. Create higher-order functions
5. Handle `this` binding correctly

## See Also

- [MDN Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [JavaScript.info: Arrow Functions](https://javascript.info/arrow-functions-basics)

