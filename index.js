#!/usr/bin/env node

// var fs = require('fs');
var exec = require('child_process').exec;
var cwd = process.cwd();
var child = exec('cp '+__dirname+'/templates/mongoose_model.js '+cwd+'/mongoosemodel.js');