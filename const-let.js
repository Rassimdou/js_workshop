{/*Const*/}
//const is block scoped
//const cannot be redeclared in the same scope
{
    const x = 10;
    const x = 20; // SyntaxError: Identifier 'x' has already been declared
    console.log(x); // Output: 20
}
//const can be redeclared in different scope
{
    const x = 10;
    {
        const x = 20; // No error
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 10
}



{/*Let*/}

//let have block scope
{
    let p =35;

}
console.log(p); // ReferenceError: p is not defined

{
    var p = 35;
}
console.log(p); // 35


//let declared before use 
{
    console.log(aa);
    let aa = 35; // ReferenceError: Cannot access 'aa' before initialization
}
//let cannot be redeclared in the same scope
{
    let ss ='as';
    let ss = 'ss'; // SyntaxError: Identifier 'ss' has already been declared
    console.log(ss); // Output: 'ss'

}
// can be redeclared in different scope
{
    let ss = 'as';
}
{
    let ss = 'ss'; // No error
    console.log(ss); // Output: 'ss'
}

{/*difference entre let et const*/}
//reassignment

let fruit = 'apple';
fruit = 'banana'; // No error
console.log(fruit); // Output: 'banana'

const fruit = 'apple';
fruit = 'banana'; // TypeError: Assignment to constant variable.
console.log(fruit);

//initialization
let score ;
score = 10; // No error

const score; // SyntaxError: Missing initializer in const declaration
score = 10;