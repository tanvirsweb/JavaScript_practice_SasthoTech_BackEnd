//ES6/2015 --> classes added to js
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    // this functions are in Prototype    
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Marie', 'Smith', '3-6-1970');

console.log(person1);
console.log(person1.dob);
//access Date() object & call a function
console.log(person2.dob.getFullYear());

//call function of class
console.log(person1.getBirthYear());
console.log(person1.getFullName());