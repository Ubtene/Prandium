const React = require('react');
const helpers = require('./../utils/helpers.js');
const Yelp = require('./Yelp');
const GLogin = require('./Glogin');


class Login extends React.Component {
constructor(props){
super(props);
this.state = {

	name: ''

};
this.renderLogin = this.renderLogin.bind(this);
this.handleClick = this.handleClick.bind(this);
this.googleUpdate = this.props.googleUpdate.bind(this);
}


handleClick(){
	this.setState({google: true});
	// this.googleUpdate(true);	
	console.log("sent helpers google");
}

componentWillMount(){
	console.log("in Willmounting on login component");
	
	helpers.getGoogle().then(function(result){
		this.setState({name: result.data.given_name});


	}.bind(this));
console.log(this.state);

}
componentWillUnmount(){

}

componentDidUpdate() {




console.log("----------------");

console.log("in login componentDidUpdate");
console.log(this.state);

console.log("----------------");

}




renderLogin(){
	
}


render(){
	return (
	<div>
	{this.state.name ? <Yelp /> : <GLogin />}
	</div>	
	)		
}

}





module.exports = Login;