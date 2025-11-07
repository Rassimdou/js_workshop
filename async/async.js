/**
 * Asynchronous JavaScript: Callbacks, Promises, and Async/Await
 * 
 * JavaScript is single-threaded but handles asynchronous operations
 * through callbacks, promises, and async/await syntax.
 */

// ============================================
// Understanding Asynchronous Execution
// ============================================
console.log("Start");
setTimeout(() => {
    console.log("Timeout executed after 2 seconds");
}, 2000);
console.log("End");
// Output:
// Start
// End
// Timeout executed after 2 seconds

// ============================================
// Callbacks - Basic Example
// ============================================
function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("John", sayGoodbye);
// Output:
// Hello John
// Goodbye!

// ============================================
// Callbacks with setTimeout
// ============================================
function greetDelayed() {
    console.log("Hello");
}

function sayName(name) {
    console.log(`Hello ${name}`);
}

setTimeout(greetDelayed, 2000); // Executes after 2 seconds
sayName("Alice"); // Executes immediately
// Output:
// Hello Alice
// Hello (after 2 seconds)

// ============================================
// Callback Hell (Nested Callbacks)
// ============================================
// This creates deeply nested, hard-to-read code
const firstFunction = (callback) => {
    setTimeout(() => {
        console.log("First function executed");
        callback();
    }, 1000);
};

const secondFunction = (callback) => {
    setTimeout(() => {
        console.log("Second function executed");
        callback();
    }, 1000);
};

const thirdFunction = () => {
    setTimeout(() => {
        console.log("Third function executed");
    }, 1000);
};

// Callback hell - nested callbacks
firstFunction(() => {
    secondFunction(() => {
        thirdFunction();
    });
});
// Output (after delays):
// First function executed
// Second function executed
// Third function executed

// ============================================
// Promises - Better Solution
// ============================================
// Basic Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Promise resolved!");
        } else {
            reject("Promise rejected!");
        }
    }, 2000);
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error));
// Output: Promise resolved! (after 2 seconds)

// ============================================
// Promise Chaining
// ============================================
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: "User data" }), 1000);
    });
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ ...data, processed: true }), 1000);
    });
}

fetchData()
    .then(data => {
        console.log("Data fetched:", data);
        return processData(data);
    })
    .then(processedData => {
        console.log("Data processed:", processedData);
    })
    .catch(error => {
        console.error("Error:", error);
    });

// ============================================
// Fetch API with Promises
// ============================================
// Example with a real API (commented out to avoid errors if offline)
/*
fetch('https://api.github.com/users/octocat')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('User data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
*/

// ============================================
// Async/Await - Modern Approach
// ============================================
// Async functions always return a Promise
async function myAsyncFunction() {
    try {
        const result = await Promise.resolve("Success!");
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}

myAsyncFunction(); // Output: Success!

// ============================================
// Important: await can only be used in async functions
// ============================================
// ❌ This will cause a SyntaxError
/*
function regularFunction() {
    let promise = Promise.resolve(3);
    let result = await promise; // SyntaxError: await is only valid in async functions
}
*/

// ✅ Correct way
async function asyncFunction() {
    let promise = Promise.resolve(3);
    let result = await promise;
    console.log(result); // Output: 3
    return result;
}

// ============================================
// Async Functions Always Return Promises
// ============================================
// Explicit return
async function myFunction() {
    console.log("Hello from async function!");
    const result = await Promise.resolve(42);
    return result;
}

// Implicit return (returns undefined wrapped in Promise)
async function myFunction1() {
    console.log("Hello from async function!");
}

const promise1 = myFunction();
const promise2 = myFunction1();

console.log(promise1); // Output: Promise { <pending> }
console.log(promise2); // Output: Promise { <pending> }

// To get the actual values:
promise1.then(value => console.log("Value:", value)); // Output: Value: 42
promise2.then(value => console.log("Value:", value)); // Output: Value: undefined

// ============================================
// Error Handling with Async/Await
// ============================================
async function fetchDataWithErrorHandling() {
    try {
        // Simulate API call
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5;
                if (success) {
                    resolve({ data: "Success!" });
                } else {
                    reject(new Error("Network error"));
                }
            }, 1000);
        });
        
        console.log("Data:", response.data);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error; // Re-throw if needed
    }
}

fetchDataWithErrorHandling();

// ============================================
// Parallel Execution with Promise.all()
// ============================================
async function fetchMultipleData() {
    const promise1 = Promise.resolve("Data 1");
    const promise2 = Promise.resolve("Data 2");
    const promise3 = Promise.resolve("Data 3");
    
    // Wait for all promises to resolve
    const results = await Promise.all([promise1, promise2, promise3]);
    console.log("All results:", results);
    // Output: All results: ["Data 1", "Data 2", "Data 3"]
}

fetchMultipleData();

// ============================================
// Promise.allSettled() - Wait for all, regardless of success/failure
// ============================================
async function fetchWithAllSettled() {
    const promises = [
        Promise.resolve("Success 1"),
        Promise.reject("Error 1"),
        Promise.resolve("Success 2")
    ];
    
    const results = await Promise.allSettled(promises);
    console.log("All settled:", results);
    // Output: Array with status and value/reason for each promise
}

