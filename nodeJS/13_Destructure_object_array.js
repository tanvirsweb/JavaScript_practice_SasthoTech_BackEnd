const object = { 
    key1: "value1",
    key2: "value2"
}

// const {key1, key2, key3} = object;
const {key3, key1, key2} = object;
// order don't matter --> key will match & their vlaue will be assigned, key which is not in object will be undefined
console.log(`key1: ${key1}`);
console.log(`key2: ${key2}`);
console.log(`key3: ${key3}`);//undefined

const arr = ['red', 'green', 'blue'];// array --> no key
// value assigned in order, no need to match value
const [a, b, c, d] = arr;

console.log(`a= ${a}, b= ${b}, c= ${c}, d= ${d} `);

// ----------------------------------------------
const arrayOfObjects = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 22 },
];
  
  // Destructuring the array of objects
for (const { id, name, age } of arrayOfObjects) {
    console.log(`ID: ${id}, Name: ${name}, Age: ${age}`);
}
  // Destructuring within a function parameter
arrayOfObjects.forEach(({ id, name, age }) => {
    console.log(`ID: ${id}, Name: ${name}, Age: ${age}`);
});

// Destructuring when assigning variables
const [firstPerson, secondPerson, thirdPerson] = arrayOfObjects;
console.log(firstPerson); // { id: 1, name: 'Alice', age: 25 }
console.log(secondPerson); // { id: 2, name: 'Bob', age: 30 }
console.log(thirdPerson); // { id: 3, name: 'Charlie', age: 22 }

