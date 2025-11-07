# Template Literals

Template literals (template strings) provide an elegant way to work with strings in JavaScript, introduced in ES6.

## Table of Contents

- [Introduction](#introduction)
- [Basic Syntax](#basic-syntax)
- [String Interpolation](#string-interpolation)
- [Multiline Strings](#multiline-strings)
- [Tagged Templates](#tagged-templates)
- [Best Practices](#best-practices)

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

### How Tagged Templates Work

The tag function receives:
1. An array of string literals
2. The interpolated values

```javascript
function myTag(strings, ...values) {
  console.log(strings); // ["Hello, ", " and ", "!"]
  console.log(values);   // ["John", 30]
}

const name = "John";
const age = 30;
myTag`Hello, ${name} and ${age}!`;
```

### Practical Examples

#### HTML Escaping

```javascript
function escapeHtml(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i] ? escapeHtmlValue(values[i]) : '';
    return result + string + value;
  }, '');
}

function escapeHtmlValue(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const userInput = "<script>alert('xss')</script>";
const safe = escapeHtml`User input: ${userInput}`;
```

#### SQL-like Queries

```javascript
function sql(strings, ...values) {
  return strings.reduce((query, string, i) => {
    const value = values[i] ? escapeSqlValue(values[i]) : '';
    return query + string + value;
  }, '');
}

function escapeSqlValue(value) {
  // Simple escaping (use proper library in production)
  return `'${String(value).replace(/'/g, "''")}'`;
}

const table = "users";
const id = 123;
const query = sql`SELECT * FROM ${table} WHERE id = ${id}`;
```

## Escaping

### Escaping Backticks

```javascript
const escaped = `This is a backtick: \` and this is a dollar: \${}`;
// "This is a backtick: ` and this is a dollar: ${}"
```

### Escaping Dollar Signs

```javascript
const price = `The price is \${100}`;
// "The price is ${100}"
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

```javascript
// ✅ Good
const name = user.name;
const message = `Hello, ${name}!`;

// ⚠️ Complex expressions reduce readability
const message = `Hello, ${user ? user.name : "Guest"}!`;
```

### 4. Use Tagged Templates for Processing

```javascript
// ✅ Good - escaping user input
const safe = escapeHtml`User: ${userInput}`;

// ❌ Dangerous - unescaped
const unsafe = `User: ${userInput}`;
```

## Common Patterns

### HTML Templates

```javascript
function createCard(name, email) {
  return `
    <div class="card">
      <h2>${name}</h2>
      <p>${email}</p>
    </div>
  `;
}
```

### URL Construction

```javascript
function buildURL(base, path, params) {
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  return `${base}/${path}?${queryString}`;
}
```

### Logging

```javascript
function logWithContext(level, message, context) {
  const contextStr = Object.entries(context)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ');
  return `[${level}] ${message} | Context: ${contextStr}`;
}
```

## Comparison with String Concatenation

### Readability

```javascript
// Old way - hard to read
const message = "User " + user.name + " (" + user.email + ") logged in at " + new Date().toISOString();

// New way - much clearer
const message = `User ${user.name} (${user.email}) logged in at ${new Date().toISOString()}`;
```

### Performance

Template literals are generally as fast as string concatenation in modern JavaScript engines.

## Exercises

1. Create HTML templates with template literals
2. Build URL strings with parameters
3. Create tagged templates for escaping
4. Format multiline strings
5. Combine template literals with functions

## See Also

- [MDN Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [MDN Tagged Templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)
- [JavaScript.info: Template Literals](https://javascript.info/string#template-literals)

