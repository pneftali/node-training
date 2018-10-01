const http = require('http');

let s = http.createServer((req, res) => {

	let body = [];

	req.setEncoding('utf8');

	req.on('data', (chunk) => {
		body.push(chunk);
	});

	req.on('end', () => {
		res.write(body.join(''));
		res.end();
	});

});

s.listen(8080);
