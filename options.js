module.exports = {
	get_templates: function(){
		return templates;
	},
	get_choices: function(){
		var choices = [];
		for (t in templates){
			choices.push(templates[t].list_choice);
		}
		return choices;
	}
}

var templates = {
	"node_tool": {
		dirname: __dirname+'/templates/node_tool',
		list_choice: {
			name: 'Node Tool (template for building a simple node tool)',
			value: 'node_tool',
			short: 'Node Tool'
		},
		is_dir: true
	},
	"express_api": {
		dirname: __dirname+'/templates/express_api',
		list_choice: {
			name: 'Express API (template for building a simple API with Express)',
			value: 'express_api',
			short: 'Express API'
		},
		is_dir: true
	},
	"js_project": {
		dirname: __dirname+'/templates/js_project',
		list_choice: {
			name: 'JS Project (template for building a javascript app, using Gulp)',
			value: 'js_project',
			short: 'JS Project'
		},
		is_dir: true
	},
	"mongoose_model": {
		dirname: __dirname+'/templates/mongoose_model.js',
		list_choice: {
			name: 'Mongoose Model (template for a simple mongoose model)',
			value: 'mongoose_model',
			short: 'Mongoose Model'
		},
		is_dir: false
	}
}