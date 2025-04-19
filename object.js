//object assing 
const person1 = { name: "John" , age: 30 };
const person2 = { age: 25 };
Object.assign(person1, person2); // Merging person2 into person1
console.log(person1); 
console.log(person2); // Output: { name: "John", age: 25 }



//Object creation
const messi ={status : "goat" , age : 36};
const ronaldo = Object.create(messi); // Creating a new object with messi as prototype
console.log(ronaldo.status); // Output: goat (inherited from messi)


//object entries , keys , values
const person = { name: "John", age: 30 };
const entries = Object.entries(person);// Convert object to array of key-value pairs /
console.log(entries); // Output: [ ['name', 'John'], ['age', 30] ]


const keys = Object.keys(person); // Get keys of the object
console.log(keys); // Output: ['name', 'age']

const values = Object.values(person); // Get values of the object
console.log(values); // Output: ['John', 30]



//Object groupeby

const data = [
    { name: "Alice", age: 225, city: "New York" },
    { name: "Bob", age: 10, city: "Los Angeles" },
    { name: "Charlie", age: 325, city: "New York" },
    { name: "David", age: 30, city: "Chicago" }
];

function myCallback(item) {
    return item.city; // Group by city
}
const result = Object.groupBy(data, myCallback);
console.log(result);

function myCallback1(item) {
   return item.age >20 ? "ok" : "young";// Group by age
}
const result1 = Object.groupBy(data, myCallback1);
console.log(result1);