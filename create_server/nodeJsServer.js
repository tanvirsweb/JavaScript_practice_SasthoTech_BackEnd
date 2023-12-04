const http = require('http'); // preclude 'http library' into our code side of http variable-> required to start server
const fs = require('fs'); // fs library -->required for All File Handeling
const port = 3000; // what port we are going to listening to for our server

//in terminal write: node nodeJsServer.js -->run nodejs server
// ctrl+c -->stop server
// open server> url: http://localhost:3000/

// --------------Create Server using http library (parameter: Request & Response)--------------------
const server = http.createServer( function(req, res){
    // res.write("hello world!");
    //status code: 200->everything ok,(request send to server is valid) 
    //content type--> parse sent file as html

    res.writeHead(200 , { 'Content-Type': 'text/html' });
    console.log(`requested url: http://localhost:3000${req.url}`);

    var fileName="";
    if(req.url=="/"){
        fileName = '../index.html';
    }
    else{
        fileName = `..${req.url}`;
        // '..' + '/fileName' 
        // reg.url.substring(1) --> string[1:last] (without 1st character '/' (index 0) 
    }
    fs.readFile(fileName, function(error, data){
        if(error){
            res.writeHead(404);//status:not found
            res.write('Error: File not found');
        }else{
            res.write(data);//send index.html, fileName file
            res.end();
        }
    });
    
});
/*
here,
Homepage url: http://localhost:3000/
request for index.html file

while parsing index.html file Browser requests fowolling urls consecutively to show the home page.
http://localhost:3000/01_console_variable.js
http://localhost:3000/02_string_array.js
http://localhost:3000/03_object_Literal_JSON_loop.js
http://localhost:3000/04_Map_Filter_Foreach.js
http://localhost:3000/05_function_simpler.js

http://localhost:3000/favicon.ico 
--> (this icon is shown in Title bar of a webpage)
*/


// Start service of a Severs Port 
server.listen(port, function(error){
    if(error){
        console.log('Something Went wrong',error)
    }else{
        console.log('Server is listening on port ' + port)
        console.log(`Homepage url: http://localhost:${port}/`);
    }
});

