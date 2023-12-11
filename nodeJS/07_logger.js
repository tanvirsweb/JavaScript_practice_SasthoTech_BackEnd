const EventEmitter = require('events'),
    uuid = require('uuid');

// console.log(uuid.v4());
class Logger extends EventEmitter{
    log(msg){
        // call event
        this.emit('message', {id: uuid.v4(), msg} );
    }
}
module.exports = Logger;