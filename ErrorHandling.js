//syntax error
console.log('Hello World!); ')//ne7i ')// Output: SyntaxError: Unexpected token

//runtime error
nonExistentFunction(); 


// try catch finally
function mtkhdmch(){
    try {
        console.log('seyi hada');
        throw new Error('manakhdemch');
    } catch (error) {
        console.log(error); // Output: Error: Error in try block
    }finally{
        console.log('nkhdm en tous les cas');
    }
}
mtkhdmch();


//throw error
throw Error();
const myError = new Error('Something went wrong!');
console.log(myError.message); // Output: Something went wrong!
console.log(myError.name); // Output: Error
console.log(myError.stack); // Output: Stack trace





//exaple 1
function a() {
    const b =  new Error('erour');
    return b;
}
a(); //3lh mahich tmchi ? 

//aaaaa hahou 3lh mdrnach throw , chghl rana returnina error object y3ni lprgrm may7bsch
function aa(){
    throw new Error('Error in function aa');
}
aa(); // Output: Error: Error in function aa




//example kima ta 9bil 
const q = 12 , w = '0' , e = 'tt';
console.log(q/w); // Output : infinity
console.log(q/e); // Output : NaN
// m3tanich error ana nmdha lro7i 
if (w == 0){
    throw new Error('Division by zero is not allowed!');
}
console.log(q/w); // Output: Error: Division by zero is not allowed


//errors types example
functiodddd(; //syntax error
console.log(undeclaredVar); // ReferenceError: undeclaredVar is not defined
null.f(); // TypeError: Cannot read property 'f' of null
new Array(-1); // RangeError: Invalid array length
decodeURI('%%%'); // URIError: URI malformed




//async error handling
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
fetchData(); // Output: Error fetching data: Error: Network response was not ok

async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
    } catch (e) {
        console.log('Error:', e);
    }
}
fetchData();