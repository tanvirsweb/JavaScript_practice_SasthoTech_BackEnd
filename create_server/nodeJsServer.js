const http = require('http'); // preclude 'http library' into our code side of http variable-> required to start server
const fs = require('fs'); // fs library -->required for All File Handeling
const port = 3000; // what port we are going to listening to for our server

//in terminal write: node nodeJsServer.js -->run nodejs server
// ctrl+c -->stop server
// open server> url: http://localhost:3000/

// --------------Create Server using http library (parameter: Request & Response)--------------------
const server = http.createServer( function(req, res){
    // res.write("hello world!");
    //status code: 200->everything ok, 
    //content type--> parse sent file as html

    res.writeHead(200 , { 'Content-Type': 'text/html' });
    fs.readFile('../index.html', function(error, data){
        if(error){
            res.writeHead(404);//status:not found
            res.write('Error: File not found');
        }else{
            res.write(data);//show index.html
            res.end();
        }
    });
    
});


server.listen(port, function(error){
    if(error){
        console.log('Something Went wrong',error)
    }else{
        console.log('Server is listening on port ' + port)
    }
});

