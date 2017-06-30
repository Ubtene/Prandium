{/*Glogin is a module that creates a button with an href to the google route to the server where we initiate the google auth*/}

const React = require('react');
const LocalLogin = require('./LocalLogin');

class GoogleLogin extends React.Component{
constructor(props){
	super(props);
	this.state = {

	}


}


render(){





		return (

				<div className="container">
						<div className="container row" id="googleLoginDiv">	
						<div className="col-sm-3">
						</div>

						<div className="col-sm-6">
							<a className="googleLogin btn" onClick={this.handleClick} href='http://localhost:3000/auth/google'>Sign in with Google</a>
						</div>
						<div className="col-sm-3">
						</div>	
						</div>
				</div>		
				)

	}
	}


module.exports = GoogleLogin;