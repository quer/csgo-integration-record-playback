const fs = require('fs');
var request = require('request')
module.exports = function(dirname, ip, port) {
	var data = [];
	readFiles(dirname+'/', function(filename, content, callback) {
		var fileIndex = parseInt(filename);
		//console.log(fileIndex);
		data[fileIndex] = content;
		callback();
	}, function () {
		//console.log(Object.keys(data));
		console.log("ss");
		runingLoop(data, 0, ip + ':' + port, function () {
			console.log('done!');
		});
	});
}

function runingLoop(list, index, url, callback) {
	
	if(list.length > index){
		if (list[index]) {
			console.log("call");
			var data = JSON.parse(list[index]);
			var headers = data.headers;
			var method = data.method;
			var sendedData = data.data;
			
			var options = {
			  	headers: headers,
			  	body: sendedData
			      	
			};
			request.post('http://'+url, options, function (error, response, body) {
				console.log(body);
				console.log(index + ': sendet');
			});
		}
		setTimeout(function () {
			runingLoop(list, ++index, url, callback);
		}, 1);
	}else{
		callback();
	}
}


function readFiles(dirname, onFileContent, callback) {
  fs.readdir(dirname, function(err, filenames) {
    doFile(filenames, 0, dirname, onFileContent, callback);

    /*filenames.forEach(function(filename) {

		fs.readFile(dirname + filename, 'utf-8', function(err, content) {
			onFileContent(filename, content);
		});
    });*/
  });
}

function doFile(list, index, dirname, onFileContent, callback) {
	if(list.length > index){
		var filename = list[index];
		fs.readFile(dirname + filename, 'utf-8', function(err, content) {
			onFileContent(filename, content, function () {
				doFile(list, ++index, dirname, onFileContent, callback);
			});
		});
	}else{
		callback();
	}
}