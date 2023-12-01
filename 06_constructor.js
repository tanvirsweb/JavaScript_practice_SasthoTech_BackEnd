//ES5: pre class (OOP)
//Constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    //create function --> attached to every instance
    //in console.log() -->this function also shown as part of Instance > solve this using Prototype
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    };    
}
// Better way to set class function ClassName.prototype.funcName = function(){/*code*/};
// instead of applying funciton to every instance--> have it to prototype
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
};

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

