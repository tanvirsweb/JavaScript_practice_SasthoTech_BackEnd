const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log(`draw circle center: ( ${this.location.x}, ${this.location.y} ) , radius: ${this.radius}` );
    }
};
circle.draw();

// Factory function
function createCircle(radius) {
    return {
        radius, // same as--> this.radius= radius,
        draw: function() {
            console.log('draw a circle with radius: ' + this.radius);
        }
    };
}
const circle1 = createCircle(1);
circle1.draw();

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw inside Constructor function');
    }
}
const another = new Circle(1);
// same as: Circle.call({}, 1); //-->local object .call({}, arg1, arg2, arg3)
// Circle.apply({}, [arg1, arg2, arg3]); --> instead of passing all arguments  pass an Array
console.log('radius = ' + another.radius);
another.draw();
another.location = { x: 11 };
const propertyName = 'center location';
another[propertyName] = { x: 10 };

another.location = { x: 110 };
console.log(another.location.x);

for (let key in another) {
    if(typeof another[key] !== 'function')
        console.log(key, another[key]);
}

const keys = Object.keys(another);
console.log(keys);

if('radius' in another) 
    console.log('Circle has a radius: ', another['radius']);

// const circle2 = Circle(2);  
// same as Circle.call((window), 2) //--> global object (automatic error will be shown in nodejs terminal), not safe to use as can be modified elsewhere.



// Factory function: return an object
// Constructor funciton: use "this" keyword & new

console.log( circle1.constructor);
console.log( another.constructor);

