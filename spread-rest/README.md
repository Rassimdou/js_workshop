# Spread and Rest Operators

The spread (`...`) and rest (`...`) operators are powerful ES6 features that make working with arrays and objects more convenient.

## 📚 Table of Contents

- [Introduction](#introduction)
- [Spread Operator](#spread-operator)
- [Rest Operator](#rest-operator)
- [Common Patterns](#common-patterns)
- [Best Practices](#best-practices)
- [Running the Examples](#running-the-examples)

## Introduction

Both operators use the same syntax (`...`) but serve different purposes:
- **Spread** - Expands iterables into individual elements
- **Rest** - Collects remaining elements into an array/object

## Spread Operator

The spread operator expands an iterable (array, string, etc.) into individual elements.

### Copying Arrays

```javascript
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]
console.log(original === copy); // false (different references)
```

### Merging Arrays

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]
```

### Adding Elements

```javascript
const numbers = [2, 3];
const newArray = [1, ...numbers, 4];
console.log(newArray); // [1, 2, 3, 4]
```

### Spreading in Function Calls

```javascript
const numbers = [1, 2, 3, 4, 5];
const max = Math.max(...numbers);
// Equivalent to: Math.max(1, 2, 3, 4, 5)
```

### Copying Objects

```javascript
const original = { name: "John", age: 30 };
const copy = { ...original };
console.log(copy); // { name: "John", age: 30 }
```

### Merging Objects

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }
```

**Note:** Later properties override earlier ones:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 } (b is overridden)
```

### Converting Strings to Arrays

```javascript
const str = "hello";
const chars = [...str];
console.log(chars); // ["h", "e", "l", "l", "o"]
```

### Converting NodeList to Array

```javascript
// In browser
const nodeList = document.querySelectorAll('div');
const array = [...nodeList];
```

## Rest Operator

The rest operator collects remaining elements into an array or object.

### Function Parameters

Collects remaining arguments into an array:

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
```

**Important:** Rest parameter must be last:

```javascript
function greet(greeting, ...names) {
  console.log(`${greeting}, ${names.join(', ')}!`);
}

greet('Hello', 'Alice', 'Bob', 'Charlie');
// "Hello, Alice, Bob, Charlie!"
```

### Array Destructuring

```javascript
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
```

### Object Destructuring

```javascript
const person = { name: "John", age: 30, city: "NYC", country: "USA" };
const { name, ...rest } = person;
console.log(name); // "John"
console.log(rest); // { age: 30, city: "NYC", country: "USA" }
```

## Common Patterns

### Cloning

```javascript
// Arrays
function cloneArray(arr) {
  return [...arr];
}

// Objects
function cloneObject(obj) {
  return { ...obj };
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

### Default Parameters with Rest

```javascript
function createUser(name, age, ...hobbies) {
  return {
    name,
    age,
    hobbies: hobbies.length > 0 ? hobbies : ["none"]
  };
}

const user1 = createUser("Alice", 25, "reading", "coding");
const user2 = createUser("Bob", 30);
```

### Merging with Defaults

```javascript
function createConfig(userConfig) {
  const defaults = {
    theme: "light",
    language: "en",
    notifications: true
  };
  return { ...defaults, ...userConfig };
}

const config = createConfig({ theme: "dark" });
// { theme: "dark", language: "en", notifications: true }
```

### Updating Objects

```javascript
const user = { name: "John", age: 30 };
const updated = { ...user, age: 31 };
// { name: "John", age: 31 }
```

### Combining Arrays

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2].filter(num => num % 2 === 0);
// [2, 4, 6]
```

## Best Practices

### 1. Use Spread for Cloning

```javascript
// ✅ Good - creates new array
const copy = [...original];

// ❌ Bad - same reference
const copy = original;
```

### 2. Use Rest for Flexible Functions

```javascript
// ✅ Good - accepts any number of arguments
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// ❌ Less flexible
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
```

### 3. Prefer Spread over Array Methods

```javascript
// ✅ Good - more readable
const merged = [...arr1, ...arr2];

// ❌ Verbose
const merged = arr1.concat(arr2);
```

### 4. Use Rest for Clean Separation

```javascript
// ✅ Good - separates known from unknown properties
const { id, name, ...otherProps } = user;
```

### 5. Be Careful with Nested Objects

```javascript
// ⚠️ Shallow copy - nested objects are still referenced
const obj1 = { nested: { a: 1 } };
const obj2 = { ...obj1 };
obj2.nested.a = 2;
console.log(obj1.nested.a); // 2 (changed!)

// ✅ Deep clone needed
const deepClone = JSON.parse(JSON.stringify(obj1));
```

## Common Pitfalls

### 1. Spreading Non-Iterables

```javascript
// ❌ Error - objects are not iterable in spread context
// const arr = [...{ a: 1, b: 2 }];

// ✅ Correct - use Object.values() or Object.entries()
const arr = Object.values({ a: 1, b: 2 });
```

### 2. Rest Must Be Last

```javascript
// ❌ SyntaxError
// function example(...rest, last) {}

// ✅ Correct
function example(last, ...rest) {}
```

### 3. Shallow Copying

```javascript
// ⚠️ Nested objects are not cloned
const original = { nested: { value: 1 } };
const copy = { ...original };
copy.nested.value = 2;
console.log(original.nested.value); // 2
```

## Running the Examples

To run the examples in this folder:

```bash
node SpreadRest.js
```

## Exercises

1. Clone arrays and objects
2. Merge multiple objects
3. Remove properties from objects
4. Create functions with rest parameters
5. Combine spread and destructuring

## See Also

- [MDN Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [JavaScript.info: Rest Parameters](https://javascript.info/rest-parameters-spread)

