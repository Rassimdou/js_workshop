# const and let in JavaScript

ES6 introduced `const` and `let` as modern alternatives to `var`. Understanding their differences is crucial for writing better JavaScript.

## 📚 Table of Contents

- [Introduction](#introduction)
- [let](#let)
- [const](#const)
- [Comparison](#comparison)
- [Best Practices](#best-practices)
- [Running the Examples](#running-the-examples)

## Introduction

Before ES6, JavaScript only had `var` for variable declarations. ES6 introduced `let` and `const` to address issues with `var`:

- Block scoping
- Temporal Dead Zone
- No hoisting issues
- Better error prevention

## let

### Block Scope

`let` is block-scoped, meaning it's only accessible within the block where it's declared.

```javascript
{
  let x = 10;
  console.log(x); // 10
}
// console.log(x); // ReferenceError: x is not defined
```

### Comparison with var

```javascript
// var - function scoped
function example() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1 (accessible)
}

// let - block scoped
function example() {
  if (true) {
    let y = 1;
  }
  // console.log(y); // ReferenceError: y is not defined
}
```

### Temporal Dead Zone (TDZ)

Variables declared with `let` cannot be accessed before declaration:

```javascript
// console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

### Reassignment

`let` allows reassignment:

```javascript
let count = 0;
count = 1; // ✅ Allowed
count = 2; // ✅ Allowed
```

### Redeclaration

Cannot redeclare in the same scope:

```javascript
let x = 1;
// let x = 2; // SyntaxError: Identifier 'x' has already been declared

// But can redeclare in different scopes
{
  let x = 1;
}
{
  let x = 2; // ✅ Allowed - different scope
}
```

## const

### Block Scope

Like `let`, `const` is block-scoped:

```javascript
{
  const x = 10;
  console.log(x); // 10
}
// console.log(x); // ReferenceError
```

### Must be Initialized

`const` must be initialized at declaration:

```javascript
// const x; // SyntaxError: Missing initializer in const declaration
const x = 10; // ✅ Correct
```

### Cannot be Reassigned

The variable itself cannot be reassigned:

```javascript
const x = 10;
// x = 20; // TypeError: Assignment to constant variable
```

### Mutable Objects and Arrays

**Important:** `const` prevents reassignment, not mutation:

```javascript
const person = { name: "John", age: 30 };

// ✅ Allowed - modifying properties
person.age = 31;
person.city = "NYC";

// ❌ Not allowed - reassigning variable
// person = { name: "Jane" }; // TypeError
```

```javascript
const numbers = [1, 2, 3];

// ✅ Allowed - modifying array
numbers.push(4);
numbers[0] = 10;

// ❌ Not allowed - reassigning variable
// numbers = [5, 6, 7]; // TypeError
```

### Making Objects Truly Immutable

Use `Object.freeze()` to prevent mutations:

```javascript
const person = Object.freeze({ name: "John", age: 30 });
person.age = 31; // Silently fails (or throws in strict mode)
```

**Note:** `Object.freeze()` is shallow - nested objects can still be modified.

## Comparison

### var vs let vs const

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisting | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Reassignment | ✅ Yes | ✅ Yes | ❌ No |
| Redeclaration | ✅ Yes | ❌ No | ❌ No |
| Initialization | Optional | Optional | Required |

### Scope Examples

```javascript
// var - function scoped
function varExample() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1
}

// let/const - block scoped
function letExample() {
  if (true) {
    let y = 1;
    const z = 1;
  }
  // console.log(y); // ReferenceError
  // console.log(z); // ReferenceError
}
```

### Hoisting Behavior

```javascript
// var - hoisted and initialized with undefined
console.log(x); // undefined (not an error)
var x = 10;

// let/const - hoisted but in TDZ
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

## Best Practices

### 1. Use const by Default

Use `const` for values that won't be reassigned:

```javascript
// ✅ Good
const API_URL = 'https://api.example.com';
const PI = 3.14159;
const users = [];

// ❌ Unnecessary let
let API_URL = 'https://api.example.com';
```

### 2. Use let When Reassignment is Needed

```javascript
// ✅ Good - needs reassignment
let currentUser = null;
currentUser = { name: "John" };

// ✅ Good - loop variable
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

### 3. Avoid var

Modern JavaScript should avoid `var`:

```javascript
// ❌ Avoid
var x = 10;

// ✅ Prefer
const x = 10; // or let if reassignment needed
```

### 4. Naming Conventions

```javascript
// Constants (const) - UPPER_SNAKE_CASE
const MAX_USERS = 100;
const API_BASE_URL = 'https://api.example.com';

// Variables (let) - camelCase
let currentUser = null;
let userCount = 0;
```

## Common Patterns

### Loop Variables

```javascript
// Problem with var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 3, 3, 3
}

// Solution with let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2
}
```

### Block Scope for Temporary Variables

```javascript
{
  const temp = calculateSomething();
  // Use temp here
}
// temp is no longer accessible - good for cleanup
```

## Running the Examples

To run the examples in this folder:

```bash
node const-let.js
```

## Exercises

1. Identify scope issues with var vs let
2. Convert var declarations to const/let
3. Fix loop variable issues
4. Create truly immutable objects
5. Understand TDZ behavior

## See Also

- [MDN let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [JavaScript.info: Variables](https://javascript.info/variables)

