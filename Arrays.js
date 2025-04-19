//toString
const aa =[1,2,3,4,5];
aa.toString(); // Output: "1,2,3,4,5"
console.log(aa); // Output: [1, 2, 3, 4, 5]
console.log(aa.toString()); // Output: "1,2,3,4,5"

//Splice 
//syntax
Array.splice(start, deleteCount, item1, item2, ...);

//remove elements
const f= ["apple", "banana", "cherry", "date"];
const deleted = fruits.splice(1, 2); // Removes 2 elements starting from index 1
console.log(deleted); // Output: ["banana", "cherry"]
console.log(fruits); // Output: ["apple", "date"]
//adding elements
const fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 0, "orange", "kiwi"); // Adds "orange" and "kiwi" at index 1
console.log(fruits); // Output: ["apple", "orange", "kiwi", "banana", "cherry"]



//sorting
const fruits = ["banana", "apple", "cherry"];
fruits.sort(); // Sorts the array in ascending order
console.log(fruits); // Output: ["apple", "banana", "cherry"]


//arr.map
//array map method creates new array by applying a function to each element of the original array
const numbers = [14, 24, 31, 422, 5];
const numbers2 = numbers.map(num => num * 2); // Multiplies each element by 2
console.log(numbers); // Output: [14, 24, 31, 422, 5]
console.log(numbers2); // Output: [28, 48, 62, 844, 10]



//array filter method creates new array with elements that pass the test implemented by the provided function
const numbers = [14, 24, 31, 422, 5];
const filteredNumbers = numbers.filter(num => num > 20); // Filters numbers greater than 20
console.log(numbers); // Output: [14, 24, 31, 422, 5]
console.log(filteredNumbers); // Output: [24, 31, 422]

//example using function
const numbers = [14, 24, 31, 422, 5];
const filteredNumbers = numbers.filter(isGreaterThan20); // Filters numbers greater than 20
function isGreaterThan20(num) {
    return num > 20;
}
console.log(filteredNumbers); // Output: [24, 31, 422]
