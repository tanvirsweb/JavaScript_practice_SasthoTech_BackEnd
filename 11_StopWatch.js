const { start } = require("repl");

function StopWatch() {
    let startTime, endTime, running, duration =0;

    this.start = function() {
        if(running)
            throw new Error('Stopwatch has already started.');
        running = true;
        startTime = new Date();
    };

    this.stop = function() {
        if(!running)
            throw new Error('Stopwatch is not started.');
        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {return duration; }
    });
}

const sw = new StopWatch();
sw.start();

setTimeout(()=>{
    sw.stop();
    console.log( sw.duration ,'seconds');
}, 2000);
//wait for 2000 mili seconds then execute instructions inside it