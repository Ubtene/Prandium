var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

const Nav = require('./../components/children/Nav');
const Header = require('./../components/children/Header');
const Form = require("./../components/children/Userform");
const Yelp = require('./../components/children/Yelp');
const Login = require('./../components/children/Login');

class Routes extends React.Component {
	render(){
		return (
				<Router>
				<div className="container">
				<Header />
				<Nav/>
				
				<Switch>
					<Route exact path='/' component={Login}/>
					<Route path='/header' component={Header}/>
					<Route path='/yelp' component={Form}/>
					<Route path='/login' component={Login}/>
 				</Switch>
				</div>

				</Router>	

			)
	}
}

module.exports = Routes;
