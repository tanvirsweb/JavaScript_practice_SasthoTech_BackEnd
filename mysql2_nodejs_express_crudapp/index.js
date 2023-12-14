const express = require('express') ,
    app = express(),
    bodyParser = require('body-parser')
require('express-async-errors')

const db = require('./db'),
    studentRoutes = require('./controllers/student.controller')

// middleware
app.use(bodyParser.json())
// all requests starting this will be handeled by: student.controller
app.use('/api/students', studentRoutes)
// use studentRouters, then use bodypareser.json() --> error occurs req.body=undefined comes,sol= use body-parser 1st



// globally handle error: npm i express-async-errors
app.use( (err, req, res, next)=>{
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
} )

// module.exports= pool so, here instead of pool.query() -> write db.query()
db.query("SELECT 1")
.then( data=>{
    console.log('db connection succeed')
    // start express server 
    app.listen(3000 , 
        ()=> console.log('server started at 300, home: http://localhost:3000'))
})
.catch(err=>console.log('db connection failed.\n'+err))

