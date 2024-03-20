const getSomething = ()=> {
    return new Promise( (resolve, reject)=> {
        resolve('Data passed in resolve()');
        // here after resove() is fired , reject() won't be fired as Either 1 of them can be fired
        // hence use if(condition) to determine when to fire which function.
        reject('Some error occured, reject() is fired ...');
    });
}

// promise 2 parameters(resolve , reject): I am going to do something at some point
// I am Either going to resolve or reject at some point
// then(): if you pass a function here --> Promise is going to Fire the Function when we resolve the promise.
// 

// getSomething().then( (data)=>{
//     // data= passed in resolve 'some data'
//     console.log(data);
// }, (err)=>{
//     // err= passed in reject function
//     console.log(err);
// });

// Better Way
getSomething().then( (data)=>{
    // data= passed in resolve() 'some data'
    console.log(data);
}).catch( (err)=>{
    // err= passed in reject()
    console.log(err);
});


// ----------------------------------
const getTodos = (resource)=>{
    return new Promise( (resolve, reject)=>{

        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', ()=> {
            if(request.readyState === 4 && request.status === 200) {
                // err = undefined
                resolve(request.responseText);
            } else if(request.readyState === 4) {
                // data = undefined
                reject('Error getting resource');
            }
        });
    
        request.open('GET', resource);
        request.send();
    });
}

getTodos('todos/alvi.json').then( (data)=>{
    console.log('promise resolved:', data);
}).catch( (err)=>{
    console.log('promise rejected:', err);
});


// chaining promises
getTodos('todos/alvi.json').then( (data)=>{
    // This function fired for: resolve() of --> getTodos('todos/alvi.json')
    console.log('promise 01 resolved:', data);
    return getTodos('todos/tanvir.json');
}).then( (data)=>{
    // this function is fired for resolve() of: return getTodos('todos/tanvir.json');
    console.log('promise 02 resolved:', data);
    return getTodos('todos/todos.json');
}).then( (data)=>{
    // this function fired for resolve() of: return getTodos('todos/todos.json');
    console.log('promise 03 resolved:', data);
}).catch( (err)=>{
    console.log('promise rejected:', err);
});

// Access to XMLHttpRequest at 'file:///D:/gitProjectsTanvirAnjomSiddique/All_Github_Projects/JavaScript_practice_SasthoTech_BackEnd/AsynchronousJS/todos/alvi.json' 
// from origin 'null' has been blocked by CORS policy: Cross origin requests are 
// only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.

// for http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted --> XMLHttpRequest() / fetch can be used
// for accessing local files --> error occurs.