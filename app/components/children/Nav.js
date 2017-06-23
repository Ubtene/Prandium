var React = require("react");

var NavLink = require('react-router-dom').NavLink;

function Nav() {


	return (

		<ul className="nav">
		<li id="nav">
			<NavLink exact activeClassName='active' to='/'>Form</NavLink>
		</li>
		<li id="nav">
			<NavLink activeClassName='active' to='/header'>Header</NavLink>
		</li>
		<li id="nav">
			<NavLink activeClassName='active' to='/yelp'>Search</NavLink>
		</li>
		<li id="nav">
			<NavLink activeClassName='active' to='/restaurant'>Restaurant</NavLink>
		</li>

		</ul>
		)


}

module.exports = Nav;