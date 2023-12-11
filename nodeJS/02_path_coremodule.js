// path-> core module integrated with nodeJS -> no need 'npm i path' or, require('./path')
const path = require('path')

console.log( '__filename =[filename & its whole path]:\n', path.basename(__filename) )

// Base file name
console.log( 'path.basename(__filename) =[base file name of passed path]:\n', path.basename(__filename) )

// Directory name
console.log( 'path.dirname(__filename) =[directory of passed path]:\n', path.dirname(__filename) )

// File extension
console.log( 'path.extname(__filename) =[file name extension of passed path]:\n', path.extname(__filename) )

// Create path object
const p= path.parse(__filename) 
console.log( p.base )