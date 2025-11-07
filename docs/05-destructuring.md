# Destructuring in JavaScript

Destructuring allows you to extract values from arrays and objects into distinct variables in a concise way.

## Table of Contents

- [Introduction](#introduction)
- [Array Destructuring](#array-destructuring)
- [Object Destructuring](#object-destructuring)
- [Advanced Patterns](#advanced-patterns)
- [Best Practices](#best-practices)

## Introduction

Destructuring is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables.

### Why Use Destructuring?

```javascript
// Without destructuring
const user = { name: "John", age: 30 };
const name = user.name;
const age = user.age;

// With destructuring
const { name, age } = user;
```

## Array Destructuring

### Basic Syntax

```javascript
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3
```

### Skipping Elements

Use empty commas to skip elements:

```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, , third, , fifth] = numbers;
console.log(first);  // 1
console.log(third);  // 3
console.log(fifth);   // 5
```

### Default Values

Provide default values for missing elements:

```javascript
const numbers = [1, 2];
const [first, second, third = 0] = numbers;
console.log(third); // 0 (default value)
```

### Rest Operator

Collect remaining elements:

```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
```

### Swapping Variables

Easily swap variable values:

```javascript
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1
```

### Returning Multiple Values

Functions can return multiple values:

```javascript
function getCoordinates() {
  return [10, 20];
}

const [x, y] = getCoordinates();
console.log(x, y); // 10 20
```

## Object Destructuring

### Basic Syntax

```javascript
const person = { name: "John", age: 30, city: "NYC" };
const { name, age } = person;
console.log(name); // "John"
console.log(age);  // 30
```

### Renaming Variables

Extract with a different variable name:

```javascript
const user = { username: "johndoe", age: 30 };
const { username: name, age } = user;
console.log(name); // "johndoe"
// console.log(username); // ReferenceError
```

### Default Values

Provide defaults for missing properties:

```javascript
const settings = { theme: "dark" };
const { theme = "light", fontSize = 16 } = settings;
console.log(theme);    // "dark" (from object)
console.log(fontSize); // 16 (default)
```

### Nested Destructuring

Extract nested properties:

```javascript
const user = {
  id: 1,
  name: "John",
  address: {
    street: "123 Main St",
    city: "NYC",
    country: "USA"
  }
};

const {
  name,
  address: { city, country }
} = user;

console.log(name);   // "John"
console.log(city);   // "NYC"
console.log(country); // "USA"
```

### Rest in Objects

Collect remaining properties:

```javascript
const person = { name: "John", age: 30, city: "NYC", country: "USA" };
const { name, ...rest } = person;
console.log(name); // "John"
console.log(rest); // { age: 30, city: "NYC", country: "USA" }
```

## Advanced Patterns

### Function Parameters

Destructure in function parameters:

```javascript
// Traditional
function greetUser(user) {
  console.log(`Hello, ${user.name}!`);
}

// With destructuring
function greetUser({ name, age }) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetUser({ name: "John", age: 30 });
```

### Default Parameters with Destructuring

```javascript
function createUser({ name = "Guest", age = 0, email = "" }) {
  return { name, age, email };
}

createUser({ name: "John" }); // { name: "John", age: 0, email: "" }
```

### Destructuring in Loops

```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

for (const { name, age } of users) {
  console.log(`${name} is ${age} years old`);
}
```

### Mixed Destructuring

Combine array and object destructuring:

```javascript
const data = [
  { name: "John", scores: [85, 90, 95] },
  { name: "Jane", scores: [92, 88, 94] }
];

for (const { name, scores: [firstScore, ...otherScores] } of data) {
  console.log(`${name}'s first score: ${firstScore}`);
}
```

### Computed Property Names

```javascript
const key = "name";
const { [key]: value } = { name: "John" };
console.log(value); // "John"
```

## Best Practices

### 1. Use Meaningful Names

```javascript
// ❌ Unclear
const { a, b } = user;

// ✅ Clear
const { name, age } = user;
```

### 2. Provide Defaults for Optional Properties

```javascript
function processUser({ name, age = 0, email = "" }) {
  // Handle optional properties safely
}
```

### 3. Use Rest for Clean Separation

```javascript
const { id, name, ...otherProps } = user;
// Use id and name, pass otherProps elsewhere
```

### 4. Avoid Over-Destructuring

```javascript
// ❌ Too complex
const {
  user: {
    profile: {
      personal: { name, age }
    }
  }
} = data;

// ✅ Better - extract step by step
const { user } = data;
const { profile } = user;
const { personal } = profile;
const { name, age } = personal;
```

### 5. Destructure at the Right Level

```javascript
// ❌ Destructuring too early
const { data } = response;
const { user } = data;
const { name } = user;

// ✅ Destructure what you need
const { data: { user: { name } } } = response;
```

## Common Use Cases

### API Responses

```javascript
async function fetchUser(id) {
  const response = await fetch(`/api/users/${id}`);
  const { data: { user } } = await response.json();
  return user;
}
```

### Configuration Objects

```javascript
function createApp(config) {
  const {
    apiUrl = "https://api.example.com",
    timeout = 5000,
    retries = 3
  } = config;
  // Use configuration
}
```

### Removing Properties

```javascript
function removeProperty(obj, prop) {
  const { [prop]: removed, ...rest } = obj;
  return rest;
}

const user = { name: "John", age: 30, password: "secret" };
const safeUser = removeProperty(user, "password");
// { name: "John", age: 30 }
```

## Exercises

1. Destructure array elements with defaults
2. Extract nested object properties
3. Use destructuring in function parameters
4. Swap variables using destructuring
5. Remove properties from objects

## See Also

- [MDN Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [JavaScript.info: Destructuring](https://javascript.info/destructuring-assignment)

