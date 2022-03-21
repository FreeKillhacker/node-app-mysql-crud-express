// cargamos el modulo de File System
var fs = require('fs');
// cargamos el modulo de path
var path = require ('path');

var files = fs.readdirSync(__dirname);

files.forEach(function(file){
	var fileName = path.basename(file, '.js');

	if(fileName !== 'index'){
		exports[fileName] = require('./'+ fileName);
	}

});
