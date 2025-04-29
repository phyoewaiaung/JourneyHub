const fs = require('fs');

const dataText = fs.readFileSync('./data.txt', 'utf8');
console.log(dataText)

const textOut = `updated data with original one ${dataText}.\nCreate on ${Date.now()}`

fs.writeFileSync('./data.txt',textOut)
console.log('file has been updated')