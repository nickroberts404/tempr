#!/usr/bin/env node

// var fs = require('fs');
var exec = require('child_process').exec;

var cwd = process.cwd();

var arg = process.argv.slice(2);
console.log(arg);
var dict = {
	"node_tool": {
		dirname: __dirname+'/templates/node_tool',
		is_dir: true;
	},
	"express_api": {
		dirname: __dirname+'/templates/express_api',
		is_dir: true;
	}
	"js_project": {
		dirname: __dirname+'/templates/js_project',
		is_dir: true
	}
	"mongoose_model": {
		dirname: __dirname+'/templates/mongoose_model.js',
		is_dir: false
	}
}
var is_dir = true;
console.log(`cp ${is_dir ? '-r' : ''} ${dict[arg[0]]} ${cwd + '/' + arg[1]}`);
var child = exec(`cp ${is_dir ? '-r' : ''} ${dict[arg[0]]} ${cwd + '/' + arg[1]}`);