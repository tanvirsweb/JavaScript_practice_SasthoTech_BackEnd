function sayhello(){
    console.log('Hello from module 01_person.js');
}

function jsprogram(){
    console.log('Js program is running...');
}

const CNST = "This is a constant";

module.exports = {sayhello, jsprogram, CNST};
// export an object: {sayhello, jsprogram, CNST}