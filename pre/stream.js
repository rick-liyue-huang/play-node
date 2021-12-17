
const fs = require('fs');

const rs = fs.createReadStream('./files/new.txt', {encoding: 'utf8'});
const ws = fs.createWriteStream('./files/copy.txt');

/*rs.on('data', chunk => {
	ws.write(chunk);
});*/

rs.pipe(ws);
