# Object Methods in JavaScript

JavaScript provides many built-in Object methods for working with objects. This guide covers the most commonly used methods.

## Table of Contents

- [Introduction](#introduction)
- [Object Creation](#object-creation)
- [Property Management](#property-management)
- [Iteration Methods](#iteration-methods)
- [Prototype Methods](#prototype-methods)
- [Best Practices](#best-practices)

## Introduction

The `Object` constructor provides utility methods for working with objects. These methods are static (called on `Object` itself, not instances).

## Object Creation

### Object.assign()

Copies properties from source objects to a target object.

```javascript
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target); // { a: 1, b: 2, c: 3 }
```

**Important:** `Object.assign()` mutates the target object. To avoid mutation:

```javascript
const merged = Object.assign({}, obj1, obj2);
// Or use spread operator
const merged = { ...obj1, ...obj2 };
```

### Object.create()

Creates a new object with a specified prototype.

```javascript
const person = {
  greet() {
    return `Hello, ${this.name}`;
  }
};

const john = Object.create(person);
john.name = "John";
console.log(john.greet()); // "Hello, John"
```

## Property Management

### Object.keys()

Returns an array of object's own enumerable property names.

```javascript
const person = { name: "John", age: 30, city: "NYC" };
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "city"]
```

### Object.values()

Returns an array of object's own enumerable property values.

```javascript
const person = { name: "John", age: 30, city: "NYC" };
const values = Object.values(person);
console.log(values); // ["John", 30, "NYC"]
```

### Object.entries()

Returns an array of [key, value] pairs.

```javascript
const person = { name: "John", age: 30 };
const entries = Object.entries(person);
console.log(entries); // [["name", "John"], ["age", 30]]
```

### Object.fromEntries()

Converts an array of [key, value] pairs into an object.

```javascript
const entries = [["name", "John"], ["age", 30]];
const person = Object.fromEntries(entries);
console.log(person); // { name: "John", age: 30 }
```

### Object.hasOwn()

Checks if an object has a specific property (not inherited).

```javascript
const obj = { name: "John" };
const proto = { inherited: true };
Object.setPrototypeOf(obj, proto);

console.log(Object.hasOwn(obj, "name")); // true
console.log(Object.hasOwn(obj, "inherited")); // false
```

## Iteration Methods

### Iterating with Object.keys()

```javascript
const person = { name: "John", age: 30, city: "NYC" };

Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});
```

### Iterating with Object.entries()

```javascript
const person = { name: "John", age: 30 };

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
```

### Converting to Map

```javascript
const person = { name: "John", age: 30 };
const map = new Map(Object.entries(person));
console.log(map.get("name")); // "John"
```

## Prototype Methods

### Object.getPrototypeOf()

Returns the prototype of an object.

```javascript
const person = { name: "John" };
const proto = Object.getPrototypeOf(person);
console.log(proto === Object.prototype); // true
```

### Object.setPrototypeOf()

Sets the prototype of an object.

```javascript
const animal = { type: "animal" };
const dog = { name: "Rex" };
Object.setPrototypeOf(dog, animal);
console.log(dog.type); // "animal"
```

**Note:** `Object.setPrototypeOf()` can be slow. Prefer `Object.create()` when possible.

## Immutability Methods

### Object.freeze()

Prevents adding, removing, or modifying properties.

```javascript
const person = Object.freeze({ name: "John", age: 30 });
person.age = 31; // Silently fails (or throws in strict mode)
person.city = "NYC"; // Silently fails
delete person.name; // Silently fails

console.log(Object.isFrozen(person)); // true
```

**Note:** `Object.freeze()` is shallow - nested objects can still be modified.

### Object.seal()

Prevents adding or removing properties, but allows modifying existing ones.

```javascript
const person = Object.seal({ name: "John", age: 30 });
person.age = 31; // ✅ Allowed
person.city = "NYC"; // ❌ Not allowed
delete person.name; // ❌ Not allowed

console.log(Object.isSealed(person)); // true
```

### Object.preventExtensions()

Prevents adding new properties.

```javascript
const person = Object.preventExtensions({ name: "John", age: 30 });
person.age = 31; // ✅ Allowed
person.city = "NYC"; // ❌ Not allowed

console.log(Object.isExtensible(person)); // false
```

## Property Descriptors

### Object.defineProperty()

Defines a new property or modifies an existing one.

```javascript
const obj = {};

Object.defineProperty(obj, "name", {
  value: "John",
  writable: false,
  enumerable: true,
  configurable: false
});

obj.name = "Jane"; // Silently fails (writable: false)
```

### Object.getOwnPropertyDescriptor()

Returns property descriptor for a specific property.

```javascript
const obj = { name: "John" };
const descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor);
// { value: "John", writable: true, enumerable: true, configurable: true }
```

### Object.getOwnPropertyDescriptors()

Returns all property descriptors.

```javascript
const obj = { name: "John", age: 30 };
const descriptors = Object.getOwnPropertyDescriptors(obj);
```

## Utility Methods

### Object.is()

Compares two values (similar to `===` but handles special cases).

```javascript
// Handles NaN
Object.is(NaN, NaN); // true
NaN === NaN; // false

// Handles +0 and -0
Object.is(+0, -0); // false
+0 === -0; // true

// Normal comparison
Object.is(5, 5); // true
Object.is("hello", "hello"); // true
```

## Advanced Patterns

### Object.groupBy() (ES2024)

Groups array elements by a callback function's return value.

```javascript
const people = [
  { name: "Alice", age: 25, city: "NYC" },
  { name: "Bob", age: 30, city: "LA" },
  { name: "Charlie", age: 25, city: "NYC" }
];

const byCity = Object.groupBy(people, person => person.city);
// { NYC: [...], LA: [...] }

const byAge = Object.groupBy(people, person => person.age > 25 ? "adult" : "young");
// { adult: [...], young: [...] }
```

### Merging Objects

```javascript
function mergeObjects(...objects) {
  return Object.assign({}, ...objects);
}

const merged = mergeObjects(
  { a: 1 },
  { b: 2 },
  { c: 3 }
);
// { a: 1, b: 2, c: 3 }
```

### Cloning Objects

```javascript
// Shallow clone
const clone = Object.assign({}, original);
// Or
const clone = { ...original };

// Deep clone (simple, not perfect)
const deepClone = JSON.parse(JSON.stringify(original));
```

## Best Practices

### 1. Use Object.assign() for Merging

```javascript
const defaults = { theme: "light", lang: "en" };
const userPrefs = { theme: "dark" };
const config = Object.assign({}, defaults, userPrefs);
```

### 2. Use Object.entries() for Iteration

```javascript
// ✅ Good
for (const [key, value] of Object.entries(obj)) {
  // Process key-value pairs
}

// ❌ Less efficient
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    const value = obj[key];
    // Process
  }
}
```

### 3. Prefer Object.create() over setPrototypeOf()

```javascript
// ✅ Good
const child = Object.create(parent);

// ❌ Slower
Object.setPrototypeOf(child, parent);
```

### 4. Use Object.freeze() for Constants

```javascript
const CONFIG = Object.freeze({
  API_URL: "https://api.example.com",
  TIMEOUT: 5000
});
```

## Exercises

1. Merge multiple objects without mutation
2. Iterate over object properties
3. Create objects with specific prototypes
4. Freeze objects to prevent modification
5. Group array elements by property

## See Also

- [MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Object Methods Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)

