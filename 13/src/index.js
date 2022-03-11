const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('src/static'));

app.get('/hello', (req, res) => {
 res.send('Hello world from my API!');
});

app.listen(port);
// setInterval(() => {
 
//  console.log('hello world');
// }, 1000);