// Array of objects[ { key1:value1, key2:value2} , ....]
const todos = [
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

// simpler way
for(let todoEach of todos){
    console.log(todoEach.id);
}
//-------shortcut---FOR_EACH
todos.forEach(function(todoEach){
    console.log(todoEach.id,todoEach.text);
});

todos.forEach( (todo)=>console.log(todo) );


// Map
const todosText = todos.map(function(todo){
    return todo.text;
});
console.log('todosText:'+todosText);


// Filter & Map
//use === 3equals -->match Value& Data type --> 10==='10' -->false

//== 2equals -->to match Values only 10=='10' -->true
const todosCompleted = todos.filter(function(todo){
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text;
});

console.log('todos text key values in which isComplete is true: '+todosCompleted);
// For
for(let i=0; i<10; i++){
    console.log(`For loop number ${i}`);
}

