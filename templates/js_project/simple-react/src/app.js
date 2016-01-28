var React = require('react');
var ReactDOM = require('react-dom');

var Button = require('./button.js');

var App = React.createClass({
	getInitialState() {
	    return {
	        clickCount: 0
	    };
	},
	handleClick: function(){
		this.setState({clickCount: ++this.state.clickCount});
	},
	render: function(){
		return(
			<div className="container">
				<h1>Clicks: {this.state.clickCount}</h1>
				<Button text='Click on me!' incrementCount={this.handleClick} />
			</div>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app'));