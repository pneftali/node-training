const http = require('http');

let s = http.createServer((req, res) => {
	response.write('Hello World');
	response.end();
});

s.listen(8080);
