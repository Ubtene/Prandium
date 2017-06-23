var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

const Nav = require('./../components/children/Nav');
const Header = require('./../components/children/Header');
const Form = require("./../components/children/Userform");
const Yelp = require('./../components/children/Yelp');

class Routes extends React.Component {
	render(){
		return (
				<Router>
				<div className="container">
				<Header />
				<Nav/>
				
				<Switch>
					<Route exact path='/' component={Form}/>
					<Route path='/header' component={Header}/>
					<Route path='/yelp' component={Yelp}/>
 				</Switch>
				</div>

				</Router>	

			)
	}
}

module.exports = Routes;
