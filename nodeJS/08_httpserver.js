const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer( (req, res)=>{
    /*
    if(req.url === '/'){
        fs.readFile( path.join(__dirname, 'public', 'index.html'), (err, content)=>{
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }

    if(req.url === '/api/users'){
        const users = [
            {name: 'Alvi Siddique', age: 23},
            {name: 'John Doe', age: 40}
        ];
        res.writeHead(200, {'Content-Type': 'text/html'});
        // convert array of objects to json & send
        res.end( JSON.stringify(users) );
    }
    */
    // Build file path
    let filePath = path.join(
        'public',
        req.url === '/' ? 'index.html' : req.url
    );

    // Extension of file
    let extname = path.extname( filePath );

    // Inintial content type
    let contentType = 'text/html'
    
    // Check ext & set content type
    switch(extname){
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'apllication/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content)=> {
        if(err) {
            if(err.code == 'ENOENT'){
                // Page not found
                fs.readFile( path.join(__dirname, 'public' , '404.html'), (err, content)=>{
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8'); 
                });
            } else{
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else{
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8'); 
        }
    });
})

const PORT = process.env.PORT || 3000;
// look for process.env.PORT ,if not found use 3000;
server.listen(PORT,()=>{
    console.log(`listening to ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});