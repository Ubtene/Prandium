var React = require('react');
const Userform = require('./children/Userform.js');
const Header = require('./children/Header.js')
const YelpR = require('./children/Yelpresults.js')

class Main extends React.Component{


  // Here we render the function
  render() {
    return (
      <div className="container">
      <Header />
      <Userform />
      <YelpR />
      </div>
    )
  }
}

// Export the component back for use in other files
module.exports = Main;
