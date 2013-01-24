# brassband

An event bus implementation using harmon and redis. 

## Install 

```
npm install brassband
```

## Usage

```
var bus = require('../')(9000, 'table.json', requestactions, responseactions);
```

9000 is the port the bus will listen on

table.json contains the routing rules for the http proxy.
This allows for dynamic route creation at runtime

requestactions are the list of events you wish to raise on the request message to the server.
Each action is an object with the properties of query and func.

```
var requestactions = [];
var simpleaction = {};
	simpleaction.query = 'GetDataResult';

	// Create an function that is executed when that node is selected. Here we emit the content of the node as an event' 
	simpleaction.func = function (node) {
								node.html(function (html) {
									console.log(node.name + ' = ' + html);
									announce.emit( 'cdcevent', { "item" : html } );
									return;
								});
								return;
							};
						 
	// Add the action to the action array
	requestactions.push(simpleaction);
```

See [trumpet](https://github.com/substack/node-trumpet#update) for the types of queries and functions you can use.
 
responseactions are the same as requestactions but are raised on the response from the server


## License

(The MIT License)

Copyright (c) 2013 Anthony Whalley

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
