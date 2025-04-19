//syntax
let func = (arg1 , arg2)=> expression ;

//example1
function aa(a,b){
    return a+b;
}
const bb = (a,b) => a+b;



//example2
 let saySlm =()=> console.log("slm 3likom");
saySlm(); // Output: slm 3likom



//example3 multiline function body
let add = (a,b) => {
    let sum = a+b;
    console.log(`Sum of ${a} and ${b} is : ${sum}`);
}
add(5,10); // Output: Sum of 5 and 10 is : 15

//difference between function and arrow function
//  this binding
const person = {
    name : 'rassim',    
    greet :()=> {
        console.log(`ohhh ${this.name}`); // Output: Hello undefined
    },
    greet2 : function(){
        console.log(`ohhh ${this.name}`); // Output: Hello rassim
    }
};
person.greet(); // Output: Hello undefined
person.greet2(); // Output: Hello rassim


