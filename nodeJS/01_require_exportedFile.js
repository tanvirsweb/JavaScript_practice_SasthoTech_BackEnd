/*
nodeJS = JS runtime not language/framework
built on th V8 JavaScript engine
written in C++
allow to run JS code in server

good for = anything thats not intensive

node core modules ( path, fs, http)
// terminal type: node -> will bring us REBEL -> here we can write JavaScript -> ctrl+C (exit)
*/

console.log('NodeJS resources: https://nodejs.org/docs/latest/api/')

// require('./myFile')-> there is myFile.js in the same folder (./)

console.log('\nstart 01_intro.js')
console.log('01_person.js require')
const Person = require('./01_person')
// when you require a file all code inside it execute
// inside the file those function/var/class that are exported can be accesed here

console.log('class Person from 01_person.js instantiated')
const person1 = new Person('Alvi Siddique', 23);

person1.greetings();


