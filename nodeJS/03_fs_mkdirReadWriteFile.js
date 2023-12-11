const fs = require('fs')
const path = require('path')

// Create folder
const newPath = path.join(__dirname,'/newFolderName')
if( fs.existsSync(newPath) )
    console.log(`Path ${newPath} already exists`)
else
    fs.mkdir( newPath, {}, (err)=>{
        if(err) throw err
        console.log(`Folder 'newFolderName' successfully created...`)
    });

// Create and write to a file
fs.writeFile(
    path.join(__dirname,'/newFolderName', 'hello.txt'),
    'Text to write in file.',
    (err)=>{
        if(err) throw err
        console.log('Write in hello.txt')
    }
)
// Append in file
fs.appendFile(
    path.join(__dirname,'/newFolderName', 'hello.txt'),
    ' Text to append in file',
    (err)=>{
        if(err) throw err
        console.log('Append in hello.txt')
    }
)
// write/overwrite file = fs.writeFile(fileNameWithPath, text, (err)={} )
// append file = fs.appendFile(fileNameWithPath, text, (err)={} )
// read file = fs.readdFile(fileNameWithPath, encodingScheme, (err , data)={} )

// Read file
fs.readFile(
    path.join(__dirname,'/newFolderName', 'hello.txt'),
    'utf8',
    (err, data)=>{
        if(err) throw err
        console.log(`\ndata in file:\n${data}`)
    }
)

// Rename file
fs.rename( path.join(__dirname,'/newFolderName','hello.txt'), path.join(__dirname,'/newFolderName','newFileName.txt'), (err)=>{
    if(err) throw err
    console.log('File renamed...')
} )


// ******************* These functions will not Run Sequentially *****************************
// solution

/*
// Using Async/await:

const fs = require('fs').promises;

async function createDirectoryAndRename(source, destination) {
  try {
    await fs.mkdir(source);
    await fs.rename(source, destination);
    console.log('Successfully created directory and renamed.');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Example usage
createDirectoryAndRename('source', 'destination');

*/

/*
// or, using Promise

const fs = require('fs').promises;

function createDirectoryAndRename(source, destination) {
  return fs.mkdir(source)
    .then(() => fs.rename(source, destination))
    .then(() => console.log('Successfully created directory and renamed.'))
    .catch((err) => console.error('Error:', err));
}

// Example usage
createDirectoryAndRename('source', 'destination');

*/

/*
// or, using callback
const fs = require('fs');

function createDirectoryAndRename(source, destination, callback) {
  fs.mkdir(source, (err) => {
    if (err) {
      return callback(err);
    }

    fs.rename(source, destination, (err) => {
      callback(err);
    });
  });
}

// Example usage
createDirectoryAndRename('source', 'destination', (err) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Successfully created directory and renamed.');
  }
});

*/