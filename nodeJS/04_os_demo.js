const os = require('os')

// Platform
console.log( os.platform() )

// CPU Arch
console.log( os.arch() )

// CPU Core Info
console.log( os.cpus() )

// amount Free memory
console.log( os.freemem() )

// Total memory
console.log( os.totalmem() )

// Home directory
console.log( os.homedir() )

// Uptime
console.log( os.uptime() )