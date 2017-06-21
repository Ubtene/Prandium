var React = require('react');
const Userform = require('./children/Userform.js');
const Header = require('./children/Header.js')
const YelpR = require('./children/Yelpresults.js')

var Main = React.createClass({


  // Here we render the function
  render: function() {
    return (
      <div className="container">
      <Header />
      <Userform />
      <YelpR />
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
