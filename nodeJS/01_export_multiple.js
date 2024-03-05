module.exports.items =['item1', 'item2'];

const person = {
    name:'Alvi'
}
module.exports.singlePerson = person;

module.exports.funcExported = function (){
    console.log('this function is exported from another module');
}

function HelloJS(){
    console.log('Hello JS ...  from function');
}
module.exports.exportedName = { HelloJS }
