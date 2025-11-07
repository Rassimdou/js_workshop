/**
 * Template Literals in JavaScript
 * 
 * Template literals (template strings) allow embedded expressions,
 * multiline strings, and string interpolation using backticks (`).
 */

// ============================================
// Basic String Interpolation
// ============================================
// Use ${} to embed expressions
const age = 26;
const msg = `I'm ${age} years old`;
console.log(msg); // Output: I'm 26 years old

// Can use any expression
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!

// ============================================
// Multiline Strings
// ============================================
// Traditional way (concatenation)
console.log("hello\nworld");
const team = "Real Madrid";
console.log("Message: " + team + "\n" + "Hello world");

// With template literals (much cleaner)
const multiline = `Message: ${team}
Hello world`;
console.log(multiline);
// Output:
// Message: Real Madrid
// Hello world

// Preserves whitespace and line breaks
const formatted = `
    Name: ${name}
    Age: ${age}
    Status: Active
`;
console.log(formatted);
// Output includes the indentation

// ============================================
// Embedded Expressions
// ============================================
const a = 5;
const b = 20;
const result = `Sum of a+b = ${a + b}, Product of a*b = ${a * b}`;
console.log(result); // Output: Sum of a+b = 25, Product of a*b = 100

// Complex expressions
const x = 10;
const y = 5;
const calculation = `Result: ${x > y ? x * 2 : y * 2}`;
console.log(calculation); // Output: Result: 20

// ============================================
// Function Calls Inside Template Literals
// ============================================
function toUpper(str) {
    return str.toUpperCase();
}

console.log(`Hello ${toUpper("world")}`); // Output: Hello WORLD

// Multiple function calls
function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

const price = 19.99;
const discount = 0.1;
const finalPrice = price * (1 - discount);
console.log(`Price: ${formatCurrency(price)}, Final: ${formatCurrency(finalPrice)}`);
// Output: Price: $19.99, Final: $17.99

// ============================================
// Nested Template Literals
// ============================================
const user = { name: "Alice", role: "admin" };
const message = `User ${user.name} has ${user.role === "admin" ? "administrator" : "user"} privileges`;
console.log(message); // Output: User Alice has administrator privileges

// ============================================
// Tagged Template Literals
// ============================================
// Advanced feature: process template literals with a function
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        const value = values[i] ? `<strong>${values[i]}</strong>` : '';
        return result + string + value;
    }, '');
}

const name2 = "John";
const age2 = 30;
const highlighted = highlight`Hello, my name is ${name2} and I'm ${age2} years old.`;
console.log(highlighted);
// Output: Hello, my name is <strong>John</strong> and I'm <strong>30</strong> years old.

// ============================================
// Escaping in Template Literals
// ============================================
// To include a backtick, escape it with backslash
const escaped = `This is a backtick: \` and this is a dollar: \${}`;
console.log(escaped); // Output: This is a backtick: ` and this is a dollar: ${}

// ============================================
// Practical Examples
// ============================================

// 1. HTML Templates
function createHTML(name, email) {
    return `
        <div class="user-card">
            <h2>${name}</h2>
            <p>Email: ${email}</p>
        </div>
    `;
}

const html = createHTML("Alice", "alice@example.com");
console.log(html);

// 2. SQL-like Queries (for demonstration)
function buildQuery(table, conditions) {
    const whereClause = Object.entries(conditions)
        .map(([key, value]) => `${key} = '${value}'`)
        .join(' AND ');
    
    return `SELECT * FROM ${table} WHERE ${whereClause}`;
}

const query = buildQuery('users', { status: 'active', role: 'admin' });
console.log(query);
// Output: SELECT * FROM users WHERE status = 'active' AND role = 'admin'

// 3. URL Construction
function buildURL(base, path, params) {
    const queryString = Object.entries(params)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
    return `${base}/${path}?${queryString}`;
}

const url = buildURL('https://api.example.com', 'users', { page: 1, limit: 10 });
console.log(url);
// Output: https://api.example.com/users?page=1&limit=10

// 4. Logging with Context
function logWithContext(level, message, context) {
    const contextStr = Object.entries(context)
        .map(([key, value]) => `${key}: ${value}`)
        .join(', ');
    
    return `[${level}] ${message} | Context: ${contextStr}`;
}

const log = logWithContext('INFO', 'User logged in', { userId: 123, ip: '192.168.1.1' });
console.log(log);
// Output: [INFO] User logged in | Context: userId: 123, ip: 192.168.1.1

// ============================================
// Comparison: Template Literals vs String Concatenation
// ============================================
const firstName = "John";
const lastName = "Doe";

// Old way (concatenation)
const fullName1 = firstName + " " + lastName;

// Template literal (preferred)
const fullName2 = `${firstName} ${lastName}`;

console.log(fullName1, fullName2); // Both output: John Doe

// Template literals are more readable, especially with multiple variables
const userInfo = `Name: ${firstName} ${lastName}, Age: ${age}`;
// vs
const userInfoOld = "Name: " + firstName + " " + lastName + ", Age: " + age;