var announce = require('socket.io-announce').createClient();

var actions = [];
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
	actions.push(simpleaction);

var bus = require('../')(9000, 'table.json', [], actions);