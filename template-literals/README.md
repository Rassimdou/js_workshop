# Template Literals

Template literals (template strings) provide an elegant way to work with strings in JavaScript, introduced in ES6.

## 📚 Table of Contents

- [Introduction](#introduction)
- [Basic Syntax](#basic-syntax)
- [String Interpolation](#string-interpolation)
- [Multiline Strings](#multiline-strings)
- [Tagged Templates](#tagged-templates)
- [Best Practices](#best-practices)
- [Running the Examples](#running-the-examples)

## Introduction

Template literals use backticks (`` ` ``) instead of quotes and allow embedded expressions and multiline strings.

```javascript
// Old way
const greeting = "Hello, " + name + "!";

// New way
const greeting = `Hello, ${name}!`;
```

## Basic Syntax

Template literals are enclosed in backticks:

```javascript
const simple = `This is a template literal`;
const withExpression = `The result is ${2 + 2}`;
```

## String Interpolation

Embed expressions using `${}`:

```javascript
const name = "John";
const age = 30;
const message = `Hello, ${name}! You are ${age} years old.`;
// "Hello, John! You are 30 years old."
```

### Expressions

Any valid JavaScript expression can be embedded:

```javascript
const a = 5;
const b = 10;
const result = `Sum: ${a + b}, Product: ${a * b}`;
// "Sum: 15, Product: 50"
```

### Function Calls

```javascript
function toUpper(str) {
  return str.toUpperCase();
}

const greeting = `Hello, ${toUpper("world")}!`;
// "Hello, WORLD!"
```

### Conditional Expressions

```javascript
const user = { name: "John", role: "admin" };
const message = `User ${user.name} has ${user.role === "admin" ? "administrator" : "user"} privileges`;
// "User John has administrator privileges"
```

## Multiline Strings

Template literals preserve whitespace and line breaks:

```javascript
// Old way - requires \n
const multiline = "Line 1\nLine 2\nLine 3";

// New way - natural line breaks
const multiline = `Line 1
Line 2
Line 3`;
```

### Preserving Formatting

```javascript
const formatted = `
    Name: ${name}
    Age: ${age}
    Status: Active
`;
// Preserves indentation and line breaks
```

## Tagged Templates

Tagged templates allow you to process template literals with a function.

### Basic Example

```javascript
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i] ? `<strong>${values[i]}</strong>` : '';
    return result + string + value;
  }, '');
}

const name = "John";
const age = 30;
const result = highlight`Hello, my name is ${name} and I'm ${age} years old.`;
// "Hello, my name is <strong>John</strong> and I'm <strong>30</strong> years old."
```

## Best Practices

### 1. Use for String Interpolation

```javascript
// ✅ Good
const message = `Hello, ${name}!`;

// ❌ Avoid concatenation
const message = "Hello, " + name + "!";
```

### 2. Use for Multiline Strings

```javascript
// ✅ Good
const html = `
  <div>
    <h1>Title</h1>
  </div>
`;

// ❌ Verbose
const html = "<div>\n  <h1>Title</h1>\n</div>";
```

### 3. Keep Expressions Simple

For readability, keep embedded expressions simple and extract complex logic to variables.

## Running the Examples

To run the examples in this folder:

```bash
node templateLiterals.js
```

## Exercises

1. Create HTML templates with template literals
2. Build URL strings with parameters
3. Create tagged templates for escaping
4. Format multiline strings
5. Combine template literals with functions

## See Also

- [MDN Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [MDN Tagged Templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)

