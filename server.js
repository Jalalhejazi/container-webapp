/*
	Jalal Hejazi 2018 

*/


const express = require('express')
const config = require('./package.json')
const fs     = require('fs')


// Constants
const PORT = 8080
const HOST = '0.0.0.0'

// App
const app = express()

// root url 
app.get('/' , (req,res) => {

	fs.readFile('./public/index.html', function (err, html) {
        res.writeHeader(200, {"Content-Type": "text/html"})
        res.write(html)  
        res.end()
	})

})


// api url
app.get('/api', (req, res) => {

 let data = {
 	name 		: config.author,
 	description : config.description,
 	version		: config.version,
 	git 		: config.repository.url,
 	flow 		: config.scripts,
 	benefits    : config.info
 	
 }
 	res.json(data)
})

app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`)