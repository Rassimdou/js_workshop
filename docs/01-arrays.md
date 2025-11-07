# Arrays in JavaScript

Arrays are ordered collections of values in JavaScript. This guide covers essential array methods and operations.

## Table of Contents

- [Introduction](#introduction)
- [Array Methods](#array-methods)
- [Common Patterns](#common-patterns)
- [Best Practices](#best-practices)

## Introduction

Arrays in JavaScript are zero-indexed, meaning the first element is at index 0. They can contain any type of data, including numbers, strings, objects, and even other arrays.

```javascript
const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", { name: "John" }, [1, 2, 3]];
```

## Array Methods

### Mutating Methods (Modify Original Array)

#### `splice()`
Modifies an array by removing, replacing, or adding elements.

**Syntax:** `array.splice(start, deleteCount, item1, item2, ...)`

- `start`: Index to start at
- `deleteCount`: Number of elements to remove
- `item1, item2, ...`: Elements to add

```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'a', 'b'); // Removes 2 elements starting at index 1, adds 'a' and 'b'
// Result: [1, 'a', 'b', 4, 5]
```

#### `sort()`
Sorts array elements. **Important:** By default, it converts elements to strings and sorts alphabetically!

```javascript
// String sorting
const fruits = ["banana", "apple", "cherry"];
fruits.sort(); // ["apple", "banana", "cherry"]

// Number sorting requires compare function
const numbers = [10, 5, 40, 25, 1000];
numbers.sort((a, b) => a - b); // Ascending: [5, 10, 25, 40, 1000]
numbers.sort((a, b) => b - a); // Descending: [1000, 40, 25, 10, 5]
```

### Non-Mutating Methods (Return New Array)

#### `map()`
Creates a new array by transforming each element.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
// Result: [2, 4, 6, 8, 10]
// Original array unchanged: [1, 2, 3, 4, 5]
```

**Use Cases:**
- Transforming data
- Extracting specific properties
- Converting data types

#### `filter()`
Creates a new array with elements that pass a test.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter(num => num % 2 === 0);
// Result: [2, 4, 6, 8, 10]
```

**Use Cases:**
- Removing unwanted elements
- Finding elements matching criteria
- Data validation

#### `reduce()`
Reduces array to a single value by executing a reducer function.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// Result: 15

// More complex example
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
const totalAge = people.reduce((sum, person) => sum + person.age, 0);
// Result: 90
```

**Use Cases:**
- Summing values
- Finding maximum/minimum
- Grouping data
- Flattening arrays

#### `slice()`
Extracts a portion of an array without modifying the original.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sliced = numbers.slice(1, 4); // From index 1 to 3 (not including 4)
// Result: [2, 3, 4]
// Original unchanged: [1, 2, 3, 4, 5]
```

### Search Methods

#### `find()`
Returns the first element that matches a condition.

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
const user = users.find(u => u.id === 2);
// Result: { id: 2, name: "Bob" }
```

#### `includes()`
Checks if array contains a specific element.

```javascript
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("orange")); // false
```

#### `indexOf()`
Returns the first index where an element is found.

```javascript
const fruits = ["apple", "banana", "cherry", "banana"];
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("orange")); // -1 (not found)
```

### Iteration Methods

#### `forEach()`
Executes a function for each array element.

```javascript
const numbers = [1, 2, 3];
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});
// Output:
// Index 0: 1
// Index 1: 2
// Index 2: 3
```

**Note:** `forEach` doesn't return a value. Use `map()` if you need a return value.

## Common Patterns

### Chaining Methods

You can chain array methods together:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers
  .filter(num => num % 2 === 0)  // [2, 4, 6, 8, 10]
  .map(num => num * 2)            // [4, 8, 12, 16, 20]
  .reduce((sum, num) => sum + num, 0); // 60
```

### Converting to Array

```javascript
// String to array
const str = "hello";
const arr = [...str]; // ['h', 'e', 'l', 'l', 'o']

// NodeList to array
const nodeList = document.querySelectorAll('div');
const array = [...nodeList];
```

### Removing Duplicates

```javascript
const numbers = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(numbers)]; // [1, 2, 3, 4]
```

## Best Practices

1. **Use `map()` for transformations** - Returns new array
2. **Use `filter()` for selections** - Returns new array
3. **Use `reduce()` for aggregations** - Returns single value
4. **Avoid mutating in `map()`/`filter()`** - Keep functions pure
5. **Use `forEach()` for side effects** - When you don't need a return value
6. **Prefer `includes()` over `indexOf()`** - More readable
7. **Use `slice()` to copy arrays** - Non-mutating alternative to `splice()`

## Performance Considerations

- `map()`, `filter()`, `reduce()` create new arrays (memory overhead)
- For large arrays, consider `for` loops for better performance
- `forEach()` is generally slower than `for` loops but more readable

## Exercises

1. Double all numbers in an array
2. Filter out negative numbers
3. Find the sum of all even numbers
4. Get unique values from an array
5. Group objects by a property

## See Also

- [MDN Array Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Array Methods Cheat Sheet](https://dev.to/frugencefidel/10-javascript-array-methods-you-should-know-4lk3)

