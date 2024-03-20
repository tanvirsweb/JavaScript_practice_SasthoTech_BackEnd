// fetch api: returns a promise
// promise is only rejected if we meet a Network Error
// if we miss endpoint / wrong url : still resolved , but status code: 404
// Everything allright: status code: 202

// fetch('https://jsonplaceholder.typicode.com/users').then( (response)=>{
//     console.log('resolved', response);
//     return response.json();//returns a promise
// }).then( (data)=>{
//     console.log(data);
// }).catch( (err)=>{
//     console.log('Error occured', err);
// });



// ------------async/ await: provide better way to chain promise ----------------------

const getTodos = async ()=>{
    // block assignment until promise fetch() is done
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // console.log('status:', response);
    if(response.status !== 200){
        throw new Error('New error we made: Could not fetch data');
    }
    // block assignment until promise json() is done
    const data = await response.json();
    return data;
}
// here statements inside getTodos will execute 1 after another: serially(blocking) --> as await used
// but getTodos() itself is Asynchronous --> non blocking --> starts now, finishes later
// other instructions after getTodos() is fired won't wait for it. They will keep executing concurrently

console.log('statement:', 1);
console.log('statement:', 2);

getTodos()
    .then( (data)=>{console.log('resolved:',data);} )
    .catch( (err)=>{console.log('rejected:', err.message);} );

console.log('statement:', 3);
console.log('statement:', 4);

// statement: 1
// statement: 2
// statement: 3
// statement: 4
// resolved: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] --> output of getTodos()
// statement 3 & 4 are after getTodos() is fired, but didn't wait for it's completion.