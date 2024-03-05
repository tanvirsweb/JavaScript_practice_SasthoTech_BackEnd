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



const dataExported = require('./01_export_multiple.js');
console.log(`\nAll exported: ${dataExported}\n`);
console.log(dataExported);

dataExported.funcExported();
console.log(dataExported.items);
console.log(dataExported.singlePerson);

const {funcExported, items, singlePerson, exportedName } = require('./01_export_multiple.js');
funcExported();
exportedName.HelloJS();
console.log(items);
console.log(singlePerson);

var t= 0;
// execute below code after each 15 seconds.
// ctrl+c : exit
setInterval(()=>{
    console.log(`${t} seconds passed!`);
    t=t+30;
}, 30000);


const { sayhello } = require('./01_functions.js');
//we don't need to reuqire all modules exported from given file
const { CNST ,jsprogram } = require('./01_functions');
//we don't need to reuqire  modules in serial as {} used names are matched not serial
// we can just omit extension '.js'
sayhello();
jsprogram();
var v = CNST;
console.log(v);

console.log('module:\n',module);

