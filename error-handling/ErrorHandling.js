/**
 * Error Handling in JavaScript
 * 
 * JavaScript provides several mechanisms for handling errors:
 * try/catch/finally blocks, throw statements, and error types.
 */

// ============================================
// Types of Errors
// ============================================

// 1. Syntax Errors - Occur during parsing
// console.log('Hello World!); // SyntaxError: Unexpected token

// 2. Runtime Errors - Occur during execution
// nonExistentFunction(); // ReferenceError: nonExistentFunction is not defined

// 3. Logical Errors - Program runs but produces wrong results
const result = 10 / 0; // Returns Infinity (not an error, but might be unexpected)

// ============================================
// try/catch/finally Blocks
// ============================================
function demonstrateErrorHandling() {
    try {
        console.log('Executing try block');
        throw new Error('Something went wrong!');
    } catch (error) {
        console.log('Caught error:', error.message);
        // Output: Caught error: Something went wrong!
    } finally {
        console.log('This always executes');
        // Output: This always executes
    }
}

demonstrateErrorHandling();

// ============================================
// Creating and Throwing Errors
// ============================================
// Creating an error object
const myError = new Error('Something went wrong!');
console.log(myError.message); // Output: Something went wrong!
console.log(myError.name); // Output: Error
console.log(myError.stack); // Output: Stack trace

// Throwing an error
// throw new Error('This will stop execution');

// ============================================
// Returning vs Throwing Errors
// ============================================
// ❌ Returning an error doesn't stop execution
function returnError() {
    const error = new Error('This is an error');
    return error; // Function completes normally, returns error object
}

const result1 = returnError();
console.log(result1); // Output: Error object (not thrown)

// ✅ Throwing an error stops execution
function throwError() {
    throw new Error('Error in function throwError');
    console.log('This will not execute');
}

// throwError(); // Uncomment to see error thrown

// ============================================
// Custom Error Handling Example
// ============================================
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed!');
    }
    return a / b;
}

try {
    const result = divide(12, 0);
    console.log(result);
} catch (error) {
    console.error('Error:', error.message);
    // Output: Error: Division by zero is not allowed!
}

// ============================================
// JavaScript Error Types
// ============================================

// 1. SyntaxError - Invalid syntax
// functiodddd(; // SyntaxError: Unexpected token

// 2. ReferenceError - Variable doesn't exist
try {
    console.log(undeclaredVar);
} catch (error) {
    console.log(error.name); // Output: ReferenceError
}

// 3. TypeError - Wrong type of value
try {
    null.f();
} catch (error) {
    console.log(error.name); // Output: TypeError
    console.log(error.message); // Output: Cannot read property 'f' of null
}

// 4. RangeError - Value out of range
try {
    new Array(-1);
} catch (error) {
    console.log(error.name); // Output: RangeError
}

// 5. URIError - Invalid URI
try {
    decodeURI('%%%');
} catch (error) {
    console.log(error.name); // Output: URIError
}

// ============================================
// Custom Error Classes
// ============================================
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

function validateUser(user) {
    if (!user.name) {
        throw new ValidationError('Name is required', 'name');
    }
    if (!user.email) {
        throw new ValidationError('Email is required', 'email');
    }
}

try {
    validateUser({});
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`${error.name}: ${error.message} (field: ${error.field})`);
        // Output: ValidationError: Name is required (field: name)
    }
}

// ============================================
// Error Handling in Async Functions
// ============================================
async function fetchData() {
    try {
        // Simulate API call
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5;
                if (success) {
                    resolve({ ok: true, data: { id: 1, name: 'John' } });
                } else {
                    reject(new Error('Network response was not ok'));
                }
            }, 1000);
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = response.data;
        console.log('Data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error; // Re-throw if needed
    }
}

fetchData().catch(error => {
    console.log('Handled in catch:', error.message);
});

// ============================================
// Error Handling with Promises
// ============================================
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve({ data: 'Success!' });
            } else {
                reject(new Error('Promise rejected'));
            }
        }, 1000);
    });
}

fetchDataPromise()
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

// ============================================
// Multiple Catch Blocks (Not Supported)
// ============================================
// JavaScript doesn't support multiple catch blocks like some languages
// Use if/else or instanceof to handle different error types

try {
    // Some code that might throw different errors
    throw new ValidationError('Invalid input', 'username');
} catch (error) {
    if (error instanceof ValidationError) {
        console.log('Validation error:', error.message);
    } else if (error instanceof TypeError) {
        console.log('Type error:', error.message);
    } else {
        console.log('Unknown error:', error.message);
    }
}

// ============================================
// Best Practices
// ============================================
// 1. Always handle errors appropriately
// 2. Use specific error types when possible
// 3. Don't swallow errors silently
// 4. Log errors for debugging
// 5. Provide meaningful error messages
// 6. Use finally for cleanup code

