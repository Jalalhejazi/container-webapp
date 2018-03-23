
const express = require('express');
const config = require('./package.json');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const VERSION = config.version; 

// App
const app = express();

app.get('/', (req, res) => {

 let data = {
 	name : "Jalal Hejazi",
 	title: "fullstack dev",
 	version: VERSION,
 	about : "Continues integration between docker-image and azure Web App"
 }

 res.json(data);
 

});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);