// string & key --> inside double quotes, 
// if value is boolean/number --> no quotes in value
// { "key1": "String_value", "key2": false, "key3": 100 }

// json --> store JS object as string.
// JSON.parse(json_string) = string to array of js objects
const getTodos = (resource, callback)=> {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=> {
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            // err = undefined
            callback(undefined, request.responseText);
        } else if(request.readyState === 4) {
            // data = undefined
            callback('Could not find data', undefined);
        }
    });

    request.open('GET', resource);
    request.send();
}

getTodos('todos/todos.json', (err, data)=> {
    console.log(data);
    getTodos('todos/alvi.json', (err, data)=> {
        console.log(data);
        getTodos('todos/tanvir.json', (err, data)=> {
            console.log(data);
        });
    });
});
// Callback Hell --> nested callback, callback inside callback ...

// Access to XMLHttpRequest at 'file:///D:/gitProjectsTanvirAnjomSiddique/All_Github_Projects/JavaScript_practice_SasthoTech_BackEnd/AsynchronousJS/todos/alvi.json' 
// from origin 'null' has been blocked by CORS policy: Cross origin requests are 
// only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.

// for http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted --> XMLHttpRequest() / fetch can be used
// for accessing local files --> error occurs.
