const fs = require('fs')
const path = require('path');
const fsPromise = require('fs').promises;
const {v4: uuid} = require('uuid');
const {format} = require('date-fns');


const logEvents = async (message) => {
	const dateTime = `${format(new Date(), 'ddMMyyyy\tHH:mm:ss')}`
	const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
	console.log(logItem);
	try {
		if (!fs.existsSync(path.join(__dirname, 'logs'))) {
			await fsPromise.mkdir(path.join(__dirname, 'logs'));
		}

		await fsPromise.appendFile(path.join(__dirname, 'logs', 'eventlog.txt'), logItem);
	} catch (err) {
		console.error(err)
	}
}


module.exports = logEvents;
