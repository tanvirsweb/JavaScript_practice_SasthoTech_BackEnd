// inside constructor function: let varname --> local variable of the function: private
//  this.varname --> public

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0};
    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    let computeOptimumLocation = function(factor)  {
        // ...
    }
    this.draw = function() {
        let x,y;
        computeOptimumLocation(0.1);
        console.log('draw');
    }
}

const circle = new Circle(10);
let loc = circle.getDefaultLocation();
circle.draw();

// -------------------------------------------
function Circle_2(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0};
    this.draw = function() {
        console.log('draw');
    }

    // instead of using getter & setter as function () , use 
    // 'propertyName=' for --> setter
    // 'propertyName' for --> getter
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if( !value.x || !value.y ) {
                throw new Error('Invalid location.'); 
                // constructor for Error
            }
            defaultLocation = value;
        }
    });
}

const circle_2 = new Circle_2(10);
circle_2.defaultLocation = { x: 11, y: 10 };
console.log(circle_2.defaultLocation);
circle_2.draw();