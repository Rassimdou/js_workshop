{/*Spread*/}

// coping Arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1];

//Merging arrays 
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [...num1, ...num2];



//spreading in functions call
const values = [1, 2, 3, 4, 5];
const ii = Math.max(...values);
console.log(ii); // Output: 5



//coping/Merging objects    
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }



//adding elements
const numbers = [2, 3];
const newNumbers = [1, ...numbers, 4];
console.log(newNumbers); // Output: [1, 2, 3, 4]


// Add new key-value pairs to object
const person = { name: "John" };
const updatedPerson = { ...person, age: 25 };

console.log(updatedPerson); // { name: "John", age: 25 }



//Combinig and filtering arrays 
const pp= [1, 2, 3, 4, 5];
const qq= [6, 7, 8, 9, 10];
const combined = [...pp, ...qq].filter(num => num%2 === 0);
console.log(combined); // [2, 4, 6, 8, 10]

//converting string to array
const str = "hello";
const charArray = [...str];
console.log(charArray); // Output: ['h', 'e', 'l', 'l', 'o']



{/*Rest*/}

//functions parameters 
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }  
  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15



  //Destructuring Arrays 
const [first , ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]

//Destructuring Objects
const {a , ...restObj} = {a: 1, b: 2, c: 3, d: 4};
console.log(a); // Output: 1
console.log(restObj); // Output: { b: 2, c: 3, d: 4 }
