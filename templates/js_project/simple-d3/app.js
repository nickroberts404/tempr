console.log('Welcome to simple-d3');

var margin = {top: 50, right: 50, bottom: 50, left: 50};
var rheight = 500;
var rwidth = 500;

var height = rheight - margin.top - margin.bottom;
var width = rwidth - margin.left - margin.right;
var svg = d3.select('body').append('svg')
	.attr('height', rheight)
	.attr('width', rwidth)
var g = svg.append('g')
	.attr('transform', 'translate('+margin.left+','+margin.top+')');

g.append('circle')
	.attr('cx', width/2)
	.attr('cy', height/2)
	.attr('r', 20)
	.style('fill', '#89A6CA');