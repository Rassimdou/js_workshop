# Error Handling in JavaScript

Proper error handling is essential for building robust JavaScript applications. This guide covers error types, try/catch blocks, and best practices.

## Table of Contents

- [Introduction](#introduction)
- [Error Types](#error-types)
- [Try/Catch/Finally](#trycatchfinally)
- [Throwing Errors](#throwing-errors)
- [Custom Errors](#custom-errors)
- [Async Error Handling](#async-error-handling)
- [Best Practices](#best-practices)

## Introduction

Errors in JavaScript can occur at different stages:
- **Syntax Errors** - During parsing
- **Runtime Errors** - During execution
- **Logical Errors** - Program runs but produces wrong results

## Error Types

### 1. SyntaxError

Occurs when code violates JavaScript syntax rules:

```javascript
// Missing closing parenthesis
// console.log('Hello'; // SyntaxError

// Invalid syntax
// const x = ; // SyntaxError
```

### 2. ReferenceError

Occurs when trying to access a variable that doesn't exist:

```javascript
console.log(undeclaredVar); // ReferenceError: undeclaredVar is not defined
```

### 3. TypeError

Occurs when a value is not of the expected type:

```javascript
null.f(); // TypeError: Cannot read property 'f' of null
undefined.toString(); // TypeError: Cannot read property 'toString' of undefined
```

### 4. RangeError

Occurs when a value is outside the allowed range:

```javascript
new Array(-1); // RangeError: Invalid array length
(10).toFixed(-1); // RangeError: toFixed() digits argument must be between 0 and 100
```

### 5. URIError

Occurs with incorrect URI handling:

```javascript
decodeURI('%%%'); // URIError: URI malformed
```

## Try/Catch/Finally

### Basic Syntax

```javascript
try {
  // Code that might throw an error
  riskyOperation();
} catch (error) {
  // Handle the error
  console.error('Error occurred:', error.message);
} finally {
  // Always executes, regardless of success or failure
  cleanup();
}
```

### Catching Specific Errors

```javascript
try {
  // Some operation
} catch (error) {
  if (error instanceof TypeError) {
    console.error('Type error:', error.message);
  } else if (error instanceof ReferenceError) {
    console.error('Reference error:', error.message);
  } else {
    console.error('Unknown error:', error.message);
  }
}
```

### Finally Block

The `finally` block always executes:

```javascript
function example() {
  try {
    return "success";
  } catch (error) {
    return "error";
  } finally {
    console.log("Always executes");
  }
}
```

## Throwing Errors

### Creating Errors

```javascript
// Basic error
throw new Error("Something went wrong");

// With error object
const error = new Error("Custom error message");
error.code = "CUSTOM_ERROR";
throw error;
```

### Returning vs Throwing

**Important distinction:**

```javascript
// ❌ Returning error - doesn't stop execution
function returnError() {
  return new Error("This is an error");
}
const result = returnError(); // Function completes normally

// ✅ Throwing error - stops execution
function throwError() {
  throw new Error("This is an error");
}
// throwError(); // Execution stops here
```

### When to Throw

Throw errors when:
- Invalid input is provided
- Required resources are unavailable
- Business logic rules are violated
- Unexpected conditions occur

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}
```

## Custom Errors

### Creating Custom Error Classes

```javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "NetworkError";
    this.statusCode = statusCode;
  }
}
```

### Using Custom Errors

```javascript
function validateUser(user) {
  if (!user.name) {
    throw new ValidationError("Name is required", "name");
  }
  if (!user.email) {
    throw new ValidationError("Email is required", "email");
  }
}

try {
  validateUser({});
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`${error.name}: ${error.message} (field: ${error.field})`);
  }
}
```

## Async Error Handling

### Promises

```javascript
fetch('/api/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```

### Async/Await

```javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; // Re-throw if needed
  }
}
```

### Handling Multiple Async Operations

```javascript
async function fetchMultiple() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetchUsers(),
      fetchPosts(),
      fetchComments()
    ]);
    return { users, posts, comments };
  } catch (error) {
    // If any promise rejects, catch handles it
    console.error('Failed to fetch data:', error);
  }
}
```

## Best Practices

### 1. Always Handle Errors

```javascript
// ❌ Bad - unhandled errors
async function fetchData() {
  const response = await fetch('/api/data');
  return await response.json();
}

// ✅ Good - proper error handling
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
```

### 2. Provide Meaningful Error Messages

```javascript
// ❌ Vague
throw new Error("Error");

// ✅ Specific
throw new Error("Failed to fetch user data: User ID 123 not found");
```

### 3. Don't Swallow Errors

```javascript
// ❌ Bad - error is hidden
try {
  riskyOperation();
} catch (error) {
  // Silent failure
}

// ✅ Good - error is logged or re-thrown
try {
  riskyOperation();
} catch (error) {
  console.error('Operation failed:', error);
  throw error; // Or handle appropriately
}
```

### 4. Use Specific Error Types

```javascript
// ❌ Generic
throw new Error("Invalid input");

// ✅ Specific
throw new ValidationError("Email format is invalid", "email");
```

### 5. Clean Up in Finally

```javascript
let resource = null;
try {
  resource = acquireResource();
  useResource(resource);
} catch (error) {
  console.error('Error:', error);
} finally {
  if (resource) {
    releaseResource(resource);
  }
}
```

### 6. Error Logging

```javascript
function logError(error, context = {}) {
  console.error({
    message: error.message,
    stack: error.stack,
    name: error.name,
    context
  });
  // Send to error tracking service
}
```

## Common Patterns

### Retry Logic

```javascript
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      }
      throw new Error(`HTTP ${response.status}`);
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}
```

### Error Boundaries (React)

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

## Exercises

1. Create custom error classes
2. Implement error handling for async operations
3. Add retry logic with error handling
4. Build error logging system
5. Handle multiple error types appropriately

## See Also

- [MDN Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [MDN try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [JavaScript.info: Error Handling](https://javascript.info/error-handling)

