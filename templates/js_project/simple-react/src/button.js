var React = require('react');

var button = React.createClass({
	getDefaultProps: function(){
		return {
			text: 'Button'
		}
	},
	render: function(){
		return(
			<button className="btn btn-primary" onClick={this.props.incrementCount}>{this.props.text}</button>
		)
	}
})

module.exports = button;