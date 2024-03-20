// ReferenceError: XMLHttpRequest is not defined [error occur for running in vscode terminal(nodejs)]
// this code runs well when included in html file. Open file in browser > inspect > console

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', ()=> {
//     // console.log('request', request.readyState);
//     // stage 4 --> XML data received against request
//     // url is right.
//     if(request.readyState === 4 && request.status === 200) {
//         console.log('request',request.responseText);
//     } else if(request.readyState === 4) {
//         console.log('Could not fetch data');
//     }
// });
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();

const getTodos = (callback)=> {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=> {
        if(request.readyState === 4 && request.status === 200) {
            // err = undefined
            callback(undefined, request.responseText);
        } else if(request.readyState === 4) {
            // data = undefined
            callback('Could not find data', undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
}

console.log(1);
console.log(2);
// function using Callback: nonblocking code --> starts now But finishes later
// let rest of the code in the meanwhile --> beating heart of Asynchronous code.
getTodos( (err, data)=> {
    console.log('Callback fired');
    if(errr) {
        console.log(err);
    } else {
        console.log(data);
    }
});
console.log(3);
console.log(4);
// output:
// 1
// 2
// 3
// 4
// callback is fired...
// ...data...

// const argfunc = (err, data)=> {
//     console.log('Callback fired');
//     if(errr) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// };

// getTodos(argfunc);