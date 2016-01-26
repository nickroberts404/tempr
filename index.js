#!/usr/bin/env node

var inq = require('inquirer');
var exec = require('child_process').exec;
var options = require('./options.js');
var cwd = process.cwd();
var arg = process.argv.slice(2);

var templates = options.get_templates();

var questions = [
	{type: 'list', name: 'template', message: 'Choose a template..', choices: options.get_choices},
	{type: 'input', name: 'fname', message: 'Name of directory?', when: (ans)=> templates[ans.template].is_dir },
	{type: 'input', name: 'fname', message: 'Name of file?', when: (ans)=> !templates[ans.template].is_dir, filter: filter_fname }
]

function filter_fname(a, b){
	console.log(a, b);
}

inq.prompt(questions, function(answers){
	console.log(answers);
});

// console.log(`cp ${is_dir ? '-r' : ''} ${dict[arg[0]]} ${cwd + '/' + arg[1]}`);
// exec(`cp ${is_dir ? '-r' : ''} ${dict[arg[0]]} ${cwd + '/' + arg[1]}`);