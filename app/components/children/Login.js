const React = require('react');
const helpers = require('./../utils/helpers.js');


class Login extends React.Component {
constructor(props){
super(props);
this.state = {
	loggedIn: false

};
this.handleClick = this.handleClick.bind(this);
}


handleClick(){
	this.setState({loggedIn: true});
	helpers.getGoogle();
	console.log("sent helpers google");
}

componentDidUpdate() {
console.log(this.state.loggedIn);
}


render(){
		return (

				<div>
				<h2> Login </h2>

				<button
				className="btn btn-lg btn-primary"
				onClick={this.handleClick}			
				id="loginButton"	
				disabled={this.state.loggedIn}
				> Login  </button>	
				</div>		
		)				
}

}





module.exports = Login;