// person.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
	name: String,
	city: String,
	location: {
		lat: Number,
		lng: Number
	}
});

personSchema.index({name: 'text'});
var Person = mongoose.model('Person', personSchema);

module.exports = Person;