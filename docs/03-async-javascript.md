# Asynchronous JavaScript

Understanding asynchronous programming is crucial for modern JavaScript development. This guide covers callbacks, promises, and async/await.

## Table of Contents

- [Introduction](#introduction)
- [Callbacks](#callbacks)
- [Promises](#promises)
- [Async/Await](#asyncawait)
- [Error Handling](#error-handling)
- [Best Practices](#best-practices)

## Introduction

JavaScript is single-threaded, meaning it can only execute one operation at a time. Asynchronous operations allow JavaScript to handle tasks like network requests, file I/O, and timers without blocking the main thread.

### Synchronous vs Asynchronous

```javascript
// Synchronous - blocks execution
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3 (in order)

// Asynchronous - doesn't block
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
// Output: 1, 3, 2 (2 comes after delay)
```

## Callbacks

A callback is a function passed as an argument to another function, executed later.

### Basic Example

```javascript
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

greet("John", () => {
  console.log("Callback executed!");
});
```

### Callback Hell

Nested callbacks create "callback hell" - hard to read and maintain:

```javascript
firstFunction(() => {
  secondFunction(() => {
    thirdFunction(() => {
      fourthFunction(() => {
        // Deep nesting - hard to read!
      });
    });
  });
});
```

## Promises

Promises represent the eventual completion (or failure) of an asynchronous operation.

### Creating Promises

```javascript
const promise = new Promise((resolve, reject) => {
  // Async operation
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Success!");
    } else {
      reject("Error!");
    }
  }, 1000);
});
```

### Using Promises

```javascript
promise
  .then(result => {
    console.log(result); // "Success!"
    return "Next step";
  })
  .then(data => {
    console.log(data); // "Next step"
  })
  .catch(error => {
    console.error(error); // "Error!"
  })
  .finally(() => {
    console.log("Always executes");
  });
```

### Promise States

1. **Pending** - Initial state
2. **Fulfilled** - Operation completed successfully
3. **Rejected** - Operation failed

### Promise Methods

#### `Promise.all()`
Waits for all promises to resolve (fails if any reject):

```javascript
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // [1, 2, 3]
  });
```

#### `Promise.allSettled()`
Waits for all promises to settle (fulfilled or rejected):

```javascript
const promises = [
  Promise.resolve(1),
  Promise.reject("Error"),
  Promise.resolve(3)
];

Promise.allSettled(promises)
  .then(results => {
    // All results, regardless of success/failure
  });
```

#### `Promise.race()`
Returns the first promise that settles:

```javascript
const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 500));

Promise.race([fast, slow])
  .then(result => {
    console.log(result); // "Fast"
  });
```

## Async/Await

Async/await provides a cleaner syntax for working with promises.

### Basic Syntax

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Key Points

1. **`async` functions always return a Promise**
2. **`await` can only be used in `async` functions**
3. **`await` pauses execution until promise settles**

### Error Handling

```javascript
async function example() {
  try {
    const result = await someAsyncOperation();
    return result;
  } catch (error) {
    // Handle error
    console.error(error);
    throw error; // Re-throw if needed
  }
}
```

### Parallel Execution

```javascript
// Sequential (slow)
async function sequential() {
  const a = await fetchA();
  const b = await fetchB();
  return [a, b];
}

// Parallel (fast)
async function parallel() {
  const [a, b] = await Promise.all([
    fetchA(),
    fetchB()
  ]);
  return [a, b];
}
```

## Error Handling

### Try/Catch with Async/Await

```javascript
async function fetchUser(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      throw new Error('User not found');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}
```

### Error Handling with Promises

```javascript
fetch('/api/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network error');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## Best Practices

### 1. Always Handle Errors

```javascript
// ❌ Bad
async function fetchData() {
  const data = await fetch('/api/data');
  return data.json();
}

// ✅ Good
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error('Network error');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
```

### 2. Use Promise.all() for Parallel Operations

```javascript
// ❌ Slow - sequential
const user = await fetchUser();
const posts = await fetchPosts();
const comments = await fetchComments();

// ✅ Fast - parallel
const [user, posts, comments] = await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments()
]);
```

### 3. Avoid Mixing Callbacks and Promises

```javascript
// ❌ Bad - mixing styles
function getData(callback) {
  fetch('/api/data')
    .then(data => callback(null, data))
    .catch(callback);
}

// ✅ Good - consistent
async function getData() {
  const response = await fetch('/api/data');
  return await response.json();
}
```

### 4. Use Async/Await for Readability

```javascript
// Promises (verbose)
fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    return processData(data);
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });

// Async/Await (cleaner)
async function getData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    const result = await processData(data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
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
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}
```

### Timeout

```javascript
function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), ms)
    )
  ]);
}
```

## Exercises

1. Convert callback-based code to promises
2. Convert promise chains to async/await
3. Implement retry logic
4. Handle multiple async operations
5. Create a timeout wrapper

## See Also

- [MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [JavaScript.info: Promises](https://javascript.info/promise-basics)

