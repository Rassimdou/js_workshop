//String interpolation
const age = 26
const msg = `Im ${age} years old`
console.log(msg);


//multiline string 
 console.log("hello\nworld");
const aa = "real madrid out "
 console.log("slm"+ aa + "\n"+ "hello world");
console.log(`slm ${aa}
hello world`);


// Embedded expressions
const a = 5, b=20;
const result =`Sum of a+b = : ${a+b}, Product of a*b = : ${a*b}`;
console.log(result);
console.log(`Sum of a ans b  is : ${a+b}`);

//functions calls inside Template
function toUpper(str){
    return str.toUpperCase();
    //toUpperCase() is a string method that converts the string to uppercase.
}
console.log(`Hello ${toUpper("world")}`);