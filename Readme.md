# CSGO Game Integration Record Playback

  A morckup of csgo Game State Integration, that can record a match, and save, then you can playback the match as offen as you what. 
  It good for making somfing whit the [CSGO Game State Integration](https://developer.valvesoftware.com/wiki/Counter-Strike:_Global_Offensive_Game_State_Integration)

## Installation

```bash
$ npm install csgo-integration-record-playback
```

## Usage

 With `record` you just set the server `port` and a `folderName` and just start that file `node log.js` 

Example [_log.js_](examples/log.js):

```js
var http = require('http');
var Mock = require('csgo-integration-record-playback')['record'];

server = http.createServer( 
  Mock( {dirname:'folderName'},
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
```

 using playback, fist parameter is the `folderName` and next the `ip` to send the data, and last the `port`
Example [_playback.js_](examples/playback.js):

```js
var Mock = require('csgo-integration-record-playback')['playback'];
Mock('selv3', '127.0.0.1', 1337);
```

## Authors

 - Lasse Pedersen

## License

(The MIT License)

Copyright (c) 2014 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
