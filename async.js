//example1
console.log("start");
setTimeout(() => {
    console.log("timeout");
}, 3000);
console.log("end");

//example2
function greet (name , calaalback){
    console.log(`Hello ${name}`);
    calaalback();
}

function aaytli(){
    console.log("3aytli");
}
greet("rassim", aaytli); // Output: Hello rassim



//example3
function greet(){
    console.log("Hello");
}
function sayName(name){
    console.log(`Hello ${name}`);
}
//calling the function
setTimeout(greet, 2000); // Output: Hello (after 2 seconds)
sayName("rassim"); // Output: Hello rassim


//example4
function greet (name, callback) {
    console.log('Hello');
    callback(name);
}
function sayName(name) {
    console.log(`Hello ${name}`);
}
setTimeout(greet , 2000 , 'John ', sayName);


//callback hell
const firstFunction = (callback) => {
    setTimeout(() => {
        console.log("First function executed");
        callback();
    }, 2000);
}

const secondFunction = (callback) => {
    setTimeout(() => {
        console.log("Second function executed");
        callback();
    }, 2000);
}
const thirdFunction = (callback) => {
    setTimeout(() => {
        console.log("Third function executed");
    }, 2000);
}
firstFunction(() => {
    secondFunction(() => {
        thirdFunction()
           
    });
});




//promise example
//basic promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
}
);
 


//chaining promises with fetch examaple
fetch('https://randomurl.com')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error)) 

fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error)  
)



//syntax
async function myAsyncFunction() {
    try {
        const result = await someAsyncOperation();
       //handle seccess
    }
    catch (error) {
        console.error('Error:', error);
    }}

//example error syntax
function f(){
    let promise =Promise.resolve(3);    
    let result = await promise; // SyntaxError: Unexpected reserved word
}

//Explicit return
async function myFunction() {
    console.log("Hello from async function!");
    const aa = await Promise.resolve();
    return a;
}
//IMPLICIT return 
async function myFunction1() {
   console.log("Hello from async function!");
    
}
const promise1 = myFunction();
const promise2 = myFunction1();

console.log(promise1); // Output: Promise { <pending> }
console.log(promise2); 