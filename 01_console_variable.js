// alert("This is a js alert");
console.log("example of console.log")
console.error("example of console.error")
console.warn("example of console.warn")

// variable->global scope
// let,const -> es2015 (update)
// let -->can reassign values
let age1=30;
age1 = 31;
let v;
v=11;
//const--> can't directly reassigned
const score=10;
//const score; -->error--> must initialize (add a value)

//const --> dealing with Arrays/Object -->change values within Array/Object
//you can't change the entire thing

// datatype: String, Numbers, Boolean, null, underline
// using semicolon at end of statement -->optional
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;

console.log('Type of variable name: ',typeof name)

//old style Concatenation
console.log('My name is ' + name + ' and I am ' + age);
//new Template Literal: Instead of single quotes (') around the string, you should use backticks (``) to create a template literal. 
console.log(`My name is ${name} and \nI am ${age}`);
const hello = `My name is ${name} and \nI am ${age}`;
console.log(hello);