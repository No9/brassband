var cluster = require('cluster');
var httpProxy = require('http-proxy');
var fs = require('fs');
var numCPUs = require('os').cpus().length;

module.exports = function (fromport, routesfile, reqevents, resevents) {
	if (cluster.isMaster) {
	  // Fork workers.
	  for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	  }

	  cluster.on('exit', function(worker, code, signal) {
		console.log('worker ' + worker.process.pid + ' died');
	  });
	} else {// Select a node by its class name. You can also select by tag e.g. 'div'
		console.log("starting an http router");
		var harmon = require('harmon').harmon(resevents) 
		var proxyoptions = { router: routesfile };
		var proxyServer = httpProxy.createServer(proxyoptions, harmon).listen(fromport);
	}	
}