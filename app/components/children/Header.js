var React = require('react');

{/*  Builds the header for the app the background image is added using css  */}
class Header extends React.Component {
render(){
return (
<div className="jumbotron" id="header">
<h1> Welcome to Prandium </h1>
</div>

)
}
}

module.exports = Header;
