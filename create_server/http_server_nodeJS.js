const http = require('http');
const fs = require('fs');

const myServer = http.createServer( (req, res)=>{
    console.log(req.headers);
    const log = `${Date.now()} : ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (err, data)=>{
        switch(req.url){
            case '/':
                res.end('<h1>This is Home page</h1>');
                break;
            case "/about":
                res.end('<h1>This is About page</h1>');
                break;
            default:
                res.end('<h1>404 Not Found</h1>');                
        }
    });
    
} );

myServer.listen(8000, ()=>console.log('Server Started! port: 8000') );