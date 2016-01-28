module.exports = {
	get_available_templates: function(){
		return available_templates;
	},
	get_all_templates: function(){
		return all_templates;
	},
	get_choices: function(set){
		var choices = [];
		for (t in set){
			console.log(set);
			choices.push(set[t].list_choice);
		}
		return choices;
	}
}
var node_tool = {
	dirname: __dirname+'/templates/node_tool',
	list_choice: {
		name: 'Node Tool (template for building a simple node tool)',
		value: 'node_tool',
		short: 'Node Tool'
	},
	is_dir: true
}
var express_api = {
	dirname: __dirname+'/templates/express_api',
	list_choice: {
		name: 'Express API (template for building a simple API with Express)',
		value: 'express_api',
		short: 'Express API'
	},
	is_dir: true
}
var gulp_project = {
	dirname: __dirname+'/templates/js_project/gulp-project',
	list_choice: {
		name: 'Gulp Project (template for building an app with Gulp)',
		value: 'gulp_project',
		short: 'Gulp Project'
	},
	is_dir: true
}
var react_project = {
	dirname: __dirname+'/templates/js_project/react-project',
	list_choice: {
		name: 'React Project (template for building a react app)',
		value: 'react_project',
		short: 'React Project'
	},
	is_dir: true
}
var simple_project = {
	dirname: __dirname+'/templates/js_project/simple-project',
	list_choice: {
		name: 'Simple Project (template for building a simple vanilla project)',
		value: 'simple_project',
		short: 'Simple Project'
	},
	is_dir: true
}
var simple_d3 = {				
	dirname: __dirname+'/templates/js_project/simple-d3',
	list_choice: {
		name: 'Simple D3 (template for building a simple d3 visualization)',
		value: 'simple_d3',
		short: 'Simple D3'
	},
	is_dir: true
}
var simple_react = {
	dirname: __dirname+'/templates/js_project/simple-react',
	list_choice: {
		name: 'Simple React (template for building a simple react thingy)',
		value: 'simple_react',
		short: 'Simple React'
	},
	is_dir: true
}
var mongoose_model = {
	dirname: __dirname+'/templates/mongoose_model.js',
	list_choice: {
		name: 'Mongoose Model (template for a simple mongoose model)',
		value: 'mongoose_model',
		short: 'Mongoose Model'
	},
	is_dir: false
}
var js_project = {
	dirname: __dirname+'/templates/js_project',
	list_choice: {
		name: 'JS Project (templates for building a javascript apps)',
		value: 'js_project',
		short: 'JS Project'
	},
	choices: {
		"gulp_project": gulp_project,
		"react_project": react_project,
		"simple_project": simple_project,
		"simple_d3": simple_d3,
		"simple_react": simple_react
	},
	is_dir: true
}

var available_templates = {
	"node_tool": node_tool,
	"express_api": express_api,
	"js_project": js_project,
	"mongoose_model": mongoose_model
}
var all_templates = {
	"node_tool": node_tool,
	"express_api": express_api,
	"js_project": js_project,
	"gulp_project": gulp_project,
	"react_project": react_project,
	"simple_project": simple_project,
	"simple_d3": simple_d3,
	"simple_react": simple_react,
	"mongoose_model": mongoose_model
}