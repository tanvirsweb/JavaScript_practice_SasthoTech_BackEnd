const EventEmitter = require('events');

//create class 
class MyEmitter extends EventEmitter{

}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', ()=>console.log('\nEvent Fired') )

// Init event
myEmitter.emit('event');



const data = 'Hello world!'
// add listener
myEmitter.on('event', (data)=>console.log('Event Fired: data=',data) )

myEmitter.emit('event',data);
myEmitter.emit('event');
/*
Event Fired

Event Fired
Event Fired: data= Hello world!

Event Fired
Event Fired: data= undefined
*/
