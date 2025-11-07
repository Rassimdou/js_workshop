/**
 * const and let in JavaScript
 * 
 * ES6 introduced 'const' and 'let' as alternatives to 'var'.
 * They provide block scoping and help prevent common bugs.
 */

// ============================================
// const - Constants
// ============================================
// const is block-scoped and cannot be reassigned

// Block scope example
{
    const x = 10;
    console.log(x); // Output: 10
}
// console.log(x); // ReferenceError: x is not defined

// Cannot redeclare in the same scope
{
    const x = 10;
    // const x = 20; // SyntaxError: Identifier 'x' has already been declared
}

// Can redeclare in different scopes
{
    const x = 10;
    {
        const x = 20; // No error - different scope
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
}

// ============================================
// let - Block-scoped Variables
// ============================================
// let has block scope (unlike var which has function scope)

// Block scope
{
    let p = 35;
}
// console.log(p); // ReferenceError: p is not defined

// Compare with var (function-scoped, not block-scoped)
{
    var p = 35;
}
console.log(p); // Output: 35 (var is accessible outside block)

// ============================================
// Temporal Dead Zone (TDZ)
// ============================================
// Variables declared with let/const cannot be accessed before declaration
{
    // console.log(aa); // ReferenceError: Cannot access 'aa' before initialization
    let aa = 35;
    console.log(aa); // Output: 35
}

// ============================================
// let - Redeclaration Rules
// ============================================
// Cannot redeclare in the same scope
{
    let ss = 'as';
    // let ss = 'ss'; // SyntaxError: Identifier 'ss' has already been declared
}

// Can redeclare in different scopes
{
    let ss = 'as';
    console.log(ss); // Output: 'as'
}
{
    let ss = 'ss'; // No error - different scope
    console.log(ss); // Output: 'ss'
}

// ============================================
// Differences: let vs const
// ============================================

// 1. Reassignment
// let - can be reassigned
let fruit = 'apple';
fruit = 'banana'; // No error
console.log(fruit); // Output: 'banana'

// const - cannot be reassigned
const fruitConst = 'apple';
// fruitConst = 'banana'; // TypeError: Assignment to constant variable.

// 2. Initialization
// let - can be declared without initialization
let score;
score = 10; // No error
console.log(score); // Output: 10

// const - must be initialized at declaration
// const scoreConst; // SyntaxError: Missing initializer in const declaration
const scoreConst = 10; // Correct

// ============================================
// const with Objects and Arrays
// ============================================
// const prevents reassignment, but object/array contents can be modified
const person = { name: 'John', age: 30 };
person.age = 31; // ✅ Allowed - modifying property
person.city = 'NYC'; // ✅ Allowed - adding property
// person = { name: 'Jane' }; // ❌ Error - cannot reassign

const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed - modifying array
numbers[0] = 10; // ✅ Allowed - modifying element
// numbers = [5, 6, 7]; // ❌ Error - cannot reassign

// To make object/array truly immutable, use Object.freeze()
const frozenPerson = Object.freeze({ name: 'John', age: 30 });
// frozenPerson.age = 31; // Silently fails in non-strict mode
// In strict mode: TypeError: Cannot assign to read only property 'age'

// ============================================
// Best Practices
// ============================================
// 1. Use const by default
// 2. Use let when you need to reassign
// 3. Avoid var (legacy, has function scope and hoisting issues)

// Good practice:
const API_URL = 'https://api.example.com'; // Constant value
let currentUser = null; // Will be reassigned later
currentUser = { name: 'Alice' };

// ============================================
// Comparison: var vs let vs const
// ============================================
// var - function scoped, hoisted, can be redeclared
function example() {
    if (true) {
        var x = 1;
        let y = 2;
        const z = 3;
    }
    console.log(x); // Output: 1 (accessible)
    // console.log(y); // ReferenceError
    // console.log(z); // ReferenceError
}

example();

