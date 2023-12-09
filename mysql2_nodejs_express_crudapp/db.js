const mysql = require('mysql2/promise')

const  pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_pp_nodejs'
})

// pool.query("SELECT 1")
//     .then( data=>console.log(data))
//     .catch(err=>console.log('db connection failed.\n'+err))
    
module.exports= pool;