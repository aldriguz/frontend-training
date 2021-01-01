const fs = require('fs');

//also it works with data.ToString() if 'utf8' param is not set
fs.readFile('./sample.txt', 'utf8', (err, data) => {
    if(err){
        //throw Error;
        console.error('errorrrrr');
    }
    console.log(data + '[callback]');
});

const file = fs.readFileSync('./sample.txt','utf8');
console.log(file + '[sync]');

fs.appendFile('./sample.txt', '\nlines added to the file', err => {
    if(err)
        console.error('Error writing!!')
})