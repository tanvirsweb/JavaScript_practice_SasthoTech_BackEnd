
// --------Object Literal---------------
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log( 'person.address.city : '+person.address.city);

console.log( 'person.hobbier[0] : '+person.hobbies[0]);

// PULL from object
const { firstName, lastName } = person;
console.log('firstName : '+firstName)
//const { firstName, lastName, address: {city} } = person; //error -->firstName already declared
const { address: {city} } = person;
console.log('city: '+city)


console.log(person);
// Directly add new Property to object
person.email= 'john@gmail.com';
console.log(person);
// Array of objects[ { key1:value1, key2:value2} , ....]
const todoList = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Meeting with boss',
        isCompleted: false
    },
    {
        id: 9,
        text: 'Alvi appointed',
        isCompleted: true
    }
];
console.log(todoList[1]);


// Syntax of JSON is very similar to Array of Objects 
//but in JSON--> we have Double Quotes in KEYS & STRINGS-->single quotes will give us Error (google> jsonformatter)
/*
[
   {
      "id": 1,
      "text": "Take out trash",
      "isCompleted": true
   },
   {
      "id": 3,
      "text": "Meeting with boss",
      "isCompleted": false
   },
   {
      "id": 9,
      "text": "Alvi appointed",
      "isCompleted": true
   }
]
*/

const todoJSON = JSON.stringify(todoList);
// create JSON file from array of objects and we want to send it to server
console.log(todoJSON);

// while
let i=0;
while(i<10){
    console.log(`While loop number ${i}`);
    i=i+1;
}

for(let i=0; i<todoList.length; i++){
    console.log(`todoList[i].text = ${todoList[i].text}`);
}

