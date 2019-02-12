var xpress = require('express')
var execute = xpress()

execute.get('/', function(req, res){
	res.send('Hello World!')})

execute.listen(8010, function(){
	console.log('Success!')})