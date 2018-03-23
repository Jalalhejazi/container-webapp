
const express = require('express');
const config = require('./package.json');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {

 let data = {
 	name 		: config.author,
 	description : config.description,
 	version		: config.version,
 	git 		: config.repository.url,
 	flow 		: config.scripts,
 	benefits    : config.info
 	
 }

 	res.json(data);	
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);