
var React = require('react');
const Header = require('./../components/children/Header');
const Main = require("./../components/main.js");
const Form = require("./../components/children/Userform");
import MealCalendar from './../components/children/MealCalendar';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
const YelpR = require('./../components/children/Yelpresults');
const Nav = require('./../components/children/Nav');
// import { Router, Route, Switch} from 'react-router'


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
					<Route path='/search' component={YelpR}/>
					<Route path='/mealcalendar' component={MealCalendar}/>
				</Switch>
				</div>

				</Router>
				 
				



			

			)


	}



}

module.exports = Routes;
