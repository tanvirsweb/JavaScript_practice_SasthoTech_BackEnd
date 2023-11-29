var arr=['apple','banana', 'mango']
console.log(arr,arr.length)
// chrome > : > more tools > developer tools > console
// or right click > inspect


const s = 'Hello World!';
// take substring: index 0 to 5 and convert them to uppercase
console.log(s.substring(0,7).toUpperCase());
console.log(s.split(''));//'' -->single quote without space --> get array with 12 values --> letter & space in each value

let str = 'technology, computers, it, code';
console.log(str.split(', ')); // in string str wherever finds commaSpace it will put it will split

/* Arrays- variables that hold multiple values */
const fruits = ['apple', 'oranges', 10, 11.5, true];//can have multiple datatypes
console.log(fruits);
fruits[3]='pears';//update an item in array
console.log(fruits);
console.log(fruits[1]);

fruits.push('mangoes');//add in End
fruits.unshift('strawberries')//add in Begining
fruits.pop();//remove End one
console.log(fruits);

console.log('Array.isArray(fruits): '+Array.isArray(fruits));

console.log('Array.isArray(\'hello\'): '+Array.isArray('hello'));

console.log('fruits.indexOf(\'oranges\'): '+fruits.indexOf('oranges'));
