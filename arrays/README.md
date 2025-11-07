# JavaScript Arrays

Arrays are ordered collections that store multiple values. This guide covers essential array methods and operations.

## 📚 Table of Contents

- [Introduction](#introduction)
- [Creating Arrays](#creating-arrays)
- [Array Methods](#array-methods)
- [Iteration Methods](#iteration-methods)
- [Best Practices](#best-practices)
- [Running the Examples](#running-the-examples)

## Introduction

Arrays in JavaScript are dynamic, zero-indexed collections that can hold values of any type.

```javascript
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'hello', true, null, { name: 'John' }];
```

## Creating Arrays

```javascript
// Array literal
const arr1 = [1, 2, 3];

// Array constructor
const arr2 = new Array(1, 2, 3);

// Array.of()
const arr3 = Array.of(1, 2, 3);

// Array.from()
const arr4 = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
```

## Array Methods

### Mutating Methods

These methods modify the original array:

#### `push()` - Add to end
```javascript
const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
```

#### `pop()` - Remove from end
```javascript
const arr = [1, 2, 3];
const last = arr.pop(); // last = 3, arr = [1, 2]
```

#### `splice()` - Add/remove elements
```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // Remove 1 element at index 2: [1, 2, 4, 5]
arr.splice(1, 0, 'a', 'b'); // Add at index 1: [1, 'a', 'b', 2, 4, 5]
```

#### `sort()` - Sort elements
```javascript
const fruits = ['banana', 'apple', 'cherry'];
fruits.sort(); // ['apple', 'banana', 'cherry']

// For numbers
const numbers = [10, 5, 20, 15];
numbers.sort((a, b) => a - b); // [5, 10, 15, 20]
```

### Non-Mutating Methods

These methods return new arrays:

#### `slice()` - Extract portion
```javascript
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 4); // [2, 3, 4]
```

#### `concat()` - Merge arrays
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = arr1.concat(arr2); // [1, 2, 3, 4]
```

## Iteration Methods

### `map()` - Transform elements
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]
```

### `filter()` - Select elements
```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
```

### `reduce()` - Reduce to single value
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15
```

### `forEach()` - Execute function for each
```javascript
const numbers = [1, 2, 3];
numbers.forEach(n => console.log(n));
```

### `find()` - Find first match
```javascript
const numbers = [1, 2, 3, 4, 5];
const found = numbers.find(n => n > 3); // 4
```

### `includes()` - Check if element exists
```javascript
const fruits = ['apple', 'banana'];
fruits.includes('apple'); // true
```

## Best Practices

### 1. Use Appropriate Methods

```javascript
// ✅ Good - map for transformation
const doubled = numbers.map(n => n * 2);

// ❌ Bad - forEach doesn't return
const doubled = [];
numbers.forEach(n => doubled.push(n * 2));
```

### 2. Avoid Mutating When Possible

```javascript
// ✅ Good - non-mutating
const copy = [...original];

// ❌ Risky - mutates original
const copy = original;
```

### 3. Use Meaningful Variable Names

```javascript
// ✅ Good
const activeUsers = users.filter(user => user.isActive);

// ❌ Unclear
const x = users.filter(u => u.isActive);
```

### 4. Chain Methods for Readability

```javascript
const result = numbers
  .filter(n => n > 0)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0);
```

## Common Patterns

### Remove Duplicates
```javascript
const unique = [...new Set(array)];
```

### Flatten Array
```javascript
const flattened = array.flat();
```

### Group By Property
```javascript
const grouped = array.reduce((acc, item) => {
  const key = item.category;
  if (!acc[key]) acc[key] = [];
  acc[key].push(item);
  return acc;
}, {});
```

## Running the Examples

To run the examples in this folder:

```bash
node Arrays.js
```

## Exercises

1. Transform arrays using `map()`
2. Filter arrays based on conditions
3. Calculate totals with `reduce()`
4. Sort arrays of objects
5. Chain multiple array methods

## See Also

- [MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript.info: Arrays](https://javascript.info/array)
