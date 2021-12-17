
const os = require('os');
const path = require('path');
const fs = require('fs');
const fsPromise = require('fs').promises;
const logEvents = require('./log-event');
const EventEmitter = require('events');

/*

console.log(os.type());
console.log(os.version())
console.log(os.homedir())
console.log(__dirname)
console.log(path.dirname(__filename));

console.log(path.parse(__filename));

const add = (a, b) => a + b;

console.log(add(1,0))

*/
/*

fs.readFile(path.join(__dirname, 'files', 'haha.txt'), 'utf8', (err, data) => {
	if (err) {
		throw err;
	}
	// console.log(data.toString());
	console.log(data)

	fs.writeFile(path.resolve(__dirname, 'files', 'rep1.txt'), data, err => {
		if (err) throw err;
		console.log('write completed');

		fs.appendFile(path.resolve(__dirname, 'files', 'rep1.txt'), `\n ${data}`, err => {
			if (err) throw err;
			console.log('append completed');

			fs.rename(path.join(__dirname, 'files', 'rep1.txt'), path.resolve(__dirname, 'files', 'new.txt'), err => {
				if (err) throw err;
				console.log('rename completed')
			})
		});
	});
});

console.log('hello...');

*/
/*

const fileOps = async () => {
	try {
		const data = await fsPromise.readFile(path.resolve(__dirname, 'files', 'haha.txt'), 'utf8');
		console.log(data);
		await fsPromise.unlink(path.resolve(__dirname, 'files', 'haha.txt'));
		await fsPromise.writeFile(path.resolve(__dirname, 'files', 'rep1.txt'), data);
		await fsPromise.appendFile(path.resolve(__dirname, 'files', 'rep1.txt'), `\n ${data}`);
		await fsPromise.rename(path.resolve(__dirname, 'files', 'rep1.txt'), path.resolve(__dirname, 'files', 'newnew.txt'));
		const newData = await fsPromise.readFile(path.resolve(__dirname, 'files', 'newnew.txt'), 'utf8');
		console.log('newData: ', newData);

	} catch (err) {
		console.error(err);
	}
}

fileOps();
*/
/*
process.on('uncaughtException', err => {
	console.error('there was an uncaught error: ', err);
	process.exit(1)
});
*/
/*
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
	myEmitter.emit('log', 'Log event emitted!')
}, 2000)
*/



