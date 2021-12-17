
const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromise = require('fs').promises;
const EventEmitter = require('events');
const logEvents = require('./pre/log-event');

class Emitter extends EventEmitter {}
const myEmitter = new Emitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);

	const extension = path.extname(req.url);
	let contentType;

	switch (extension) {
		case '.css':
			contentType = 'text/css';
			break;
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.jpg':
			contentType = 'image/jpeg';
			break;
		case './png':
			contentType = 'image/png';
			break;
	}

	let filePath;
	/*
	if (req.url === '/' || req.url === 'index.html') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		filePath = path.join(__dirname, 'views', 'index.html');
		fs.readFile(filePath, 'utf8', (err, data) => {
			res.end(data);
		});
	}
	*/

	switch (req.url) {
		case '/':
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			filePath = path.join(__dirname, 'views', 'index.html');
			fs.readFile(filePath, 'utf8', (err, data) => {
				res.end(data);
			});
			break;
		default:
			break
	}

});

server.listen(PORT, () => {
	console.log(`this server is listening on ${PORT}`)
});

