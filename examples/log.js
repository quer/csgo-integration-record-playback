var http = require('http');
var Mock = require('../index')['record'];
server = http.createServer( 
	Mock( {dirname:'test'},
		function(req, res) { 
			console.log('save');
			res.writeHead(200, {'Content-Type': 'text/html'});
			req.on('end', function () {
	            res.end( '' );
	        });
		}
	)
);

server.listen(1337);