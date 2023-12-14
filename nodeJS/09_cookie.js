const express = require('express'),
    cookieParser = require('cookie-parser'),
    app = express();
// cookie-parser -> help retrieve cookie from request header
app.use(cookieParser());

app.get('/extract-cookie', async (req, res)=>{
    // get cookie
    const cookie = req.cookies.authToken;
    res.status(200).json( {
        your_cookie: cookie,
    } );  
} );
app.get('/send-cookie', async (req, res)=>{
  // send cookies to client browser--> authToken:8801715619397
  res.cookie('authToken', "8801715619397", { httpOnly: true });
  // res.clearCookie('authToken'); //destroy cookie in client browser
   
} );

app.listen(3000, ()=>{
    console.log("server has been started: http://localhost:3000/extract-cookie ")
});
//postman: headers: header:Cookie    value: cookie_val={name:'alvi', dept:'cse'}
/*
browser console: document.cookie

{
  "your_cookie": {
    "authToken": "8801715619397",
    "id": "{name:'alvi', dept:'cse'}",
    "cookie_val": "{name:'alvi', dept:'cse'}"
  }
}
*/