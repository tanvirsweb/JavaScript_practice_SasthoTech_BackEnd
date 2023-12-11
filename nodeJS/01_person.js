// Module Wrapper Function
// (function(exports, require, module, __filename, __dirname))

console.log('\n-------- Executing 01_person.js ----------------')
console.log(`__dirname(current directory): ${__dirname}`)
console.log(`__filename(current file name includes it's directory): ${__filename}\n`)

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greetings(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
};
//we are exporting the whole class
//in other file we can require('./filename') it.
module.exports = Person;