const url = require('url')

const myUrl = new URL('https://mywebsite.org:8000/api/hello.html?id=100&&status=active')
console.log( myUrl )

// Serialized URL
console.log( myUrl.href )
console.log( myUrl.toString() )

// Host (root domain) [include port]
console.log( myUrl.host )

// Host name [not give port]
console.log( myUrl.hostname )

// Path name
console.log( myUrl.pathname )

//Serialized Query
console.log( myUrl.search )

// Params object
console.log( myUrl.searchParams )

// Add param
myUrl.searchParams.append('abc','123')
console.log( myUrl )
console.log( myUrl.searchParams )

// loop through params
// URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }
myUrl.searchParams.forEach( (value, name)=> console.log(`${name}: ${value}`) )