//Include React
const React = require('react');

// Here we include all of the sub-components
const Userform = require('./children/Userform.js');
const Header = require('./children/Header.js')
// Helper for making AJAX requests to our API

// Creating the Main component
var Main = React.createClass({


  // Here we render the function
  render: function() {
    return (
      <div className="container">
      <Header />
      <Userform />
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;