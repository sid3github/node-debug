// just doing node debugging ex. with the help of node debug cmd 0n terminal <node --debug-brk --inspect app.js>

//example 1
let name = 'Siddharth';
console.log('Hello ',name);



//example 2
const express = require('express');
const app = express();

app.get('/',(req,res) =>{
    res.send('Hey, it worked');
});

app.listen(3000, () => console.log('Server is up'));