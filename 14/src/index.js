const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('src/static'));
 
app.get('/hello', (req, res) => {
 res.send('Hello world from my API!');
});

app.listen(port);

const handler = async (code) => {
 console.log('Gracefully shutting down...');
 await new Promise(resolve => setTimeout(resolve, 300));
 console.log('Ok, bye!');
 process.exit(code);
};

const events = ['exit', 'SIGINT', 'SIGTERM', 'SIGQUIT'];
events.forEach(event => {
 process.on(event, handler);
});