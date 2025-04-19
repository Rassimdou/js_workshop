//introducion
const hobbies = ["Reading", "Coding", "Hiking"];
const firstHobby = hobbies[0];
const secondHobby = hobbies[1];
const thirdHobby = hobbies[2];
console.log(firstHobby); // Output: Reading
console.log(secondHobby); // Output: Coding
console.log(thirdHobby); // Output: Hiking

const hobbies = ["Reading", "Coding", "Hiking"];
const [firstHobby, secondHobby, thirdHobby] = hobbies;
console.log(firstHobby); // Output: Reading
console.log(secondHobby); // Output: Coding
console.log(thirdHobby); // Output: Hiking


//skip elements from array
const hobbies = ["Reading", "Coding", "Hiking"];
const [firstHobby, , thirdHobby] = hobbies;
console.log(firstHobby); // Output: Reading
console.log(thirdHobby); // Output: Hiking

//swap element 
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // Output: 2


//use default value
const hobbies = ["Reading", "Coding"];
const [firstHobby, secondHobby, thirdHobby = "Hiking"] = hobbies;
console.log(firstHobby); // Output: Reading
console.log(thirdHobby); // Output: Hiking (default value)


{/*destructuring objects*/}

//syntax
const person = { name: "wew", age: 25 };
const { name, age } = person;
console.log(age); // Output: 25


//rename variables
const user = {username : "wiiw", age : 25};
const {username : newUserName , age} = user;
console.log(newUserName); // Output: wiiw


//Default values
const settings = { theme: "dark" };
const { theme = "light", fontSize = 16 } = settings;
console.log(theme); // Output: dark
console.log(fontSize); // Output: 16 (default value)


//nested objects
const employee = {
    id:6661,
    details: {
        name: "John",
        age: 30,
    }
}
//extracting nested properties using difference notations
const {
    id:id1,
    details: {
        name:name1,
        age,
    }
} = employee;
console.log(name1); // Output: John
console.log(age); // Output: USA
console.log(id1); // Output: 6661