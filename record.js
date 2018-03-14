const fs = require('fs');
var dirname = './',
	startTime;
module.exports = function(opts, callback) {
	dirname = './'+opts.dirname+'/' || dirname;
	startTime = new Date().getTime();
	return function (req, res) {
		callback(req, res)
		
		var headers = req.headers,
			method = req.method,
			body = '';

        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            saveRequst(headers, method, body);
        });
	}
}


function saveRequst(headers, method, data) {
	var saveFile = {}
	saveFile['headers'] = headers;
	saveFile['method'] = method;
	saveFile['data'] = data;
	saveFile['timestamp'] = new Date().getTime() - startTime;
	fs.writeFile(dirname + saveFile['timestamp']+".json", JSON.stringify(saveFile), function(err2) {
	    if(err2) {
	        console.log(err2);
	    }

	});
}