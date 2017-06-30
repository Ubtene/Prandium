{/*Glogin is a module that creates a button with an href to the google route to the server where we initiate the google auth*/}

const React = require('react');
const LocalLogin = require('./LocalLogin');
const helpers = require('./../utils/helpers.js');


class GoogleLogin extends React.Component{
constructor(props){
	super(props);
	this.state = {
		isLoggedIn: ""
	}

this.handleClick = this.handleClick.bind(this);
}




  handleClick() {
    this.setState({ google: true });
    console.log("sent helpers google");
    console.log("How state looks when handleClick is clicked: ", this.state);
  }

  componentWillMount() {
    console.log("in Willmount on login component");

    helpers.getGoogle().then(
      function(result) {
        console.log("Results from helpers.getGoogle Promise in the ComponentWillMount func:", result);

        this.setState({
          isLoggedIn: result.data.Googleid
        });

        console.log(
          "how id property looks when compWillMount func is called:",
          this.state.isLoggedIn
        );
                    	this.props.userLogin(this.state.isLoggedIn);

      }.bind(this));

            	this.props.userLogin(this.state.isLoggedIn);

    // console.log(this.state);
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